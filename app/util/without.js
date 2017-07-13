import filter from './filter'
import pick from './pick'

/**
 * Return a new object with only the specified keys included.
 * @param  {Array} keys
 * @param  {Object} obj
 * @return {Object}
 */
export default function without (keys, obj) {
  if (!keys && !obj) {
    return undefined
  }
  if (keys && !obj) {
    return without.bind(without, keys)
  }
  const keep = filter((k) => keys.indexOf(k) === -1, Object.keys(obj))
  return pick(keep, obj)
}
