import CarouselComponet from '../component/Carousel'
import Themes from '../component/Themes'
import PostsMain from '../component/PostsMain'
import useAuth from '../hooks/useAuth'


function Main() {

  const { isAuthenticated } = useAuth()

  return (
    <>
      {isAuthenticated && <p>Usuario Autenticado</p>}
      <CarouselComponet />
      <Themes />
      <PostsMain />
    </>
  )
}

export default Main
