import assoc from '/util/assoc'
import {compose, withState, setNodeName} from '/util/compose'
import Button from '/components/elements/button'

import {formStyle, labelStyle, fieldStyle} from './styles'

const {cloneElement} = Preact

export const Form = compose(
  setNodeName('Form'),
  withState('data', 'setData', ({data}) => data || {}),
  function updateProps (children) {
    const names = ['TextField', 'TextArea']
    for (var x = 0; x < children.length; x++) {
      if (children[x].nodeName && names.indexOf(children[x].nodeName.name) > -1) {
        children[x] = cloneElement(children[x], {
          set: this.set.bind(this),
          data: this.state.data
        })
      }
      if (children[x].children && children[x].children.length) {
        children[x].children = this.updateProps(children[x].children)
      }
    }
    return children
  },
  function set (key, val) {
    this.setState({
      data: assoc(key, val, this.state.data)
    })
  },
  function render ({onSubmit, children, updateProps, data, ...props}) {
    const childrenWithProps = updateProps(children)
    return <form
      onSubmit={(ev) => ev.preventDefault() || onSubmit(data)}
      {...props}
      {...formStyle}
    >
      {childrenWithProps}
    </form>
  }
)

export const Field = ({label, name, children, ...props}) =>
  <div>
    <label htmlFor={name} {...labelStyle}>
      <h4>{label}</h4>
    </label>
    {children}
  </div>

/**
 * Text input field
 * @param  {string}       props.label       string passed to label
 * @param  {string}       props.name        unique name for field, where value is stored on `data[name]`
 * @param  {string}       props.placeholder html placeholder attr
 * @param  {function}     props.set         update parent Form `state.data`
 * @param  {object}       props.data        object holding form data
 * @return {vnode}
 */
export const TextField = ({label, name, placeholder, set, data, ...props}) =>
  <Field label={label} name={name} {...props}>
    <input
      type='text'
      name={name}
      placeholder={placeholder}
      value={data[name]}
      onChange={(ev) => set(name, ev.target.value)}
      {...fieldStyle}
    />
  </Field>

export const TextArea = ({label, name, placeholder, set, data, ...props}) =>
  <Field label={label} name={name} {...props}>
    <textarea
      name={name}
      cols={30}
      rows={10}
      value={data[name]}
      onChange={(ev) => set(name, ev.target.value)}
      {...fieldStyle}
    />
  </Field>

export const SubmitButton = ({children, ...props}) =>
  <Button type='submit' {...props}>{children}</Button>
