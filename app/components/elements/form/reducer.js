import pathOr from '/util/pathOr'
import pathSet from '/util/pathSet'
import merge from '/util/merge'

import {
  SET_FORM_DATA,
  UPDATE_FORM_DATA,
  CLEAR_FORM_DATA,
  SET_FORM_RESULT
} from './actions'

export default function formReducer ({type, payload}, state) {
  const {formName, data, result} = payload
  switch (type) {
    case SET_FORM_DATA:
      return pathSet(['forms', formName], data, state)

    case UPDATE_FORM_DATA:
      const existingData = pathOr({}, ['forms', formName], state)
      const newData = merge(existingData, data)
      return pathSet(['forms', formName], newData, state)

    case CLEAR_FORM_DATA:
      return pathSet(['forms', formName], {}, state)

    case SET_FORM_RESULT:
      return pathSet(['formResults', formName], result, state)

    default:
      return state
  }
}
