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
    { src: "https://loremflickr.com/320/240/dog", alt: "Image 1" },
    { src: "https://loremflickr.com/320/240/paris", alt: "Image 2" },
    { src: "https://loremflickr.com/320/240/all", alt: "Image 3" },
    { src: "https://loremflickr.com/320/240/girl", alt: "Image 4" },
    { src: "https://loremflickr.com/320/240/rio", alt: "Image 5" },
    { src: "https://loremflickr.com/320/240/man", alt: "Image 6" },
    { src: "https://loremflickr.com/320/240/all", alt: "Image 7" },
    { src: "https://loremflickr.com/320/240/girl", alt: "Image 8" },
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
