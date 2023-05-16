import { Route, Routes, Navigate } from 'react-router-dom'
import { PrivateRoutes } from './component/PrivateRoutes'
import { createContext, useState } from 'react'

import Navbar from './component/Navbar'
import Login from './views/Login'
import Main from './views/Main'
import PostCreationModal from './views/PostCreationModal'
import Profile from './views/Profile'
import Register from './views/Register'

import styles from './App.module.css'

export const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div>
          <div id={theme}>
            <div className={styles.container}>
              <Navbar 
              onToggleTheme={toggleTheme}/>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/post" element={<PostCreationModal />} />
                <Route element={<PrivateRoutes />}>
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App