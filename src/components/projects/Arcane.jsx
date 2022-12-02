import AOS from "aos";
import React from "react"
import styled from "styled-components"
import jinx from "../../assets/img/works/arcane/jinx.jpg"
import jinx2 from "../../assets/img/works/arcane/jinx2.jpg"
import arcane from "../../assets/img/works/arcane/arcane.jpg"
import silco from "../../assets/img/works/arcane/silco.jpg"
import silco2 from "../../assets/img/works/arcane/silco2.jpg"
import vi from "../../assets/img/works/arcane/vi.jpg"
import sisters from "../../assets/img/works/arcane/sisters.jpg"
import p1 from "../../assets/img/works/arcane/p1.jpg"
import p2 from "../../assets/img/works/arcane/p2.jpg"
import p3 from "../../assets/img/works/arcane/p3.jpg"
import FullImage from "../shared/FullImage"

const Arcane = () => {
  AOS.init({
    duration : 2000
  })  
  return (
    <section>
      <div className="demi-spacer"></div>
      <div className="content">
        <img data-aos="fade-up" data-aos-duration="1000" src={p1} alt="arcane" />
        <img data-aos="fade-up" data-aos-duration="1000" src={jinx} alt="arcane" />
        <img data-aos="fade-up" data-aos-duration="1000" src={jinx2} alt="arcane" />
        <img data-aos="fade-up" data-aos-duration="1000" src={p2} alt="arcane" />
        <img data-aos="fade-up" data-aos-duration="1000" src={silco} alt="arcane" />
        <img data-aos="fade-up" data-aos-duration="1000" src={silco2} alt="arcane" />
        <img data-aos="fade-up" data-aos-duration="1000" src={p3} alt="arcane" />
        <img data-aos="fade-up" data-aos-duration="1000" src={sisters} alt="arcane" />
        <img data-aos="fade-up" data-aos-duration="1000" src={vi} alt="arcane" />
      </div>
      <div className="spacer"></div>
      <FullImage src={arcane} alt='prototype' />
      <div className="big-spacer"></div>
      <h2 className='text-h2'>Thanks for scrolling</h2>
      <p className="text-description">Project made with fun and love</p>
      <div className="big-spacer"></div>

    </section>
  )
}

export default Arcane
