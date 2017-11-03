import {merge} from 'wasmuth'

export const SET_URL = 'SET_URL'

const linkReducer = (state, {type, payload}) =>
  type === SET_URL ? merge(state, {url: payload.url}) : state

export default linkReducer
