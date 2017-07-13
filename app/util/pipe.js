/**
 * Pass the result of each function to the next, from left to right.
 * @return {function} Returns a function that accepts the initial input
 */
export default function pipe () {
  if (!arguments || !arguments.length) {
    return
  }
  let args = arguments
  let len = args.length
  return function (input) {
    for (let i = 0; i < len; i++) {
      if (!args[i]) continue
      input = args[i](input)
    }
    return input
  }
}
