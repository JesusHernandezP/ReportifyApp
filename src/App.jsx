import { Navigate, Route, Routes} from 'react-router-dom'
import { PrivateRoutes } from './component/PrivateRoutes'
import useAuth from './hooks/useAuth'
import Navbar from './component/Navbar'
import ThemeButton from './component/ThemeButton'
import CarouselComponet from './component/Carousel'
import Cards from './component/Cards'
import Login from './views/Login'
import Main from './views/Main'
import Profile from './views/Profile'
import Post from './views/Post'
import Comments from './views/Comments'


function App() {

  return (
    <>
      <Navbar />
      <ThemeButton/>
   
      <div>
      {/* {JSON.stringify({ isAuthenticated })} */}
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Post />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/profile" element={<Profile />} />

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