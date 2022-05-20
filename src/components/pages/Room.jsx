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
    if (e.target.id === 'ab52aac5-cd68-4cf6-a508-f7401d5046b8') {
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
