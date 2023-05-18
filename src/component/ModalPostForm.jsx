import { themeTranslation, themes } from '../constants'

import { Modal, Input, Button } from 'antd'
import Form from 'react-bootstrap/Form'

function ModalPostForm({defaultValues={}, handleSubmit, handleCancel, modalTitle='Crear post'}) {

  return <Modal
  title={modalTitle}
  centered
  open
  onCancel={handleCancel}
  footer={<></>}
>
  <form onSubmit={handleSubmit} className='form-login'>
    <label>Título</label>
    <Input
      name="title"
      required
      placeholder="Título"
      defaultValue={defaultValues.title}
    />
    <label>Categoría</label>
    <select className='ant-input css-dev-only-do-not-override-5j1afj'
      name="theme"
      defaultValue={defaultValues.theme===undefined ? "" : defaultValues.theme}
      style={{
        width: '100%',
      }}
    >
      <option value="" selected>Elige categoría</option>
      {
        themes.map((theme) => <option key={theme} value={theme}>{themeTranslation[theme]}</option>)
      }
    </select>
    <label>Contenido</label>
    <Input.TextArea
      name="content"
      required
      defaultValue={defaultValues.content}
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