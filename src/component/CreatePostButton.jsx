import { PlusOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom"
import { Button } from 'antd'

import './Navbar.css'

const CreatePostButton = () => {

  const navigate = useNavigate()

  function handleClick() {
    navigate("/post");
  }
  return (
    <>
      <div className='nav-container_division'>
        <Button className='nav-post' type="default" shape="round" icon={<PlusOutlined />} onClick={handleClick}>
          Crear post
        </Button>
      </div>
    </>
  )
}
export default CreatePostButton