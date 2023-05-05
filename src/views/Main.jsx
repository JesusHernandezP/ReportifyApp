import { useEffect, useState } from 'react'
import CarouselComponet from '../component/Carousel'
import PostsMain from '../component/PostsMain'
import useServer from '../hooks/useServer'
import Themes from '../component/Themes'

import './Main.css'

function Main() {
  const { get } = useServer()
  const [trendings, setTrendings] = useState([])
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const { data } = await get({ url: "/news" })
    const sortedPosts = data.data.sort((new_a, new_b) => -new_a.createdAt.localeCompare(new_b.createdAt))

    const sortedTrendings = sortedPosts.slice(0, 6)
    const restOfPosts = sortedPosts.slice(6)
    setTrendings(sortedTrendings)
    setPosts(restOfPosts)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      {/* <Themes /> */}
      <h1 className='title-sections-posts'>Tendencias</h1>
      {posts && <CarouselComponet filteredPosts={trendings} />}
      <h1 className='title-sections-posts'>Las noticias del día</h1>
      {posts &&
        <PostsMain
          posts={posts}
          getPosts={getPosts}
        />}
    </>
  )
}
export default Main
