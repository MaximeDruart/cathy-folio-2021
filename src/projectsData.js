/* eslint-disable no-dupe-keys */
import { v4 as uuidv4 } from "uuid"

import Grissini from "./components/projects/Grissini"
import grissiniCover from "./assets/img/works/covers/grissini.jpg"
import grissiniCoverSmall from "./assets/img/works/covers-small/grissini-min.jpg"
import grissiniVisual1 from "./assets/img/works/grissini/visual1.jpg"

import PXP from "./components/projects/PXP"
import pxpCover from "./assets/img/works/covers/pxp.jpg"
import pxpCoverSmall from "./assets/img/works/covers-small/pxp-min.jpg"
import pxpVisual1 from "./assets/img/works/pxp/visual1.jpg"

import Arcane from "./components/projects/Arcane"
import arcaneCover from "./assets/img/works/covers/arcane.jpg"
import arcaneCoverSmall from "./assets/img/works/covers-small/arcane-min.jpg"
import arcaneVisual1 from "./assets/img/works/arcane/visual1.jpg"

import sens from "./components/projects/Sens"
import sensCover from "./assets/img/works/covers/5sens.jpg"
import sensCoverSmall from "./assets/img/works/covers-small/5sens-min.jpg"
import sensVisual1 from "./assets/img/works/sens/visual1.jpg"

import Hologramme from "./components/projects/Hologramme"
import hologrammeCover from "./assets/img/works/covers/hologramme.jpg"
import hologrammeCoverSmall from "./assets/img/works/covers-small/hologramme-min.jpg"
import hologrammeVisual1 from "./assets/img/works/hologramme/visual1.jpg"

import Elijah from "./components/projects/Elijah"
import elijahCover from "./assets/img/works/covers/elijah.jpg"
import elijahCoverSmall from "./assets/img/works/covers-small/elijah-min.jpg"
import elijahVisual1 from "./assets/img/works/elijah/visual1.jpg"

// import Circl from "./components/projects/Circl"
// import circlCover from "./assets/img/works/covers/circl.jpg"
// import circlCoverSmall from "./assets/img/works/covers-small/circl-min.jpg"
// import circlVisual1 from "./assets/img/works/circl/visual1.jpg"

import Shibuya from "./components/projects/Shibuya"
import shibuyaCover from "./assets/img/works/covers/shibuya.jpg"
import shibuyaCoverSmall from "./assets/img/works/covers-small/shibuya-min.jpg"
import shibuyaVisual1 from "./assets/img/works/shibuya/visual1.jpg"

import Bubble from "./components/projects/Bubble"
import bubbleCover from "./assets/img/works/covers/bubble.jpg"
import bubbleCoverSmall from "./assets/img/works/covers-small/bubble-min.jpg"
import bubbleVisual1 from "./assets/img/works/bubble/bubbleVisual1.png"

// import Sangen from "./components/projects/Sangen"
// import sangenCover from "./assets/img/works/covers/sangen.jpeg"
// import sangenCoverSmall from "./assets/img/works/covers-small/sangen-min.jpeg"
// import sangenVisual1 from "./assets/img/works/sangen/sangenVisual1.jpg"

import Desktop from "./components/projects/Desktop"
import desktopCover from "./assets/img/works/covers/desktop.jpg"
import desktopCoverSmall from "./assets/img/works/covers-small/desktop-min.jpg"
import desktopVisual1 from "./assets/img/works/desktop/desktopVisual1.jpg"

import Feels from "./components/projects/Feels"
import feelsCover from "./assets/img/works/covers/feels.jpg"
import feelsCoverSmall from "./assets/img/works/covers-small/feels-min.jpg"
import feelsVisual1 from "./assets/img/works/feels/feelsVisual1.jpg"

import Branding from "./components/projects/Branding"
import brandingCover from "./assets/img/works/covers/branding.jpg"
import brandingCoverSmall from "./assets/img/works/covers-small/branding-min.jpg"
import brandingVisual1 from "./assets/img/works/branding/visual1.jpg"

import Chanel from "./components/projects/Chanel"
import chanelCover from "./assets/img/works/covers/chanel.jpg"
import chanelCoverSmall from "./assets/img/works/covers-small/chanel-min.jpg"
import chanelVisual1 from "./assets/img/works/chanel/visual1.jpg"

import Paco from "./components/projects/Paco"
import pacoCover from "./assets/img/works/covers/paco.jpg"
import pacoCoverSmall from "./assets/img/works/covers-small/paco-min.jpg"
import pacoVisual1 from "./assets/img/works/paco/visual1.jpg"

