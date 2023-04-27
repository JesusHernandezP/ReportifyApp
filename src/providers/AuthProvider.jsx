import { useMemo, useState } from "react"
import AuthContext from "../contexts/AuthContext.js"
import isEmpty from "../helpers/isEmpty.js"

const AuthProvider = ({ children }) => {
  const localUser = JSON.parse(localStorage.getItem('user')) || {}
  const [currentUser, setCurrentUser] = useState(localUser)

  const setUserHandler = (user = {}) => {
    if (isEmpty(user)) return

    const newUser = {
      ...currentUser,
      ...user
    }

    localStorage.setItem('user', JSON.stringify(newUser))
    setCurrentUser(newUser)
    // (user) es esto -> {"status":"ok","data":{"token":"eyJh....."}} que viene de POSTMAN
  }

  const logoutHandler = () => {
    localStorage.removeItem('user')
    return setCurrentUser(null)
  }

  const authValues = useMemo(() => {
    return {
      user: currentUser?.user || null,
      token: currentUser?.data?.token,
      isAuthenticated: !!currentUser?.data?.token, //!!lo vuelve buleano pro doble cancelación
      setUser: setUserHandler,
      logout: logoutHandler
    }
  })

  return <AuthContext.Provider value={authValues}>
    { children }
  </AuthContext.Provider>
}

export default AuthProvider