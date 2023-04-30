import { PlusOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom"
import { Button } from 'antd'

import './Navbar.css'

const ModalButton = () => {

  const navigate = useNavigate()

  function handleClick() {
    navigate("/post");
  }
  return (
    <>
      <div className='nav-container_division'>
        <Button type="default" shape="round" icon={<PlusOutlined />}onClick={handleClick}> 
            Crear post
          </Button>
        {/* <Button type="default" shape="circle" icon={<PlusOutlined />} onClick={handleClick} /> */}
      </div>
    </>
  )
}
export default ModalButton