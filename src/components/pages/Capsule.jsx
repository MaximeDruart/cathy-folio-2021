import React, { Suspense, useRef, useState } from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom"
import pokemon from "../../assets/sound/pokemon.mp3";
import click from "../../assets/sound/click.mp3";
import hover from "../../assets/sound/hover.mp3";

// Painting
import paint1 from "../../assets/img/about/painting/paint1.jpeg";

//Book
import book1 from "../../assets/img/about/books/book1.jpg";
import book2 from "../../assets/img/about/books/book2.jpg";
import book3 from "../../assets/img/about/books/book3.jpg";
import book4 from "../../assets/img/about/books/book4.jpg";
import book5 from "../../assets/img/about/books/book5.jpg";
import book6 from "../../assets/img/about/books/book6.jpg";

//Games
import pokemonGame from "../../assets/img/about/games/pokemon.jpg";
import jinx from "../../assets/img/about/games/jinx.jpg";
import stardew from "../../assets/img/about/games/stardew.jpg";
import ac from "../../assets/img/about/games/ac.jpg";
import valo from "../../assets/img/about/games/valo.jpg";
import fortnite from "../../assets/img/about/games/fortnite.jpg";
import genshin from "../../assets/img/about/games/genshin.jpg";
import dofus from "../../assets/img/about/games/dofus.jpg";

const Spline = React.lazy(() => import ('@splinetool/react-spline'));

const StyledRoom = styled.div`
  background:  ${({ theme }) => theme.colors.background};  
  transition: background-color 0.6s;
  * {
    font-family: NeueMontrealRegular;
    color: black !important;
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
        background-color:  ${({ theme }) => theme.colors.panel};
        backdrop-filter: blur(10px);
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
          backdrop-filter: blur(0px);
          margin: 20px 20px 0px 0;
          border: solid 1px #00000040;
          &:hover{
            background-color: #FFFFFF60;
          }
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
          padding: 12px 28px;
          margin: 8px 10px 0 0;
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
          border-radius: 10px 10px 0 0;
          display: flex;
          justify-content: flex-end;
          padding-right: 14px;
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
  const clickRef = useRef()
  const hoverRef = useRef()
  const [show, setShow] = useState(false)
  const [showDesk, setShowDesk] = useState(false)
  const [showBb, setShowBb] = useState(false)
  const [showPlayer, setShowPlayer] = useState(false)
  const [showPanel, setShowPanel] = useState(true)
  const [showGames, setShowGames] = useState(false)
  const [showBook, setShowBook] = useState(false)
  const [showPainting, setShowPainting] = useState(false)
  function onMouseHover(e){
    if (e.target.id === 'eeb26936-c08a-43bf-9f52-9cd918cd96ea' || 'cc93e724-036f-4c2e-b74f-44f145124cfc' || "05ec86ae-3f94-4206-b8c1-1714a877bfc6" || "5ed885fd-37f3-4c63-bacc-6b831fb5fa70") {
      clickRef.current.play()
    }
  }
  function onMouseDown(e) {
    if (e.target.id === 'eeb26936-c08a-43bf-9f52-9cd918cd96ea') {
      audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause()
    }
    if (e.target.id === 'cc93e724-036f-4c2e-b74f-44f145124cfc') {
      setShowGames(true)
      setShowPainting(false)
      setShowDesk(false)
      setShow(false)
      setShowBb(false)
      setShowPlayer(false)
      setShowBook(false)
    }
    if (e.target.id === '5ed885fd-37f3-4c63-bacc-6b831fb5fa70') {
      setShowPainting(true)
      setShowDesk(false)
      setShow(false)
      setShowBb(false)
      setShowPlayer(false)
      setShowBook(false)
    }
    if (e.target.id === '05ec86ae-3f94-4206-b8c1-1714a877bfc6') {
      setShowBook(true)
      setShowDesk(false)
      setShow(false)
      setShowBb(false)
      setShowPlayer(false)
      setShowPainting(false)
    }
    if (e.target.id === '4f4b8402-e981-4a2d-bfb5-58ef19ccc0cf') {
      setShowDesk(true)
      setShow(true)
      setShowBb(false)
      setShowPlayer(false)
      setShowPainting(false)
      setShowBook(false)
    }
  }

  return (
      <StyledRoom>
        <audio src={pokemon} loop ref={audioRef}></audio>
        <audio src={hover} ref={hoverRef}></audio>
        <audio src={click} ref={clickRef}></audio>
        <div className='hero'>
          <div className="content">
            {/* msg */}
            <div className={`${showPanel ? "panel" : "hidden"}`}>
              <h1>Capsule 1.1</h1>
              <p className="text-regular">Hello ! Welcome to my little universe.<br/>
                 Do not hesitate to hover and click everywhere to see what happend ... You can try with the headphones :)
                 </p>
                 
              <button className="button" onClick={() => setShowPanel(false) }>Enter</button>
            </div>

            {/* {painting} */}
            <div className={`${showPainting ? "painting" : "hidden"}`}>
              <div className="nav">
                <h1>Pixel Art</h1>
                <button onClick={() => setShowPainting(false)}>Close</button>
              </div>
              <p className="text-regular">Content in progress...</p>
            </div>

            {/* {Games} */}
            <div className={`${showGames ? "book" : "hidden"}`}>
              <div className="nav">
                <h1>Favourite games</h1>
                <button onClick={() => setShowGames(false)}>Close</button>
              </div>
              <p className="text-regular">I'm a big fan of video games since I was a little girl, I started on consoles (gameboy and nintendo DS) then I fell in love with PC games, mainly League of Legends and MMORPG. Games inspire me a lot in the creative field, they are full of references and incredible graphics.</p>
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
                <img className="visual" src={pokemonGame} alt="books" />
                <h2>Pokemon, a lot of version</h2>
              </div>
              <div className="item">
                <img className="visual" src={stardew} alt="books" />
                <h2>Stardew Valley</h2>
              </div>
              <div className="item">
                <img className="visual" src={genshin} alt="books" />
                <h2>Genshin Impact</h2>
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
                <img className="visual" src={book1} alt="books" />
                <h2>Palette 6 : Transparent</h2>
              </div>
              <div className="item">
                <img className="visual" src={book2} alt="books" />
                <h2>Palette 5 : Pastel</h2>
              </div>
              <div className="item">
                <img className="visual" src={book3} alt="books" />
                <h2>Palette 2 : Multicolour</h2>
              </div>
              <div className="item">
                <img className="visual" src={book4} alt="books" />
                <h2>Palette 7 : Monotone</h2>
              </div>
              <div className="item">
                <img className="visual" src={book5} alt="books" />
                <h2>Palette 2 : Multicolour</h2>
              </div>
              <div className="item">
                <img className="visual" src={book6} alt="books" />
                <h2>Palette 4 : Neon</h2>
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
            </div>
            
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Spline scene="https://prod.spline.design/OHFsT0CfLnIW6BEM/scene.splinecode"
            onMouseDown={onMouseDown}
            onMouseHover={onMouseHover}
            />
          </Suspense>

        </div>
      </StyledRoom>
  )
}

export default Room
