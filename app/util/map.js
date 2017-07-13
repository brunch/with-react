/**
 * Functional, curryable wrapper around native Array.map implementation.
 * @param  {Function} fn  The function to apply to each element in the Array
 * @param  {Array}    ls  The array to operate on
 * @return {Array}        The modified Array
 */
export default function map (fn, ls) {
  if (!fn && !ls) {
    return undefined
  }
  if (fn && !ls) {
    return map.bind(map, fn)
  }
  return Array.prototype.map.call(ls, fn)
}
