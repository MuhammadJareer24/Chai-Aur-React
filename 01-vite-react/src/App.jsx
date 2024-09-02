
import Chai from "./Chai"

function App() {
  const msg = 'BEST hai'

  return (
    <>
   <Chai/>
   <h1>chai aur react {msg}</h1> 
   <p>test para</p>
    </>
  )
}

// In return we can only write evaluated experssion like {msg}//

export default App
