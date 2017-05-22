import {css} from 'glamor'
import {borderColour} from '/constants/colours'

const boxShadow = '0 0 30px 0 rgba(0,0,0,0.075)'

const cardStyle = (noHover = false, dropShadow = false) => css({
  padding: '1rem',
  backgroundColor: '#fff',
  border: `1px solid ${borderColour}`,
  borderRadius: '5px',
  transition: 'all 0.2s ease-in-out',
  boxShadow: dropShadow ? boxShadow : '',
  ':hover': noHover ? {} : {
    boxShadow: boxShadow,
    transform: 'scale(1.01, 1.01)'
  },
  ':after': {
    content: '',
    position: 'absolute',
    display: 'block',
    height: '5px',
    backgroundColor: 'red',
    width: '100%'
  }
})

export const Card = ({noHover, dropShadow, styles, children}) =>
  <div {...cardStyle(noHover, dropShadow)} {...css(styles || {})}>
    {children}
  </div>

export default Card
