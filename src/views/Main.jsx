import { useEffect, useState } from 'react'
import CarouselComponet from '../component/Carousel'
import PostsMain from '../component/PostsMain'
import useServer from '../hooks/useServer'
import Themes from '../component/Themes'

import './Main.css'

function Main() {
  const { post, get } = useServer()
  const [posts, setPosts] = useState()

  const getPosts = async () => {
    const { data } = await get({ url: "/news" })
    setPosts(data.data)
  }

  useEffect(() => {
    getPosts()
  }, [])

  const postLike = async (id) => {
    return await post({ url: `/news/like/${id}` })
  }

  const postDislike = async (id) => {
    return await post({ url: `/news/dislike/${id}` })
  }

  return (
    <>
      {/* <Themes /> */}
      <h1 className='title-sections-posts'>Tendencias</h1>
      <CarouselComponet />
      <h1 className='title-sections-posts'>Las noticias del día</h1>
      <PostsMain post={post} likePost={postLike} dislikePost={postDislike} />
    </>
  )
}
export default Main
