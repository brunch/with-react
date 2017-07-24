import check from 'check-arg-types'

export default function path (paths, obj) {
  if (arguments.length < 2) {
    const args = [path].concat(Array.prototype.slice.call(arguments))
    return path.bind.apply(path, args)
  }
  console.log('path', arguments)
  check(arguments, ['array', 'object'])
  let val = obj
  for (let x = 0; x < paths.length; x++) {
    if (val == null) {
      return
    }
    val = val[paths[x]]
  }
  return val
}
