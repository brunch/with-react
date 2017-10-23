import {debounce as debounceFunction} from 'throttle-debounce'

import {compose, setNodeName} from '/util/compose'
import Button from '/components/elements/button'
import {dispatch} from '/store'
import {updateFormData} from './actions'

const {cloneElement} = Preact

export const Form = compose(
  setNodeName('Form'),
  function updateProps (children) {
    const names = ['TextField', 'RadioField', 'Radio']
    for (var x = 0; x < children.length; x++) {
      if (children[x].nodeName && names.indexOf(children[x].nodeName.name) > -1) {
        const name = children[x].attributes.name
        children[x] = cloneElement(children[x], {
          formName: this.props.name,
          value: (this.props.data || {})[name],
          error: (this.props.errors || {})[name]
        })
      }
      if (children[x].children && children[x].children.length) {
        children[x].children = this.updateProps(children[x].children)
      }
    }
    return children
  },
  function render ({onSubmit, children, updateProps, data, errors, ...props}) {
    const childrenWithProps = updateProps(children)
    return <form
      onSubmit={(ev) => ev.preventDefault() || onSubmit({data, errors})}
      {...props}
    >
      {childrenWithProps}
    </form>
  }
)

export const FormHeading = ({className, children}) =>
  <div class={className + ' form-heading'}>{children}</div>

export const FieldSet = ({className, children}) =>
  <fieldset class={className || ''}>{children}</fieldset>

export const Field = ({label, className = '', name, hint, error, children, ...props}) =>
  <div>

    { /* If class of 'fancy-label' is used, label is placed below input and label looks like placeholder */ }
    {className.indexOf('fancy-label') !== -1 &&
    <div className='label-wrap'>
      {children}
      {label && <label htmlFor={name}>
        <div>{label}</div>
      </label>}
    </div>
     }

    {className.indexOf('fancy-label') === -1 &&
    <div>
      {label && <label htmlFor={name}>
        <div>{label}</div>
      </label>}
      {children}
    </div>
     }

    {!!hint && !error &&
      <div className='field-hint'>{hint}</div>}
    {!!error &&
      <div className='field-hint is-error'>{error}</div>}
  </div>

export const TextField = ({
  type = 'text',
  name,
  placeholder = ' ',
  debounce = 0,
  focus = false,
  // Assigned by updateProps
  formName,
  value,
  ...props
}) =>
  <Field name={name} {...props}>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onInput={debounceFunction(debounce, (ev) =>
        ev.preventDefault() ||
        dispatch(updateFormData(formName, {[name]: ev.target.value}))
      )}
      // setTimeout is needed to wait till after the animation
      // @TODO: Probably better to use requestAnimationFrame
      ref={(ref) => ref && focus && setTimeout(() => ref.focus(), 100)}
      {...props}
    />
  </Field>

export const RadioField = ({name, label, value, checked, formName, ...props}) =>
  <Field label={name} name={name} {...props}>
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
  </Field>

export const Radio = ({name, val, value, formName, ...props}) =>
  <input
    type='radio'
    name={name}
    checked={val === value}
    onChange={(ev) =>
      ev.preventDefault() ||
      dispatch(updateFormData(formName, {[name]: val}))
    }
    {...props}
  />

export const SubmitButton = ({children, ...props}) =>
  <Button type='submit' {...props}>{children}</Button>
