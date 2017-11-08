import {equal} from 'wasmuth'
import {subscribe, getState} from '/store'
import compose from '/util/compose'

/**
 * Mapper is called whenever the state changes.
 * Whenever the result of mapper changes, the component rerenders
 *
 * mapper: (state, props) => props this component needs from state
 * Component: the component that needs the props
 *
 * @TODO: Eventually move this to wasmuth
 */
export default mapper => Component => compose({
  componentWillMount () {
    const syncState = () => {
      const newProps = mapper(getState(), this.props)
      if (!equal(newProps, this.state._namespacedState)) {
        this.setState({_namespacedState: newProps})
      }
    }
    syncState()
    this.unsubscribe = subscribe(syncState)
  },
  componentWillUnmount () {
    this.unsubscribe()
  },
  render ({unsubscribe, _namespacedState, ...props}) {
    return <Component {...props} {..._namespacedState} />
  }
})
