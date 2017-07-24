import assoc from '/util/assoc'
import path from '/util/path'
import pathSet from '/util/pathSet'

import {TOGGLE_DROPDOWN, CLOSE_ALL_DROPDOWNS} from './actions'

const dropdownReducer = ({type, payload}, state) => {
  switch (type) {
    case TOGGLE_DROPDOWN:
      const newVal = !path(['_dropdowns', payload.uid], state)
      return pathSet(['_dropdowns', payload.uid], newVal, state)

    case CLOSE_ALL_DROPDOWNS:
      return assoc('_dropdowns', {}, state)

    default:
      return state
  }
}

export default dropdownReducer
