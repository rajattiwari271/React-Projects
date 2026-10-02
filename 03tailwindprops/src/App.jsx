import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App(props) {
  console.log("props",props)
  const [count, setCount] = useState(0)
let myObj = {
    username : "rajat",
    age:18
}
  return (
    <>
    <h1 className = 'bg-green-400 text-black p-4 rounded-xl' >tailwind test</h1>
  
   
<Card username="cahiaurcode" btnText="read more"/>
<Card username = "rajat" btnText= "view more"/>
   
    </>
  )
}

export default App
