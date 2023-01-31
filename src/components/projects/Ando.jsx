import AOS from "aos";
import React from "react"

// modules
import Thanks from "../shared/modules/Thanks";
import Trio from "../shared/modules/Trio";
import Duo from "../shared/modules/Duo";

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

const Ando = () => {
  return (
    <section>
      <div className="details">
        <Trio
          medias={[
            {
              type: "image",
              src: i1,
            },
            {
              type: "image",
              src: i2,
            },
            {
              type: "image",
              src: i3
            }
          ]}
        />        
        <Duo
          medias={[
            {
              type: "image",
              src: i7,
            },
            {
              type: "image",
              src: i8,
            }
          ]}
        />  
        <Trio
          medias={[
            {
              type: "image",
              src: i5,
            },
            {
              type: "image",
              src: i6,
            },
            {
              type: "image",
              src: i9
            }
          ]}
        />   
        <Duo
          medias={[
            {
              type: "image",
              src: i10,
            },
            {
              type: "image",
              src: i4,
            }
          ]}
        /> 
        <Trio
          medias={[
            {
              type: "image",
              src: i11,
            },
            {
              type: "image",
              src: i12,
            },
            {
              type: "image",
              src: i13
            }
          ]}
        />   
        <Duo
          medias={[
            {
              type: "image",
              src: i14,
            },
            {
              type: "image",
              src: i15,
            }
          ]}
        /> 
      </div>

      <Thanks
        text="Project made with love, thanks to Ando and the powerfull of AI"
      />

    </section>
  )
}

export default Ando
