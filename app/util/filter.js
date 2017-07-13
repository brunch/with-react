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
  return Array.prototype.filter.call(ls, fn)
}
