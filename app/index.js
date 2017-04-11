import Router from 'preact-router'

import {getState, subscribe} from '/store'

import Home from '/components/pages/home'

let {render, Component} = Preact

class Main extends Component {
  constructor () {
    super()
    this.state = getState()
  }

  componentDidMount () {
    subscribe(() => this.setState(getState()))
  }

  render (_, {humans, modals, ...props}) {
    console.log('Main', props)
    return (
      <Router>
        <Home path='/' />
      </Router>
    )
  }
}

render(<Main />, document.body)
