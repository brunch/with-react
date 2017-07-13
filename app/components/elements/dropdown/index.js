import {compose, setNodeName, withState} from '/util/compose'

import {DownArrow} from '/components/elements/arrow'
import Button from '/components/elements/button'
import Level from '/components/elements/level'

const refs = []

// DOM event to close all Dropdown's on off-click
const isDropdown = (el) =>
  (el.classList && el.classList.contains('dropdown-menu')) ||
  (el.classList && el.classList.contains('dropdown-trigger'))

document.body.addEventListener('click', (ev) => {
  let el = ev.target
  if (isDropdown(el)) return
  while (el.parentNode) {
    el = el.parentNode
    if (isDropdown(el)) return
  }
  for (let x = 0; x < refs.length; x++) {
    if (refs[x].state.open) {
      refs[x].setOpen(false)
    }
  }
})

const Dropdown = compose(
  setNodeName('Dropdown'),
  withState('open', 'setOpen', undefined),
  function componentDidMount () {
    const btnEl = this.base.childNodes[0]
    const offset = btnEl.offsetWidth / 4
    const menuEl = this.base.querySelector('.dropdown-menu')
    menuEl.style = `margin-left: -${offset}px`
    refs.push(this)
  },
  function handleClick (ev) {
    ev.preventDefault()
    this.setOpen(!this.state.open)
  },
  function render ({open, handleClick, children}) {
    const cls = open
      ? 'dropdown-menu open'
      : open === false
        ? 'dropdown-menu close'
        : 'dropdown-menu'
    return <div>
      <Button to={handleClick} className='btn-medium btn-noupper dropdown-trigger elevated centered'>
        <Level noPadding>
          Select
          <DownArrow className='white' />
        </Level>
      </Button>
      <div class={cls}>
        <div class='dropdown-arrow' />
        {children}
      </div>
    </div>
  }
)

export default Dropdown
