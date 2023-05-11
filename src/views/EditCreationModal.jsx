import { useNavigate } from 'react-router-dom'

import useServer from '../hooks/useServer.js'
import React from 'react'
import '../index.css'
import ModalPostForm from '../component/ModalPostForm.jsx'

function EditCreationModal({id, handleCancel}) {
  // Ir a buscar el post con ese id y lo guardaremos en la constante post
  // llamar al Modal con el atributo= news={post}
  // editar el método handleSubmit para permitir el cambio en el contenido

  const { put } = useServer()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    await put({ url: `/news/${id}`, body: formData, hasImage: true })
    navigate("/")
  }

  return (
    <>
    {/* news={post} */}
      <ModalPostForm handleSubmit={handleSubmit} handleCancel={handleCancel}/>
    </>
  )
}

export default EditCreationModal
