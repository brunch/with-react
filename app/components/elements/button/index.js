import {Link} from '/components/elements/link'

const Button = ({to, className = '', children}) =>
  <Link to={to} class={'btn ' + className}>
    {children}
  </Link>

const FormButtom = ({className = '', type, children, ...props}) =>
  <button type={type} class={'btn ' + className} {...props}>{children}</button>

export default function ButtonHoC ({to, type, children, ...props}) {
  return !type
    ? <Button to={to} {...props}>{children}</Button>
    : <FormButtom to={to} type={type} {...props}>{children}</FormButtom>
}
