import AOS from "aos";
import "aos/dist/aos.css";
import React from "react"
import styled from "styled-components"
import gardenMoodboard from "../../assets/img/works/sens/gardenMoodboard.png"
import gardenPosters from "../../assets/img/works/sens/gardenPosters.png"
import gardenTickets from "../../assets/img/works/sens/gardenTickets.png"
import summerKit from "../../assets/img/works/sens/summerKit.jpg"
import FullImage from "../shared/FullImage"
import summerMoodboard from "../../assets/img/works/sens/summerMoodboard.png"
import summerPosters from "../../assets/img/works/sens/summerPosters.png"
import summerTickets from "../../assets/img/works/sens/summerTickets.png"


const Sens = () => {
  AOS.init({
    duration : 2000
  })
  return (
    <section>
      <div className="demi-spacer"></div>

      <div className="content">
        <div className='headline text-regular'>Garden's Moodboard</div>
        <div className='separator'></div>
        <img data-aos="fade-up" data-aos-duration="1000" src={gardenMoodboard} alt="garden" />
        <div className="demi-spacer"></div>
        <div className='headline text-regular'>Poster</div>
        <div className='separator'></div>
        <img data-aos="fade-up" data-aos-duration="1000" src={gardenPosters} alt="garden" />
        <div className="demi-spacer"></div>
        <div className='headline text-regular'>Entry tickets</div>
        <div className='separator'></div>
        <img data-aos="fade-up" data-aos-duration="1000" className="little" src={gardenTickets} alt="garden" />
      </div>
      
      <div className="spacer"></div>
      {/* summer */}
      <FullImage src={summerKit} alt='card' />
      <div className="spacer"></div>

      <div className="content">
        <div className='headline text-regular'>Aurae's Moodboard</div>
        <div className='separator'></div>
        <img data-aos="fade-up" data-aos-duration="1000" src={summerMoodboard} alt="garden" />
        <div className="demi-spacer"></div>
        <div className='headline text-regular'>Poster</div>
        <div className='separator'></div>
        <img data-aos="fade-up" data-aos-duration="1000" src={summerPosters} alt="garden" />
        <div className="demi-spacer"></div>
        <div className='headline text-regular'>Entry tickets</div>
        <div className='separator'></div>
        <img data-aos="fade-up" data-aos-duration="1000" className="little" src={summerTickets} alt="garden" />
      </div>
     

      <div className="big-spacer"></div>
      <h2 className='text-h2'>Thanks for scrolling</h2>
      <p className="text-description">Project made with fun and love</p>
      <div className="big-spacer"></div>
    </section>
  )
}

export default Sens
