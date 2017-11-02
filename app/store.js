import atom from 'atom'
import {watchStore} from 'wasmuth'
import {
  set as lensSet,
  update as lensUpdate,
  remove as lensRemove,
  reducer as lensReducer
} from 'atom-lens-reducer'

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
  formReducer,
  lensReducer
], initialState)
export const dispatch = store.dispatch
export const getState = store.getState
export const subscribe = store.subscribe
export const unsubscribe = store.unsubscribe
export const set = lensSet
export const update = lensUpdate
export const remove = lensRemove
export const watchPath = watchStore(store)
export default store
