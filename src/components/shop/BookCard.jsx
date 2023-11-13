import React from "react";
import styled from "styled-components";
import eye from "./../../assets/img/books/eye.svg";

const StyledBookCard = styled.div`
  width: 100%;
  border: solid 0.5px ${({ theme }) => theme.colors.text.disabled2};
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  @media (max-width: 600px) {
    padding: 12px;
  }
  img.book {
    width: 10vw;
    aspect-ratio: 1/1;
    object-fit: contain;
    margin-bottom: auto;
    margin-top: auto;
    @media (max-width: 1000px) {
      width: 24vw;
    }
  }
  .infos {
    padding: 20px;
    top: 0;
    position: absolute;
    z-index: 2;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 600px) {
      padding: 12px;
    }
    p {
      font-size: 10px;
      font-family: "NeueMontrealRegular";
      color: ${({ theme }) => theme.colors.text.standard};
      text-transform: uppercase;
      &:nth-child(2) {
        color: ${({ theme }) => theme.colors.text.disabled};
      }
    }
  }
  a {
    position: absolute;
    z-index: 2;
    width: 36px;
    height: 36px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    bottom: 20px;
    right: 20px;
    @media (max-width: 600px) {
      width: 26px;
      height: 26px;
      bottom: 12px;
      right: 12px;
    }
    img {
      width: 12px;
      height: 12px;
    }
  }
`;

function BookCard({ size, name, price, img, delay, url }) {
  return (
    <StyledBookCard
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={`${delay * 1}00`}
      className={size}
    >
      <div className="infos">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <img className="book" src={img} alt="img" />
      <a href={url} target="_blank">
        <img src={eye} alt="icon" />
      </a>
    </StyledBookCard>
  );
}

export default BookCard;
