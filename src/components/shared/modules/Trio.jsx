import React from 'react';
import styled from "styled-components"
import Video from './Video';

const StyledTrio = styled.div`
    --gap: 16px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
    img, .video{
        width: calc((100% / 3) - 12px);
        @media (max-width: 600px) {
        width: 100%;
        }
    }
`

function Trio(props) {
    return (
        <StyledTrio>
            {props.medias.map((media, key) => {
                if (media.type === "image") {
                    return <img data-aos="fade-up" data-aos-duration="1000" key={key} src={media.src} alt="img"/>
                }
                if (media.type === "video") {
                    return <Video key={key} src={media.src} />
                }
                return null;
            })}
        </StyledTrio>
    );
}

export default Trio;