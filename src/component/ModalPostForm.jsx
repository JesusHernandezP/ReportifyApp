import { Modal, Input, Button, Select } from 'antd'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'

const themes = ['sports', 'politics', 'economy', 'education', 'society', 'technology', 'culture', 'science', 'gaming', 'medicine']


function ModalPostForm({news = {}, handleSubmit, handleCancel}) {
  const [post] = useState(news)

  return <Modal
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
      value={post.title}
    />
    <label>Categoría</label>
    <select className='ant-input css-dev-only-do-not-override-5j1afj'
      name="theme"
      value={post.theme}
      defaultValue=""
      style={{
        width: '100%',
      }}
    >
      <option value="" selected>Elige categoría</option>
      {
        themes.map((theme) => <option key={theme} value={theme}>{theme}</option>)
      }
    </select>
    <label>Contenido</label>
    <Input.TextArea
      name="content"
      required
      value={post.content}
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
}

export default ModalPostForm