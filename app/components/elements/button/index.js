import {Link} from '/components/elements/link'

const Button = ({to, className = '', children}) =>
  <Link to={to} class={'btn ' + className}>
    {children}
  </Link>

const FormButtom = ({className = '', type, children}) =>
  <button type={type} class={'btn ' + className}>{children}</button>

export default function ButtonHoC ({type, children, ...props}) {
  return !type
    ? <Button {...props}>{children}</Button>
    : <FormButtom type={type} {...props}>{children}</FormButtom>
}
