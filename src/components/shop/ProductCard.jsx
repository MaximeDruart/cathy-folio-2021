import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import Video from '../shared/modules/Video';

const StyledProductCard = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  &.folder {
    width: 80px;
    transition: filter 0.6s;
    gap: 2px;
    .infos p.price{
      display: none;
    }
    &:hover {
      filter: brightness(120%);
    }
    @media screen and (max-width: 768px) {
      width: calc(100% / 4 - 24px);
    }
  }
  @media screen and (max-width: 768px) {
    width: 200px;
  }
  .infos {
    text-transform: uppercase;
    display: flex;
    width: 100%;
    justify-content: space-between;
    p {
      font-size: 10px;
      font-family: "NeueMontrealRegular";
      color: ${({ theme }) => theme.colors.text.text};
      &:nth-child(2) {
        color: ${({ theme }) => theme.colors.text.standard};
      }
    }
  }
  a.button {
    margin: 16px 0 40px 0 !important;
  }
  img,
  .video {
    width: 100%;
    object-fit: cover;
    transition: filter 0.5s;
    &.grayscale {
      filter: grayscale(100%);
      &:hover {
        filter: grayscale(0);
      }
    }
  }
`;

function card({ folder, download, link, src, name, price, filter }) {
  return (
    <StyledProductCard className={folder}>
      <a target="_blank" download={download} href={link}>
        {/* <Video src={card.src}/> */}
        <img className={filter} src={src} alt="img" />
      </a>
      <div className="infos">
        <p>{name}</p>
        <p className="price">{price} €</p>
      </div>
      {/* <a className="button big" target="_blank" download={card.download} href={card.link}>{card.linkName}</a> */}
    </StyledProductCard>
  );
}

export default card;
