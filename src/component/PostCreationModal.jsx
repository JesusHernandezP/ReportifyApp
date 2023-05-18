import { useNavigate } from 'react-router-dom'

import useServer from '../hooks/useServer.js'
import React from 'react'

import '../index.css'
import ModalPostForm from './ModalPostForm.jsx'

function PostCreationModal() {

  const { post } = useServer()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    await post({ url: '/news', body: formData, hasImage: true })
    navigate("/")
  }

  const handleCancel = () => {
    navigate("/")
  }

  return (
    <>
      <ModalPostForm handleSubmit={handleSubmit} handleCancel={handleCancel} />
    </>
  )
}

export default PostCreationModal