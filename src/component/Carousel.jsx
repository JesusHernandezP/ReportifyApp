import React, { useEffect, useState } from "react"
import { apiURL } from "../config"
import Carousel from "react-elastic-carousel"
import "./Carousel.css"
import CarouselItem from "./CarouselItem"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function CarouselComponent({ filteredPosts }) {
  return (
    <>
      <div className="carouselcomponent">
        <Carousel breakPoints={breakPoints}>
          {filteredPosts.map((post) => (
            <CarouselItem key={post.id} src={`${apiURL}/photos/${post.photo}`} alt={post.title} />
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default CarouselComponent;
