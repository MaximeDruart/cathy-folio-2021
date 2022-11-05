import AOS from "aos";
import React from "react"
import styled from "styled-components"
import i1 from "../../assets/img/works/ando/i1.png"
import i2 from "../../assets/img/works/ando/i2.png"
import i3 from "../../assets/img/works/ando/i3.png"
import i4 from "../../assets/img/works/ando/i4.png"
import i5 from "../../assets/img/works/ando/i5.png"
import i6 from "../../assets/img/works/ando/i6.png"
import i7 from "../../assets/img/works/ando/i7.png"
import i8 from "../../assets/img/works/ando/i8.png"
import i9 from "../../assets/img/works/ando/i9.png"
import i10 from "../../assets/img/works/ando/i10.png"
import i11 from "../../assets/img/works/ando/i11.png"
import i12 from "../../assets/img/works/ando/i12.png"
import i13 from "../../assets/img/works/ando/i13.png"
import i14 from "../../assets/img/works/ando/i14.png"
import i15 from "../../assets/img/works/ando/i15.png"

// import FullImage from "../shared/FullImage"

const StyledAndo = styled.div`
`

const Ando = () => {
  AOS.init({
    duration : 2000
  })  
  return (
    <StyledAndo>
      <div className="demi-spacer"></div>

      <div className="img_container">
          <img data-aos="fade-up" data-aos-duration="1000" className="quart" src={i1} alt="print" />
          <img data-aos="fade-up" data-aos-duration="1000" className="quart" src={i2} alt="print" />
          <img data-aos="fade-up" data-aos-duration="1000" className="quart" src={i3} alt="print" />
          <img data-aos="fade-up" data-aos-duration="1000" className="duo" src={i7} alt="print" />
          <img data-aos="fade-up" data-aos-duration="1000" className="duo" src={i6} alt="print" />
          <img data-aos="fade-up" data-aos-duration="1000" className="quart" src={i5} alt="print" />
          <img data-aos="fade-up" data-aos-duration="1000" className="quart" src={i8} alt="print" />
          <img data-aos="fade-up" data-aos-duration="1000" className="quart" src={i9} alt="print" />
          <img data-aos="fade-up" data-aos-duration="1000" className="duo" src={i10} alt="print" />
          <img data-aos="fade-up" data-aos-duration="1000" className="duo" src={i4} alt="print" />
          <img data-aos="fade-up" data-aos-duration="1000" className="quart" src={i11} alt="print" />
          <img data-aos="fade-up" data-aos-duration="1000" className="quart" src={i12} alt="print" />
          <img data-aos="fade-up" data-aos-duration="1000" className="quart" src={i13} alt="print" />
          <img data-aos="fade-up" data-aos-duration="1000" className="duo" src={i14} alt="print" />
          <img data-aos="fade-up" data-aos-duration="1000" className="duo" src={i15} alt="print" />

      </div>
      <div className="big-spacer"></div>
      <h2 className='text-h2'>Thanks for scrolling</h2>
      <p className="text-description">Project made with fun and love</p>
      <div className="big-spacer"></div>

    </StyledAndo>
  )
}

export default Ando
