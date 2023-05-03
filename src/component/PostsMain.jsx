import { useState, useEffect } from 'react'
import { apiURL } from "../config"

import useAuth from '../hooks/useAuth.js'
import useServer from '../hooks/useServer.js'
import ModalButtonComments from './ModalButtonComments.jsx'
import Button from 'react-bootstrap/Button'

import Card from 'react-bootstrap/Card'
import './PostsMain.css'
import './Navbar.css'

const PostMain = ({ photo, title, content, like, dislike, news, deletes }) => {

  const handleLikeClick = () => {
    like(news.id)
  }

  const handleDislikeClick = () => {
    dislike(news.id)
  }

  const handleDeleteClick = () => {
    deletes(news.id)
  }

  const { isAuthenticated } = useAuth()

  const hasImage = typeof photo === 'string'

  // const [contador, setContador] = useState(0)

  return (
    <>
    <Card className='postmain modal-shadow'>
      {hasImage && <Card.Img className='postmain-img' variant="top" src={`${apiURL}/photos/${photo}`} alt={title} />}
      <Card.Body >

        <h1 className='card-title' >
          {title}
        </h1>

        <Card.Text >
          {content}
        </Card.Text>
        <div className='nav-container_division'>
          <div>
            {isAuthenticated && <ModalButtonComments key="setting" />}
          </div>
          <div>
            <Button onClick={handleLikeClick} >Like {news.likes}</Button>
            <Button onClick={handleDislikeClick} >Dislike {news.dislikes}</Button>
            <Button onClick={handleDeleteClick}>Borrar</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
    </>
  )
}

const PostsMain = () => {
  const [news, setNews] = useState([])

  const { get, post, delete: destroy } = useServer()

  const getNews = async () => {
    const { data } = await get({ url: '/news' })
    setNews(data.data)
  }

  const likePost = async (id) => {
    return await post ({url: `/news/like/${id}`})
  }

  const likePostHandler = async (id) => {
    const {data: {data}} = await likePost(id)
    const postIndex = orderedNews.findIndex(post => post.id === id)
    orderedNews[postIndex] = data
  }

  const dislikePost = async (id) => {
    return await post ({url: `/news/dislike/${id}`})
  }

  const dislikePostHandler = async (id) => {
    const {data: {data}} = await dislikePost(id)
    const postIndex = orderedNews.findIndex(post => post.id === id)
    orderedNews[postIndex] = data
  }

  const deleteNews = async (id) => {
    return await destroy({url: `/news/${id}`})
  }

  const deleteNewsHandler = async (id) => {
    const {data} = await deleteNews(id)
    if (data.status === 'ok') {
      const newList = orderedNews.filter((post) => post.id !== id)
      setNews(newList)
    }
  }

  useEffect(() => {
    getNews()
  }, [])

  const orderedNews = news.sort((new_a, new_b) => -new_a.createdAt.localeCompare(new_b.createdAt))

  return (
    <>
      {
        orderedNews.map((new_) => {
          return (
            <PostMain key={new_.id} news={new_} like={likePostHandler} dislike={dislikePostHandler} deletes={deleteNewsHandler} title={new_.title} content={new_.content} photo={new_.photo} />
          )
        }
        )
      }
    </>
  )
}
export default PostsMain

