import { Button } from 'antd'
import Profile from './Profile'
import './Main.css'

function Main() {
  return (
    <>
<Button type="primary" shape="round">Deportes</Button>
<Button type="default" shape="round">Tecnología</Button>
<Button type="default" shape="round">Finanzas</Button>
<Button type="default" shape="round">Música</Button>
<Button type="default" shape="round">Arte</Button>
    <div>

    <Button component={<Profile />}>
  Ve al perfil
</Button>


    </div>
    </>
  )
}

export default Main