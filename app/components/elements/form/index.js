import {debounce as debounceFunction} from 'throttle-debounce'

import {compose, setNodeName} from '/util/compose'
import Button from '/components/elements/button'

import {dispatch} from '/store'

import {updateFormData} from './actions'

const {cloneElement} = Preact

export const Form = compose(
  setNodeName('Form'),
  function updateProps (children) {
    const names = ['TextField', 'TextArea', 'RadioField']
    for (var x = 0; x < children.length; x++) {
      if (children[x].nodeName && names.indexOf(children[x].nodeName.name) > -1) {
        const name = children[x].attributes.name
        children[x] = cloneElement(children[x], {
          formName: this.props.name,
          value: (this.props.data || {})[name]
        })
      }
      if (children[x].children && children[x].children.length) {
        children[x].children = this.updateProps(children[x].children)
      }
    }
    return children
  },
  function render ({onSubmit, children, updateProps, data, ...props}) {
    const childrenWithProps = updateProps(children)
    return <form
      onSubmit={(ev) => ev.preventDefault() || onSubmit(data)}
      {...props}
    >
      {childrenWithProps}
    </form>
  }
)

export const FormHeading = ({children}) =>
  <div class='form-heading'>{children}</div>

export const FormGroup = ({children}) =>
  <div className='form-group'>{children}</div>

export const FormRow = ({children}) =>
  <div className='form-row'>{children}</div>

export const FieldSet = ({className, children}) =>
  <fieldset class={className || ''}>{children}</fieldset>

export const Field = ({label, name, className = '', children, ...props}) =>
  <div className={className}>
    <label htmlFor={name} className='bold-label'>{label}</label>
    {children}
  </div>

export const TextField = ({
  type = 'text',
  name,
  placeholder,
  debounce = 0,
  // Assigned by updateProps
  formName,
  value,
  ...props
}) =>
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onInput={debounceFunction(debounce, (ev) =>
      ev.preventDefault() ||
      dispatch(updateFormData(formName, {[name]: ev.target.value}))
    )}
    {...props}
  />

export const RadioField = ({name, value, checked, formName, ...props}) =>
  <input
    type='radio'
    name={name}
    checked={checked}
    onChange={(ev) =>
      ev.preventDefault() ||
      dispatch(updateFormData(formName, {[name]: value}))
    }
    {...props}
  />

export const TextArea = ({label, name, placeholder, set, value, ...props}) =>
  <Field label={label} name={name} {...props}>
    <textarea
      name={name}
      cols={30}
      rows={10}
      value={value}
      onChange={(ev) => set(name, ev.target.value)}
    />
  </Field>

export const SubmitButton = ({children, ...props}) =>
  <Button type='submit' {...props}>{children}</Button>
