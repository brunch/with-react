import {pipe} from 'wasmuth'
import {dispatch, set} from '/store'
import compose from '/util/compose'
import withProgress from '/components/hoc/with-progress'

/**
 * Simulate a successful, slow, request to "url" in state (with progress)
 */
const fakeRequest = url => {
  var counter = 1
  const interval = window.setInterval(() => {
    dispatch(set(['requests', url, 'progress'], {loaded: counter, total: 100}))
    counter++
    if (counter > 100) {
      window.clearInterval(interval)
      dispatch(set(['requests', url, 'result'], 'Result'))
    }
  }, 100)
  return interval
}

/**
 * Start a simulated request to "url" when "Component" mounts
 * Stop the simulated request when "Component" unmounts
 */
const withFakeRequest = url => Component => compose({
  componentWillMount () {
    this.interval = fakeRequest(url)
  },
  componentWillUnmount () {
    clearInterval(this.interval)
  },
  render (props) {
    return <Component {...props} />
  }
})

export default pipe(
  withProgress('exampleRequest', {propName: 'progressName'}),
  withFakeRequest('exampleRequest')
)(({progressName}) => <div>{progressName}</div>)
