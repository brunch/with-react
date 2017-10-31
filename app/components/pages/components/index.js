import {route} from 'preact-router'

const Components = () =>
  <div>
    <h1>Components</h1>
    <button onClick={() => route('/')} >home</button>
  </div>

export default Components
