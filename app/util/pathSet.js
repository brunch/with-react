import check from 'check-arg-types'

import merge from './merge'

export default function pathSet (paths, valToSet, object) {
  if (arguments.length < 3) {
    const args = [pathSet].concat(Array.prototype.slice.call(arguments))
    return pathSet.bind.apply(pathSet, args)
  }
  check(arguments, ['array', '-any', 'object'])
  const copy = merge({}, object)
  paths.reduce(function (obj, prop, idx) {
    obj[prop] = obj[prop] || {}
    if (paths.length === (idx + 1)) {
      obj[prop] = valToSet
    }
    return obj[prop]
  }, copy)
  return copy
}
