import { useState } from "react"
import { apiURL } from "../config"
import useAuth from '../hooks/useAuth.js'
import ParagraphPost from './ParagraphPost'
import EditCreationModal from '../views/EditCreationModal'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './PostsMain.css'
import './Navbar.css'

const PostMain = ({ photo, title, like, dislike, news, content, deletes, getPosts, theme }) => {
  const { isAuthenticated, user } = useAuth()
  const hasImage = typeof photo === 'string'
  const [showingEditModal, setShowingEditModal] = useState(false)

  const handleLikeClick = () => {
    like(news.id)
  }

  const handleDislikeClick = () => {
    dislike(news.id)
  }

  const handleEditClick = () => {
    setShowingEditModal(true)
  }

  const handleDeleteClick = () => {
    const isConfirmed = window.confirm("¿Estás seguro de eliminar este post?")
    if (isConfirmed) {
      deletes(news.id)
    }
  }

  const handleCancel = () => {
    setShowingEditModal(false)
  }

  return (
    <>
      <Card className='postmain modal-shadow'>
        <p>{theme}</p>
        {hasImage && <Card.Img className='postmain-img' variant="top" src={`${apiURL}/photos/${photo}`} alt={title} />}
        <Card.Body >

          <h1 className='card-title' >
            {title}
          </h1>

          <div className="card-text" >
            <ParagraphPost content={content} />
          </div>
          <div className='style-buttons'>
            <div>
              {isAuthenticated && user.id === news.ownerId && <Button className="bi bi-trash3" variant="light" onClick={handleDeleteClick} />}
              {isAuthenticated && user.id === news.ownerId && <Button className="bi bi-pencil" variant="light" onClick={handleEditClick} > 
              </Button>
              }
              {showingEditModal === true && 
              <EditCreationModal 
                id={news.id}
                handleCancel={handleCancel}
                getPosts={getPosts}
              />}
            </div>
            <div>
              <Button className="bi bi-hand-thumbs-down" variant="light" onClick={handleDislikeClick} >{news.dislikes}</Button>
              <Button className="bi bi-hand-thumbs-up" variant="light" onClick={handleLikeClick} > {news.likes} </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default PostMain
