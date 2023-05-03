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
        <div>
          <Button i className="bi bi-trash3" variant="light"  onClick={handleClick} />
        </div>
      </div>
    </>
  )
}
export default ModalButtonComments