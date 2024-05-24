import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-content-center bottom-12 insert-x-0 px-2">
      <div className="flex flex-wrap -center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button 
        onClick={() => setColor("red")}
        className="outline-none px-4 py-1 
        rounded-full text-white shadow-lg"
        style={{backgroundColor: "red"}}
        >Red</button>
        <button 
        onClick={() => setColor("yellow")}
        className="outline-none px-4 py-1 
        rounded-full text-white shadow-lg"
        style={{backgroundColor: "yellow"}}
        >Yellow</button>
        <button 
        onClick={() => setColor("green")}
        className="outline-none px-4 py-1 
        rounded-full text-white shadow-lg"
        style={{backgroundColor: "green"}}
        >Green</button>
        <button 
        onClick={() => setColor("black")}
        className="outline-none px-4 py-1 
        rounded-full text-white shadow-lg"
        style={{backgroundColor: "black"}}
        >Black</button>
         <button 
        onClick={() => setColor("blue")}
        className="outline-none px-4 py-1 
        rounded-full text-white shadow-lg"
        style={{backgroundColor: "blue"}}
        >Blue</button>
         <button 
        onClick={() => setColor("pink")}
        className="outline-none px-4 py-1 
        rounded-full text-white shadow-lg"
        style={{backgroundColor: "pink"}}
        >pink</button>
         <button 
        onClick={() => setColor("orange")}
        className="outline-none px-4 py-1 
        rounded-full text-white shadow-lg"
        style={{backgroundColor: "orange"}}
        >Orange</button>
         <button 
        onClick={() => setColor("brown")}
        className="outline-none px-4 py-1 
        rounded-full text-white shadow-lg"
        style={{backgroundColor: "brown"}}
        >Brown</button>
      </div>
    </div>
     </div>
  )
}

export default App
