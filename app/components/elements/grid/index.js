import {css} from 'glamor'

const rowStyle = css({
  display: 'flex',
  flexDirection: 'column-reverse',
  padding: 0,
  margin: '1em 0 0 0',
  '@media(min-width: 768px)': {
    flexDirection: 'row'
  }
})

const columnStyle = (spacing = 5) => css({
  width: '100%',
  margin: `0 ${spacing}% ${spacing}%`,
  position: 'relative'
})

export const Row = ({children, ...props}) =>
  <div {...rowStyle} {...props}>
    {children}
  </div>

export const Column = ({spacing, children, ...props}) =>
  <div {...columnStyle(spacing)} {...props}>
    {children}
  </div>