import Zhonglin from "./components/projects/Zhonglin"
import ZhonglinCover from "./assets/img/works/covers/zhonglin.jpg"
import ZhonglinCoverSmall from "./assets/img/works/covers-small/zhonglin-min.jpg"
import zhonglinVisual1 from "./assets/img/works/zhonglin/visual1.jpg"

import Lv from "./components/projects/Lv"
import lvCover from "./assets/img/works/covers/lv.jpg"
import lvCoverSmall from "./assets/img/works/covers-small/lv-min.jpg"
import lvVisual1 from "./assets/img/works/lv/visual1.jpg"

let projectsData = [
  {
    name: "Zhonglin",
    path: "zhonglin",
    title: "UI design for Zhong Lin",
    coverImg: ZhonglinCover,
    coverImgSmall: ZhonglinCoverSmall,
    visual1: zhonglinVisual1,
    component: Zhonglin,
    date: "Apr. 2022",
    role: "Designer",
    techs: ["AdobeXD, Photoshop, Protopie"],
    description:
      "Zhong Lin is a self-taught photographer who started her career by experimenting with film. With a seductive color palette and an eccentricity to her work, Lin's distinctive style has caught the attention of Vogue China and Harper's Bazaar China. I decided to create a modern portfolio for this artist.",
  },
  {
    name: "Arcane",
    path: "arcane",
    title: "UI design for Arcane",
    coverImg: arcaneCover,
    coverImgSmall: arcaneCoverSmall,
    visual1: arcaneVisual1,
    component: Arcane,
    date: "Nov. 2021",
    role: "Designer",
    techs: ["AdobeXD, Photoshop"],
    description:
      "Being an avid League of Legends player, I fell in love with the Arcane series from Riot Games. This made me want to add my creative touch by combining my passions, so I created pages for each main character of the series. I let you admire the result!",
  },
  {
    name: "Louis Vuitton",
    path: "Lv",
    title: "The futur Trunk",
    coverImg: lvCover,
    coverImgSmall: lvCoverSmall,
    visual1: lvVisual1,
    component: Lv,
    date: "July 2022",
    role: "Designer",
    techs: ["Photoshop, Figma, Blender"],
    description:
      "Imagination and creation of a trunk of the future for Louis Vuitton. The one we imagined consists in burying the memories of the people using it, with a recovery of data during travels, textures that can be used as skin on the trunk, and much more...",
  },
  {
    name: "Branding",
    path: "branding",
    title: "Self branding",
    coverImg: brandingCover,
    coverImgSmall: brandingCoverSmall,
    visual1: brandingVisual1,
    component: Branding,
    date: "Feb. 2022",
    role: "Art direction",
    techs: ["AdobeXD, Photoshop, Illustrator"],
    description:
      "For several months I had a desire to create a graphic charter and a universe around my personality. I finally succeeded! I let you discover me : Cathy Dolle",
  },
  {
    name: "Project X",
    path: "project-x-paris",
    title: "Complete redesign of the Project X Paris website",
    coverImg: pxpCover,
    coverImgSmall: pxpCoverSmall,
    component: PXP,
    date: "Jul. 2021",
    role: "Designer, Web integrator",
    techs: ["Adobe XD, Wordpress, Elementor"],
    description:
      "Streetwear specialist born in 2015, Project X Paris offers an avant-garde concept where hip hop, sports, streetwear, lifestyle and art meet. My mission in this project was to make a cast of their official website to facilitate the purchases to the customers, and to have a more ergonomic interface as well as a graphic charter which corresponds to the brand.",
    visual1: pxpVisual1,
    websiteLink: "https://www.projectxparis.com/",
  },
  {
    name: "Chanel",
    path: "chanel",
    title: "Experimental website for Eau tendre de Chanel",
    coverImg: chanelCover,
    coverImgSmall: chanelCoverSmall,
    component: Chanel,
    date: "Feb. 2022",
    role: "Designer",
    techs: ["Adobe XD, Photoshop, Illustrator"],
    description:
      "L'Eau tendre de Chanel is the sweetest fragrance to bring out your femininity. Being one of my favorite perfumes, I decided to create an immersive site around it to highlight its qualities, its freshness, its sweetness as well as its accompanying range. L'eau tendre is a captivating perfume made of jasmine and rose essence. It is the feminine fragrance par excellence!",
    visual1: chanelVisual1,
  },
  {
    name: "5 Sens",
    path: "sens",
    title: "Poster for an experimental place",
    coverImg: sensCover,
    coverImgSmall: sensCoverSmall,
    visual1: sensVisual1,
    component: sens,
    date: "Feb. 2022",
    role: "DA, Designer",
    techs: ["Illustrator, Photoshop"],
    description:
      "Creation of an art center: musical cultures and experiments, in an exceptional architectural building. A plural and unlimited place (concert hall, immersive exhibitions, performances, projections, workshops etc...). The center and the programming tend to translate the energy of the musical and visual movement. The motorcycle: Music in all its forms with the main preoccupation of 'living the experience'",
  },
  {
    name: "Grissini",
    path: "grissini",
    title: "Design and development of the Grissini website",
    coverImg: grissiniCover,
    coverImgSmall: grissiniCoverSmall,
    visual1: grissiniVisual1,
    component: Grissini,
    date: "Feb. 2021",
    role: "Designer, Developer",
    techs: ["HTML/CSS/JS"],
    description:
      "Grissini Project is 4 musicians specialized in music for video games, anime and movies. Grissini decided to contact me to design and develop their website. With a strong interest in video games and piano, Grissini Project was the perfect client to use my skills!",
    websiteLink: "https://grissiniproject.com/",
  },
  {
    name: "Paco",
    path: "paco",
    title: "Paco digging culture",
    coverImg: pacoCover,
    coverImgSmall: pacoCoverSmall,
    component: Paco,
    date: "March. 2022",
    role: "Designer, Project Manager",
    techs: ["Figma, After effect, Protopie"],
    description:
      "The goal was to find an original post format and concept for the Paco app. Paco is for the diggers. It's the place where we share our artistic references and discover the gems of the people who inspire us: artists, friends, creatives, critics, etc.",
    visual1: pacoVisual1,
  },
  {
    name: "Elijah",
    path: "elijah",
    title: "Design and development of Elijah's portfolio",
    coverImg: elijahCover,
    coverImgSmall: elijahCoverSmall,
    visual1: elijahVisual1,
    component: Elijah,
    date: "Jan. 2022",
    role: "Designer, Dev",
    techs: ["Adobe XD, HTML, CSS, JS"],
    description: "Elijah is a photograph based in Paris!",
    websiteLink: "https://elijahbeta.netlify.app/index.html",
  },
  {
    name: "Feels",
    path: "feels",
    title: "Create with your feeling",
    coverImg: feelsCover,
    coverImgSmall: feelsCoverSmall,
    component: Feels,
    date: "Feb. 2022",
    role: "Designer, developer",
    techs: ["Processing, Illustrator, Adobe XD"],
    description:
      "A generative installation that takes into consideration the singularity of each individual. Each painting is made unique by the visitor's own experience.",
    visual1: feelsVisual1,
  },
  {
    name: "Shibuya",
    path: "shibuya",
    coverImg: shibuyaCover,
    coverImgSmall: shibuyaCoverSmall,
    title: "Logo creation for Shibuya",
    visual1: shibuyaVisual1,
    component: Shibuya,
    date: "Dec. 2021",
    role: "Designer",
    techs: ["Illustrator, Photoshop"],
    description:
      "Shibuya is known for its crossing, which is used by more than 100,000 people every day. The streets are very square and strict, and the area is very chic, minimalist and modern. My goal was to redesign their logo.",
  },
  {
    name: "Hologramme",
    path: "hologramme",
    title: "UI/UX Homepage for Hologramme",
    visual1: hologrammeVisual1,
    coverImg: hologrammeCover,
    coverImgSmall: hologrammeCoverSmall,
    component: Hologramme,
    date: "Dec. 2020",
    role: "Designer",
    techs: ["Adobe XD, Photoshop"],
    description: "Hologramme is a high end hat distributor. I was asked to redesign their B2C website",
  },
  {
    name: "Desktop",
    path: "desktop",
    title: "Desktop",
    coverImg: desktopCover,
    coverImgSmall: desktopCoverSmall,
    visual1: desktopVisual1,
    component: Desktop,
    date: "Jul. 2020",
    role: "Designer, Developer",
    techs: ["VueJS"],
    description:
      "Wanna watch my content on a computer? Lets do it ! I developped this project to learn VueJS. Enjoy !!",
    websiteLink: "https://cathydolle.github.io/#/",
  },
  {
    name: "Bubble Tea",
    path: "bubble-tea",
    title: "Bubble Tea maker",
    coverImg: bubbleCover,
    coverImgSmall: bubbleCoverSmall,
    visual1: bubbleVisual1,
    component: Bubble,
    date: "Jul. 2020",
    role: "Designer, Developer",
    techs: ["HTML, CSS, JS"],
    description:
      "I had to make a website using transition CSS at school, so I decided to make a Bubble Tea maker, enjoy :D",
    websiteLink: "https://cathydolle.github.io/bubbleTea/",
  },
]

projectsData = projectsData.map((project, index) => ({
  ...project,
  id: uuidv4(),
  index,
}))

export default projectsData
