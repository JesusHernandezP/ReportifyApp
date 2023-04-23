import { Navigate, Route, Routes} from 'react-router-dom'
import { PrivateRoutes } from './component/PrivateRoutes'
import useAuth from './hooks/useAuth'

import Navbar from './component/Navbar'
import ModalLogin from './component/ModalLogin'
import Main from './views/Main'
import Profile from './views/Profile'


function App() {

  const { isAuthenticated } = useAuth()

  return (
    <>
      <Navbar />
      {JSON.stringify({ isAuthenticated })}
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<ModalLogin />} />
        {/* {!isAuthenticated ? <Route path="/login" element={<Login />} /> : null} */}
        {/* {!isAuthenticated ? <Route path="/profile" element={ <Profile />} /> : null}  */}
        {/* <Route path="/news" element={<News />} />
        <Route path="/register" element={<Register />} /> */}

        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        {/* <Route path="*" element={<Navigate to="/main"/>}/> */}

      </Routes>
    </>
  )
}

export default App