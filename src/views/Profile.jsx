import { useNavigate } from 'react-router-dom'
import { Modal, Descriptions, Button } from 'antd'
import React from 'react'
import ProfilePhoto from '../component/ProfilePhoto.jsx'
import useAuth from '../hooks/useAuth.js'


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
        title={<ProfilePhoto img={user?.avatar} />}
        centered
        open
        onCancel={handleClick}
        // Ocultar botones del modal sobreescribiendolos con un html vacio: fragment
        footer={<></>}
      >
        <Descriptions title="Perfil">
          <Descriptions.Item label="Usuario">{user?.username}</Descriptions.Item>
          <Descriptions.Item label="E-mail">{user?.email}</Descriptions.Item>
          <Descriptions.Item label="Registro">{user?.createdAt}</Descriptions.Item>
        </Descriptions>
        <div className='ant-modal-footer'>
          {isAuthenticated && <Button type="primary" htmlType="submit" onClick={handleLogout}>Cerrar sesión</Button>}

        </div>

      </Modal>
    </>
  )
}

export default Perfil
