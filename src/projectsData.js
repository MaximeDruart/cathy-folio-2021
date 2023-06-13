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

import Type from "./components/projects/Type"
import typeCover from "./assets/img/works/covers/type.jpg"
import typeCoverSmall from "./assets/img/works/covers-small/type-min.jpg"
import typeVisual1 from "./assets/img/works/type/visual1.jpg"

import Sylvia from "./components/projects/Sylvia"
import sylviaCover from "./assets/img/works/covers/sylvia.jpg"
import sylviaCoverSmall from "./assets/img/works/covers-small/sylvia-min.jpg"
import sylviaVisual1 from "./assets/img/works/sylvia/visual1.jpeg"

import Eden from "./components/projects/Eden"
import edenCover from "./assets/img/works/covers/eden.jpg"
import edenCoverSmall from "./assets/img/works/covers-small/eden-min.jpg"
import edenVisual1 from "./assets/img/works/eden/visual1.jpg"

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
    name: "Eden",
    path: "eden",
    title: "Nature & Tech",
    coverImg: edenCover,
    coverImgSmall: edenCoverSmall,
    visual1: edenVisual1,
    component: Eden,
    date: "June 2023",
    role: "Designer",
    techs: ["Midjourney, Photoshop, Figma"],
    description:
      "Eden is a new way to inspire designer  et creatives with help of AI like midjourney or stable diffusion. We tried it on the Spring 2012 Collection of KOCHE a Famous fashion brand from Paris. This Collection mix Tech & Nature.",
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
    name: "Sylvia",
    path: "Sylvia",
    title: "Sylvia",
    coverImg: sylviaCover,
    coverImgSmall: sylviaCoverSmall,
    visual1: sylviaVisual1,
    component: Sylvia,
    date: "June 2023",
    role: "Designer",
    techs: ["Figma, Unreal, Premiere"],
    description:
      "Imagine the future of fashion, using scenographie and 3D movement",
    websiteLink: "https://sylvia-clothes.netlify.app/"
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
  }
]

projectsData = projectsData.map((project, index) => ({
  ...project,
  id: uuidv4(),
  index,
}))

export default projectsData
