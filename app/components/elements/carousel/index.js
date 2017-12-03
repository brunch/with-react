import {guid} from 'wasmuth'

import {compose, setNodeName} from '/util/compose'

import {dispatch, set, watchPath} from '/store'

import render from './base'

function init () {
  this._uid = guid()
  this.state = {active: this.props.active || 0, width: 0}
  dispatch(set(['Carousel', this._uid], this.props.active || 0))
  watchPath(['Carousel', this._uid], (active) =>
    active !== this.state.active && this.setState({active})
  )
}

function componentDidMount () {
  window.requestAnimationFrame(() =>
    this.setState({...this.state, width: this.ref.offsetWidth})
  )
}

function next (ev) {
  ev.preventDefault()
  const n = this.state.active >= this.props.children.length - 1
    ? 0
    : this.state.active + 1
  dispatch(set(['Carousel', this._uid], n))
}

function prev (ev) {
  ev.preventDefault()
  const n = this.state.active <= 0
    ? this.props.children.length - 1
    : this.state.active - 1
  dispatch(set(['Carousel', this._uid], n))
}

function getRef (ref) {
  if (!ref) return
  this.ref = ref
}

function getStyle (idx, active) {
  const {width} = this.state
  const style = idx === 0 && idx !== active
    ? `margin-left: -${width * active}px;`
    : ''
  return style
}

const Carousel = compose(
  setNodeName('Carousel'),
  {
    init,
    componentDidMount,
    next,
    prev,
    getRef,
    getStyle,
    render
  }
)

export default Carousel
