import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumbedAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length + 1)
      
      // console.log('randomIndex', randomIndex)
      pass += str.charAt(randomIndex)

    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-16 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-3xl text-center mb-14'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-6'>
        <input 
         type="text"
         value={password}
         className='outline-none w-full py-2 px-3'
         placeholder='password'
         readOnly
         ref={passwordRef}
         /> 
         <button 
         onClick={copyPasswordToClipboard}
         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
            setNumbedAllowed((prev) => !prev)
          }} 
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }} 
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>

    </>
  )

}
export default App
