import check from 'check-arg-types'

import merge from './merge'
import pick from './pick'

export default function createAction (type, payload, extra) {
  if (arguments.length === 1) {
    return createAction.bind(createAction, type)
  }
  check(arguments, ['string', '-any', ['object', 'undefined']])
  let action = {type, payload}
  return extra !== undefined
    ? merge(action, pick(['meta', 'error'], extra))
    : action
}
