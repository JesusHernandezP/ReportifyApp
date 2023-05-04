import React from "react";
import Carousel from "react-elastic-carousel";
import "./Carousel.css";
import CarouselItem from "./CarouselItem";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function CarouselComponent() {
  const images = [
    { src: "http://loremflickr.com/320/240/", alt: "Image 1" },
    { src: "http://loremflickr.com/240/240/", alt: "Image 2" },
    { src: "http://loremflickr.com/320/320/", alt: "Image 3" },
    { src: "http://loremflickr.com/240/240/", alt: "Image 4" },
    { src: "http://loremflickr.com/320/240/", alt: "Image 5" },
    { src: "http://loremflickr.com/420/420/", alt: "Image 6" },
    { src: "http://loremflickr.com/420/240/", alt: "Image 7" },
    { src: "http://loremflickr.com/420/320/", alt: "Image 8" },
  ];

  return (
    <>
      <div className="carouselcomponent">
        <Carousel breakPoints={breakPoints}>
          {images.map((image, index) => (
            <CarouselItem key={index} src={image.src} alt={image.alt} />
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default CarouselComponent;
