import check from 'check-arg-types'
import merge from 'ramda/src/merge'
import pick from 'ramda/src/pick'
import curryN from 'ramda/src/curryN'

export const createAction = curryN(2, (type, payload, extra) => {
  check(arguments, ['string', '-any', ['object', 'undefined']])
  let action = {type, payload}
  if (extra) {
    return merge(action, pick(['meta', 'error'], extra))
  }
  return action
})

export default createAction
