import Router from 'preact-router'

import {getState, subscribe} from '/store'
import compose from '/util/compose'
import Home from '/components/pages/home'

const Main = compose(
  {state: getState()},
  function componentDidMount () {
    subscribe(() => this.setState(getState()))
  },
  function render (_, props) {
    console.log('Main', props)
    return (
      <Router>
        <Home path='/' />
      </Router>
    )
  }
)

Preact.render(<Main />, document.body)
