import { useNavigate } from 'react-router-dom'
import React from 'react'
import useAuth from '../hooks/useAuth.js'
import { apiURL } from '../config.js'
import { Modal, Descriptions, Button, Avatar } from 'antd'

import './Profile.css'

const DescriptionItem = ({label, children}) => {
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

  const handleLogout = () => {
    logout()
    navigate("/")
  }
  const handleClick = () => {
    navigate("/")
  }

  return (
    <>
      <Modal
        title='Perfil'
        centered
        open
        onCancel={handleClick}
        // Ocultar botones del modal sobreescribiendolos con un html vacio: fragment
        footer={<></>}
      >
        <div className='profile-body'>
        <Avatar src={`${apiURL}/avatars/${user?.avatar}`} size={200}/>
        <div>
          <DescriptionItem label="Usuario">{user?.username}</DescriptionItem>
          <DescriptionItem label="E-mail">{user?.email}</DescriptionItem>
          <DescriptionItem label="Registro">{user?.createdAt}</DescriptionItem>
        </div>

        </div>
        <div className='ant-modal-footer'>
          {isAuthenticated && <Button type="primary" htmlType="submit" onClick={handleLogout}>Cerrar sesión</Button>}
        </div>
      </Modal>
    </>
  )
}

export default Perfil
