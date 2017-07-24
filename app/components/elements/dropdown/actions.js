import check from 'check-arg-types'
import createAction from '/util/create-action'

export const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN'
const toggleDropdownAction = createAction(TOGGLE_DROPDOWN)

export function toggleDropdown (uid) {
  check(arguments, ['string'])
  return toggleDropdownAction({uid})
}

export const CLOSE_ALL_DROPDOWNS = 'CLOSE_ALL_DROPDOWNS'
export const closeAllDropdowns = createAction(CLOSE_ALL_DROPDOWNS)

export default toggleDropdown
