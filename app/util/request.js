import {request} from 'wasmuth'
import {set} from 'atom-lens-reducer'
import {dispatch} from '/store'

/**
 * Stateful Request:
 * Make http request and keep it in the state.
 * options:
 * - withProgress (Boolean) will store request progress in state
 */
export default (args, options = {}) => {
  const {promise, xhr} = request(args)
  dispatch(set(['requests', args.url, 'timestamp'], Date.now()))

  if (options.withProgress) {
    xhr.onprogress = (progress) => {
      const {loaded, total} = progress
      dispatch(set(['requests', args.url, 'progress'], {loaded, total}))
    }
  }

  promise
    .then(response => dispatch(set(['requests', args.url, 'result'], response)))
    .catch(error => dispatch(set(['requests', args.url, 'error'], error)))
}
