import { useState } from 'react'


function App() {
  const [color,setcolor] = useState("white")
//setcolor function changes the value of the variable color.so if i donot return the color then change in the state
//is not possible by the function setcolor.
  return (
    
      <div className='w-screen h-screen duration-200 flex justify-center items-end p-6 'style={{backgroundColor:color}}>
        <div className='flex flex-wrap gap-10 text-black'>
          <button style={{backgroundColor:"red"}} onClick={() => setcolor("red")}>red</button>
          <button style={{backgroundColor:"green"}} onClick={() => setcolor("green")}>green</button>
          <button style={{backgroundColor:"blue"}} onClick={() => setcolor("blue")}>blue</button>
          <button style={{backgroundColor:"yellow"}} onClick={() => setcolor("yellow")}>yellow</button>
          <button style={{backgroundColor:"pink"}} onClick={() => setcolor("pink")}>pink</button>
          <button style={{backgroundColor:"orange"}} onClick={() => setcolor("orange")}>orange</button>
        </div>
      </div>
    
  )
}

export default App
