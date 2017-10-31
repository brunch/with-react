import {route} from 'preact-router'

import {compose} from '/util/compose'

const Redirect = compose(
  function componentWillMount () {
    const next = `?next=${this.props.url}`
    route(this.props.to + next)
  },
  function render () {
    return null
  }
)

export default Redirect
