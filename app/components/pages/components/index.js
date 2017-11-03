import {dispatch} from '/store'
import {openModal} from '/components/elements/modal/actions'
import BaseComponents from './base'

export default () => {
  return BaseComponents({
    openModal: () => dispatch(openModal('Example'))
  })
}
