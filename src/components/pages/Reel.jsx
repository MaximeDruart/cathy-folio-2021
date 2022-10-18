import React, { useCallback, useState } from "react"
import styled from "styled-components"
import ReactPlayer from 'react-player'
import showreel from "../../assets/img/showreel.mp4"

const StyledReel = styled.div`
  * {
    color: ${({ theme }) => theme.colors.text.standard};
  }
  .showreel{
    width: 100vw;
    height: 100vh;
    video{
      object-fit: cover;
    }
  }

`

const Reel = () => {
  const [volume, setVolume] = useState(true);

  const toggleVolume = useCallback(() =>{
    const isMuted = volume === false
    setVolume(isMuted ? true : false)
  },
   [volume]
  )

  return (
  
    <StyledReel>
      <div className="showreel" onClick={toggleVolume}>
        <ReactPlayer 
        data-aos="fade-up" data-aos-duration="1000"
        url={showreel} 
        width='100%'
        height='100%'
        playing={volume}
        volume={0.1}
        loop
        />
      </div>
    </StyledReel>
  )
}

export default Reel
