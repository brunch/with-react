import Portal from 'preact-portal'

import {dispatch, watchPath, getState} from '/store'
import {closeModal} from './actions'

// Watch for an open modal, if so add a class to body to prevent
// scrolling behind the modal.
watchPath(['modal'], (modal, oldmodal) => {
  if (modal && modal !== oldmodal) {
    document.body.classList.add('modal-open')
  } else {
    document.body.classList.remove('modal-open')
  }
})

const isOverlay = (el) =>
  (el.classList && el.classList.contains('modal-container'))

document.body.addEventListener('click', (ev) => {
  const modal = getState().modal
  if (modal && isOverlay(ev.target)) {
    dispatch(closeModal)
  }
})

const Modal = ({
  className = '',
  children
}) =>
  <Portal into='body'>
    <div
      class={'modal-container ' + className}
    >
      <div class='modal-content'>
        <div className='close' onClick={() => dispatch(closeModal)} >
          close
        </div>
        {children}
      </div>
    </div>
  </Portal>

export default Modal
