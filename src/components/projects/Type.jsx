import AOS from "aos";
import React from "react"
import ReactPlayer from 'react-player'

import home from "../../assets/img/works/type/home.png"
import product from "../../assets/img/works/type/product.png"
import full from "../../assets/img/works/type/full.jpg"


// videos
import drag from "../../assets/img/works/type/drag.mp4"
import bloc from "../../assets/img/works/type/bloc.mp4"
import dark from "../../assets/img/works/type/dark.mp4"
import footer from "../../assets/img/works/type/footer.mp4"
import scale from "../../assets/img/works/type/scale.mp4"
import slider from "../../assets/img/works/type/slider.mp4"






import FullImage from "../shared/FullImage"


const Bohinc = () => {
  AOS.init({
    duration : 2000
  })
  return (
    <section>
      <div className="demi-spacer"></div>
      <div className="content">
        <ReactPlayer 
          data-aos="fade-up" data-aos-duration="1000" 
          url={slider} 
          width='100%'
          height='100%'
          playing
          muted={true}
          loop
        />
        <ReactPlayer 
          data-aos="fade-up" data-aos-duration="1000" 
          url={dark} 
          width='100%'
          height='100%'
          playing
          muted={true}
          loop
        />
        <ReactPlayer 
          data-aos="fade-up" data-aos-duration="1000" 
          url={scale} 
          width='100%'
          height='100%'
          playing
          muted={true}
          loop
        />
        <img data-aos="fade-up" data-aos-duration="1000" src={product} alt="bohinc" />
        <ReactPlayer 
          data-aos="fade-up" data-aos-duration="1000" 
          url={drag} 
          width='100%'
          height='100%'
          playing
          muted={true}
          loop
        />
         <ReactPlayer 
          data-aos="fade-up" data-aos-duration="1000" 
          url={bloc} 
          width='100%'
          height='100%'
          playing
          muted={true}
          loop
        />
         <ReactPlayer 
          data-aos="fade-up" data-aos-duration="1000" 
          url={footer} 
          width='100%'
          height='100%'
          playing
          muted={true}
          loop
        />
        <img data-aos="fade-up" data-aos-duration="1000" src={home} alt="bohinc" />

      </div>

      <div className="spacer"></div>
      <FullImage src={full} alt='preview' />



      <div className="big-spacer"></div>
      <h2 className='text-h2'>Thanks for scrolling</h2>
      <p className="text-description">Project made with fun and love</p>
      <div className="big-spacer"></div>
    </section>
  )
}

export default Bohinc
