import {assoc} from 'wasmuth'

import {OPEN_MODAL, CLOSE_MODAL} from './actions'

const modalReducer = (state, {type, payload, meta}) => {
  switch (type) {
    case OPEN_MODAL:
      return {...state, modal: typeof payload === 'string' ? {[payload]: {}} : payload}

    case CLOSE_MODAL:
      return {...state, modal: {}}

    default:
      return state
  }
}

export default modalReducer
