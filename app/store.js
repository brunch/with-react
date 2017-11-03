import {createStore} from 'redux'
import {watchStore} from 'wasmuth'
import {
  set as lensSet,
  update as lensUpdate,
  remove as lensRemove,
  reducer as lensReducer
} from 'atom-lens-reducer'
import {composeWithDevTools} from 'redux-devtools-extension'

import mapStateToPropsUtil from '/util/mapStateToProps'
import dropdownReducer from '/components/elements/dropdown/reducer'
import linkReducer from '/components/elements/link/reducer'
import modalReducer from '/components/elements/modal/reducer'
import formReducer from '/components/elements/form/reducer'

const combine = (reducers) => (state, action) =>
  reducers.reduce(
    (newState, reducer) => reducer(newState, action),
    state
  )

const initialState = {
  url: window.location.pathname,
  modal: {}
}

const reducers = [
  linkReducer,
  dropdownReducer,
  modalReducer,
  formReducer,
  (state, action) => lensReducer(action, state)
]

export const store = createStore(
  combine(reducers),
  initialState,
  composeWithDevTools()
)
export const dispatch = store.dispatch
export const getState = store.getState
export const subscribe = store.subscribe
export const set = lensSet
export const update = lensUpdate
export const remove = lensRemove
export const watchPath = watchStore(store)
export const mapStateToProps = mapStateToPropsUtil
export default store
