import Carousel from 'react-bootstrap/Carousel'
import './Carousel.css'

function CarouselComponet() {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/2BjCIs2fKWU/maxresdefault.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/04/06/16492201547832.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/keHXFb9Ikxo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAeCF40o-HCVKdIlP13SzvzL8-Y9w"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselComponet