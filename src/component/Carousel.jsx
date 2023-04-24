import { Carousel } from 'antd';


const contentStyle = {
  margin: 0,
  height: '50vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundImage: 'url("https://placeimg.com/1200/760/tech/grayscale")',

};

const CarouselComponet = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>Ultimas Noticias</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Ultimas Noticias</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Ultimas Noticias</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Ultimas Noticias</h3>
      </div>
    </Carousel>
  );
};
export default CarouselComponet;