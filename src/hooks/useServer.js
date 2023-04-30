import { toast } from 'sonner'
import httpService from '../services/httpService.js'
import useAuth from './useAuth.js'

function useServer() {
  const { token, setUser } = useAuth()

  const handleResponse = ({ data, loading, error }) => {

    if (data?.data?.id && data?.data?.email) {
      console.log('data?.data?.id /// guardando user como:', data.data);
      setUser({ user: data.data})
    }

    if (data?.data?.token) {
      
      console.log('data?.data?.token /// guardando user como:', data.data.token);
      setUser({ token: data.data.token})
    }

    if (error && error.message === "Wrong email or password") {
      toast.error('El usuario o contraseña es incorrecto')
    } else {
      if (error) {
        toast.error(error.message)
      }
    }

    return { data, loading, error }
  }

  return {
    get: ({ url }) => httpService({ method: 'GET', url, token }).then(handleResponse),
    post: ({ url, body, hasImage }) => httpService({ method: 'POST', url, token, body, hasImage }).then(handleResponse),
    patch: ({ url, body, hasImage }) => httpService({ method: 'PATCH', url, token, body, hasImage }).then(handleResponse),
    delete: ({ url }) => httpService({ method: 'DELETE', url, token }).then(handleResponse),
  }
}

export default useServer