import AOS from "aos";
import React from "react"

// modules
import Solo from "../shared/modules/Solo"
import Thanks from "../shared/modules/Thanks"

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
      <div className="details">
        <Solo
          medias={[
            {
              type: "image",
              src: p1
            },
            {
              type: "image",
              src: jinx
            },
            {
              type: "image",
              src: jinx2
            },
            {
              type: "image",
              src: p2
            },
            {
              type: "image",
              src: silco
            },
            {
              type: "image",
              src: silco2
            },
            {
              type: "image",
              src: p3
            },
            {
              type: "image",
              src: sisters
            },
            {
              type: "image",
              src: vi
            },
          ]}
        />
      </div>

      <FullImage src={arcane} alt='prototype' />

      <Thanks
        text="Project made with fun and love"
      />

    </section>
  )
}

export default Arcane
