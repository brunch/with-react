import {pathOr, pipe, filter, guid} from 'wasmuth'

import {compose, setNodeName} from '/util/compose'

import {DownArrow} from '/components/elements/arrow'
import Button from '/components/elements/button'
import Level from '/components/elements/level'

import {dispatch, getState, subscribe} from '/store'

import {closeAllDropdowns, toggleDropdown} from './actions'

// DOM event to close all Dropdown's on off-click
const isDropdown = (el) =>
  (el.classList && el.classList.contains('dropdown-menu')) ||
  (el.classList && el.classList.contains('btn-dropdown'))

document.body.addEventListener('click', (ev) => {
  const dds = pipe(
    pathOr({}, ['_dropdowns']),
    filter((val) => val),
    Object.keys
  )(getState())
  if (!dds.length) {
    return
  }
  let el = ev.target
  if (isDropdown(el)) return
  while (el.parentNode) {
    el = el.parentNode
    if (isDropdown(el)) return
  }
  dispatch(closeAllDropdowns())
})

const Dropdown = compose(
  setNodeName('Dropdown'),
  {
    componentWillMount () {
      this._uid = guid()
    },

    componentDidMount () {
      // Adjust position dynamically
      // const offset = this.base.offsetWidth < 1000
      //   ? this.base.offsetWidth / 2
      //   : this.base.offsetWidth / 4
      // const menuEl = this.base.querySelector('.dropdown-menu')
      // menuEl.style = `margin-left: -${offset}px`
      // Sync state
      const syncState = () => {
        const open = pathOr(false, ['_dropdowns', this._uid], getState())
        if (open !== this.state.open) {
          if (open === false && this.state.open === undefined) {
            return
          }
          this.setState({open})
        }
      }
      syncState()
      subscribe(() => syncState())
    },

    handleClick (ev) {
      ev.preventDefault()
      dispatch(toggleDropdown(this._uid))
    },

    render ({
      open,
      handleClick,
      Trigger,
      buttonText = 'Select',
      noWrapper = false,
      children
    }) {
      const cls = open
        ? 'dropdown-menu open'
        : open === false
          ? 'dropdown-menu close'
          : 'dropdown-menu'
      return <div>
        {Trigger === undefined
          ? <Button className='btn-dropdown black-ghost-btn' to={handleClick}>
            <Level noPadding>{buttonText} <DownArrow /></Level>
          </Button>
          : <Trigger className='btn-dropdown' onClick={handleClick} />}
        {noWrapper
          ? open && children
          : <div className={cls}>
            <div class='dropdown-arrow' />
            {children}
          </div>}
      </div>
    }
  }
)

export default Dropdown
