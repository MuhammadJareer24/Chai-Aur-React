import React, { useContext } from "react"
import UserContext from "../context/UseContext"

function Profile() {
  const { user } = useContext(UserContext)

  if (!user) return <div className="text-center text-xl">Please Login</div>

  return <div className="text-center text-xl">Welcome {user.username}</div>
}

export default Profile
