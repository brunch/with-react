import check from 'check-arg-types'
import {pathEq} from 'wasmuth'

import {getState} from '/store'

import {click} from './actions'

const toType = check.prototype.toType
const isActive = (to) => pathEq(['url'], to, getState())

export const Link = ({to, activeClass, className, children, ...props}) =>
  <a
    onclick={(e) => toType(to) === 'function' ? to(e) : click(to)(e)}
    href={toType(to) === 'string' ? to : '#'}
    className={`${props.class || className} ${activeClass && isActive(to) ? activeClass : ''}`}
    {...props}
  >
    {children}
  </a>

export default Link
