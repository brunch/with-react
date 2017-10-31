export const logReducer = (on) => ({type, payload}, state) => {
  if (on) {
    type === 'ATOM_SET'
    ? console.log(type, payload.path.join('.'), payload.value)
    : console.log(type, payload)
  }

  return state
}

export default logReducer
