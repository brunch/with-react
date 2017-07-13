export const Card = ({className, children}) =>
  <div class={`card${className ? ' ' + className : ''}`}>
    {children}
  </div>

export default Card
