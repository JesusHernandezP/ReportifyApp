import { Navigate, Route, Routes} from 'react-router-dom'
import { PrivateRoutes } from './component/PrivateRoutes'
import useAuth from './hooks/useAuth'

import Navbar from './component/Navbar'
import Login from './views/Login'
import Main from './views/Main'

function App() {

  const { isAuthenticated } = useAuth()

  return (
    <>
      <Navbar />
      {JSON.stringify({ isAuthenticated })}
      <Routes>
        <Route path="/main" element={<Main />} />
        {!isAuthenticated ? <Route path="/login" element={<Login />} /> : null}
        {/* {isAuthenticated ? <Route path="/pruebaperfil" element={ <div>Prueba</div>} /> : null}  */}
        {/* <Route path="/news" element={<News />} />
        <Route path="/register" element={<Register />} /> */}

        <Route element={<PrivateRoutes />}>
          {/* <Route path="/profile" element={<Profile />} />  */}
        </Route>
        <Route path="*" element={<Navigate to="/main"/>}/>

      </Routes>
    </>
  )
}

export default App