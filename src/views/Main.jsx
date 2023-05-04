import { useEffect, useState } from 'react'
<<<<<<< HEAD
import CarouselComponent from '../component/Carousel'
// import Themes from '../component/Themes'
=======
import CarouselComponet from '../component/Carousel'
>>>>>>> 4548bbce8b4fc0e8abf86ccf31cd764ec8020a5c
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
<<<<<<< HEAD
      <CarouselComponent />
      {/* <Themes /> */}
      <PostsMain post={post} likePost={postLike} dislikePost={postDislike}/>
=======
      <Themes />
      <h1 className='title-sections-posts'>Tendencias</h1>
      <CarouselComponet />
      <h1 className='title-sections-posts'>Las noticias del día</h1>
      <PostsMain post={post} likePost={postLike} dislikePost={postDislike} />
>>>>>>> 4548bbce8b4fc0e8abf86ccf31cd764ec8020a5c
    </>
  )
}
export default Main
