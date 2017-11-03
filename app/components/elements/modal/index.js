import Portal from 'preact-portal'
import {some, diffObj} from 'wasmuth'

import {dispatch, watchPath} from '/store'
import {closeModal} from './actions'

const Modal = ({
  open,
  className = '',
  children
}) =>
  open
    ? (
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
    )
    : null

export default Modal
