import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {Remount, useRemount} from '../src/lib/Remount'

const Teste: React.FunctionComponent = () => {
  return (
    <Remount>
      <App/>
    </Remount>
  )
}

const App = () => {
  const [clicks, setClicks] = useState(0)
  const {remount} = useRemount()
  return (
    <div>
      <div>Click: {clicks}</div>
      <button onClick={() => setClicks(clicks + 1)}>Add click</button>
      <button onClick={() => remount()}>Reset</button>
    </div>
  )
}

ReactDOM.render(<Teste/>, document.getElementById('root'))