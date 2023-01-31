import React from 'react';
import styled from 'styled-components';

const StyledVideo = styled.div`
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

function Video(video) {
    return (
        <StyledVideo data-aos="fade-up" data-aos-duration="1000" className="video"  dangerouslySetInnerHTML={{ __html: `
            <video loop muted autoplay playsinline>
                <source src="${video.src}" type="video/mp4">
            </video>`
            }}
        />
    );
}

export default Video;