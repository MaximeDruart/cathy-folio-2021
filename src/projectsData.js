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
import sangenCover from "./assets/img/works/sangen.svg"
import sangenVisual1 from "./assets/img/works/sangen/sangenVisual1.jpg"

import Desktop from "./components/projects/Desktop"
import desktopCover from "./assets/img/works/desktop.jpg"
import desktopVisual1 from "./assets/img/works/desktop/desktopVisual1.jpg"

let projectsData = [
  {
    name: "Project X",
    path: "project-x-paris",
    title: "Refonte complète du site Project X Paris",
    coverImg: pxpCover,
    component: PXP,
    date: "Jul. 2021",
    role: "UI/UX Designer & web integrator",
    techs: ["Wordpress, Elementor"],
    description:
      "Spécialiste en vêtements streetwear née en 2015, Project X Paris propose un concept avant gardiste où se rencontrent hip hop, sport, streetwear, lifestyle et art. Ma mission dans ce projet était de faire une fonte de leur site officiel pour faciliter les achats aux clients, et avoir une interface plus ergonomique ainsi qu'une charte graphique qui correspond à la marque.",
    visual1: pxpVisual1,
    websiteLink: "https://www.projectxparis.com/",
    color1: "#000000",
    color2: "#FFFFFF",
  },
  {
    name: "Arcane",
    path: "arcane",
    title: "UI design for Arcane",
    coverImg: arcaneCover,
    visual1: arcaneVisual1,
    component: Arcane,
    date: "November 2021",
    role: "Ui designer",
    techs: ["AdobeXD Photoshop"],
    description:
      "Étant une grande joueuse de League of Legends, je suis tombée sous le charme de la série Arcane de Riot Games. Cela m'a donné envie d'ajouter ma touche créative en combinant mes passions, j'ai donc crée des pages pour chaque personnage principal de la série. Je vous laisse admirer le résultat !"
  },
  {
    name: "Grissini",
    path: "grissini",
    title: "Design and developtment of the Grissini website",
    coverImg: grissiniCover,
    visual1: grissiniVisual1,
    component: Grissini,
    date: "Février 2021",
    role: "Design, Front end dev",
    techs: ["HTML/CSS/JS"],
    description:"Grissini Project, c'est 4 musiciens spécialisés dans la musique de jeux vidéos, d'animés et de films. Grissini a décidé de me contacter pour designer et développer leur site internet. Portant de grands intérêts pour les jeux vidéos et le piano, Grissini Project était le client idéal pour mettre en oeuvre mes compétances !",
    websiteLink: "https://grissiniproject.com/",
  },
  {
    name: "Circl.GG",
    path: "Circl",
    title: "UI & Graphic design for Circl.GG",
    coverImg: circlCover,
    visual1: circlVisual1,
    component: Circl,
    date: "December 2021",
    role: "UI Design",
    techs: ["Adobe XD, ","Illustrator"],
    description:"Circl.GG est une application pour la recherche de joueur sur les jeux Riot Games comme League of Legends, il y a également un système de club et de tournois. J'ai du m'occuper de la charte graphique et de l'UI UX design de l'application.",
    websiteLink: "",
  },
  {
    name: "Shibuya",
    path: "shibuya",
    coverImg: shibuyaCover,
    title: "Logo creation for Shibuya",
    visual1: shibuyaVisual1,
    component: Shibuya,
    date: "December 2021",
    role: "Designer",
    techs: ["Illustrator, photoshop"],
    description:"Shibuya est reconnu pour son crossing (sa traversée), qui est emprunté par plus de 100,000 personnes chaque jour. Les rues sont très carrées strictes, et le quartier très chic, minimaliste et moderne. J'avais pour objectif de refaire leur logo."
  },
  {
    name: "Hologramme",
    path: "hologramme",
    title: "UI/UX Homepage for Hologramme",
    visual1: hologrammeVisual1,
    coverImg: hologrammeCover,
    component: Hologramme,
    date: "December. 2020",
    role: "UI UX Designer",
    techs: ["Adobe XD,", " Photoshop"],
    description:
      "Hologramme est un distributeur de chapeau haut de gamme. J'ai eu pour mission de refaire le design de leur site internet B2C"
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
    description:"J'avais pour mission de créer un programme sur Processing. J'ai décidé de créer un générateur de pattern aléatoire au niveau des formes mais également des couleurs."
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

projectsData = projectsData.map((project, index) => ({ ...project, id: uuidv4(), index }))

export default projectsData
