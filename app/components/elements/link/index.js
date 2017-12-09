import {route} from 'preact-router'
import BaseLink from './base'

export default ({to, ...props}) => BaseLink({
  onClick: ev => {
    ev.preventDefault()
    route(to)
  },
  href: to,
  ...props
})
