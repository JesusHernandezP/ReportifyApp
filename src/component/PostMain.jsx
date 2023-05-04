import { apiURL } from "../config"
import useAuth from '../hooks/useAuth.js'
import ParagraphPost from './ParagraphPost'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './PostsMain.css'
import './Navbar.css'

const PostMain = ({ photo, title, like, dislike, news, content, deletes }) => {
  const { isAuthenticated } = useAuth()
  const hasImage = typeof photo === 'string'

  const handleLikeClick = () => {
    like(news.id)
  }

  const handleDislikeClick = () => {
    dislike(news.id)
  }

  const handleDeleteClick = () => {
    deletes(news.id)
  }

  return (
    <>
    <Card className='postmain modal-shadow'>
      {hasImage && <Card.Img className='postmain-img' variant="top" src={`${apiURL}/photos/${photo}`} alt={title} />}
      <Card.Body >

        <h1 className='card-title' >
          {title}
        </h1>
        <Card.Text >
        <ParagraphPost content={content} />
        </Card.Text>
        <div className='nav-container_division'>
          <div>
            {isAuthenticated && <Button i className="bi bi-trash3" variant="light" onClick={handleDeleteClick}/>}
          </div>
          <div>
          <Button i className="bi bi-hand-thumbs-down" variant="light" onClick={handleDislikeClick} >{news.dislikes}</Button>
          <Button i className="bi bi-hand-thumbs-up" variant="light" onClick={handleLikeClick} > {news.likes} </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
    </>
  )
}

export default PostMain
