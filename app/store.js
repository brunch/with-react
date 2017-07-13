import atom from 'atom'

import merge from '/util/merge'

import modalReducer from '/components/elements/modal/reducer'

export const SET_URL = 'SET_URL'

const reducer = ({type, payload}, state) => {
  console.log('reducer', type, payload, state)
  switch (type) {
    case SET_URL:
      const {url} = payload
      return merge(state, {url})

    default:
      return state
  }
}

const initialState = {
  url: window.location.pathname,
  modals: {}
}

export const store = atom([reducer, modalReducer], initialState)
export const dispatch = store.dispatch
export const getState = store.getState
export const subscribe = store.subscribe
export default store
