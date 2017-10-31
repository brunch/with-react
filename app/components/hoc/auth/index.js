import {pipe} from 'wasmuth'

const computeIsAuthenticated = (renderFunc) => pipe(
  (props) => ({
    ...props,
    isAuthenticated: !!props.token
  }),
  renderFunc
)

const IsAuthenticatedRender = ({isAuthenticated, children, ...props}) => {
  const child = children[0]
  if (!child || typeof child !== 'function') {
    throw new Error('IsAuthenticated requires a function as its only child')
  }
  return isAuthenticated
    ? child()
    : null
}

const NotAuthenticatedRender = ({isAuthenticated, children, ...props}) => {
  const child = children[0]
  if (!child || typeof child !== 'function') {
    throw new Error('IsAuthenticated requires a function as its only child')
  }
  return !isAuthenticated
    ? child()
    : null
}

export const IsAuthenticated = computeIsAuthenticated(IsAuthenticatedRender)
export const NotAuthenticated = computeIsAuthenticated(NotAuthenticatedRender)
