import { PlusOutlined, UserOutlined, AntDesignOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom"
import { Button, Avatar, Input } from 'antd'
import './Navbar.css'
import useAuth from '../hooks/useAuth.js'
import ModalButton from '../component/ModalButton.jsx'

const { Search } = Input
const onSearch = (value) => console.log(value)

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth()

  const navigate = useNavigate()

  function handleClick() {
    navigate("/login");  

  }
  function handleClickProfile() {
    navigate("/profile");  

  }



  return (
    <>
      <div className='nav-container'>
        <div className='nav-container_division'>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
            <path d="M3.6 9h16.8"></path>
            <path d="M3.6 15h16.8"></path>
            <path d="M11.5 3a17 17 0 0 0 0 18"></path>
            <path d="M12.5 3a17 17 0 0 1 0 18"></path>
          </svg>
          <Search placeholder="input search text" onSearch={onSearch} enterButton />

        </div>

        <div className='nav-container_division'>
          {isAuthenticated && <ModalButton />}
          {/* {isAuthenticated &&  <button onClick={logout}><Route path="/profile" element={<Profile />} /></button>} */}
          <Button type="default" shape="circle" icon={<UserOutlined />} onClick={handleClick} />
          {isAuthenticated && <Button type="default" shape="circle" icon={<UserOutlined />} onClick={handleClickProfile}  /> 
}

        </div>
      </div>

    </>
  )
}
export default Navbar