import { useNavigate } from "react-router-dom"
import { Modal } from 'antd'

import Login from '../views/Login';

const ModalLogin = () => {

  const navigate = useNavigate()
  // const [isModalOpen, setIsModalOpen] = useState(true)

  const handleOk = () => {
    // setIsModalOpen(false)
  }
  const handleCancel = () => {
    // setIsModalOpen(false)
    navigate("/main")
  }
  return (
    <>
      <Modal title="Basic Modal" open={true} onOk={handleOk} onCancel={handleCancel} >
      <Login />
      </Modal>
    </>
  );
};
export default ModalLogin