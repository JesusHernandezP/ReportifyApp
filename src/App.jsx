import { Route, Routes, Navigate } from 'react-router-dom'
import { PrivateRoutes } from './component/PrivateRoutes'
import { createContext, useState } from 'react'

import Navbar from './component/Navbar'
import Login from './views/Login'
import Main from './views/Main'
import PostCreationModal from './views/PostCreationModal'
import Comments from './views/Comments'
import Profile from './views/Profile'
import Register from './views/Register'

import Switch from "react-switch"
import styles from './App.module.css'

export const ThemeContext = createContext(null);


function App() {

  const[theme, setTheme] = useState ('dark');
  const toogleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light' ))
  }
  return (
  <ThemeContext.Provider value={{ theme, toogleTheme}}>
    <div id={theme}>

    <div className={styles.container}>
      <Navbar />
    <div className='switch' >
      <label> {theme === 'light' ? 'Light Mode' : 'Dark Mode'} </label>
    <Switch  onChange={toogleTheme} checked={theme === 'dark'}/>
    </div>
      

      <div>
        {/* {JSON.stringify({ isAuthenticated })} */}
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post" element={<PostCreationModal />} />
        <Route path="/comments" element={<Comments />} />


        {/* {!isAuthenticated ? <Route path="/login" element={<Login />} /> : null} */}
        {/* {!isAuthenticated ? <Route path="/profile" element={ <Profile />} /> : null}  */}
        {/* <Route path="/news" element={<News />} />
        <Route path="/register" element={<Register />} /> */}

        <Route element={<PrivateRoutes />}>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </div>
    </div>
      </ThemeContext.Provider>
  )
}

export default App