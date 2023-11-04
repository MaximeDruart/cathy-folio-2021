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
    .infos p {
      display: none;
    }
    &:hover{
        filter: brightness(120%);
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
    h5, p{
        font-size: 12px;
    }
  }
  a.button {
    margin: 16px 0 40px 0 !important;
  }
  img,
  .video {
    width: 100%;
    object-fit: cover;
  }
`;

function card({ folder, download, link, src, name, price }) {
  return (
    <StyledProductCard className={folder}>
      <a target="_blank" download={download} href={link}>
        {/* <Video src={card.src}/> */}
        <img src={src} alt="img" />
      </a>
      <div className="infos">
        <h5 className="text-h5">{name}</h5>
        <p className="text-regular">{price} €</p>
      </div>
      {/* <a className="button big" target="_blank" download={card.download} href={card.link}>{card.linkName}</a> */}
    </StyledProductCard>
  );
}

export default card;
