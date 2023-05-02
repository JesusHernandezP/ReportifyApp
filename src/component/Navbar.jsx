import { UserOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom"
import { Button, Input, Avatar } from 'antd'
import useAuth from '../hooks/useAuth.js'
import CreatePostButton from './CreatePostButton.jsx'
import { apiURL } from '../config.js'
// import CambiarTema from './index.js'
import './Navbar.css'

const { Search } = Input
const onSearch = (value) => console.log(value)

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
        <i className="bi bi-spotify"></i><p>REPORTIFY</p>
        </div>

        <div className='nav-container_division'>
          {isAuthenticated && <CreatePostButton />}
          {!isAuthenticated && <Button type="default" shape="round" icon={<UserOutlined />}onClick={handleClick}> 
            Iniciar sesión
          </Button>}
          {/* linea de abajo botón solo muñequito sin "Iniciar sesión" */}
          {/* {!isAuthenticated &&<Button type="default" shape="circle" icon={<UserOutlined />} onClick={handleClick}/>} */} 
          {isAuthenticated && <Avatar className='cursor-pointer' src={`${apiURL}/avatars/${user?.avatar}`} onClick={handleClick}/>}
          
        </div>
      </div>
    </>
  )
}

export default Navbar
