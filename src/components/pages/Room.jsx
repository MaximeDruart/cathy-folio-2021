import React, { Suspense, useRef } from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom"
import pokemon from "../../assets/sound/pokemon.mp3";

const Spline = React.lazy(() => import ('@splinetool/react-spline'));

const StyledRoom = styled.div`
  transition: background-color 0.6s;
  * {
    font-family: NeueMontrealRegular;
    color: ${({ theme }) => theme.colors.text.standard};
  }
  audio{
    display: none;
  }
  .hero {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .content{
      position: absolute;
      h1{
        font-family: "Ginger";
      }
    }
  }
`

const Room = () => {
  const audioRef = useRef()
  function onMouseDown(e) {
    if (e.target.id === 'd60837be-c26c-46f8-ba4b-23bb629d6cf2') {
      audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause()
    }
  }
  return (
      <StyledRoom>
        <audio src={pokemon} loop ref={audioRef}></audio>
        <div className='hero'>
          {/* <div className="content">
          </div> */}
          <Suspense fallback={<div>Loading...</div>}>
            <Spline scene="https://prod.spline.design/dLpk8CXXUm0h15sf/scene.splinecode"
            onMouseDown={onMouseDown}
            />
          </Suspense>
        </div>
      </StyledRoom>
  )
}

export default Room
