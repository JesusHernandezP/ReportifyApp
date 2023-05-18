import { Button, Input, Modal } from 'antd'
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons'

import { useNavigate } from 'react-router-dom'
import { React } from 'react'

import './Login.css'
import '../index.css'
import Form from 'react-bootstrap/Form';

import useServer from '../hooks/useServer.js'
import useAuth from '../hooks/useAuth'

function Register() {
  const { post } = useServer()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    const formData = new FormData(e.target)
    await post({ url: '/register', body: formData, hasImage: true })
    navigate("/login")
  }

  const handleCancel = () => {
    navigate("/")
  }

  return (
    <Modal
      title="Crear Cuenta"
      centered
      open
      onCancel={handleCancel}
      footer={<></>}
    >
      <form onSubmit={handleSubmit} className='form-login'>
        <Input
          name="username"
          required
          placeholder="Usuario"
        />
        <Input
          name="email"
          required
          placeholder="Email"
        />
        <Input.Password
          name="password"
          required
          placeholder="Contraseña"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
        <Form.Group controlId="formFilesm" className="mb-3">
          <Form.Label></Form.Label>
          <Form.Control className='upload-file' type="file" name="avatar"
            accept="image/*" size="sm" />
        </Form.Group>
        <div className='ant-modal-footer'>
          <Button type="primary" htmlType="submit">
            Registrar
          </Button>
        </div>
      </form>
    </Modal>
  )
}
export default Register
