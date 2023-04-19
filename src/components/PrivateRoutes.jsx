import { Navigate, Outlet } from 'react-router-dom'

import useAuth from '../hooks/useAuth'

function PrivateRoutes() {
    const { isAuthenticated } = useAuth()
    if (!isAuthenticated) return <Navigate replace to='/login' />

    return <Outlet />
}

export { PrivateRoutes }