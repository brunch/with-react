import atom from 'atom'

import merge from 'ramda/src/merge'

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
  url: window.location.pathname
}

export const store = atom(reducer, initialState)
export const dispatch = store.dispatch
export const getState = store.getState
export const subscribe = store.subscribe
export default store
