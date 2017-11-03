import {createAction} from 'wasmuth'

export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const openModal = (name) => createAction(OPEN_MODAL)({name})
export const closeModal = createAction(CLOSE_MODAL)({})
