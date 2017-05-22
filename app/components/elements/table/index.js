import {css} from 'glamor'

import {borderLight} from '/constants/colours'

const widths = {
  2: { width: '50%' },
  3: { width: '33.33%' },
  4: { width: '25%' },
  5: { width: '20%' },
  6: { width: '16.6%' }
}

const tableStyle = (n) => css({
  display: 'flex',
  flexWrap: 'wrap',
  ' .tableCell': widths[n]
})

export const Table = ({cols = 1, children}) =>
  <div {...tableStyle(cols)}>{children}</div>

export const rowStyle = css({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%'
})

export const Row = ({children}) =>
  <div {...rowStyle} dataWut='Row'>{children}</div>

const cellStyle = (align) => css({
  boxSizing: 'border-box',
  flexGrow: 1,
  padding: '1.2rem 0.1em',
  overflow: 'hidden',
  textAlign: align,
  borderTop: `1px solid ${borderLight}`
})

export const Cell = ({align = 'left', children}) =>
  <div {...cellStyle(align)} class='tableCell'>{children}</div>
