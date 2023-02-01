/* eslint-disable no-dupe-keys */
import { v4 as uuidv4 } from "uuid"

import Arcane from "./components/projects/Arcane"
import arcaneCover from "./assets/img/works/covers/arcane.jpg"
import arcaneCoverSmall from "./assets/img/works/covers-small/arcane-min.jpg"
import arcaneVisual1 from "./assets/img/works/arcane/visual1.jpg"

import sens from "./components/projects/Sens"
import sensCover from "./assets/img/works/covers/5sens.jpg"
import sensCoverSmall from "./assets/img/works/covers-small/5sens-min.jpg"
import sensVisual1 from "./assets/img/works/sens/visual1.jpg"

import Elijah from "./components/projects/Elijah"
import elijahCover from "./assets/img/works/covers/elijah.jpg"
import elijahCoverSmall from "./assets/img/works/covers-small/elijah-min.jpg"
import elijahVisual1 from "./assets/img/works/elijah/visual1.jpg"


// import Feels from "./components/projects/Feels"
// import feelsCover from "./assets/img/works/covers/feels.jpg"
// import feelsCoverSmall from "./assets/img/works/covers-small/feels-min.jpg"
// import feelsVisual1 from "./assets/img/works/feels/visual1.jpg"

import Branding from "./components/projects/Branding"
import brandingCover from "./assets/img/works/covers/branding.jpg"
import brandingCoverSmall from "./assets/img/works/covers-small/branding-min.jpg"
import brandingVisual1 from "./assets/img/works/branding/visual1.jpg"

import Zhonglin from "./components/projects/Zhonglin"
import ZhonglinCover from "./assets/img/works/covers/zhonglin.jpg"
import ZhonglinCoverSmall from "./assets/img/works/covers-small/zhonglin-min.jpg"
import zhonglinVisual1 from "./assets/img/works/zhonglin/visual1.jpg"

import Bohinc from "./components/projects/Bohinc"
import bohincCover from "./assets/img/works/covers/bohinc.jpg"
import bohincCoverSmall from "./assets/img/works/covers-small/bohinc-min.jpg"
import bohincVisual1 from "./assets/img/works/bohinc/visual1.jpg"

import Hublot from "./components/projects/Hublot"
import hublotCover from "./assets/img/works/covers/hublot.jpg"
import hublotCoverSmall from "./assets/img/works/covers-small/hublot-min.jpg"
import hublotVisual1 from "./assets/img/works/hublot/visual1.jpg"

import Cyberpunk from "./components/projects/Cyberpunk"
import cyberpunkCover from "./assets/img/works/covers/cyberpunk.jpg"
import cyberpunkCoverSmall from "./assets/img/works/covers-small/cyberpunk-min.jpg"
import cyberpunkVisual1 from "./assets/img/works/cyberpunk/visual1.jpg"

import Ando from "./components/projects/Ando"
import andoCover from "./assets/img/works/covers/ando.jpg"
import andoCoverSmall from "./assets/img/works/covers-small/ando-min.jpg"
import andoVisual1 from "./assets/img/works/ando/visual1.jpg"

import Type from "./components/projects/Type"
import typeCover from "./assets/img/works/covers/type.jpg"
import typeCoverSmall from "./assets/img/works/covers-small/type-min.jpg"
import typeVisual1 from "./assets/img/works/type/visual1.jpg"

