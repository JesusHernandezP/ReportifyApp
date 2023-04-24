import { useNavigate } from 'react-router-dom'
import useServer from '../hooks/useServer.js'
import { Modal, Input, Button } from 'antd'
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons'
import React from 'react'
import CardComments from '../component/CardComments.jsx'


function Perfil() {

  const { post } = useServer()
  const navigate = useNavigate()

  const handleSubmit = async e => {

    e.preventDefault()
    const credentials = Object.fromEntries(new FormData(e.target))
    const { data } = await post({ url: '/profile', body: credentials })
    if (data) return navigate('/main') //cuando le das iniciar sesión me lleva a main que es / que es la vista principal
  }

  const handleCancel = () => {
    navigate("/main")
  }

  return (
    <>
        <Modal
          title={<CardComments/>}
          centered
          open
          onCancel={handleCancel}
          // Ocultar botones del modal sobreescribiendolos con un html vacio: fragment
          footer={<></>}
        >
      <form onSubmit={handleSubmit} className='form-login'>

          <Input
            id="nombre"
            name="nombre"
            type="nombre"
            autoComplete="nombre"
            required
            placeholder="Nombre"
          />

          <Input.TextArea
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
            <div className='ant-modal-footer'>
              <Button type="primary" htmlType="submit">
  Guardar
                
              </Button >
            </div>
      </form>
        </Modal>
    </>
  )
}

export default Perfil
