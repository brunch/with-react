import check from 'check-arg-types'

import {click} from './actions'

const toType = check.prototype.toType

export const Link = ({to, children, ...props}) =>
  <a onclick={(e) => toType(to) === 'function' ? to(e) : click(to)(e)} href={to} {...props}>
    {children}
  </a>

export default Link
