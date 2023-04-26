import { Card, Col, Row } from 'antd'
import { EditOutlined, EllipsisOutlined } from '@ant-design/icons'
import useAuth from '../hooks/useAuth.js'
import useServer from '../hooks/useServer.js'
import { Avatar } from 'antd'
import ModalButtonComments from './ModalButtonComments.jsx'
import { useState, useEffect } from 'react'

const { Meta } = Card

const PostMain = ({ title, content }) => {

  const { isAuthenticated } = useAuth()

  return (
    <Col span={8}>
      <Card
        style={{
          width: 400,
          margin: 10,

        }}
        cover={
          <img
            alt="example"
            src="https://placeimg.com/450/275/animals"
          />
        }

        actions={[
          isAuthenticated && <ModalButtonComments key="setting" />, // para isAuthenticated es true, sino es false
          <EditOutlined key="edit" />, //al no ser boleano y por tanto no ser false, entra en los requisitos del filter
          <EllipsisOutlined key="ellipsis" />, //este también no es false xd
        ].filter((action) => {
          return action !== false
        })}
      >
        <Meta
          avatar={<Avatar src="https://placeimg.com/450/275/arch " />}
          title={title}
          description={content}
        />
      </Card>
    </Col>
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
  },[]) //con este array vacío de useEffect, le pedimos que nos ejecute getNews una sola vez

  return (
    <>
      <Row gutter={16}>
        {
          news.map((new_) => {
            return (
              <PostMain title={new_.title} content={new_.content} /> //por ahora solo hemos mapeado tittle y content, falta el resto
            )}
          )
        }
      </Row>
    </>
  )
}
export default PostsMain;

