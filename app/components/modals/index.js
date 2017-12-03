import {mapStateToProps} from '/store'
import Example from './example'

const MODALS = {
  Example
}

export default mapStateToProps(
  (state) => ({modal: state.modal})
)(({modal}) => {
  const Modal = MODALS[modal]
  return Modal
    ? <div><Modal /></div>
    : null
})
