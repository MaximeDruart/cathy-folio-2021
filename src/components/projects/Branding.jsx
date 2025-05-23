import React from 'react';

// modules
import Solo from "../shared/modules/Solo"
import Responsive from "../shared/modules/Responsive"

import M2 from "../../assets/img/works/sylvia/M2.png"


// videos
// import video1 from "../../assets/img/works/branding/video1.mp4"
import v1 from "../../assets/img/works/branding/v1.jpg"
import v2 from "../../assets/img/works/branding/v2.png"
import v3 from "../../assets/img/works/branding/v3.jpg"
import v4 from "../../assets/img/works/branding/v4.jpg"
import v5 from "../../assets/img/works/branding/v5.jpg"
import v6 from "../../assets/img/works/branding/v6.jpg"
// import v7 from "../../assets/img/works/branding/v7.jpg"
import v8 from "../../assets/img/works/branding/v8.jpg"
import v10 from "../../assets/img/works/branding/v10.jpg"



function Branding() {
    return (
        <section>
        <div className="details">
          <Solo
            medias={[
            //   {
            //       type: "video",
            //       src: video1
            //   },
              {
                  type: "image",
                  src: v1
              },
              {
                type: "image",
                src: v6
              },
              {
                type: "image",
                src: v2
              },
              {
                type: "image",
                src: v3
              },
              {
                type: "image",
                src: v5
              },
              {
                  type: "image",
                  src: v4
              },
              {
                type: "image",
                src: v10
              },
            //   {
            //       type: "image",
            //       src: v7
            //   },
              {
                type: "image",
                src: v8
              },
            ]}
          />
        </div>
      </section>
    );
}

export default Branding;