import React from "react";
import styled from "styled-components";
import Video from "./Video";

const StyledSolo = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  img,
  .video {
    width: 100%;
    margin-bottom: 24px;
    @media (max-width: 750px) {
      margin-bottom: 4vw;
    }
  }
`;

function Solo(props) {
  return (
    <StyledSolo className="pictures">
      {props.medias.map((media, key) => {
        if (media.type === "image") {
          return (
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              key={key}
              src={media.src}
              alt="img"
            />
          );
        }
        if (media.type === "video") {
          return <Video key={key} src={media.src} />;
        }
        return null;
      })}
    </StyledSolo>
  );
}

export default Solo;
