import React from 'react';
import Template from './Template';
import Solo from '../shared/modules/Solo';
import Duo from '../shared/modules/Duo';
import Thanks from '../shared/modules/Thanks';

import M2 from '../../assets/img/works/feels/feelsPreview.png'
import M1 from '../../assets/img/works/feels/feelsVisual1.jpg'
import video from '../../assets/img/works/feels/video.mp4' 
import placeholder from '../../assets/img/works/feels/thumbnail.jpg' 

import concept from '../../assets/img/works/feels/concept.png' 
import moods from '../../assets/img/works/feels/moods.png' 

import rPrint from '../../assets/img/works/feels/rPrint.png' 
import bPrint from '../../assets/img/works/feels/bPrint.png' 



function Feels() {
    return (
        <Template>
            <Solo
                medias={[
                    {
                    type: "image",
                    src: M1
                    }
                ]}
            />
            <video data-aos="fade-up" data-aos-duration="1000" controls poster={placeholder} src={video}></video>
            <Duo
                medias={[
                    {
                    type: "image",
                    src: concept
                    },
                    {
                    type: "image",
                    src: moods
                    }
                ]}
            />
            <Solo
                medias={[
                    {
                    type: "image",
                    src: M2
                    }
                ]}
            />
            <Duo
                medias={[
                    {
                    type: "image",
                    src: rPrint
                    },
                    {
                    type: "image",
                    src: bPrint
                    }
                ]}
            />
            <div className="demi-spacer"/>
            <h2 className="text-h2">Thanks for scrolling</h2>
            <p className="text-regular">Project made with love at ESD Paris during the digital event 2022 with amazing people.</p>
        </Template>
    );
}

export default Feels;