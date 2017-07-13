import Portal from 'preact-portal'
import {dispatch} from '/store'
import {closeModal} from './actions'

const Modal = ({uid, open, children}) =>
  open
    ? (
      <Portal into='body'>
        <div class='modal-overlay' onclick={() => dispatch(closeModal(uid))}>
          <div class='modal'>{children}</div>
        </div>
      </Portal>
    )
    : null

export default Modal
