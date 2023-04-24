import { useNavigate } from 'react-router-dom'
import useServer from '../hooks/useServer.js'
import { Modal, Input, Button } from 'antd'
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons'
import React from 'react'
import UploadPhoto from '../component/UploadPhoto.jsx'


function Post() {

  const { post } = useServer()
  const navigate = useNavigate()

  const handleSubmit = async e => {

    e.preventDefault()
    const credentials = Object.fromEntries(new FormData(e.target))
    const { data } = await post({ url: '/post', body: credentials })
    if (data) return navigate('/main') //cuando le das iniciar sesión me lleva a main que es / que es la vista principal
  }

  const handleCancel = () => {
    navigate("/main")
  }

  return (
    <>
        <Modal
          title={<UploadPhoto/>}
          centered
          open
          onCancel={handleCancel}
          // Ocultar botones del modal sobreescribiendolos con un html vacio: fragment
          footer={<></>}
        >
      <form onSubmit={handleSubmit} className='form-login'>

          <Input
            id="titulo"
            name="titulo"
            type="titulo"
            autoComplete="titulo"
            required
            placeholder="Titulo"
          />

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

export default Post