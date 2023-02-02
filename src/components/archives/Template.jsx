import React from 'react';
import styled from 'styled-components';
import PageTemplate from "../pages/PageTemplate"

const StyledTemplate = styled.div`
    transition: background-color 0.6s;
    background:  ${({ theme }) => theme.colors.background}; 
    padding: 20vh 20vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin-bottom: 32px;
        @media (max-width: 769px) {
        margin-bottom: 16px;
    }
    }
    @media (max-width: 1000px) {
        padding: 10vh 5vw;
    }
    @media (max-width: 600px) {
        padding: 10vh 16px;
    }
`

function Template({children}) {
    return (
        <PageTemplate hasFooter={false} hasTransitionPanel={true}>
            <StyledTemplate>
                {children}
            </StyledTemplate>
        </PageTemplate>
    );
}

export default Template;