import check from 'check-arg-types'

const toType = check.prototype.toType

/**
 * Merge all given objects into a new object.
 * @return {Object}
 */
export default function merge () {
  if (!arguments || !arguments.length) {
    return
  }
  let result = {}
  for (let x = 0; x < arguments.length; x++) {
    if (toType(arguments[x]) !== 'object') {
      throw new TypeError('All arguments must be objects')
    }
    result = {
      ...result,
      ...arguments[x]
    }
  }
  return result
}
