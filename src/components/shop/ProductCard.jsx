import React from 'react';
import styled from 'styled-components';

const StyledProductCard = styled.div`
    width: calc(100% / 3 - 16px);
    height: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
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
    img{
        width: 100%;
        aspect-ratio: 3/3.5;
        object-fit: cover;
    }
`

function card(card) {
    return (
        <StyledProductCard>
            <img src={card.src} alt="img"/>
            <div className="infos">
                <h5 className="text-h5">[Product Name]</h5>
                <p className="text-regular">??? €</p>
            </div>
        </StyledProductCard>
    );
}

export default card;