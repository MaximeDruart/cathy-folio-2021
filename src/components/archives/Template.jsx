import React from 'react';
import styled from 'styled-components';

const StyledTemplate = styled.div`
    transition: background-color 0.6s;
    background:  ${({ theme }) => theme.colors.background}; 
    padding: 20vh 20vw;
    @media (max-width: 700px) {
        padding: 10vh 5vw;
    } 
    img, video{
    border-radius: 16px;
    width: 100%;
    margin-bottom: 40px;
    @media (max-width: 769px) {
        margin-bottom: 16px !important;
        border-radius: 8px;
    }

    /* Responsive */
    .responsive {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 40px;
    @media (max-width: 769px) {
      margin-bottom: 16px !important;
    }
    img, .video {
      width: 24%;
      height: 100%;
      border-radius: 16px;
      margin: 0;
      video{
        margin-bottom: 0;
      }
      @media (max-width: 1000px) {
        width: 48%;
        height: auto;
      }
      @media (max-width: 600px) {
        width: 48%;
        height: auto;
      }
    }
    @media (max-width: 600px) {
      justify-content: space-between;
    }
  }
}
`

function Template({children}) {
    return (
        <StyledTemplate>
            {children}
        </StyledTemplate>
    );
}

export default Template;