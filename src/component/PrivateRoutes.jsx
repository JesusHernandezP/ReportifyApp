import { Navigate, Outlet } from 'react-router-dom'

import useAuth from '../hooks/useAuth'

function PrivateRoutes() {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) return <Navigate replace to='/profile' />

  return <Outlet />//si el login es OK, pasa a Outlet que permite acceder al children de
  // PrivateRoutes que en nuestro caso es Profile
}

export { PrivateRoutes }