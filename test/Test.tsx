import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {usePersistedState} from '../src/lib/usePeristedState'

const Teste: React.FunctionComponent = () => {
  return (
    <App />
  )
}

const App = () => {
  const [token, setToken] = usePersistedState('token', 'undefined')
  return (
    <div>teste</div>
  )
}

ReactDOM.render(<Teste />, document.getElementById('root'))