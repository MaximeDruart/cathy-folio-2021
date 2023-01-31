import React from 'react';
import PageTemplate from "./PageTemplate"
import styled from "styled-components"
import ArchivesData from '../shared/ArchivesData';
import { useLayoutEffect } from 'react';
import { TweenMax, Expo } from 'gsap/gsap-core';


const StyledArchives = styled.div`
  transition: background-color 0.6s;
  background:  ${({ theme }) => theme.colors.background};  
  width: 100vw;
  height: 100vh;
  padding: 14vh 4vw;
  h1{
    margin-bottom: 32px;
  }
`

function Archives(props) {
    useLayoutEffect(() => {
      TweenMax.staggerFrom(".archivesContainer > div", 1.5, {
        opacity: 0,
        ease: Expo.easeInOut,
      }, 0.2);
    }, []);
    return (
        <PageTemplate hasFooter={false} initial={{ opacity: 0 }} animate={{ opacity: 1 }} hasTransitionPanel={true}>
            <StyledArchives>
                <h1 className="text-h2">Archives (05)</h1>
                <div className="archivesContainer">
                  {/* <ArchivesData name="Fuelband" tag="Generative Art" date="08.11.2022" to="/fuelband"/> */}
                  <ArchivesData name="Capsule Room" tag="3D" date="02.10.2021" to="/capsule"/>
                  <ArchivesData name="Grissini" tag="Design / Dev" date="20.04.2019" to="/Grissini"/>
                  <ArchivesData name="Nyx" tag="Design / Dev" date="30.11.2022" to="/Nyx"/>
                  <ArchivesData name="Chanel" tag="Experience / UI" date="03.12.2021" to="/chanel"/>
                  <ArchivesData name="Project X Paris" tag="Design / Dev" date="24.10.2020" to="/pxp"/>
                </div>
            </StyledArchives>
        </PageTemplate>
    );
}

export default Archives;