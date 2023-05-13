import React from "react"
import { apiURL } from "../config"
import Carousel from "react-elastic-carousel"
import "./Carousel.css"
import CarouselItem from "./CarouselItem"
import useServer from '../hooks/useServer'





const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
]



function CarouselComponent({ filteredPosts }) {
  const { post, delete: destroy } = useServer()


  const likePostHandler = async (id) => {
    await post({ url: `/news/like/${id}` })
  }

  const dislikePostHandler = async (id) => {
    await post({ url: `/news/dislike/${id}` })
  };

  const deleteNewsHandler = async (id) => {
    await destroy({ url: `/news/${id}` })
  }


  return (
    <>
      <div className="carouselcomponent">
        <Carousel breakPoints={breakPoints}>
          {filteredPosts.map((post) => (
            <CarouselItem
              key={post.id}
              news={post}
              src={`${apiURL}/photos/${post.photo}`}
              alt={post.title}
              title={post.title}
              content={post.content}
              photo={post.photo}
              theme={post.theme}
              deletes={deleteNewsHandler}
              like={likePostHandler}
              dislike={dislikePostHandler}

            />
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default CarouselComponent;

