import React, { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 250px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-radius: 10px;
  `;


const TitleContainer = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ReadMoreButton = styled.button`
  background-color: transparent;
  border: none;
  color: #EC6165;
  cursor: pointer;
  font-size: 14px;
  outline: none;
  padding: 0;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  z-index: 999;
`;

const ModalTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const ModalText = styled.p`
  font-size: 18px;
  line-height: 1.5;
  overflow-y: scroll;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: #EC6165;
  cursor: pointer;
  font-size: 14px;
  outline: none;
  padding: 0;
`;

const CarouselItem = ({ src, alt, title, content }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <CardContainer>
        <Image src={src} alt={alt} />
        <TitleContainer>
          <Title>{title}</Title>
          {!showModal && (
            <ReadMoreButton onClick={toggleShowModal}>Leer más</ReadMoreButton>
          )}
          {showModal && <div>{content}</div>}
        </TitleContainer>
      </CardContainer>
      {showModal && (
        <ModalContainer>
          <ModalTitle>{title}</ModalTitle>
          <ModalImage src={src} alt={alt} />
          <ModalText>{content}</ModalText>
          <ModalCloseButton onClick={toggleShowModal}><i class="bi bi-x-circle"></i></ModalCloseButton>
        </ModalContainer>
      )}
    </>
  );
};

export default CarouselItem;
