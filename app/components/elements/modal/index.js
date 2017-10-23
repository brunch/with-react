import Portal from 'preact-portal'
import {some, diffObj} from 'wasmuth'

import {dispatch, subscribe} from '/store'
import {closeModal} from './actions'

subscribe(['modals'], (modals, oldModals = {}) => {
  const hasOpenModal = some((x) => x, modals)
  if (hasOpenModal) {
    const diff = Object.keys(diffObj(oldModals, modals))
    if (diff.length) {
      document.body.classList.add('modal-open')
    }
  } else {
    document.body.classList.remove('modal-open')
  }
})

const Modal = ({
  uid = 'Modal',
  open,
  className = '',
  children
}) =>
  open
    ? (
      <Portal into='body'>
        <div
          class={'modal-overlay ' + className}
        >
          <div class='modal'>
            <div className='close' onClick={() => dispatch(closeModal(uid))} />
            {children}
          </div>
        </div>
      </Portal>
    )
    : null

export default Modal
