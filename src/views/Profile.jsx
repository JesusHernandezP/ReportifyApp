import { useNavigate } from 'react-router-dom'
import useServer from '../hooks/useServer.js'
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
        title={<ProfilePhoto img={user.avatar} />}
        centered
        open
        onCancel={handleClick}
        // Ocultar botones del modal sobreescribiendolos con un html vacio: fragment
        footer={<></>}
      >
        <Descriptions title="User Info">
          <Descriptions.Item label="UserName">{user.username}</Descriptions.Item>
          <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="Remark">empty</Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
        <div className='ant-modal-footer'>
          {isAuthenticated && <Button type="primary" htmlType="submit" onClick={handleLogout}>Cerrar Sesión</Button>}

        </div>

      </Modal>
    </>
  )
}

export default Perfil
