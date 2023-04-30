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
      token: currentUser?.token,
      isAuthenticated: !!currentUser?.token, //!!lo vuelve buleano por doble cancelación
      setUser: setUserHandler,
      logout: logoutHandler
    }
  }, [currentUser])

  return <AuthContext.Provider value={authValues}>
    { children }
  </AuthContext.Provider>
}

export default AuthProvider