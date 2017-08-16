import check from 'check-arg-types'

import pathOr from '/util/pathOr'
import merge from '/util/merge'

import {subscribe, getState} from '/store'

const toType = check.prototype.toType

// Cache prev value for given path to allow easy diffing in the listner.
const cache = {}

// Small wrapper around adding a subscriber to your store, that only calls the
// given cb if the value at the given path has changed since the last time
// the cb was invoked.
export default function watchStore (path, cb) {
  const key = path.join(',')
  const getPathVal = pathOr(undefined, path)
  const diff = () => {
    const newVal = getPathVal(getState())
    if (newVal === undefined) {
      return
    }
    const oldVal = cache[key]
    if (oldVal === undefined || oldVal !== newVal) {
      if (toType(newVal) === 'object') {
        cache[key] = merge({}, newVal)
      } else {
        cache[key] = newVal
      }
      cb(newVal, oldVal)
    }
  }

  // Let's invoke diff right away as we may want to react to
  // our initialState set in our store.
  diff()
  subscribe(diff)
}
