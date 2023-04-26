import CarouselComponet from '../component/Carousel'
import ThemeButton from '../component/ThemeButton'
import CardsMain from '../component/PostsMain'
import useAuth from '../hooks/useAuth'


function Main() {

  const { isAuthenticated } = useAuth()

  return (
    <>
      <ThemeButton />
      {isAuthenticated && <p>Usuario Autenticado</p>}
      <CarouselComponet />
      <CardsMain />
    </>
  )
}

export default Main
