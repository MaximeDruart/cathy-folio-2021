import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const StyledProductCard = styled.div`
    width: calc(100% / 3 - 16px);
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    @media screen and (max-width: 1200px) {
        width: calc(100% / 2 - 16px);
    }
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    .infos{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    a.button{
        margin: 20px 0 !important;
    }
    img{
        width: 100%;
        aspect-ratio: 3/3.5;
        object-fit: cover;
    }
`

function card(card) {
    return (
        <StyledProductCard  data-aos="fade-up" data-aos-duration="1000">
            <Link to={card.page}><img src={card.src} alt="img"/></Link>
            <div className="infos">
                <h5 className="text-h5">{card.name}</h5>
                <p className="text-regular">{card.price} €</p>
            </div>
            <a className="button big" target="_blank" href={card.link}>{card.linkName}</a>
        </StyledProductCard>
    );
}

export default card;