import assoc from '/util/assoc'

import {OPEN_MODAL, CLOSE_MODAL} from './actions'

const modalReducer = ({type, payload}, state) => {
  const uid = payload

  switch (type) {
    case OPEN_MODAL:
      return assoc('modals', {...state.modals, [uid]: true}, state)

    case CLOSE_MODAL:
      delete state['modals'][uid]
      return state

    default:
      return state
  }
}

export default modalReducer
