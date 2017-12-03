import {request} from 'wasmuth'
import {set} from 'atom-lens-reducer'
import {dispatch} from '/store'

/**
 * Stateful Request:
 * Make http request and keep it in the state.
 * options:
 * - withProgress (Boolean) will store request progress in state
 * - id (String) will be prepended to request url when stored in state.
 *    (for when there are multiple requests to the same url, like posting many images)
 */
export default (args, options = {}) => {
  const identifier = (options.id || '') + args.url
  const {promise, xhr} = request(args)
  dispatch(set(['requests', identifier, 'timestamp'], Date.now()))

  if (options.withProgress) {
    xhr.onprogress = (progress) => {
      const {loaded, total} = progress
      dispatch(set(['requests', identifier, 'progress'], {loaded, total}))
    }
  }

  promise
    .then(response => dispatch(set(['requests', identifier, 'result'], response)))
    .catch(error => console.error(error) || dispatch(set(['requests', identifier, 'error'], error)))
}
