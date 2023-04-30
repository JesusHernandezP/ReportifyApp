import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input, Modal } from 'antd'
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons'

const Register = () => {
  const onFinish = (value) => {
    console.log(value)
  }

  const navigate = useNavigate()

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
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
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
      <div className='ant-modal-footer'>
      <Button type="primary" htmlType="submit">
      Registrar
      </Button>
      </div>
    </Form>
    </Modal>

  )
  }
export default Register
