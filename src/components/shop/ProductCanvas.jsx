import React from "react";
import styled from "styled-components";
import BookCard from "./BookCard";

import b1 from "./../../assets/img/books/b1.png";
import b2 from "./../../assets/img/books/b2.png";
import b3 from "./../../assets/img/books/b3.png";
import b4 from "./../../assets/img/books/b4.webp";
import b5 from "./../../assets/img/books/b5.webp";
import b6 from "./../../assets/img/books/b6.webp";
import b7 from "./../../assets/img/books/b7.jpeg";

const booksList = [
  {
    img: b1,
    name: "design{h}ers",
    price: "39.95€",
    size: "",
    url: "https://victionary.com/products/design-h-ers-1?variant=35147436425378",
  },
  {
    img: b2,
    name: "printable",
    price: "39.95€",
    size: "",
    url: "https://victionary.com/products/printable",
  },
  {
    img: b3,
    name: "palette mini series",
    price: "29.95€",
    size: "",
    url: "https://victionary.com/collections/art-design/products/palette-mini-06-transparent?variant=41122084880546",
  },
  {
    img: b4,
    name: "Palette 08 : Iridiscent",
    price: "39.95€",
    size: "",
    url: "https://victionary.com/products/palette-08-iridescent-1",
  },
  {
    img: b5,
    name: "Less is more",
    price: "39.95€",
    size: "large",
    url: "https://victionary.com/collections/all/products/less-is-more-20th-anniversary-edition-1?variant=42134128656626",
  },
  {
    img: b6,
    name: "Made in Japan",
    price:  "39.95€",
    size: "medium",
    url: "https://victionary.com/products/made-in-japan-1",
  },
  {
    img: b7,
    name: "Logos from japan",
    price: "14.00€",
    size: "medium",
    url: "https://www.counter-print.co.uk/products/logos-from-japan",
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
