import { useNavigate } from 'react-router-dom'
import useServer from '../hooks/useServer.js'

function Login() {
  const { post } = useServer()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const credentials = Object.fromEntries(new FormData(e.target))
    const { data } = await post({ url: '/login', body: credentials })
    if (data) return navigate('/') //cuando le das iniciar sesión me lleva a main que es / que es la vista principal
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="john@doe.com"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            required
            placeholder="123456"
          />
        </div>
      </div>

      <div>
        <button type="submit"> Iniciar Sesión </button>
      </div>
    </form>
  )
}

export default Login
