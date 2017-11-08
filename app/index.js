import {Router} from '/util/route'

import Header from '/components/elements/header'
import Modals from '/components/modals'

import routes from '/routes'

const Main = () =>
  <div>
    <Header />
    <Router routes={routes} />
    <Modals />
  </div>

Preact.render(<Main />, document.body)
