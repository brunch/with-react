import check from 'check-arg-types'

/**
 * Set property value object.
 */
export default function assoc (key, val, obj) {
  if (arguments.length < 3) {
    const args = [assoc].concat(Array.prototype.slice.call(arguments))
    return assoc.bind.apply(assoc, args)
  }
  check(arguments, ['string', '-any', 'object'])
  const result = {}
  const keys = Object.keys(obj)
  for (var x = 0; x < keys.length; x++) {
    result[keys[x]] = obj[keys[x]]
  }
  result[key] = val
  return result
}
