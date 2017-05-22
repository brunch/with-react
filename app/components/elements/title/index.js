import {css} from 'glamor'

import {blue, textLight} from '/constants/colours'

export const baseFont = 'brandon-grotesque, sans-serif'
export const baseFontSize = '18px'
export const baseLineHeight = '1.428571429'

export const fontSize = (n = 1) => n * +baseFontSize.replace('px', '')

export const titleStyle = css({
  fontSize: '1.2rem',
  fontWeight: '500',
  textDecoration: 'none',
  margin: 0,
  paddingBottom: '4px'
})

export const subTitleStyle = css({
  color: blue,
  fontSize: '0.9rem',
  textTransform: 'uppercase',
  textDecoration: 'none',
  letterSpacing: '1px',
  margin: 0,
  paddingBottom: '4px'
})

export const smallTitleStyle = css({
  position: 'relative',
  zIndex: 9,
  color: textLight,
  fontSize: fontSize(0.6),
  textTransform: 'uppercase',
  textDecoration: 'none',
  letterSpacing: '1px',
  margin: 0
})

const STYLES = {titleStyle, subTitleStyle, smallTitleStyle}

export const Title = ({style = 'title', children, ...props}) =>
  <div {...STYLES[style + 'Style']} {...props}>{children}</div>

export default Title
