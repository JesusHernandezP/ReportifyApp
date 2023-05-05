import { UserOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom"
import { Button, Avatar } from 'antd'
import { apiURL } from '../config.js'

import useAuth from '../hooks/useAuth.js'
import CreatePostButton from './CreatePostButton.jsx'

import './Navbar.css'


const Navbar = () => {
  const { isAuthenticated, user } = useAuth()

  const navigate = useNavigate()

  function handleClick() {
    isAuthenticated ? navigate("/profile") : navigate("/login")
  }

  return (
    <>
      <div className='nav-container'>
        <div className='nav-container_division'>
          {/* <i className="bi bi-spotify"></i><p className='text-logo' >Reportify</p> */}
          <img src={'./logo-reportify.svg'} alt='logo' className='logo-reportify' /><p className='text-logo' >Reportify</p>
        </div>

        <div className='nav-container_division'>
          {isAuthenticated && <CreatePostButton />}
          {!isAuthenticated && <Button type="default" shape="round" icon={<UserOutlined />} onClick={handleClick}>
            Iniciar sesión
          </Button>}
          {isAuthenticated && <Avatar className='cursor-pointer' src={`${apiURL}/avatars/${user?.avatar}`} onClick={handleClick} />}
        </div>
      </div>
    </>
  )
}

export default Navbar
