import AOS from "aos";
import "aos/dist/aos.css";
import React from "react"

//video
import full from "../../assets/img/works/nyx/full.avif"
import island from "../../assets/img/works/nyx/island.mp4"
import design from "../../assets/img/works/nyx/design.png"
import girl from "../../assets/img/works/nyx/girl.mp4"
import passion from "../../assets/img/works/nyx/passion.mp4"
import nft from "../../assets/img/works/nyx/nft.mp4"

// responsive
import home from "../../assets/img/works/nyx/home.mp4"
import exp from "../../assets/img/works/nyx/exp.mp4"
import intro from "../../assets/img/works/nyx/intro.mp4"
import bloom from "../../assets/img/works/nyx/bloom.mp4"
import scan from "../../assets/img/works/nyx/scan.png"
import card from "../../assets/img/works/nyx/card.png"
import card2 from "../../assets/img/works/nyx/card2.png"
import winx1 from "../../assets/img/works/nyx/winx1.png"
import trix1 from "../../assets/img/works/nyx/trix1.png"
import trix2 from "../../assets/img/works/nyx/trix2.png"



import FullImage from "../shared/FullImage"


const Nyx = () => {
  AOS.init({
    duration : 2000
  })
  
  return (
    <section>
      <div className="demi-spacer"></div>
      <div className="content img_container">
        <div data-aos="fade-up" data-aos-duration="1000" dangerouslySetInnerHTML={{ __html: `
        <video class="full" loop muted autoplay playsinline>
            <source src="${girl}" type="video/mp4">
        </video>`
        }}
        />
        <div className="responsive">
            <div data-aos="fade-up" data-aos-duration="1000" className="video"  dangerouslySetInnerHTML={{ __html: `
            <video loop muted autoplay playsinline>
                <source src="${home}" type="video/mp4">
            </video>`
            }}
            />
            <div data-aos="fade-up" data-aos-duration="1000"className="video"     dangerouslySetInnerHTML={{ __html: `
            <video loop muted autoplay playsinline>
                <source src="${intro}" type="video/mp4">
            </video>`
            }}
            />
            <img src={scan} alt="img"/>
            <img src={trix1} alt="img"/>
        </div>        
        <img data-aos="fade-up" data-aos-duration="1000" src={design} alt="maquettes" />
        <div className="duo" data-aos="fade-up" data-aos-duration="1000" dangerouslySetInnerHTML={{ __html: `
        <video class="full" loop muted autoplay playsinline>
            <source src="${passion}" type="video/mp4">
        </video>`
        }}
        />
        <div className="duo" data-aos="fade-up" data-aos-duration="1000"dangerouslySetInnerHTML={{ __html: `
        <video class="full" loop muted autoplay playsinline>
            <source src="${nft}" type="video/mp4">
        </video>`
        }}
        />
        <div className="responsive">
            <div data-aos="fade-up" data-aos-duration="1000" className="video"  dangerouslySetInnerHTML={{ __html: `
            <video loop muted autoplay playsinline>
                <source src="${bloom}" type="video/mp4">
            </video>`
            }}
            />
            <img src={winx1} alt="img"/>            
            <div data-aos="fade-up" data-aos-duration="1000"className="video"     dangerouslySetInnerHTML={{ __html: `
            <video loop muted autoplay playsinline>
                <source src="${exp}" type="video/mp4">
            </video>`
            }}
            />
            <img src={trix2} alt="img"/>
        </div>          
    </div>
    <div className="big-spacer"/>

    <FullImage src={full} alt='prototype' />
    
    <div className="spacer"></div>
      <h2 className='text-h2'>Thanks for scrolling</h2>
      <p className="text-description">Project made with love</p>
      <div className="big-spacer"></div>

    </section>
  )
}

export default Nyx
