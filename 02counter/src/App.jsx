import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState() 

  const addValue = () => {
    setCounter(counter + 1)
    }
  const removeValue = () => {
    if(counter >0) {
    setCounter(counter - 1)
    }
  }
  return (
    <>
    <h1>Countdown Time</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br /><br />
    <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}
export default App
