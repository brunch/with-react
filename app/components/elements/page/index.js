
import {css} from 'glamor'

const pageContainer = css({
  display: 'block',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  overflowY: 'auto'
})

const slideIn = css.keyframes({
  '0%': { transform: 'translateX(10%)', opacity: 0 },
  '100%': { transform: 'translateX(0)', opacity: 1 }
})

const slideInFromLeft = css.keyframes({
  '0%': { transform: 'translateX(-10%)', opacity: 0 },
  '100%': { transform: 'translateX(0)', opacity: 1 }
})

const pageStyle = (noPadding = false, back) => css({
  display: 'block',
  boxSizing: 'border-box',
  margin: '0px auto',
  width: '100%',
  maxWidth: '1200px',
  padding: noPadding ? '0' : '1em 2em 2em 2em',
  animation: `${back ? slideInFromLeft : slideIn} .5s`
})

export const Page = ({back, noPadding, children}) =>
  <div {...pageContainer}>
    <div {...pageStyle(noPadding, back)}>
      {children}
    </div>
  </div>

export default Page
