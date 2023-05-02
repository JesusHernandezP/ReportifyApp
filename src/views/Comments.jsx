import { useNavigate } from 'react-router-dom'
import { Modal, Input, Button } from 'antd'
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons'

import useServer from '../hooks/useServer.js'
import React from 'react'
import CardComments from '../component/CardComments.jsx'


function Comments() {

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
        title={<CardComments />}
        centered
        open
        onCancel={handleCancel}
        footer={<></>}
      >
        <form onSubmit={handleSubmit} className='form-login'>
          <Input.TextArea
            id="comentario"
            name="comentario"
            type="comentario"
            autoComplete="comentario"
            required
            placeholder="Comentario"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
          <div className='ant-modal-footer'>
            <Button type="primary" htmlType="submit">
              Publicar
            </Button >
          </div>
        </form>
      </Modal>
    </>
  )
}

export default Comments