import {getState, subscribe} from '/store'
import compose from '/util/compose'
import Home from '/components/pages/home'
import Components from '/components/pages/components'
import {Route, Router} from '/util/route'
import Modals from '/components/modals'
import routes from '/routes'

const Header = () => <h1>Header</h1>
const Footer = () => <h1>Footer</h1>

const Main = compose(
  {state: getState()},
  function componentWillMount () {
    subscribe(() => this.setState(getState()))
  },
  function render (props) {
    console.log('State', props)
    return (
      <div>
        <Header />
        <Router>
          <Route component={Home} name='home' />
          <Route component={Components} name='components' />
          <Route component={Components} name='components2' />
        </Router>
        <Footer />
        <Modals />
      </div>
    )
  }
)

Preact.render(<Main />, document.body)
