import { Route, Routes, Navigate } from 'react-router-dom'
import { PrivateRoutes } from './component/PrivateRoutes'
import Navbar from './component/Navbar'
import Login from './views/Login'
import Main from './views/Main'
import Post from './views/Post'
import Comments from './views/Comments'
import Profile from './views/Profile'
import Register from './views/Register'

function App() {

  return (
    <>
      <Navbar />

      <div>
        {/* {JSON.stringify({ isAuthenticated })} */}
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post" element={<Post />} />
        <Route path="/comments" element={<Comments />} />


        {/* {!isAuthenticated ? <Route path="/login" element={<Login />} /> : null} */}
        {/* {!isAuthenticated ? <Route path="/profile" element={ <Profile />} /> : null}  */}
        {/* <Route path="/news" element={<News />} />
        <Route path="/register" element={<Register />} /> */}

        <Route element={<PrivateRoutes />}>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </>
  )
}

export default App