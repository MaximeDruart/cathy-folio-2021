import React, { Suspense, useRef, useState } from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom"
import pokemon from "../../assets/sound/pokemon.mp3";

// Painting
import paint1 from "../../assets/img/about/painting/paint1.jpeg";

//Book
import book7 from "../../assets/img/about/books/book7.jpg";
import book6 from "../../assets/img/about/books/book6.jpg";
import book5 from "../../assets/img/about/books/book5.jpg";
import book2 from "../../assets/img/about/books/book2.jpg";
import ikigai from "../../assets/img/about/books/ikigai.jpeg";
import nike from "../../assets/img/about/books/nike.jpeg";

//Games
import pokemonGame from "../../assets/img/about/games/pokemon.jpg";
import jinx from "../../assets/img/about/games/jinx.jpg";
import stardew from "../../assets/img/about/games/stardew.jpg";
import ac from "../../assets/img/about/games/ac.jpg";
import valo from "../../assets/img/about/games/valo.jpg";
import fortnite from "../../assets/img/about/games/fortnite.jpg";
import wow from "../../assets/img/about/games/wow.jpg";
import dofus from "../../assets/img/about/games/dofus.jpg";

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
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .content{
      position: absolute;
      display: flex;
      .painting, .book, .panel{
        margin: 0;
        display: block;
        padding: 50px;
        border-radius: 20px;
        background-color:  ${({ theme }) => theme.colors.opacity};
        backdrop-filter: blur(20px);
        width: 50vw;
        max-height: 80vh;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        overflow: scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        h1{
          margin-bottom: 10px;
          font-family: 'Ginger';
          font-size: 48px;
        }
        button{
          margin: 20px 20px 0px 0;
        }
        img, .item{
          margin: 20px 0;
          width: 48%;
          .visual{
            width: 100%;
          }
        }
        .nav{
          width:100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          height: auto;
          margin-bottom: 10px;
          button{
            margin: 0;
            &:hover{
              color:  ${({ theme }) => theme.colors.primary1};
            }
          }
        }
        p{
          margin-bottom: 20px;
          width: 100%;
        }
        &::-webkit-scrollbar {
          display: none;
        }
        &.hidden{
            display: none;
        }
        @media (max-width: 1200px) {
          width: 80vw;
        }
        @media (max-width: 600px) {
          width: 90vw; 
          padding: 48px 38px;
          img, .item{
            width:100%;
          }
        }
      }
      .panel{
        max-width: 30vw;
        justify-content: flex-start;
        .button{
          /* padding: 14px 20px; */
          margin: 10px 10px 0 0;
        }
        @media (max-width: 1200px) {
          max-width: 50vw;
        }
        @media (max-width: 600px) {
          max-width: 80vw;
        }
      }
      
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
  const [showPanel, setShowPanel] = useState(true)
  const [showGames, setShowGames] = useState(false)
  const [showBook, setShowBook] = useState(false)
  const [showPainting, setShowPainting] = useState(false)
  function onMouseDown(e) {
    if (e.target.id === '99122d0b-1628-47fb-b1bf-ac08d3e1361a') {
      audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause()
    }
    if (e.target.id === 'aa2ffbd6-9214-4bc0-9ffc-7b79015ffd39') {
      setShowGames(true)
      setShowPainting(false)
      setShowDesk(false)
      setShow(false)
      setShowBb(false)
      setShowPlayer(false)
      setShowBook(false)
    }
    if (e.target.id === 'acd6a1de-6145-4a42-93ac-2af60cd35032') {
      setShowPainting(true)
      setShowDesk(false)
      setShow(false)
      setShowBb(false)
      setShowPlayer(false)
      setShowBook(false)
    }
    if (e.target.id === 'afe24749-537e-4c55-8475-f59e88671c0f') {
      setShowBook(true)
      setShowDesk(false)
      setShow(false)
      setShowBb(false)
      setShowPlayer(false)
      setShowPainting(false)
    }
    if (e.target.id === 'ae25d1e6-16be-405f-9d2a-97b658105bc5') {
      setShowDesk(true)
      setShow(true)
      setShowBb(false)
      setShowPlayer(false)
      setShowPainting(false)
      setShowBook(false)
    }
    if (e.target.id === '19b2abd1-eb9e-474b-a758-e6ae4f774942') {
      setShowBb(true)
      setShow(true)
      setShowDesk(false)
      setShowPlayer(false)
      setShowPainting(false)
      setShowBook(false)
    }
    if (e.target.id === '24833410-3060-419e-bc66-1eb019c26d23') {
      setShowPlayer(true)
      setShow(true)
      setShowDesk(false)
      setShowBb(false)
      setShowPainting(false)
      setShowBook(false)
    }
  }

  return (
      <StyledRoom>
        <audio src={pokemon} loop ref={audioRef}></audio>
        <div className='hero'>
          <div className="content">
            {/* msg */}
            <div className={`${showPanel ? "panel" : "hidden"}`}>
              <h1>Room v.1.1</h1>
              <p className="text-regular">Hello ! Sorry, you have to wait a few moment, the room is charging...<br/>
                 This is a preview version but there is a lot of things you can do! <br/>
                 Do not hesitate to hover and click everywhere! <br/>
                 Its a little bit laggy and not optimize yet but Im working on it ^_^<br/><br/>
                 -- Better to check it on desktop --
                 </p>
                 
              <button className="button" onClick={() => setShowPanel(false)}>I can be patient</button>
              <Link className="button" to="/works">Leave</Link>
            </div>

            {/* {painting} */}
            <div className={`${showPainting ? "painting" : "hidden"}`}>
              <div className="nav">
                <h1>Drawing</h1>
                <button onClick={() => setShowPainting(false)}>Close</button>
              </div>
              <p className="text-regular">Content in progress...</p>
              <img src={paint1} alt="painting" />
              <img src={paint1} alt="painting" />
              <img src={paint1} alt="painting" />
              <img src={paint1} alt="painting" />
            </div>

            {/* {Games} */}
            <div className={`${showGames ? "book" : "hidden"}`}>
              <div className="nav">
                <h1>Favourite games</h1>
                <button onClick={() => setShowGames(false)}>Close</button>
              </div>
              <p className="text-regular">I'm a big fan of books, especially when they talk about my passion for design, typography, or illustration. Here is a small selection of my favorite books that inspire me every day. (List not yet complete...)</p>
              <div className="item">
                <img className="visual" src={jinx} alt="books" />
                <h2>League of Legends</h2>
              </div>
              <div className="item">
                <img className="visual" src={valo} alt="books" />
                <h2>Valorant</h2>
              </div>
              <div className="item">
                <img className="visual" src={fortnite} alt="books" />
                <h2>Fortnite</h2>
              </div>
              <div className="item">
                <img className="visual" src={dofus} alt="books" />
                <h2>Dofus</h2>
              </div>
              <div className="item">
                <img className="visual" src={stardew} alt="books" />
                <h2>Stardew Valley</h2>
              </div>
              <div className="item">
                <img className="visual" src={wow} alt="books" />
                <h2>World of Warcraft</h2>
              </div>
              <div className="item">
                <img className="visual" src={pokemonGame} alt="books" />
                <h2>Pokemon, a lot of version</h2>
              </div>
              <div className="item">
                <img className="visual" src={ac} alt="books" />
                <h2>Animal Crossing, all of them ofc</h2>
              </div>
            </div>            

            {/* {Book} */}
            <div className={`${showBook ? "book" : "hidden"}`}>
              <div className="nav">
                <h1>My book collection</h1>
                <button onClick={() => setShowBook(false)}>Close</button>
              </div>
              <p className="text-regular">I'm a big fan of books, especially when they talk about my passion for design, typography, or illustration. Here is a small selection of my favorite books that inspire me every day. (List not yet complete...)</p>
              <div className="item">
                <img className="visual" src={book7} alt="books" />
                <h2>Palette 7 : Monotone</h2>
              </div>
              <div className="item">
                <img className="visual" src={book5} alt="books" />
                <h2>Palette 5 : Pastel</h2>
              </div>
              <div className="item">
                <img className="visual" src={book2} alt="books" />
                <h2>Palette 2 : Multicolour</h2>
              </div>
              <div className="item">
                <img className="visual" src={book6} alt="books" />
                <h2>Palette 6 : Transparent</h2>
              </div>
              <div className="item">
                <img className="visual" src={nike} alt="books" />
                <h2>Virgil Abloh Something's Off Book</h2>
              </div>
              <div className="item">
                <img className="visual" src={ikigai} alt="books" />
                <h2>Ikigai Book</h2>
              </div>
            </div>            


            {/* iframe */}
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
            <Spline scene="https://prod.spline.design/cMztZ6ErT34LPBdg/scene.splinecode"
            onMouseDown={onMouseDown}
            />
          </Suspense>

        </div>
      </StyledRoom>
  )
}

export default Room
