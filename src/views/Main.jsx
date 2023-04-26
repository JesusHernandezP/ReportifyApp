import CarouselComponet from '../component/Carousel'
import ThemeButton from '../component/ThemeButton'
import CardsMain from '../component/CardsMain'
import useAuth from '../hooks/useAuth'


function Main() {

  const { isAuthenticated } = useAuth()

  return (
    <>
      <ThemeButton />

      {isAuthenticated && <p>Usuario Autenticado</p>}
      {/* {isAuthenticated ? <p>Usuario Autenticado</p> : <button>Iniciar sesion</button>} */}
      <CarouselComponet />
      <CardsMain />
    </>
  )
}

export default Main
