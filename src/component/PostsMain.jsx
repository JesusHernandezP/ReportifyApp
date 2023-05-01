import useAuth from '../hooks/useAuth.js'
import useServer from '../hooks/useServer.js'
import ModalButtonComments from './ModalButtonComments.jsx'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { apiURL } from "../config"

import './PostsMain.css'

const PostMain = ({ photo, title, content }) => {

  const { isAuthenticated } = useAuth()

  const hasImage =  typeof photo === 'string'

  return (
    <Card className='postmain modal-shadow'>
      {hasImage && <Card.Img className='postmain-img' variant="top"  src={ `${apiURL}/photos/${photo}`} alt={title} />}
      <Card.Body >
      <Card.Title >
          {title}
        </Card.Title>
      
        <Card.Text >
          {content}
        </Card.Text>
        <div>
          {isAuthenticated && <ModalButtonComments key="setting" />}
        </div>
      </Card.Body>
    </Card>
  )
}

const PostsMain = () => {
  const [news, setNews] = useState([]) //Array de news

  const { get } = useServer() //obtenemos get del useSrver

  const getNews = async () => {
    const { data } = await get({ url: '/news' })
    setNews(data.data)
  }

  useEffect(() => {
    getNews()
  }, []) //con este array vacío de useEffect, le pedimos que nos ejecute getNews una sola vez

  return (
    <>
      {/* <Row gutter={16}> */}
      {
        news.map((new_) => {
          return (
            <PostMain key={new_.id} title={new_.title} content={new_.content} photo={new_.photo} />
          )
        }
        )
      }
      {/* </Row> */}
    </>
  )
}
export default PostsMain

