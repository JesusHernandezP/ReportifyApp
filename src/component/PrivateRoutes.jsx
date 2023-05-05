import { Navigate, Outlet } from 'react-router-dom'

import useAuth from '../hooks/useAuth'

function PrivateRoutes() {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) return <Navigate replace to='/profile' />
  return <Outlet />
}

export { PrivateRoutes }