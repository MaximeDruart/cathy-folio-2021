import React from "react";
import styled from "styled-components";
import BookCard from "./BookCard";

import figmaImg from "./../../assets/img/shop/figma_starter.jpg";
import reactImg from "./../../assets/img/shop/react_starter.jpg";
import inspiImg from "./../../assets/img/shop/inspi_web.jpg";
import fontImg from "./../../assets/img/shop/fonts.jpg";


const ressourcesList = [
  {
    img: inspiImg,
    name: "Inspi Web",
    price: "0.00€",
    size: "",
    url: "https://mica-farm-042.notion.site/Webdesign-103235638be74397b1a561f8d37ae9aa",
  },
  {
    img: figmaImg,
    name: "Starter Figma",
    price: "0.00€",
    size: "",
    url: "https://www.figma.com/file/A6R9JTu0UfdyUOTzxK2yqw/Project-Template?type=design&node-id=0%3A1&mode=design&t=DUrXoJT1e9v0MqP4-1",
  },
  {
    img: reactImg,
    name: "Starter React",
    price: "0.00€",
    size: "",
    url: "https://github.com/CathyDolle/template",
  },
  {
    img: fontImg,
    name: "Free fonts",
    price: "0.00€",
    size: "",
    url: "/fonts.zip",
  },
];

const StyledRessourceCanvas = styled.div`
  width: 100%;
  display: grid;
  height: auto;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  .large {
    position: relative;
    grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;
    aspect-ratio: initial;
    img.book {
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
    }
    @media (max-width: 1000px) {
      grid-column: span 1 / span 1;
      grid-row: span 1 / span 1;
    }
  }
  .medium {
    grid-column: span 2 / span 2;
    grid-row: span 1 / span 1;
    aspect-ratio: inherit;
    img.book {
      aspect-ratio: 1/1;
      height: auto;
      /* width: 18vw; */
    }
    @media (max-width: 1000px) {
      aspect-ratio: 1/1;
      grid-column: span 1 / span 1;
      grid-row: span 1 / span 1;
    }
  }
`;

function RessourceCanva() {
  return (
    <StyledRessourceCanvas>
      {ressourcesList.map((ressource, i) => (
        <BookCard
          delay={i}
          key={ressource.name}
          img={ressource.img}
          name={ressource.name}
          price={ressource.price}
          size={ressource.size}
          url={ressource.url}
        />
      ))}
    </StyledRessourceCanvas>
  );
}

export default RessourceCanva;
