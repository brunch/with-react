import check from 'check-arg-types'

import createAction from '/util/createAction'

export const SET_FORM_DATA = 'SET_FORM_DATA'
export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA'
export const CLEAR_FORM_DATA = 'CLEAR_FORM_DATA'

const setFormDataAction = createAction(SET_FORM_DATA)
export function setFormData (formName, data) {
  if (formName && !data) {
    return setFormData.bind(setFormData, formName)
  }
  check(arguments, ['string', 'object'])
  return setFormDataAction({formName, data})
}

const updateFormDataAction = createAction(UPDATE_FORM_DATA)
export function updateFormData (formName, data) {
  if (formName && !data) {
    return updateFormData.bind(updateFormData, formName)
  }
  check(arguments, ['string', 'object'])
  return updateFormDataAction({formName, data})
}

const clearFormDataAction = createAction(CLEAR_FORM_DATA)
export function clearFormData (formName) {
  check(arguments, ['string'])
  return clearFormDataAction({formName})
}

export const SET_FORM_RESULT = 'SET_FORM_RESULT'

const setFormResultAction = createAction(SET_FORM_RESULT)
export function setFormResult (formName, result) {
  if (arguments.length === 1) {
    return setFormResult.bind(setFormResult, formName)
  }
  check(arguments, ['string', '-any'])
  return setFormResultAction({formName, result})
}

export const SET_FORM_ERROR = 'SET_FORM_ERROR'

const setFormErrorAction = createAction(SET_FORM_ERROR)
export function setFormError (formName, fieldName, err) {
  if (arguments.length < 3) {
    const args = [setFormError].concat(Array.prototype.slice.call(arguments))
    return setFormError.bind.apply(setFormError, args)
  }
  check(arguments, ['string', 'string', ['string', 'boolean']])
  return setFormErrorAction({formName, fieldName, err})
}
