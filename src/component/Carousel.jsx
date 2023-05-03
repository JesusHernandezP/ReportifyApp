import Carousel from 'react-bootstrap/Carousel'
import { Card } from 'antd'
import './Carousel.css'

const { Meta } = Card;

function CarouselComponet() {
  return (
    <>
    <div className='card-carousel'>
<Card 
hoverable
style={{
  width: 240,
}}
cover={<img alt="example" src="https://i.ytimg.com/vi/2BjCIs2fKWU/maxresdefault.jpg" />}
>
<Meta title="Europe Street beat" description="www.instagram.com" />
</Card>
<Card 
hoverable
style={{
  width: 240,
}}
cover={<img alt="example" src="https://www.designerinaction.de/wp-content/uploads/2023/01/graphic-design-trends-2023.jpg" />}
>
<Meta title="Europe Street beat" description="www.instagram.com" />
</Card>

<Card 
hoverable
style={{
  width: 240,
}}
cover={<img alt="example" src="https://bluekaktus.com/wp-content/uploads/2022/04/FASHION-TRENDS.png" />}
>
<Meta title="Europe Street beat" description="www.instagram.com" />
</Card>
    </div>
    </>

    // <Carousel >
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://i.ytimg.com/vi/2BjCIs2fKWU/maxresdefault.jpg"
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <p></p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/04/06/16492201547832.jpg"
    //       alt="Second slide"
    //     />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://i.ytimg.com/vi/keHXFb9Ikxo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAeCF40o-HCVKdIlP13SzvzL8-Y9w"
    //       alt="Third slide"
    //     />
    //   </Carousel.Item>
    // </Carousel>
  )
}


export default CarouselComponet