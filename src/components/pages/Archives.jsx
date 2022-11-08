import React from 'react';
import PageTemplate from "./PageTemplate"
import styled from "styled-components"



const StyledArchives = styled.div`
  transition: background-color 0.6s;
  background:  ${({ theme }) => theme.colors.background};  
  width: 100vw;
  height: 100vh;
  padding: 14vh 10vw;
  text-align: center;
`

function Archives(props) {
    return (
        <PageTemplate hasFooter={false} initial={{ opacity: 0 }} animate={{ opacity: 1 }} hasTransitionPanel={true}>
            <StyledArchives>
                <h1 className="text-h2">Coming soon</h1>
                <div className="separator"/>
            </StyledArchives>
        </PageTemplate>
    );
}

export default Archives;