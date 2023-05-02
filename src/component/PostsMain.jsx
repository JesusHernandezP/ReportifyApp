import { useState, useEffect } from 'react'
import { apiURL } from "../config"

import useAuth from '../hooks/useAuth.js'
import useServer from '../hooks/useServer.js'
import ModalButtonComments from './ModalButtonComments.jsx'
import Button from 'react-bootstrap/Button'

import Card from 'react-bootstrap/Card'
import './PostsMain.css'
import './Navbar.css'

const PostMain = ({ photo, title, content }) => {

  const { isAuthenticated } = useAuth()

  const hasImage = typeof photo === 'string'

  const [contador, setContador] = useState(0)

  return (
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
            <Button onClick={() => { setContador(contador + 1) }} i className="bi bi-hand-thumbs-up-fill" variant="light"> likes {contador}</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

const PostsMain = () => {
  const [news, setNews] = useState([])

  const { get } = useServer()

  const getNews = async () => {
    const { data } = await get({ url: '/news' })
    setNews(data.data)
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
            <PostMain key={new_.id} title={new_.title} content={new_.content} photo={new_.photo} />
          )
        }
        )

      }
    </>
  )
}
export default PostsMain

