import path from './path'

export default function pathOr (def, paths, obj) {
  if (arguments.length < 3) {
    const args = [pathOr].concat(Array.prototype.slice.call(arguments))
    return pathOr.bind.apply(pathOr, args)
  }
  return path(paths, obj) || def
}
