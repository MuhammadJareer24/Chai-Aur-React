import React, { useState, useContext } from "react"
import UserContext from "../context/UseContext"
function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { setUser } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ username, password })
  }
  return (
    <div>
      <h2 className="text-center text-3xl py-4 font-semibold">Login</h2>
      <div className="text-center space-x-5 py-5">
        <input
          className="bg-slate-100 p-2 rounded-md"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          className="bg-slate-100 p-2 rounded-md"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="bg-slate-100 hover:bg-slate-300 p-2 rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Login
