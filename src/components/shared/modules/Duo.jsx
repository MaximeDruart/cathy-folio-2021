import React from 'react';
import styled from "styled-components"
import Video from './Video';

const StyledDuo = styled.div`
    --gap: 16px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
    margin: var(--gap) 0;
    img, .video{
        width: calc(50% - var(--gap) / 2);
        @media (max-width: 600px) {
        width: 100%;
        }
    }
`

function Duo(props) {
    return (
        <StyledDuo>
            {props.medias.map((media, key) => {
                if (media.type === "image") {
                    return <img key={key} src={media.src} alt="img"/>
                }
                if (media.type === "video") {
                    return <Video key={key} src={media.src} />
                }
                return null;
            })}
        </StyledDuo>
    );
}

export default Duo;