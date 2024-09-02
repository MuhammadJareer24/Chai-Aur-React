import { useState } from "react"


function App() {
  const [color, setColor] = useState("tomato")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("tomato")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"tomato"}}>
            Tomato</button>
          <button
          onClick={() => setColor("lightgreen")}
           className="outline-none px-4 py-1 rounded-full text-whBLACKite shadow-lg" style={{backgroundColor:"lightgreen"}}>
            Lightgreen</button>
          <button
          onClick={() => setColor("violet")}
           className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"violet"}}>
            Violet</button>
          <button
          onClick={() => setColor("orange")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>
            Orange</button>
          <button
          onClick={() => setColor("teal")}
           className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"teal"}}>
            Teal</button>
          <button
          onClick={() => setColor("purple")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>
            Purple</button>
          <button
          onClick={() => setColor("lavender")}
           className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"lavender"}}>
            Lavender</button>
          <button
          onClick={() => setColor("black")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>
            Black</button>
          <button
          onClick={() => setColor("white")}
           className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"white"}}>
            White</button>
          <button
          onClick={() => setColor("gray")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"gray"}}>
            Gray</button>
        </div>
      </div>
    </div>
  )
}

export default App
