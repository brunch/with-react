import {equal} from 'wasmuth'
import {subscribe, getState} from '/store'
import compose from '/util/compose'

export default mapper => Component => compose({
  componentWillMount() {
    const syncState = () => {
      const newProps = mapper(getState())
      if (!equal(newProps, this.state)) {
        this.setState({...newProps})
      }
    }
    syncState()
    this.unsubscribe = subscribe(syncState)
  },
  componentWillUnmount() {
    this.unsubscribe()
  },
  render(props) {
    return <Component {...props} />
  }
})

