import { useNavigate } from 'react-router-dom'
import useServer from '../hooks/useServer.js'

import './Login.css'

function Login() {
  const { post } = useServer()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const credentials = Object.fromEntries(new FormData(e.target))
    const { data } = await post({ url: '/login', body: credentials })
    if (data) return navigate('/main') //cuando le das iniciar sesión me lleva a main que es / que es la vista principal
  }

  return (
    <>
    <form onSubmit={handleSubmit} className='form_login'>
      <h1 className='tittle_login'>Iniciar Sesión</h1>

      <div className='item'>

        <div>
          <label htmlFor="email"></label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email"
            />
        </div>

        <div>
          <label htmlFor="password"></label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            required
            placeholder="Contraseña"
            />
        </div>
      </div>

      <div>
        <button className='button_login' type="submit"> Ingresar </button>
      </div>
    </form>
    <div>
      <p>¿No tienes cuenta? Registrate</p>
    </div>
            </>
  )
}

export default Login
