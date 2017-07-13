export const Row = ({className, children, ...props}) =>
  <div class={`row ${className || ''}`} {...props}>
    {children}
  </div>

export const Column = ({className, children, ...props}) =>
  <div class={`column ${className || ''}`} {...props}>
    {children}
  </div>
