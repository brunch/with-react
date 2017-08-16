import check from 'check-arg-types'

export default function where (key, val, obj) {
  if (arguments.length < 3) {
    const args = [where].concat(Array.prototype.slice.call(arguments))
    return where.bind.apply(where, args)
  }
  check(Array.prototype.slice.call(arguments, 0, 3), ['string', '-any', 'object'])
  return obj[key] === val
}
