import UserContextProvider from "./context/UserContextProvider"
import "./App.css"
import Login from "./components/Login"
import Profile from "./components/Profile"

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-center text-4xl font-bold py-5">React with chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
