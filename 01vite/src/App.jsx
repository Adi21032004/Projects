import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addvalue = () => {
    if(count < 20){
      setCount(count + 1)
    }
  }

  const removeValue = () => {
    if(count > 0){
      setCount(count - 1)
    }
  }
  return (
    <>
      <div class='container'>
      <h1>{count}</h1>
      <button className='b1'  onClick={addvalue}>add value</button>
      <button class='b2' onClick={removeValue}>remove value</button>
      </div>
      
    </>
  )
}

export default App
