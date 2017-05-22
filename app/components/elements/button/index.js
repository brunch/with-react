import {css} from 'glamor'

import {Link} from '/components/elements/link'
import * as colours from '/constants/colours'
import luminosity from '/util/colour-luminance'

export const buttonStyle = (colour = 'blue') => {
  const col = colours[colour] || '#eeeeee'
  const darker = luminosity(col, -0.1)
  return css({
    display: 'inline-block',
    color: 'white',
    borderRadius: '5px',
    padding: '.5em 1.5em',
    textDecoration: 'none',
    backgroundColor: col,
    borderBottom: `2px solid ${darker}`,
    '&:active': {
      borderBottom: `0 solid ${darker}`,
      marginTop: '2px'
    }
  })
}

export const Button = ({to, colour, children, styles}) =>
  <Link to={to} {...buttonStyle(colour)} {...css(styles || {})}>
    {children}
  </Link>

export default Button
