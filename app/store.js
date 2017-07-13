import atom from 'atom'

import linkReducer from '/components/elements/link/reducer'
import modalReducer from '/components/elements/modal/reducer'

const initialState = {
  url: window.location.pathname,
  modals: {}
}

export const store = atom([linkReducer, modalReducer], initialState)
export const dispatch = store.dispatch
export const getState = store.getState
export const subscribe = store.subscribe
export default store
