import { useState } from 'react'

import './App.css'

function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
      <div className = "w-full h-screen duration-200" 
      style = {{backgroundColor: color }}></div>
     <div className ="fixed flex flex-wrap
     justify-center bottom-12 inset-x-0 px-2">
      <div className="fixed flex flex-wrap
     justify-cente gap-3 shadow-lg  bg-white px-3 py -2
     rounded-3xl">
      <button
      onClick={()=> setColor("red")}
      className= "outline-none px-4
      rounded-full"
      style = {{backgroundColor: "red"}}>Red</button>
       <button
           onClick={()=> setColor("grey")}
      className= "outline-none px-4
      rounded-full"
      style = {{backgroundColor: "grey"}}>grey</button>
       <button
           onClick={()=> setColor("pink")}
      className= "outline-none px-4
      rounded-full"
      style = {{backgroundColor: "pink"}}>Pink</button>
       <button
           onClick={()=> setColor("white")}
      className= "outline-none px-4
      rounded-full"
      style = {{backgroundColor: "white"}}>White</button>
       <button
           onClick={()=> setColor("green")}
      className= "outline-none px-4
      rounded-full"
      style = {{backgroundColor: "green"}}>green</button></div> </div>
    </>
  )
}

export default App
