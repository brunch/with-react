import check from 'check-arg-types'
import {createAction} from 'wasmuth'

import {dispatch} from '/store'

export const SET_URL = 'SET_URL'
const setAction = createAction(SET_URL)

export const click = (url) =>
  (ev) => ev.preventDefault() || dispatch(setUrl(url))

export function setUrl (url) {
  check(arguments, ['string'])
  return setAction({url})
}

export default setUrl

window.onpopstate = () => dispatch(setUrl(window.location.pathname))
