import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { PrivateRoutes } from './components/PrivateRoutes'

import Index from './views/index'
import Login from './views/login'
import Todos from './views/todos'
import Notifications from './components/Notifications'

function App() {

  return (
    <>
      <Navbar />
      <Notifications />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/todos" element={<Todos />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
