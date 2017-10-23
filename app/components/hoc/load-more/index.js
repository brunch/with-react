import check from 'check-arg-types'
import queryString from 'query-string'
import {
  filter,
  map,
  merge,
  pipe,
  pathOr,
  toPairs,
  fromPairs
} from 'wasmuth'

import request from '/util/request'
import {compose, setNodeName} from '/util/compose'

import {set, dispatch, getState} from '/store'

import {API_URL} from '/consts'

const toType = check.prototype.toType

export const getFiltersQueryString = (filters, extraFilter) =>
  filters
    ? pipe(
      filter(({id, name}) => name !== 'All'),
      toPairs,
      map(([k, {id}]) => toType(id) === 'object'
        ? toPairs(id)[0]
        : [k, id]),
      (pairs) => extraFilter ? filter(extraFilter, pairs) : pairs,
      fromPairs,
      queryString.stringify
    )(filters)
    : ''

const LoadMore = compose(
  setNodeName('LoadMore'),
  function init () {
    this.state = {results: [], page: 0, hasMore: true, filters: getFiltersQueryString(this.props.filters)}
  },
  function loadMore (concat = true) {
    const headers = {}
    const token = window.localStorage.getItem('token')
    if (token) {
      headers.Authorization = `Token ${token}`
    }
    const {page, filters} = this.state
    const {promise, xhr} = request({
      url: API_URL +
        this.props.endpoint +
        `?limit=${this.limit}&offset=${page * this.limit}&` +
        filters,
      headers
    })
    this.request = xhr
    promise
      .then(({results, next}) => {
        const allResults = concat
          ? this.state.results.concat(results)
          : results
        this.setState({
          results: allResults,
          page: page + 1,
          hasMore: next != null
        }, () => dispatch(set(['loadMore', this.props.endpoint], allResults)))
      })
  },
  function componentWillReceiveProps (nextProps) {
    if (nextProps.filters && getFiltersQueryString(nextProps.filters) !== this.state.filters) {
      if (this.request) this.request.abort()
      let setFilters = getFiltersQueryString(nextProps.filters)
      if (setFilters.duration) {
        setFilters = merge(setFilters, setFilters.duration)
        delete setFilters.duration
      }
      this.setState({page: 0, filters: setFilters}, () => this.loadMore(false))
    }
  },
  function componentDidMount () {
    this.limit = this.props.limit || 24
    if (this.state.page === 0) {
      this.loadMore()
    }
  },
  function render ({endpoint, hasMore, loadMore, children}) {
    const child = children[0]
    if (!child || typeof child !== 'function') {
      throw new Error('LoadMore requires a function as its only child')
    }
    const results = pathOr([], ['loadMore', endpoint], getState())
    return child(results, hasMore ? loadMore : false)
  }
)

export default LoadMore
