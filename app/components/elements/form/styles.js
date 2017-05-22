import {css} from 'glamor'
import {textColour, borderColour} from '/constants/colours'

export const formStyle = css({
  marginTop: '1rem'
})

export const labelStyle = css({
  display: 'block',
  color: textColour,
  fontWeight: 800,
  marginBottom: '.25rem'
})

export const fieldStyle = css({
  width: '95.5%', // gotta account for pesky 1px border
  padding: '2%',
  border: `1px solid ${borderColour}`,
  borderRadius: '.25rem',
  marginBottom: '1.5rem'
})
