import atom from 'atom'
import assoc from 'ramda/src/assoc'
import map from 'ramda/src/map'

import {css} from 'glamor'

const {Component} = Preact

// single store to hold open state for all Dropdown's
const store = atom(({id, open}, state) => {
  // set all to false, so only 1 dropdown is ever open
  state = map(() => false, state)
  if (id) {
    state = open !== undefined
      ? assoc(id, open, state)
      : assoc(id, !state[id], state)
  }
  return state
}
, {})
const toggle = store.dispatch
const isOpen = (id) => store.getState()[id]
const guid = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}

// DOM event to close all Dropdown's on off-click
document.body.addEventListener('click', (ev) => {
  let el = ev.target
  if (el.getAttribute('data-close-dropdown') !== null) {
    toggle({})
    return
  }
  while (el.parentNode) {
    el = el.parentNode
    if (el.classList && el.classList.contains('dropdown-component')) {
      return
    }
  }
  toggle({})
})

// CSS Styles
const triggerStyle = css({
  cursor: 'pointer'
})

let lowerIn = css.keyframes({
  '0%': { transform: 'translateY(-20%)', opacity: 0 },
  '100%': { transform: 'translateY(0)', opacity: 1 }
})

let raiseUp = css.keyframes({
  '0%': { transform: 'translateY(0)', opacity: 1 },
  '60%': { transform: 'translateY(-20%)', opacity: 0 }
})

const dropdownStyle = (open) => css({
  display: 'block',
  zIndex: 11,
  backgroundColor: '#fff',
  border: '1px solid #c8c8c8',
  borderRadius: '5px',
  boxShadow: '0 0 30px 0 rgba(0,0,0,0.075)',
  minWidth: '110px',
  textAlign: 'center',
  padding: '20px',
  position: 'absolute',
  marginTop: '20px',
  marginLeft: '-80px',
  opacity: open ? 1 : 0,
  animation: `${open ? lowerIn : raiseUp} .35s`
})

const arrowStyle = css({
  borderStyle: 'solid',
  borderColor: 'transparent transparent #c8c8c8 transparent',
  borderWidth: '0px 8px 8px 8px',
  top: '-8px',
  right: '20%',
  position: 'absolute',
  zIndex: '999',
  ':after': {
    borderColor: 'transparent transparent #fff transparent',
    borderStyle: 'solid',
    borderWidth: '0px 7px 7px 7px',
    top: '1px',
    content: '""',
    position: 'absolute',
    left: '-7px'
  }
})

const downCaretStyle = css({
  display: 'block',
  width: '1rem',
  height: '1rem',
  transform: 'rotate(90deg) scaleY(2)',
  marginLeft: '1rem',
  marginTop: '0.5rem',
  fontWeight: 400
})

// The Dropdown component!
export default class Dropdown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: props.open || false
    }
  }

  componentWillMount () {
    this._id = guid()
    toggle({id: this._id, open: this.state.open})
  }

  componentDidMount () {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({open: state[this._id]})
    })
  }

  render ({id, text, children, loading, showCaret, ...props}) {
    const btnCls = loading ? 'button is-transparent is-loading' : 'button is-transparent'
    return (
      <div class='dropdown-component' data-id={id}>
        <a {...triggerStyle} class={btnCls} onClick={(ev) => ev.preventDefault() || toggle({id: this._id})}>
          {text}
          {showCaret && <span {...downCaretStyle}>></span>}
        </a>
        {
          isOpen(this._id)
            ? <div {...dropdownStyle(isOpen(this._id))}>
              <div {...arrowStyle} />
              {children}
            </div>
            : ''
        }
      </div>
    )
  }
}
