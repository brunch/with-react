import {OPEN_MODAL, CLOSE_MODAL} from './actions'

const modalReducer = (state, {type, payload}) => {
  switch (type) {
    case OPEN_MODAL:
      return {...state, modal: payload.name}

    case CLOSE_MODAL:
      return {...state, modal: null}

    default:
      return state
  }
}

export default modalReducer
