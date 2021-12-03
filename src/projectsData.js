/* eslint-disable no-dupe-keys */
import { v4 as uuidv4 } from "uuid"

import Grissini from "./components/projects/Grissini"
import grissiniCover from "./assets/img/works/grissini.jpg"
import grissiniVisual1 from "./assets/img/works/grissini/visual1.jpg"

import PXP from "./components/projects/PXP"
import pxpCover from "./assets/img/works/pxp.jpg"
import pxpVisual1 from "./assets/img/works/pxp/visual1.jpg"

import Flamalice from "./components/projects/Flamalice"
import flamaliceCover from "./assets/img/works/flamalice.jpg"

import Arcane from "./components/projects/Arcane"
import arcaneCover from "./assets/img/works/arcane.jpg"
import arcaneVisual1 from "./assets/img/works/arcane/visual1.jpg"

import Hologramme from "./components/projects/Hologramme"
import hologrammeCover from "./assets/img/works/hologramme.jpg"
import hologrammeVisual1 from "./assets/img/works/hologramme/visual1.jpg"

import Shibuya from "./components/projects/Shibuya"
import shibuyaCover from  "./assets/img/works/shibuya.jpg"
import shibuyaVisual1 from "./assets/img/works/shibuya/visual1.jpg"

let projectsData = [
  {
    name: "Project X",
    path: "Project X Paris",
    title: "Refonte complète du site Project X Paris",
    coverImg: pxpCover,
    component: PXP,
    date: "Jul. 2021",
    role: "UI/UX Designer & web integrator",
    techs: ["Wordpress, Elementor"],
    description:"Spécialiste en vêtements streetwear née en 2015, Project X Paris propose un concept avant gardiste où se rencontrent hip hop, sport, streetwear, lifestyle et art. Ma mission dans ce projet était de faire une fonte de leur site officiel pour faciliter les achats aux clients, et avoir une interface plus ergonomique ainsi qu'une charte graphique qui correspond à la marque."
    ,visual1: pxpVisual1,
    websiteLink: "https://www.projectxparis.com/",
  },
  {
    name: "Grissini",
    path: "grissini",
    title: "Design and developtment of the Grissini website",
    coverImg: grissiniCover,
    visual1: grissiniVisual1,
    component: Grissini,
    date: "Jul. 2021",
    role: "Design, Front end dev",
    techs: ["HTML/CSS/JS", "React", "Adobe XD", "Illustrator"],
    description:
      "During a HETIC school project, we had to build an interactive data visualization experience in a team in 2 weeks. While looking for interesting data sets, I found a set corresponding to the whole set of Pitchfork magazine's music reviews and we used this as a basis to design a visualization and analysis of these data.  From there I conceptualized the project and worked with designers to develop the site.",
    websiteLink: "https://pitchfork.herokuapp.com/",
    githubLink: "https://github.com/MaximeDruart/pitchfork",
    credits: {
      Development: { name: "Maxime Druart" },
      Designer: {
        name: "Aurélie Do",
        link: "https://www.behance.net/aureliedo",
      },
    },
  },
  {
    name: "Shibuya",
    path: "Shibuya",
    coverImg: shibuyaCover,
    title: "Logo creation for Shibuya",
    visual1: shibuyaVisual1,
    component: Shibuya,
    date: "Jul. 2020",
    role: "Front end dev, back end dev",
    techs: ["HTML/CSS/JS", "React", "WebGL / THREE.js", "Node", "MongoDB"],
    description:
      "During a HETIC school project, we had to build an interactive data visualization experience in a team in 2 weeks. While looking for interesting data sets, I found a set corresponding to the whole set of Pitchfork magazine's music reviews and we used this as a basis to design a visualization and analysis of these data.  From there I conceptualized the project and worked with designers to develop the site.",
    websiteLink: "https://pitchfork.herokuapp.com/",
    githubLink: "https://github.com/MaximeDruart/pitchfork",
    credits: {
      Development: { name: "Maxime Druart" },
      Designer: {
        name: "Aurélie Do",
        link: "https://www.behance.net/aureliedo",
      },
    },
  },
  {
    name: "Hologramme",
    path: "Hologramme",
    title: "UI/UX Homepage for Hologramme",
    visual1: hologrammeVisual1,
    coverImg: hologrammeCover,
    component: Hologramme,
    date: "Jul. 2020",
    role: "Front end dev, back end dev",
    techs: ["HTML/CSS/JS", "React", "WebGL / THREE.js", "Node", "MongoDB"],
    description:
      "During a HETIC school project, we had to build an interactive data visualization experience in a team in 2 weeks. While looking for interesting data sets, I found a set corresponding to the whole set of Pitchfork magazine's music reviews and we used this as a basis to design a visualization and analysis of these data.  From there I conceptualized the project and worked with designers to develop the site.",
    websiteLink: "https://pitchfork.herokuapp.com/",
    githubLink: "https://github.com/MaximeDruart/pitchfork",
    credits: {
      Development: { name: "Maxime Druart" },
      Designer: {
        name: "Aurélie Do",
        link: "https://www.behance.net/aureliedo",
      },
    },
  },
  {
    name: "Arcane",
    path: "Arcane",
    title: "UI design for Arcane",
    coverImg: arcaneCover,
    visual1: arcaneVisual1,
    component: Arcane,
    date: "Jul. 2020",
    role: "Front end dev, back end dev",
    techs: ["HTML/CSS/JS", "React", "WebGL / THREE.js", "Node", "MongoDB"],
    description:
      "During a HETIC school project, we had to build an interactive data visualization experience in a team in 2 weeks. While looking for interesting data sets, I found a set corresponding to the whole set of Pitchfork magazine's music reviews and we used this as a basis to design a visualization and analysis of these data.  From there I conceptualized the project and worked with designers to develop the site.",
    websiteLink: "https://pitchfork.herokuapp.com/",
    githubLink: "https://github.com/MaximeDruart/pitchfork",
    credits: {
      Development: { name: "Maxime Druart" },
      Designer: {
        name: "Aurélie Do",
        link: "https://www.behance.net/aureliedo",
      },
    },
  },
  {
    name: "Flamalice",
    path: "Flamalice",
    title: "Website for a digital artist : Flamalice",
    coverImg: flamaliceCover,
    component: Flamalice,
    date: "Jul. 2020",
    role: "Front end dev, back end dev",
    techs: ["HTML/CSS/JS", "React", "WebGL / THREE.js", "Node", "MongoDB"],
    description:
      "During a HETIC school project, we had to build an interactive data visualization experience in a team in 2 weeks. While looking for interesting data sets, I found a set corresponding to the whole set of Pitchfork magazine's music reviews and we used this as a basis to design a visualization and analysis of these data.  From there I conceptualized the project and worked with designers to develop the site.",
    websiteLink: "https://pitchfork.herokuapp.com/",
    githubLink: "https://github.com/MaximeDruart/pitchfork",
    credits: {
      Development: { name: "Maxime Druart" },
      Designer: {
        name: "Aurélie Do",
        link: "https://www.behance.net/aureliedo",
      },
    },
  },
]

projectsData = projectsData.map((project) => ({ ...project, id: uuidv4() }))

export default projectsData
