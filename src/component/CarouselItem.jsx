import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  `;

const Container = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
`;

const CarouselItem = ({ src, alt }) => {
  return (
    <Container>
      <Image src={src} alt={alt} />
    </Container>
  )
}

export default CarouselItem;
