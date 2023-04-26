import { useNavigate } from 'react-router-dom'
import useServer from '../hooks/useServer.js'
import { Modal, Descriptions , Button } from 'antd'
import React from 'react'
import CardComments from '../component/CardComments.jsx'
import useAuth from '../hooks/useAuth.js'


function Perfil() {
  const { isAuthenticated, logout } = useAuth()

  const { post } = useServer()
  const navigate = useNavigate()

  const handleSubmit = async e => {

    e.preventDefault()
    const credentials = Object.fromEntries(new FormData(e.target))
    const { data } = await post({ url: '/profile', body: credentials })
    if (data) return navigate('/main') //cuando le das iniciar sesión me lleva a main que es / que es la vista principal
  }

  const handleCancel = () => {
    navigate("/")
  }
  const handleClick = () => {
    navigate("/main")
  }

  return (
    <>
        <Modal
          title={<CardComments/>}
          centered
          open
          onCancel={handleClick}
          // Ocultar botones del modal sobreescribiendolos con un html vacio: fragment
          footer={<></>}
        >
      <Descriptions title="User Info">
    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
    <Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>
            <div className='ant-modal-footer'>
          {isAuthenticated &&  <Button type="primary" htmlType="submit" onClick={handleCancel}>Cerrar Sesión</Button>}
                
            </div>
    
        </Modal>
    </>
  )
}

export default Perfil
