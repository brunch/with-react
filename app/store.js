import atom from 'atom'

import dropdownReducer from '/components/elements/dropdown/reducer'
import linkReducer from '/components/elements/link/reducer'
import modalReducer from '/components/elements/modal/reducer'
import formReducer from '/components/elements/form/reducer'

const initialState = {
  url: window.location.pathname,
  modals: {}
}

export const store = atom([
  linkReducer,
  dropdownReducer,
  modalReducer,
  formReducer
], initialState)
export const dispatch = store.dispatch
export const getState = store.getState
export const subscribe = store.subscribe
export const unsubscribe = store.unsubscribe
export const set = store.set
export const update = store.update
export const remove = store.remove
export default store
