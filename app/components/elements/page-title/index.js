import {css} from 'glamor'

const div = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'left',
  paddingTop: '1em'
})

const h1 = css({
  fontSize: '1.2rem',
  margin: 0,
  padding: 0
})

const PageTitle = ({title, children}) =>
  <div {...div}>
    {title
      ? <h1 {...h1}>{ title }</h1>
      : ''
    }
    { children }
  </div>

export default PageTitle
