import useAuth from '../hooks/useAuth.js'
import useServer from '../hooks/useServer.js'
import ModalButtonComments from './ModalButtonComments.jsx'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { apiURL } from "../config";

const PostMain = ({ photo, title, content }) => {

  const { isAuthenticated } = useAuth()

  return (
    <Card>
      <Card.Img variant="top" src={`${apiURL}/photos/${photo}`} alt="" />
      {console.log(photo)}
      <Card.Body>
        {title}
        <Card.Text>
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
            <PostMain key={new_.id} title={new_.title} content={new_.content} photo={new_.photo} /> //por ahora solo hemos mapeado tittle y content, falta el resto
          )
        }
        )
      }
      {/* </Row> */}
    </>
  )
}
export default PostsMain

