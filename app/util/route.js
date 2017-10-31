import PreactRouter, {route as preactRoute} from 'preact-router'
import {map} from 'wasmuth'
import {setUrl} from '/components/elements/link/actions'
import compose from '/util/compose'
import {set, dispatch, getState} from '/store'
import routes from '/routes'

const {cloneElement} = Preact

export const Router = ({children, ...props}) =>
  <PreactRouter {...props}>
    {map((route, i) => cloneElement(route, {
      key: i,
      path: routes[route.attributes.name].path
    }), children)}
  </PreactRouter>

export const Route = compose({
  componentWillMount () {
    dispatch(
      set('route', {
        args: this.props.matches,
        url: window.location.pathname,
        rule: this.props.name
      })
    )
  },
  render ({component: Component}) {
    return <Component />
  }
})
