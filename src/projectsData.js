/* eslint-disable no-dupe-keys */
import { v4 as uuidv4 } from "uuid"

import Arcane from "./components/projects/Arcane"
import arcaneCover from "./assets/img/works/covers/arcane.jpg"
import arcaneCoverSmall from "./assets/img/works/covers-small/arcane-min.jpg"
import arcaneVisual1 from "./assets/img/works/arcane/visual1.jpg"

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

import Eden from "./components/projects/Eden"
import edenCover from "./assets/img/works/covers/eden.jpg"
import edenCoverSmall from "./assets/img/works/covers-small/eden-min.jpg"
import edenVisual1 from "./assets/img/works/eden/visual1.jpg"

import Blossom from "./components/projects/Blossom"
import BlossomCover from "./assets/img/works/covers/Blossom.jpg"
import BlossomCoverSmall from "./assets/img/works/covers-small/Blossom-min.jpg"
import BlossomVisual1 from "./assets/img/works/Blossom/visual1.jpg"

// import Branding from "./components/projects/Branding"
// import BrandingCover from "./assets/img/works/covers/Branding.jpg"
// import BrandingCoverSmall from "./assets/img/works/covers-small/Branding-min.jpg"
// import BrandingVisual1 from "./assets/img/works/Branding/visual1.jpg"

import Architech from "./components/projects/Architech"
import ArchitechCover from "./assets/img/works/covers/Architech.jpg"
import ArchitechCoverSmall from "./assets/img/works/covers-small/Architech-min.jpg"
import ArchitechVisual1 from "./assets/img/works/Architech/visual1.webp"

import Discogs from "./components/projects/Discogs"
import DiscogsCover from "./assets/img/works/covers/Discogs.jpg"
import DiscogsCoverSmall from "./assets/img/works/covers-small/Discogs-min.jpg"
import DiscogsVisual1 from "./assets/img/works/Discogs/visual1.jpg"


import Skincare from "./components/projects/Skincare"
import SkincareCover from "./assets/img/works/covers/Skincare.jpg"
import SkincareCoverSmall from "./assets/img/works/covers-small/Skincare-min.jpg"
import SkincareVisual1 from "./assets/img/works/Skincare/visual1.jpg"

import Poterie from "./components/projects/Poterie"
import PoterieCover from "./assets/img/works/covers/Poterie.jpg"
import PoterieCoverSmall from "./assets/img/works/covers-small/Poterie-min.jpg"
import PoterieVisual1 from "./assets/img/works/Poterie/visual1.jpg"


let projectsData = [
  {
    name: "Blossom",
    path: "blossom",
    title: "Unleash your full potential",
    coverImg: BlossomCover,
    coverImgSmall: BlossomCoverSmall,
    visual1: BlossomVisual1,
    component: Blossom,
    date: "June 2023",
    role: "Designer, Writer",
    techs: ["Figma, Photoshop, Blender"],
    description:
      "Blossom: A white paper created as part of my final year of Master's in digital creation at ESD Paris, with the objective of guiding individuals to discover their identity through an authentic portfolio",
  }, 
  {
    name: "Skincare",
    path: "Skincare",
    title: "Skincare Remastered",
    coverImg: SkincareCover,
    coverImgSmall: SkincareCoverSmall,
    visual1: SkincareVisual1,
    component: Skincare,
    date: "Nov. 2023",
    role: "Designer, Developer",
    techs: ["Figma, React"],
    description:
      "UI design and front-end development project centered around skincare. Embracing a minimalist aesthetic, I crafted a seamless experience with React that's as clean and soothing as a fresh skincare routine.",
      websiteLink: 'https://skincare-v4.netlify.app/'
  }, 
  {
    name: "Poterie",
    path: "Poterie",
    title: "Elegant Clay",
    coverImg: PoterieCover,
    coverImgSmall: PoterieCoverSmall,
    visual1: PoterieVisual1,
    component: Poterie,
    date: "Nov. 2023",
    role: "Designer, Developer",
    techs: ["Figma, React JS, Midjourney"],
    description:
      "I wanted to create a pottery website, a curated space where artistry meets minimalism. All pictures were generated with Midjourney and shaped with precision on Figma and React, it's a digital canvas highlighting the pure essence of each ceramic creation. Experience the beauty of simplicity in a seamless and immersive exploration of pottery art.",
      websiteLink: "https://poterie.netlify.app/"
  }, 
  {
    name: "Architech",
    path: "Architech",
    title: "Virtual Architect Innovation",
    coverImg: ArchitechCover,
    coverImgSmall: ArchitechCoverSmall,
    visual1: ArchitechVisual1,
    component: Architech,
    date: "Oct. 2023",
    role: "Designer, Developer",
    techs: ["Figma, Midjourney, React"],
    description:
      "Explore a cutting-edge web design project for architecture enthusiasts where AI-generated images take center stage. Midjourney seamlessly combines artificial intelligence and architectural aesthetics, offering a visually stunning experience.",
    websiteLink: 'https://archi-tech-v4.netlify.app/'
  }, 
  {
    name: "Zhong lin",
    path: "zhonglin",
    title: "Creative Photo's",
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
    name: "Discogs",
    path: "Discogs",
    title: "Discogs Remastered",
    coverImg: DiscogsCover,
    coverImgSmall: DiscogsCoverSmall,
    visual1: DiscogsVisual1,
    component: Discogs,
    date: "Nov. 2023",
    role: "Designer, Developer",
    techs: ["Figma, React"],
    description:
      "In the scope of this project, I completely revamped the Discogs website, specialized in vinyl sales, by giving it a fresh design and developing the platform using React. The aim is to provide an outstanding user experience and redefine the standards in the online vinyl music industry.",
      websiteLink: 'https://discogs-v4.netlify.app/'
  },    
  // {
  //   name: "Branding",
  //   path: "branding",
  //   title: "Personal branding identity",
  //   coverImg: BrandingCover,
  //   coverImgSmall: BrandingCoverSmall,
  //   visual1: BrandingVisual1,
  //   component: Branding,
  //   date: "Oct. 2023",
  //   role: "Designer",
  //   techs: ["After, Figma, Premiere"],
  //   description:
  //     "I've crafted a unique personal brand centered around the minimalist theme. Through a careful selection of clean and simple design elements, I've cultivated a distinct image that embodies simplicity, elegance, and clarity. My minimalist aesthetic reflects my commitment to simplicity in both my personal and professional life.",
  // }, 
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
    name: "Eden",
    path: "eden",
    title: "Nature &",
    coverImg: edenCover,
    coverImgSmall: edenCoverSmall,
    visual1: edenVisual1,
    component: Eden,
    date: "June 2023",
    role: "Designer",
    techs: ["Midjourney, Photoshop, Figma"],
    description:
      "Eden is a new way to inspire designer  et creatives with help of AI like midjourney or stable diffusion. We tried it on the Spring 2012 Collection of KOCHE a Famous fashion brand from Paris. This Collection mix Tech & Nature.",
  }
]

projectsData = projectsData.map((project, index) => ({
  ...project,
  id: uuidv4(),
  index,
}))

export default projectsData
