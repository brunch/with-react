import Preact from 'preact'
import * as classless from 'classless-component'

export const compose = classless.compose(Preact.Component, Preact.h)
export const withState = classless.withState
export const mapProps = classless.mapProps
export const setNodeName = classless.setNodeName

export default compose
