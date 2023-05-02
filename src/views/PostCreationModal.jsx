import { useNavigate } from 'react-router-dom'
import useServer from '../hooks/useServer.js'
import { Modal, Input, Button  } from 'antd'
import React from 'react'
import Form from 'react-bootstrap/Form';


function PostCreationModal() {

  const { post } = useServer()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    await post({ url: '/news', body: formData, hasImage: true })
    navigate("/")
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
          {/* <UploadPhoto /> */}
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
          <Input.TextArea
            name="content"
            required
            placeholder="Comentario"
          />
          <Form.Group controlId="formFilesm" className="mb-3">
          <Form.Label></Form.Label>
          <Form.Control type="file" name="photo"
            accept="image/*" size="sm"/>
         </Form.Group>
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