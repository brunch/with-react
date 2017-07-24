import Portal from 'preact-portal'
import {dispatch} from '/store'
import {closeModal} from './actions'

const Modal = ({
  uid = 'Modal',
  open,
  className = '',
  overlayClose = true,
  children
}) =>
  open
    ? (
      <Portal into='body'>
        <div
          class={'modal-overlay ' + className}
          onclick={() => overlayClose && dispatch(closeModal(uid))}
        >
          <div class='modal'>
            {children}
          </div>
        </div>
      </Portal>
    )
    : null

export default Modal
