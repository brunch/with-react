import merge from '/util/merge'

export const SET_URL = 'SET_URL'

const linkReducer = ({type, payload}, state) =>
  type === SET_URL
    ? merge(state, {url: payload.url})
    : state

export default linkReducer
