import React from "react";

// modules
import Solo from "../shared/modules/Solo";
import Responsive from "../shared/modules/Responsive";
import Thanks from "../shared/modules/Thanks";

import fullImage from "../../assets/img/works/poterie/fullImage.jpg";
import video from "../../assets/img/works/poterie/preview.mp4";
import img1 from "../../assets/img/works/poterie/img1.jpg";
import img2 from "../../assets/img/works/poterie/img2.jpg";
import img3 from "../../assets/img/works/poterie/img3.jpg";
import img4 from "../../assets/img/works/poterie/img4.jpg";
// import img5 from "../../assets/img/works/poterie/img5.jpg";
import img6 from "../../assets/img/works/poterie/img6.jpg";
import img7 from "../../assets/img/works/poterie/img7.jpg";
import img8 from "../../assets/img/works/poterie/img8.jpg";
import img9 from "../../assets/img/works/poterie/img9.jpg";
import img10 from "../../assets/img/works/poterie/img10.jpg";
import img11 from "../../assets/img/works/poterie/img11.jpg";

import FullImage from "../shared/FullImage";

const Poterie = () => {
  return (
    <section>
      <div className="details">
        <Solo
          medias={[
            {
              type: "video",
              src: video,
            },
            {
              type: "image",
              src: img1,
            },
            {
              type: "image",
              src: img2,
            },
            {
              type: "image",
              src: img3,
            },
            {
              type: "image",
              src: img4,
            },
            {
              type: "image",
              src: img6,
            },
            {
              type: "image",
              src: img7,
            },
          ]}
        />
      </div>

      <FullImage src={fullImage} alt="preview" />

      <div className="details responsive">
        <Responsive
          medias={[
            {
              type: "image",
              src: img8,
            },
            {
              type: "image",
              src: img9,
            },
            {
              type: "image",
              src: img10,
            },
            {
              type: "image",
              src: img11,
            },
          ]}
        />
      </div>

      <Thanks text="Content made with love for Elijah <3" />
    </section>
  );
};

export default Poterie;
