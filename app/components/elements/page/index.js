export const Page = ({back, children}) =>
  <div className='page-container'>
    <div class={`page ${back ? ' back' : ' forward'}`}>
      {children}
    </div>
  </div>

export default Page
