import React from "react";
import styled from "styled-components";
import BookCard from "./BookCard";

import b1 from "./../../assets/img/books/b1.png";
import b2 from "./../../assets/img/books/b2.png";
import b3 from "./../../assets/img/books/b3.png";
import b4 from "./../../assets/img/books/b4.webp";
import b5 from "./../../assets/img/books/b5.png";
import b6 from "./../../assets/img/books/b6.jpeg";
import b7 from "./../../assets/img/books/b7.jpeg";

const booksList = [
  {
    img: b1,
    name: "book 1",
    price: "4.00€",
    size: "",
    url: "/",
  },
  {
    img: b2,
    name: "book 2",
    price: "4.00€",
    size: "",
    url: "/",
  },
  {
    img: b3,
    name: "book 3",
    price: "4.00€",
    size: "",
    url: "/",
  },
  {
    img: b4,
    name: "book 4",
    price: "4.00€",
    size: "",
    url: "/",
  },
  {
    img: b5,
    name: "book 5",
    price: "4.00€",
    size: "large",
    url: "/",
  },
  {
    img: b6,
    name: "book 6",
    price: "4.00€",
    size: "medium",
    url: "/",
  },
  {
    img: b7,
    name: "book 7",
    price: "4.00€",
    size: "medium",
    url: "/",
  },
];

const StyledProductCanvas = styled.div`
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
      aspect-ratio: 2/1;
      height: auto;
      width: 20vw;
      @media (max-width: 1000px) {
        width: 36vw;
      }
    }
    @media (max-width: 1000px) {
      aspect-ratio: 1/1;
      grid-column: span 1 / span 1;
      grid-row: span 1 / span 1;
    }
  }
`;

function ProductCanva() {
  return (
    <StyledProductCanvas>
      {booksList.map((book, i) => (
        <BookCard
          delay={i}
          key={book.name}
          img={book.img}
          name={book.name}
          price={book.price}
          size={book.size}
          url={book.url}
        />
      ))}
    </StyledProductCanvas>
  );
}

export default ProductCanva;