let projectsData = [
  {
    name: "Zhong lin",
    path: "zhonglin",
    title: "A creative photographer",
    coverImg: ZhonglinCover,
    coverImgSmall: ZhonglinCoverSmall,
    visual1: zhonglinVisual1,
    component: Zhonglin,
    date: "Apr. 2022",
    role: "Designer",
    techs: ["AdobeXD, Photoshop, Protopie"],
    description:
      "Zhong Lin is a self-taught photographer with a seductive color palette and an eccentricity to her work. I decided to create a modern portfolio for this amazing artist.",
  },
  {
    name: "Type",
    path: "Type",
    title: "Type Department",
    coverImg: typeCover,
    coverImgSmall: typeCoverSmall,
    visual1: typeVisual1,
    component: Type,
    date: "Dec. 2022",
    role: "Designer",
    techs: ["Figma, Photoshop, Protopie"],
    description:
      "Redesign of the website Type Department, a fonderie of Typography. Minimalist & Modern interactive design.",
  },
  {
    name: "Hublot",
    path: "hublot",
    title: "Hublot x Murakami",
    coverImg: hublotCover,
    coverImgSmall: hublotCoverSmall,
    visual1: hublotVisual1,
    component: Hublot,
    date: "Aug. 2022",
    role: "Designer, Dev",
    techs: ["Figma, Photoshop, React"],
    description:
      "Hublot did a collaboration with Takashi Murakami, one of my favorite artist. My goal was to redesign the product page. I also challenged myself to develop it",
    websiteLink: "https://hublotxtakashi.netlify.app/",
  },
  {
    name: "Bohinc",
    path: "bohinc",
    title: "Minimalist Furniture",
    coverImg: bohincCover,
    coverImgSmall: bohincCoverSmall,
    visual1: bohincVisual1,
    component: Bohinc,
    date: "Sept. 2022",
    role: "Designer",
    techs: ["Figma, Photoshop"],
    description:
      "Bohinc studio creates work of iconic beauty that honours traditional principles of craft and employs expertise in material and manufacturing techniques. I redesigned their website.",
  },
  {
    name: "Ando",
    path: "ando",
    title: "Some AI Experimentation",
    coverImg: andoCover,
    coverImgSmall: andoCoverSmall,
    visual1: andoVisual1,
    component: Ando,
    date: "Nov. 2022",
    role: "Designer",
    techs: ["Figma, Photoshop"],
    description:
      "Small chromed generations thanks to the Ando plugin on Figma from references and handmade abstract shapes.",
  },
  {
    name: "Arcane",
    path: "arcane",
    title: "We lie when we are afraid",
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
    name: "Cyberpunk",
    path: "cyberpunk",
    title: "Cyberpunk design",
    coverImg: cyberpunkCover,
    coverImgSmall: cyberpunkCoverSmall,
    visual1: cyberpunkVisual1,
    component: Cyberpunk,
    date: "Oct. 2022",
    role: "Designer, Dev",
    techs: ["Figma, React"],
    description:
      "Being an avid Cyberpunk2077 player, I fell in love with the Cyberpunk series. This made me want to add my creative touch by combining my passions, so I created pages for each main character of the series. I let you admire the result!",
    websiteLink: "https://cyberpunkv4.netlify.app/",
  },
  {
    name: "Elijah",
    path: "elijah",
    title: "Elijah's portfolio",
    coverImg: elijahCover,
    coverImgSmall: elijahCoverSmall,
    visual1: elijahVisual1,
    component: Elijah,
    date: "Jan. 2022",
    role: "Designer, Dev",
    techs: ["Adobe XD, HTML, CSS, JS"],
    description: "Elijah is a photograph based in Paris! I designed and developed his website.",
    websiteLink: "https://www.elijahbenhammou.com/",
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
    name: "5 Sens",
    path: "sens",
    title: "An experimental place",
    coverImg: sensCover,
    coverImgSmall: sensCoverSmall,
    visual1: sensVisual1,
    component: sens,
    date: "Feb. 2022",
    role: "DA, Designer",
    techs: ["Illustrator, Photoshop"],
    description:
      "Creation of poster for an art center: musical cultures and experiments, in an exceptional architectural building.",
  },
  // {
  //   name: "Paco",
  //   path: "paco",
  //   title: "Paco digging culture",
  //   coverImg: pacoCover,
  //   coverImgSmall: pacoCoverSmall,
  //   component: Paco,
  //   date: "March. 2022",
  //   role: "Designer, Project Manager",
  //   techs: ["Figma, After effect, Protopie"],
  //   description:
  //     "The goal was to find an original post format and concept for the Paco app. Paco is for the diggers. It's the place where we share our artistic references and discover the gems of the people who inspire us: artists, friends, creatives, critics, etc.",
  //   visual1: pacoVisual1,
  // },
  // {
  //   name: "Feels",
  //   path: "feels",
  //   title: "Create with your feeling",
  //   coverImg: feelsCover,
  //   coverImgSmall: feelsCoverSmall,
  //   component: Feels,
  //   date: "Feb. 2022",
  //   role: "Designer, developer",
  //   techs: ["Processing, Illustrator, Adobe XD"],
  //   description:
  //     "A generative installation that takes into consideration the singularity of each individual. Each painting is made unique by the visitor's own experience.",
  //   visual1: feelsVisual1,
  // },
  // {
  //   name: "Shibuya",
  //   path: "shibuya",
  //   coverImg: shibuyaCover,
  //   coverImgSmall: shibuyaCoverSmall,
  //   title: "Logo creation for Shibuya",
  //   visual1: shibuyaVisual1,
  //   component: Shibuya,
  //   date: "Dec. 2021",
  //   role: "Designer",
  //   techs: ["Illustrator, Photoshop"],
  //   description:
  //     "Shibuya is known for its crossing, which is used by more than 100,000 people every day. The streets are very square and strict, and the area is very chic, minimalist and modern. My goal was to redesign their logo.",
  // },
]

projectsData = projectsData.map((project, index) => ({
  ...project,
  id: uuidv4(),
  index,
}))

export default projectsData
