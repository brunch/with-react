export const Page = ({back, className, children}) =>
  <div class='page-container'>
    <div class={`page ${className || ''}${back ? ' back' : ' forward'}`}>
      {children}
    </div>
  </div>

export default Page
