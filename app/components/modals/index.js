import {mapStateToProps} from '/store'
import Example from './example'

const MODALS = {
  Example,
}

export default mapStateToProps(
  (state) => ({modal: state.modal})
)(({modal}) => {
  const name = Object.keys(modal)[0] || ''
  const Modal = MODALS[name]
  const modalProps = modal[name] || {}
  return Modal && <div><Modal {...modalProps} /></div>
})
