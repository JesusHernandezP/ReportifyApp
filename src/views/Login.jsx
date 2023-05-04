import { useNavigate, Link } from 'react-router-dom'
import { Modal, Input, Button } from 'antd'
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons'
import React, { useEffect } from 'react'

import './Login.css'
import useServer from '../hooks/useServer.js'
import useAuth from '../hooks/useAuth'

function Login() {
  const { post, get } = useServer()
  const { token } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    const credentials = Object.fromEntries(new FormData(e.target))
    await post({ url: '/login', body: credentials })
  }

  useEffect(() => { 
    const refreshProfile = async () => {
      if (!token) return
  
      const usr = await get({ url: '/profile' })
      if (usr) return navigate('/')
    } 
    refreshProfile()
  }, [token])

  const handleCancel = () => {
    navigate("/")
  }

  return (
    <>
      <Modal
        title="Iniciar sesión"
        centered
        open
        onCancel={handleCancel}
        footer={<></>}
      >
        <form onSubmit={handleSubmit} className='form-login'>
          <Input
            name="email"
            autoComplete="email"
            required
            placeholder="Email"
          />
          <Input.Password
            name="password"
            autoComplete="password"
            required
            placeholder="Contraseña"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
          <span> ¿No tienes cuenta?</span>
          <span>
            <Link to="/register">
              <Link type="link">
                Regístrate
              </Link>
            </Link>
            </span>
          <div className='ant-modal-footer'>
            <Button type="primary" htmlType="submit">
              Ingresar
            </Button >
          </div>
        </form>
      </Modal>
    </>
  )
}
export default Login