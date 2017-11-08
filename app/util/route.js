import queryString from 'query-string'
import {map, reduce, equal, pipe} from 'wasmuth'

import PreactRouter from 'preact-router'

import {compose, setNodeName} from '/util/compose'

import {set, dispatch, getState} from '/store'
import routes from '/routes'

/**
 * Add preact-router props into the atom state
 * Should only be used as child of Router component (above) the Router
 * coponent will replace the name prop given to this component
 * with the corresponding path as defined in the routes prop
 * given to the Router component
 * Because Router above wraps the preact-router Router component
 * this component is given the props "matches" and "name" by preact-router
 * Router. These props are added to the state.
 */
export const Route = compose(
  setNodeName('Route'),
  function componentWillMount () {
    const currentValues = getState().route
    const newValues = {
      args: this.props.matches,
      url: window.location.pathname,
      name: this.props.name
    }
    if (!equal(currentValues, newValues)) {
      dispatch(set('route', newValues))
    }
  },
  function render ({component: Component}) {
    return <Component />
  }
)

/**
 * Use instead of preact-router Router component.
 * - Add key prop to Route children so that when route changes,
 *   the current route component will unmount and the new one will mount.
 */
export const Router = pipe(
  ({routes}) => ({keys: Object.keys(routes), routes}),
  ({keys, routes}) =>
    <PreactRouter>
      {map((name) =>
        <Route name={name} key={`route-${name}`} {...routes[name]} />
      , keys)}
    </PreactRouter>
)

/**
 * Get the path string for the route with name `name`
 * Best understood with an example:
 *
 * ```
 * const routes = {
 *  myRoute: '/some/:fancy/:route'
 * }
 *
 * urlFor('myRoute', {
 *   args: {fancy: 12, route: 'r2d2'},
 *   queries: {search: 'hi'}
 * })
 * > '/some/12/r2d2?search=hi'
 * ```
 */
export const urlFor = (name, {args = {}, queries = {}} = {}) => {
  const rule = routes[name]
  const replaced = reduce(
    (acc, k) => acc.replace(`:${k}`, args[k]),
    rule.path,
    Object.keys(args)
  )
  const hasQueries = Object.keys(queries).length > 0
  return `${replaced}${!hasQueries ? '' : '?' + queryString.stringify(queries)}`
}
