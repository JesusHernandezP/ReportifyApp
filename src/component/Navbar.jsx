import { PlusOutlined, UserOutlined, AntDesignOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom"
import { Button, Avatar } from 'antd'

import './Navbar.css'


const Navbar = () => {

  const navigate = useNavigate()

  function handleClick() {
    navigate("/login");
  }

  return (
    <>
      <div className='nav-container'>
        <div className='nav-container_division'>
        <Avatar icon={<AntDesignOutlined />} />
          <h3>ReportifyApp</h3>
        </div>

        <div className='nav-container_division'>
          <Button type="primary" shape="circle" icon={<PlusOutlined />} />
          <Button type="default" shape="circle" icon={<UserOutlined />} onClick={handleClick} />
        </div>
      </div>

    </>
  )
}
export default Navbar