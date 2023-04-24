import { useNavigate } from 'react-router-dom'
import useServer from '../hooks/useServer.js'
import { Modal, Input, Button } from 'antd'
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons'
import React from 'react'

import './Login.css'


function Login() {
  const { post, get } = useServer()
  const navigate = useNavigate()

  const handleSubmit = async e => {

    e.preventDefault()
    const credentials = Object.fromEntries(new FormData(e.target))
    const { data } = await post({ url: '/login', body: credentials })
    const usr = data && await get({ url: '/profile' }) //cuando le das iniciar sesión me lleva a main que es / que es la vista principal
    if (usr) return navigate('/') //cuando le das iniciar sesión me lleva a main que es / que es la vista principal
  }

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
          // Ocultar botones del modal sobreescribiendolos con un html vacio: fragment
          footer={<></>}
        >
      <form onSubmit={handleSubmit} className='form-login'>

          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email"
          />

          <Input.Password
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            required
            placeholder="Contraseña"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
            <p>¿No tienes cuenta? Registrate</p>
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
