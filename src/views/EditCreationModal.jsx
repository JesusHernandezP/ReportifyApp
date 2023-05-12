import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import useServer from '../hooks/useServer.js'
import '../index.css'
import ModalPostForm from '../component/ModalPostForm.jsx'

function EditCreationModal({id, handleCancel, getPosts}) {

  const { patch, get } = useServer()
  const navigate = useNavigate()

  const [post, setPost] = useState()

  const getPost = async () => {
    const { data } = await get({ url: `/news/${id}` })
    setPost(data.data)
  }

  useEffect(() => {
    getPost()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    await patch({ url: `/news/${id}`, body: formData, hasImage: true })
    handleCancel()
    getPosts()
  }

  return (
    <>
      {post !== undefined &&
      <ModalPostForm
        defaultValues={post}
        handleSubmit={handleSubmit}
        modalTitle={'Editar post'}
        handleCancel={handleCancel}
      />
    }
    </>
  )
}

export default EditCreationModal
