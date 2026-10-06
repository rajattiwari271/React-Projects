import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [char, setchar] = useState(false)
  const [password, setpassword] = useState("")
  
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (char) str += "!@#$^&*(){}[]~"

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length)
      pass += str.charAt(index)
    }
    setpassword(pass)
  }, [length, numberAllowed, char])

  const copyPasswordToClipboard = useCallback(()=> {
    passwordRef.current?.select(),
    window.navigator.clipboard.writeText(password)},[password])

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 bg-gray-900 text-orange-500'>
  <h1 className='text-white text-center my-3'>Password Generator</h1>

  <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input type="text" value={password}
      className='outline-none w-full py-1 px-3 bg-white'
      placeholder='password' readOnly 
      ref={passwordRef}/>
    <button 
    onClick={copyPasswordToClipboard}
    className='outline-none bg-blue-700 hover:bg-blue-800 text-white px-3 py-0.5 shrink-0'>
      Copy
    </button>
  </div>

  <div className='flex flex-wrap items-center text-sm gap-x-4 gap-y-2'>
    <div className='flex items-center gap-x-1'>
      <input type="range" min={4} max={70} value={length}
        className='cursor-pointer'
        onChange={(e) => setlength(Number(e.target.value))} />
      <label>Length: {length}</label>
    </div>

    <div className='flex items-center gap-x-1'>
      <input type="checkbox" checked={numberAllowed} id="numberInput"
        onChange={() => setnumberAllowed((prev) => !prev)} />
      <label htmlFor="numberInput">Numbers</label>
    </div>

    <div className='flex items-center gap-x-1'>
      <input type="checkbox" checked={char} id="characterInput"
        onChange={() => setchar((prev) => !prev)} />
      <label htmlFor="characterInput">Characters</label>
    </div>
  </div>
</div>
    </>
  )
}

export default App
