import Profile from './Profile'
import './Main.css'
import { Button } from 'antd'

function Main() {
  return (
    <>
    <h1>Pantalla de Inicio</h1>
    <div>

    <Button component={<Profile />}>
  Ve al perfil
</Button>


    </div>
    </>
  )
}

export default Main