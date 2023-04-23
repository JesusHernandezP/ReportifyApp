import { Button } from 'antd'
// import Profile from './Profile'
import './Main.css'

function Main() {
  return (
    <>
      {/* estos son los botones de filtro que hay que crear un componente para ellos e improtanrtlo aqui */}
      <div>
        <Button type="primary" shape="round">Deportes</Button>
        <Button type="default" shape="round">Tecnología</Button>
        <Button type="default" shape="round">Finanzas</Button>
        <Button type="default" shape="round">Música</Button>
        <Button type="default" shape="round">Arte</Button>
      </div>

{/* este HTML duro debe convertirse en componentes react */}
      <div>
        <h2>Carrusel de noticias</h2>
        <div style={{backgroundColor:'grey', height:'200px', margin:'10px'}}></div>
      </div>

      <div>
        <h2>Noticias</h2>
        <div style={{display:'flex', flexDirection:'row', height:'200px', justifyContent:'space-between'}}>
        <div style={{backgroundColor:'grey', width:'100%', margin:'10px'}}></div>
        <div style={{backgroundColor:'grey', width:'100%', margin:'10px'}}></div>
        <div style={{backgroundColor:'grey', width:'100%', margin:'10px'}}></div>
        </div>
      </div>
    </>
  )
}

export default Main