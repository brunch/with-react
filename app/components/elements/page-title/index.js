const PageTitle = ({title, children}) =>
  <div class='page-title'>
    {title ? <h1>{title}</h1> : ''}
    {children}
  </div>

export default PageTitle
