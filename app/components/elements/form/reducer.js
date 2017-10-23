import {pathOr, pathSet, merge} from 'wasmuth'

import {
  SET_FORM_DATA,
  UPDATE_FORM_DATA,
  CLEAR_FORM_DATA,
  SET_FORM_RESULT,
  SET_FORM_ERROR
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

    case SET_FORM_ERROR:
      const {fieldName, err} = payload
      return pathSet(['formErrors', formName, fieldName], err, state)

    default:
      return state
  }
}
