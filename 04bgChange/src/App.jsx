import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [color, setColor] = useState("grey");

  return (
    <> 
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-19 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 ">
          <button onClick={() => setColor("red")} className="outline-none px-6 py-7  text-white shadow-lg"
           style={{backgroundColor:"red"}}>Red</button>
           <button onClick={() => setColor("green")} className="px-6 py-1  text-white shadow-lg"
           style={{backgroundColor:"green"}}>Green</button>
           <button onClick={() => setColor("blue")} className="px-6 py-1  text-white shadow-lg"
           style={{backgroundColor:"blue"}}>Blue</button>
           <button onClick={() => setColor("black")} className="px-6 py-1  text-white shadow-lg"
           style={{backgroundColor:"black"}}>Black</button>
           <button onClick={() => setColor("yellow")} className="px-6 py-1  text-white shadow-lg"
           style={{backgroundColor:"yellow"}}>Yellow</button>

        </div>
      </div>
    </div>
    </>
  )
}
export default App
