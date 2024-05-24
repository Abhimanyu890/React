import { useState , useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length , setLength] = useState(8)
  const [numberTaken, setNumberTaken] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberTaken) str += "0123456789" 
    if(charAllowed) str += "!@#$%^&*(){}"

    for (let i = 1; i < length; i++){
      let char = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char)
     
    }
     setPassword(pass)

  }, [length ,numberTaken, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

    useEffect(() => {
      passwordGenerator()
    }, [length ,  numberTaken , charAllowed , passwordGenerator]) 


  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-900 text-orange-500">
      <h1 className='text-white text-center my-3 text-xl'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
          
          <input 
          type="text"
          value = {password}
          className= "outline-none w-full py-1 px-3"
          placeholder = "password"
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-800 text-white px-3 py-1'> Copy</button>


      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
         
          <input type="range" 
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label> Length: {length}</label>
          
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked = {numberTaken}
          id='numberInput'
          onChange={() => {
            setNumberTaken((prev) => !prev)
          }}
          />
          <label htmlFor="numberInput">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
                      <input  
                      type="checkbox"
                      defaultChecked = {charAllowed}
                       id='characterInput'
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
