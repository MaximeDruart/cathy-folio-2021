import React, { Suspense, useRef, useState } from 'react';
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
      .hidden{
        display: none;
      }
      .window{
        .bar{
          width:100%;
          height: 30px;
          background: white;
          display: flex;
          justify-content: center;
          button{
            color: black;
          }
        }
        iframe{
        width: 70vw;
        height: 85vh;
          &.hidden{
            display: none;
          }
          &.show{
            display: block;
          }
        }
      }
    }
  }
`

const Room = () => {
  const audioRef = useRef()
  const [show, setShow] = useState(false)
  const [showDesk, setShowDesk] = useState(false)
  const [showBb, setShowBb] = useState(false)
  const [showPlayer, setShowPlayer] = useState(false)
  function onMouseDown(e) {
    if (e.target.id === 'd60837be-c26c-46f8-ba4b-23bb629d6cf2') {
      audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause()
    }
    if (e.target.id === 'beff5cc8-a3f5-4f4d-a21f-b4742dadd6ae') {
      setShowDesk(true)
      setShow(true)
      setShowBb(false)
      setShowPlayer(false)
    }
    if (e.target.id === '4b91fffa-c3f9-49b4-a397-5ddf0cf1d4ed') {
      setShowBb(true)
      setShow(true)
      setShowDesk(false)
      setShowPlayer(false)
    }
    if (e.target.id === 'ab52aac5-cd68-4cf6-a508-f7401d5046b8') {
      setShowPlayer(true)
      setShow(true)
      setShowDesk(false)
      setShowBb(false)
    }
  }

  return (
      <StyledRoom>
        <audio src={pokemon} loop ref={audioRef}></audio>
        <div className='hero'>
          <div className="content">
            {/* desktop */}
            <div className={`${show ? "window" : "hidden"}`}>
              <div className="bar">
                <button onClick={() => setShow(false)}>close</button>
              </div>
              <iframe className={`${showDesk ? "show" : "hidden"}`}
                  src="https://cathydolle.github.io/#/desk">
              </iframe>
              <iframe className={`${showBb ? "show" : "hidden"}`}
                  src="https://cathydolle.github.io/bubbleTea/">
              </iframe>
              <iframe className={`${showPlayer ? "show" : "hidden"}`}
                  src="https://cathydolle.github.io/VideoPlayer/">
              </iframe>
            </div>
            
          </div>
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
