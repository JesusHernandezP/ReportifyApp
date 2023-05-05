import { useNavigate } from 'react-router-dom'
import { Modal, Input, Button, Select } from 'antd'

import useServer from '../hooks/useServer.js'
import React from 'react'
import Form from 'react-bootstrap/Form'
import '../index.css'
import { Placeholder } from 'react-bootstrap'

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

  const themes = ['sports', 'politics', 'economy', 'education', 'society', 'technology', 'culture', 'science', 'gaming', 'medicine']

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
          <label>Título</label>
          <Input
            name="title"
            required
            placeholder="Título"
          />
          <label>Categoría</label>
          <select className='ant-input css-dev-only-do-not-override-5j1afj'
            name="theme"
            defaultValue={null}
            placeholder="Elige categoría"
            style={{
              width: '100%',
            }}
          >
            <option value="" disabled selected hidden>Elige categoría</option>
            {
              themes.map((theme) => <option value={theme}>{theme}</option>)
            }
          </select>
          <label>Contenido</label>
          <Input.TextArea
            name="content"
            required
            placeholder="¿Sobre qué quieres hablar?"
          />
          <label>Imagen</label>
          <Form.Control className='upload-file' type="file" name="photo"
            accept="image/*" size="sm" />
          <div className='ant-modal-footer'>
            <Button type="primary" htmlType="submit">
              Publicar
            </Button >
          </div>
        </form>
      </Modal >
    </>
  )
}

export default PostCreationModal