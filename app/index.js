import {Router, Route} from '/util/route'
import {getState, subscribe} from '/store'
import compose from '/util/compose'
import Header from '/components/elements/header'
import Home from '/components/pages/home'
import Resource from '/components/pages/resource'
import Components from '/components/pages/components'
import routes from '/routes'

const Main = compose(
  {state: getState()},
  function componentWillMount () {
    subscribe(() => this.setState(getState()))
  },
  function render () {
    console.log('State', getState())
    return (
      <div>
        <Header />
        <Router routes={routes}>
          <Route component={Home} name='home' />
          <Route component={Resource} name='resource' />
          <Route component={Components} name='components' />
        </Router>
      </div>
    )
  }
)

Preact.render(<Main />, document.body)
