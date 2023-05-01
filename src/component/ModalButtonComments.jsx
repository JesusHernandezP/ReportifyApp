import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import './Navbar.css'

const ModalButtonComments = () => {

  const navigate = useNavigate()

  function handleClick() {
    navigate("/comments");
  }

  return (
    <>

       <div className='nav-container_division'>
          {/* <Button type="primary" shape="circle" icon={<PlusOutlined />} /> */}
          <Button i  className="bi bi-chat-text-fill"  onClick={handleClick} />
        

        <div>
        <Button i className="bi bi-heart"/>
        </div>

        <div>
        <Button i className="bi bi-trash3-fill"/>
        </div>
        <div>
        <Button i className="bi bi-heart-fill"/>
        </div>
        </div>

    </>
  )
}
export default ModalButtonComments