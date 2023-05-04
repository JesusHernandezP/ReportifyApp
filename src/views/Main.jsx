import { useEffect, useState } from 'react'
import CarouselComponent from '../component/Carousel'
// import Themes from '../component/Themes'
import PostsMain from '../component/PostsMain'
import useServer from '../hooks/useServer'

function Main() {
  const {post, get} = useServer()
  const {posts, setPosts} = useState()
  
  const getPosts = async () => {
    const {data} = await get({url: "/news"})
    setPosts(data.data)
  }

  useEffect(() => {
    getPosts()
  }, [])

  const postLike = async (id) => {
    return await post({url: `/news/like/${id}`})
  }

  const postDislike = async (id) => {
    return await post({url: `/news/dislike/${id}`})
  }

  return (
    <>
      <CarouselComponent />
      {/* <Themes /> */}
      <PostsMain post={post} likePost={postLike} dislikePost={postDislike}/>
    </>
  )
}
export default Main
