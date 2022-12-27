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
    width: 100%;
    margin-bottom: 40px;
    @media (max-width: 769px) {
        margin-bottom: 16px !important;
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