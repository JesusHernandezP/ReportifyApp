import { UserOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom"
import { Button, Avatar } from 'antd'
import { apiURL } from '../config.js'

import useAuth from '../hooks/useAuth.js'
import CreatePostButton from './CreatePostButton.jsx'
import ThemeSwitch from './ThemeSwitch.jsx'

import './Navbar.css'

const Navbar = ({onToggleTheme}) => {
  const { isAuthenticated, user } = useAuth()

  const navigate = useNavigate()

  function handleClick() {
    isAuthenticated ? navigate("/profile") : navigate("/login")
  }

  return (
    <>
      <div className='nav-container'>
        <div className='nav-container_division'>
          <a href="/"> <img src={'./logo-reportify.svg'} alt='logo' className='logo-reportify'  /> </a>
          <a href="/">
          <img src={'./logo-reportify-text.svg'} alt='logo-text' className='logo-reportify-text' /></a>
        </div>
        <div className='nav-container_division'>
        <ThemeSwitch onChange={onToggleTheme}/>
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
