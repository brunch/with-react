import {Router} from '/util/route'

import Header from '/components/elements/header'
import Modals from '/components/modals'

import routes from '/routes'

const App = () =>
  <div id='main'>
    <Header />
    <Router routes={routes} />
    <Modals />
  </div>

Preact.render(<App />, document.body, document.getElementById('main'))
