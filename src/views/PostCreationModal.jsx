import { useNavigate } from 'react-router-dom'
import useServer from '../hooks/useServer.js'
import { Modal, Input, Button } from 'antd'
import React from 'react'
import UploadPhoto from '../component/UploadPhoto.jsx'


function PostCreationModal() {

  const { post } = useServer()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    await post({ url:'/news', body: formData, hasImage:true})
  }

  const handleCancel = () => {
    navigate("/")
  }

  return (
    <>
      <Modal
        title='Crear post'
        centered
        open
        onCancel={handleCancel}
        // Ocultar botones del modal sobreescribiendolos con un html vacio: fragment
        footer={<></>}
      >
        <form onSubmit={handleSubmit} className='form-login'>
          <UploadPhoto />
          <Input
            name="title"
            required
            placeholder="Título"
          />
          <Input
            name="theme"
            required
            placeholder="Categoría"
          />
          {/* <input
            type="file"
            name="photo"
            accept="image/png, image/jpeg"
          /> */}
          <Input.TextArea
            name="content"
            required
            placeholder="Comentario"
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

export default PostCreationModal