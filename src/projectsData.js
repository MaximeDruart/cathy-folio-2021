/* eslint-disable no-dupe-keys */
import { v4 as uuidv4 } from "uuid"

import Grissini from "./components/projects/Grissini"
import grissiniCover from "./assets/img/works/grissini.jpg"
import grissiniVisual1 from "./assets/img/works/grissini/visual1.jpg"

import PXP from "./components/projects/PXP"
import pxpCover from "./assets/img/works/pxp.jpg"
import pxpVisual1 from "./assets/img/works/pxp/visual1.jpg"

import Arcane from "./components/projects/Arcane"
import arcaneCover from "./assets/img/works/arcane.jpg"
import arcaneVisual1 from "./assets/img/works/arcane/visual1.jpg"

import Hologramme from "./components/projects/Hologramme"
import hologrammeCover from "./assets/img/works/hologramme.jpg"
import hologrammeVisual1 from "./assets/img/works/hologramme/visual1.jpg"

import Elijah from "./components/projects/Elijah"
import elijahCover from "./assets/img/works/elijah.jpg"
import elijahVisual1 from "./assets/img/works/elijah/visual1.jpg"

import Circl from "./components/projects/Circl"
import circlCover from "./assets/img/works/circl.jpg"
import circlVisual1 from "./assets/img/works/circl/visual1.jpg"

import Shibuya from "./components/projects/Shibuya"
import shibuyaCover from "./assets/img/works/shibuya.jpg"
import shibuyaVisual1 from "./assets/img/works/shibuya/visual1.jpg"

import Bubble from "./components/projects/Bubble"
import bubbleCover from "./assets/img/works/bubble.jpg"
import bubbleVisual1 from "./assets/img/works/bubble/bubbleVisual1.png"

import Sangen from "./components/projects/Sangen"
import sangenCover from "./assets/img/works/sangen.jpeg"
import sangenVisual1 from "./assets/img/works/sangen/sangenVisual1.jpg"

import Desktop from "./components/projects/Desktop"
import desktopCover from "./assets/img/works/desktop.jpg"
import desktopVisual1 from "./assets/img/works/desktop/desktopVisual1.jpg"

import Feels from "./components/projects/Feels"
import feelsCover from "./assets/img/works/feels.jpg"
import feelsVisual1 from "./assets/img/works/feels/feelsVisual1.jpg"

