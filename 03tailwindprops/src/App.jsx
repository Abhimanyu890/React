import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username : "Abhimanyu",
    age : 22
  }

//  const {age, username}= myObj



  return (
    <>
      <h1 className='bg-green-600 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username = "Abhimnayu" btnText = "click me"/>
      <Card username= "Chanchal" btnText = "visite me"/>
     
    </>
  )
}

export default App
