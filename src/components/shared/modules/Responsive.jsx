import React from 'react';
import styled from "styled-components"
import Video from './Video';

const StyledResponsive = styled.div`
    --gap: 16px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--gap);
    margin-bottom: 32px;
    @media (max-width: 769px) {
        margin-bottom: 16px;
    }
    img, .video {
        width: calc((100% / 4) - var(--gap) + var(--gap) / 4);
        height: auto;
        @media (max-width: 1000px) {
            width: calc(50% - var(--gap) / 2);
        }
    }
`

function Responsive(props) {
    return (
        <StyledResponsive data-aos="fade-up" data-aos-duration="1000" className="archives">
            {props.medias.map((media, key) => {
                if (media.type === "image") {
                    return <img data-aos="fade-up" data-aos-duration="1000" key={key} src={media.src} alt="img"/>
                }
                if (media.type === "video") {
                    return <Video key={key} src={media.src} />
                }
                return null;
            })}
        </StyledResponsive>
    );
}

export default Responsive;