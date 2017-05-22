import assoc from 'ramda/src/assoc'

import Title from '/components/elements/title'

import {buttonStyle} from '/components/elements/button'
import {formStyle, labelStyle, fieldStyle} from './styles'

const {Component, cloneElement} = Preact

export class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: props.data || {}
    }
  }

  set (key, val) {
    this.setState({
      data: assoc(key, val, this.state.data)
    })
  }

  render ({onSubmit, children, updateProps, data, ...props}) {
    const childrenWithProps = updateProps(children)
    return <form
      onSubmit={(ev) => ev.preventDefault() || onSubmit(data)}
      {...props}
      {...formStyle}
    >
      {childrenWithProps}
    </form>
  }

  updateProps (children) {
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
  }
}

export const Field = ({label, name, children, ...props}) =>
  <div>
    <label htmlFor={name} {...labelStyle}>
      <Title style='smallTitle'>{label}</Title>
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
  <button type='submit' {...props} {...buttonStyle()}>{children}</button>
