import check from 'check-arg-types'

const toType = check.prototype.toType

/**
 * Functional, curryable wrapper around native Array.filter imple
 * @param  {Function} fn
 * @param  {Array}    ls
 * @return {Array}
 */
export default function filter (fn, ls) {
  if (!fn && !ls) {
    return undefined
  }
  if (fn && !ls) {
    return filter.bind(filter, fn)
  }
  check(arguments, ['function', ['array', 'object']])
  return toType(ls) === 'array'
    ? Array.prototype.filter.call(ls, fn)
    : objFilter(fn, ls)
}

function objFilter (fn, obj) {
  const keys = Object.keys(obj)
  const len = keys.length
  const result = {}
  for (let x = 0; x < len; x++) {
    if (fn(obj[keys[x]])) {
      result[keys[x]] = obj[keys[x]]
    }
  }
  return result
}
