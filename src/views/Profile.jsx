import { useNavigate } from 'react-router-dom'
import React, { useRef } from 'react'
import useAuth from '../hooks/useAuth.js'
import { apiURL } from '../config.js'
import useServer from '../hooks/useServer.js'
import { Modal, Button, Avatar } from 'antd'
import Form from 'react-bootstrap/Form'

import './Profile.css'

const DescriptionItem = ({ label, children }) => {
  return (
    <div>
      <span className='profile-description-title'>{label}: </span>
      <span className='profile-description-content'>{children}</span>
    </div>
  )
}

function Perfil() {
  const { isAuthenticated, logout, user } = useAuth()
  const navigate = useNavigate()
  const { put } = useServer()

  const handleLogout = () => {
    logout()
    navigate("/")
  }
  const handleClick = () => {
    navigate("/")
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    await put({ url: `/user/avatar`, body: formData, hasImage: true })
  }

  const inputEl = useRef(null)
  const onClickCamera = () => {
    // `current` es la ref. del elemento html del input
    inputEl.current.click()
  }

  const inputUpload = useRef(null)
  const onChangeUpload = () => {
    inputUpload.current.click()
  }

  return (
    <>
      <div className='darktheme'>
        <Modal
          title='Perfil'
          centered
          open
          onCancel={handleClick}
          // Ocultar botones del modal sobreescribiendolos con un html vacio: fragment
          footer={<></>}
        >
          <div className='profile-body'>
            <Avatar src={`${apiURL}/avatars/${user?.avatar}`} size={200} />
            <button onClick={onClickCamera} className='camera-button'><i className="bi bi-camera"></i>
            </button>
            <form onSubmit={handleSubmit} className='form-login'>

              <Form.Group controlId="formFilesm" className="mb-3 hidden-form">
                <Form.Control onChange={onChangeUpload} ref={inputEl} className='upload-file' type="file" name="avatar"
                  accept="image/*" size="sm" />
              </Form.Group>
              <Button ref={inputUpload} type="primary" htmlType="submit" className="hidden-form">
                Guardar
              </Button>
            </form>
            <div className='profile-description' >
              <DescriptionItem label="Usuario">{user?.username}</DescriptionItem>
              <br />
              <DescriptionItem label="E-mail">{user?.email}</DescriptionItem>
              <br />
              <DescriptionItem label="Registro">{user?.createdAt}</DescriptionItem>
            </div>
          </div>
          <div className='ant-modal-footer'>
            {isAuthenticated && <Button type="primary" htmlType="submit" onClick={handleLogout}>Cerrar sesión</Button>}
          </div>
        </Modal>
      </div>
    </>
  )
}

export default Perfil
