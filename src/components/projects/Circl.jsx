import React from "react"
import styled from "styled-components"
import FullImage from "../shared/FullImage"
import preview from "../../assets/img/works/circl/preview.jpg"
import mockup from "../../assets/img/works/circl/mockup.png"
import login from "../../assets/img/works/circl/login.png"
import lobby from "../../assets/img/works/circl/lobby.png"
import club from "../../assets/img/works/circl/club.png"
import bracket from "../../assets/img/works/circl/bracket.png"
import Circl1 from "../../assets/icons/circl1.svg?component"
import Circl2 from "../../assets/icons/circl2.svg?component"
import Circl3 from "../../assets/icons/circl3.svg?component"







const StyledGrissini = styled.div`
svg:nth-child(1){
  .a,.b,.e{fill:${({ theme }) => theme.colors.text.standard};}.b{stroke:#707070;}.c,.i{fill:none;}.d,.g{fill:#3a69e2;}.f{clip-path:url(#a);}.h{clip-path:url(#b);}.i{stroke:#6e6e6e;opacity:0.5;}.j,.k,.l{stroke:none;}.k{fill:#3a69e2;}.l{fill:${({ theme }) => theme.colors.text.standard};}
  }
svg:nth-child(2){
  .a,.b,.f{fill:${({ theme }) => theme.colors.text.standard};}.b{stroke:#707070;}.c,.j{fill:none;}.d{opacity:0.3;}.e,.h{fill:#3a69e2;}.g{clip-path:url(#a);}.i{clip-path:url(#b);}.j{stroke:#6e6e6e;opacity:0.496;}.k,.l,.m{stroke:none;}.l{fill:#3a69e2;}.m{fill:${({ theme }) => theme.colors.text.standard};}
}
svg:nth-child(3){
  .a,.b,.e{fill:${({ theme }) => theme.colors.text.standard};}.b{stroke:#707070;}.c{fill:none;}.d,.g{fill:#3a69e2;}.f{clip-path:url(#a);}.h{clip-path:url(#b);}.i,.j,.k{stroke:none;}.j{fill:#3a69e2;}.k{fill:${({ theme }) => theme.colors.text.standard};}
}
img{
  width: 100%;
  margin-bottom: 50px;
}
.responsive{
    img{
      border: solid 0.5px ${({ theme }) => theme.colors.text.disabled2};
    }
  }
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "BebasNeueRegular";
      }
      &.two{
        font-family: "Helvetica";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: #1A4ED3;
        color: white;  
      }
      &.two{
        background-color: #8BA6EA;
        color: white;
      }
      &.three{
        background-color: #F9FAFB;
      }
    }
  }
}
`

const Grissini = () => {
  return (
    <StyledGrissini>
       <h2 className='text-h2'>Graphic Chart</h2>
          {/* chart */}
          <div className="chart">
        <div className="art-direction">
          <h4 className="text-h4">Art direction</h4>
          <p className="text-description">I went for an electric blue, and modern and readable fonts that fit well in the world of video games</p>
        </div>
        <div className="typography">
          <h4 className="text-h4">Typography</h4>
          <span className="text-typo one">Bebas Neue Regular<br/>Aa 123</span>
          <span className="text-typo two">Helvetiva<br/>Aa 123</span>
        </div>
        <div className="colors">
          <h4 className="text-h4">Colors</h4>
          <div className="color one">#1A4ED3</div>
          <div className="color two">#8BA6EA</div>
          <div className="color three">#F9FAFB</div>
        </div>
      </div>
      {/* end chart */}
      {/* start case */}
      <div className="spacer"></div>
      <FullImage src={preview} alt='preview' />
      <div className="spacer"></div>
      {/* logo */}
      <h2 className='text-h2'>Logo</h2>
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>logo maker</div>
      <div className='separator'></div>
      <div className="img_container">
        <Circl1></Circl1>
        <Circl2></Circl2>
        <Circl3></Circl3>
      </div>
      <div className="spacer"></div>
      <div className='headline text-regular'>Mockup</div>
      <div className='separator'></div>
      <img src={mockup} alt="mockup" />
      <div className="big-spacer"></div>
      {/* desktop ui */}
      <h2 className='text-h2'>Desktop UI</h2>
      <p className="text-description">Desktop mockups for the Grissini Project website; a few previews, simple and clean design, with a background of a video of Grissini in low opacity to highlight the content.</p>
      {/* login */}
      <div className="spacer"></div>
      <div className='headline text-regular'>login page</div>
      <div className='separator'></div>
      <img src={login} alt="circl" />
      <div className="spacer"></div>
      <div className='headline text-regular'>lobby page</div>
      <div className='separator'></div>
      <img src={lobby} alt="circl" />
      <div className="spacer"></div>
      <div className='headline text-regular'>club page</div>
      <div className='separator'></div>
      <img src={club} alt="circl" />
      <div className="spacer"></div>
      <div className='headline text-regular'>bracket page</div>
      <div className='separator'></div>
      <img src={bracket} alt="circl" />
      <div className="big-spacer"></div>
    </StyledGrissini>
  )
}

export default Grissini
