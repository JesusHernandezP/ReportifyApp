import { Button, Form, Input, Modal } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'




const MyFormItemContext = React.createContext([])

function toArr(str) {
  return Array.isArray(str) ? str : [str]
}

const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext)
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix])
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>
}

const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined
  return <Form.Item name={concatName} {...props} />
}

const Register = () => {
  const onFinish = (value) => {
    console.log(value)
  }

  const navigate = useNavigate()

  const handleCancel = () => {
    navigate("/")
  }

  return (
    <Modal
        title="Crear Cuenta"
        centered
        open
        onCancel={handleCancel} // Ocultar botones del modal sobreescribiendolos con un html vacio: fragment
        footer={<></>}  
         >
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
      <MyFormItemGroup prefix={['user']}>
        <MyFormItemGroup prefix={['name']}>
          <MyFormItem name="Nombre" label="Nombre">
            <Input />
          </MyFormItem>
          <MyFormItem name="Email" label="Email">
            <Input />
          </MyFormItem>
        </MyFormItemGroup>
        <MyFormItem name="Contraseña" label="Contraseña">
          <Input />
        </MyFormItem>
      </MyFormItemGroup>
      <Button type="primary" htmlType="submit">
      Registrar
      </Button>
    </Form>
    </Modal>

  )
  }
export default Register
