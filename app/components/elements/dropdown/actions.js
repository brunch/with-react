import check from 'check-arg-types'
import createAction from '/util/createAction'

export const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN'
const toggleDropdownAction = createAction(TOGGLE_DROPDOWN)

export function toggleDropdown (uid) {
  check(arguments, ['string'])
  return toggleDropdownAction({uid})
}

export const CLOSE_ALL_DROPDOWNS = 'CLOSE_ALL_DROPDOWNS'
const closeAllDropdownsAction = createAction(CLOSE_ALL_DROPDOWNS)
export function closeAllDropdowns () {
  return closeAllDropdownsAction({})
}

export default toggleDropdown
