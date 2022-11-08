import React from 'react';
import PageTemplate from "./PageTemplate"
import styled from "styled-components"
import ArchivesData from '../shared/ArchivesData';


const StyledArchives = styled.div`
  transition: background-color 0.6s;
  background:  ${({ theme }) => theme.colors.background};  
  width: 100vw;
  height: 100vh;
  padding: 14vh 4vw;
  p.wip{
    margin-top: 8px;
    margin-bottom: 32px;
    opacity: 0.4;
  }
`

function Archives(props) {
    return (
        <PageTemplate hasFooter={false} initial={{ opacity: 0 }} animate={{ opacity: 1 }} hasTransitionPanel={true}>
            <StyledArchives>
                <h1 className="text-h2">Archives (03)</h1>
                <p className="text-button wip">Content & animation coming soon...</p>
                <ArchivesData name="Capsule (perso)" tag="3D" date="02.10.2021" to="/capsule"/>
                <ArchivesData name="Project X Paris" tag="Design / Dev" date="24.10.2020" to="/pxp"/>
                <ArchivesData name="Chanel" tag="Experience / UI" date="08.12.2021" to="/chanel"/>
            </StyledArchives>
        </PageTemplate>
    );
}

export default Archives;