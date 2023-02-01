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
  padding: 20vh 4vw;
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
                  <ArchivesData number="01" name="Capsule Room" tag="3D" date="2021" to="/capsule"/>
                  <ArchivesData number="02" name="Grissini" tag="UI / Dev" date="2019" to="/Grissini"/>
                  <ArchivesData number="03" name="Nyx" tag="UI / Dev" date="2022" to="/Nyx"/>
                  <ArchivesData number="04" name="Chanel" tag="3D / UI" date="2021" to="/chanel"/>
                  <ArchivesData number="05" name="Project X Paris" tag="UI / Dev" date="2020" to="/pxp"/>
                </div>
            </StyledArchives>
        </PageTemplate>
    );
}

export default Archives;