let projectsData = [
  {
    name: "Project X",
    path: "project-x-paris",
    title: "Complete redesign of the Project X Paris website",
    coverImg: pxpCover,
    component: PXP,
    date: "Jul. 2021",
    role: "UI/UX Designer & web integrator",
    techs: ["Wordpress, Elementor"],
    description:
      "Streetwear specialist born in 2015, Project X Paris offers an avant-garde concept where hip hop, sports, streetwear, lifestyle and art meet. My mission in this project was to make a cast of their official website to facilitate the purchases to the customers, and to have a more ergonomic interface as well as a graphic charter which corresponds to the brand.",
    visual1: pxpVisual1,
    websiteLink: "https://www.projectxparis.com/",
    color1: "#000000",
    color2: "#FFFFFF",
  },
  {
    name: "Feels",
    path: "feels",
    title: "Create with your feeling",
    coverImg: feelsCover,
    component: Feels,
    date: "Feb. 2022",
    role: "DA & developer",
    techs: ["Processing, Illustrator, Adobe XD"],
    description:
      "Une installation générative qui prend en considération la singularité de chaque individu. Chaque tableau est rendu unique par l expérience propre du visiteur.",
    visual1: feelsVisual1,
  },
  {
    name: "Arcane",
    path: "arcane",
    title: "UI design for Arcane",
    coverImg: arcaneCover,
    visual1: arcaneVisual1,
    component: Arcane,
    date: "Nov. 2021",
    role: "Ui designer",
    techs: ["AdobeXD Photoshop"],
    description:
      "Being an avid League of Legends player, I fell in love with the Arcane series from Riot Games. This made me want to add my creative touch by combining my passions, so I created pages for each main character of the series. I let you admire the result!",
  },
  {
    name: "Elijah",
    path: "elijah",
    title: "Design and development of Elijah's portfolio",
    coverImg: elijahCover,
    visual1: elijahVisual1,
    component: Elijah,
    date: "Jan. 2022",
    role: "Design, Dev",
    techs: ["HTML/CSS/JS"],
    description: "Elijah is a photograph based in Paris!",
    websiteLink: "https://elijahbeta.netlify.app/index.html",
  },
  {
    name: "Grissini",
    path: "grissini",
    title: "Design and developtment of the Grissini website",
    coverImg: grissiniCover,
    visual1: grissiniVisual1,
    component: Grissini,
    date: "Feb. 2021",
    role: "Design, Front end dev",
    techs: ["HTML/CSS/JS"],
    description:
      "Grissini Project is 4 musicians specialized in music for video games, anime and movies. Grissini decided to contact me to design and develop their website. With a strong interest in video games and piano, Grissini Project was the perfect client to use my skills!",
    websiteLink: "https://grissiniproject.com/",
  },
  {
    name: "Circl.GG",
    path: "Circl",
    title: "UI & Graphic design for Circl.GG",
    coverImg: circlCover,
    visual1: circlVisual1,
    component: Circl,
    date: "Dec. 2021",
    role: "UI Design",
    techs: ["Adobe XD, ", "Illustrator"],
    description:
      "Circl.GG is an application for player search on Riot Games like League of Legends, there is also a club and tournament system. I had to take care of the graphic charter and the UI UX design of the application.",
  },
  {
    name: "Shibuya",
    path: "shibuya",
    coverImg: shibuyaCover,
    title: "Logo creation for Shibuya",
    visual1: shibuyaVisual1,
    component: Shibuya,
    date: "Dec. 2021",
    role: "Designer",
    techs: ["Illustrator, photoshop"],
    description:
      "Shibuya is known for its crossing, which is used by more than 100,000 people every day. The streets are very square and strict, and the area is very chic, minimalist and modern. My goal was to redesign their logo.",
  },
  {
    name: "Hologramme",
    path: "hologramme",
    title: "UI/UX Homepage for Hologramme",
    visual1: hologrammeVisual1,
    coverImg: hologrammeCover,
    component: Hologramme,
    date: "Dec. 2020",
    role: "UI UX Designer",
    techs: ["Adobe XD,", " Photoshop"],
    description:
      "Hologramme is a high end hat distributor. I was asked to redesign their B2C website",
  },
  {
    name: "Sangen",
    path: "sangen",
    title: "Processing Sangen",
    coverImg: sangenCover,
    visual1: sangenVisual1,
    component: Sangen,
    date: "Dec. 2021",
    role: "Designer, Developer",
    techs: ["Processing", " Java"],
    description:
      "My mission was to create a program on Processing. I decided to create a random pattern generator for shapes but also for colors.",
  },
  {
    name: "Desktop",
    path: "desktop",
    title: "Desktop",
    coverImg: desktopCover,
    visual1: desktopVisual1,
    component: Desktop,
    date: "Jul. 2020",
    role: "Designer + Dev",
    techs: ["VueJS"],
    description:
      "Wanna watch my content on a computer? Lets do it ! I developped this project to learn VueJS. Enjoy !!",
    websiteLink: "https://cathydolle.github.io/#/",
  },
  // {
  //   name: "Flamalice",
  //   path: "flamalice",
  //   title: "Website for a digital artist : Flamalice",
  //   coverImg: flamaliceCover,
  //   component: Flamalice,
  //   date: "Jul. 2020",
  //   role: "Front end dev, back end dev",
  //   techs: ["HTML/CSS/JS", "React", "WebGL / THREE.js", "Node", "MongoDB"],
  //   description:
  //     "During a HETIC school project, we had to build an interactive data visualization experience in a team in 2 weeks. While looking for interesting data sets, I found a set corresponding to the whole set of Pitchfork magazine's music reviews and we used this as a basis to design a visualization and analysis of these data.  From there I conceptualized the project and worked with designers to develop the site.",
  //   websiteLink: "https://pitchfork.herokuapp.com/",
  //   githubLink: "https://github.com/MaximeDruart/pitchfork",
  //   credits: {
  //     Development: { name: "Maxime Druart" },
  //     Designer: {
  //       name: "Aurélie Do",
  //       link: "https://www.behance.net/aureliedo",
  //     },
  //   },
  // },
  {
    name: "Bubble Tea",
    path: "bubble-tea",
    title: "Bubble Tea maker",
    coverImg: bubbleCover,
    visual1: bubbleVisual1,
    component: Bubble,
    date: "Jul. 2020",
    role: "Designer + Dev",
    techs: ["HTML/CSS/JS"],
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
