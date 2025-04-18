/* eslint-disable no-dupe-keys */
import { v4 as uuidv4 } from "uuid"

// import Arcane from "./components/projects/Arcane"
// import arcaneCover from "./assets/img/works/covers/arcane.jpg"
// import arcaneCoverSmall from "./assets/img/works/covers-small/arcane-min.jpg"
// import arcaneVisual1 from "./assets/img/works/arcane/visual1.jpg"

import Zhonglin from "./components/projects/Zhonglin"
import ZhonglinCover from "./assets/img/works/covers/zhonglin.jpg"
import ZhonglinCoverSmall from "./assets/img/works/covers-small/zhonglin-min.jpg"
import zhonglinVisual1 from "./assets/img/works/zhonglin/visual1.jpg"

import Bohinc from "./components/projects/Bohinc"
import bohincCover from "./assets/img/works/covers/bohinc.jpg"
import bohincCoverSmall from "./assets/img/works/covers-small/bohinc-min.jpg"
import bohincVisual1 from "./assets/img/works/bohinc/visual1.jpg"

import Yeng from "./components/projects/Yeng"
import YengCover from "./assets/img/works/covers/yeng.jpg"
import YengCoverSmall from "./assets/img/works/covers-small/yeng-min.jpg"
import YengVisual1 from "./assets/img/works/Yeng/visual1.jpg"

import Hublot from "./components/projects/Hublot"
import hublotCover from "./assets/img/works/covers/hublot.jpg"
import hublotCoverSmall from "./assets/img/works/covers-small/hublot-min.jpg"
import hublotVisual1 from "./assets/img/works/hublot/visual1.jpg"

import Type from "./components/projects/Type"
import typeCover from "./assets/img/works/covers/type.jpg"
import typeCoverSmall from "./assets/img/works/covers-small/type-min.jpg"
import typeVisual1 from "./assets/img/works/type/visual1.jpg"

// import Blossom from "./components/projects/Blossom"
// import BlossomCover from "./assets/img/works/covers/Blossom.jpg"
// import BlossomCoverSmall from "./assets/img/works/covers-small/Blossom-min.jpg"
// import BlossomVisual1 from "./assets/img/works/Blossom/visual1.jpg"


// import Architech from "./components/projects/Architech"
// import ArchitechCover from "./assets/img/works/covers/Architech.jpg"
// import ArchitechCoverSmall from "./assets/img/works/covers-small/Architech-min.jpg"
// import ArchitechVisual1 from "./assets/img/works/Architech/visual1.jpg"


import Lea from "./components/projects/Lea"
import LeaCover from "./assets/img/works/covers/Lea.jpg"
import LeaCoverSmall from "./assets/img/works/covers-small/Lea-min.jpg"
import LeaVisual1 from "./assets/img/works/Lea/visual1.jpg"

import Ley from "./components/projects/Ley"
import LeyCover from "./assets/img/works/covers/Ley.jpg"
import LeyCoverSmall from "./assets/img/works/covers-small/Ley-min.jpg"
import LeyVisual1 from "./assets/img/works/Ley/visual1.jpg"


// import Poterie from "./components/projects/Poterie"
// import PoterieCover from "./assets/img/works/covers/Poterie.jpg"
// import PoterieCoverSmall from "./assets/img/works/covers-small/Poterie-min.jpg"
// import PoterieVisual1 from "./assets/img/works/Poterie/visual1.jpg"

import Nicolas from "./components/projects/Nicolas"
import NicolasCover from "./assets/img/works/covers/Nico.jpg"
import NicolasCoverSmall from "./assets/img/works/covers-small/Nico-min.jpg"
import NicolasVisual1 from "./assets/img/works/Nico/visual1.jpg"

import Grace from "./components/projects/Grace"
import GraceCover from "./assets/img/works/covers/Grace.jpg"
import GraceCoverSmall from "./assets/img/works/covers-small/Grace-min.jpg"
import GraceVisual1 from "./assets/img/works/Grace/visual1.jpg"

import Pxp from "./components/projects/Pxp"
import PxpCover from "./assets/img/works/covers/Pxp.jpg"
import PxpCoverSmall from "./assets/img/works/covers-small/Pxp-min.jpg"
import PxpVisual1 from "./assets/img/works/Pxp/visual1.jpg"

let projectsData = [
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
    techs: ["Figma, Photoshop, Protopie"],
    description:
      "Zhong Lin is a self-taught photographer with a seductive color palette and an eccentricity to her work. I decided to create a modern portfolio for this amazing artist.",
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
    websiteLink: "https://takashi-ashy.vercel.app/",
  },
  {
    name: "Yeng",
    path: "yeng",
    title: "Yeng",
    coverImg: YengCover,
    coverImgSmall: YengCoverSmall,
    visual1: YengVisual1,
    component: Yeng,
    date: "Apr. 2025",
    role: "Designer, Dev",
    techs: ["Figma, React"],
    description:
      "Yeng is a self-taught photographer with a seductive color palette and an eccentricity to her work. I decided to create a modern portfolio for this amazing artist.",
  },
  {
    name: "Nicolas",
    path: "Nicolas",
    title: "Nicolas Rollin",
    coverImg: NicolasCover,
    coverImgSmall: NicolasCoverSmall,
    visual1: NicolasVisual1,
    component: Nicolas,
    date: "Mar. 2024",
    role: "Designer, Developer",
    techs: ["Figma, React"],
    description:
      "I designed and developed a portfolio website for Nicolas Rollin, a talented photographer based in Paris. The website features a clean and minimalist design that elegantly showcases his photography work through a carefully curated gallery.",
      websiteLink: "https://www.nicolasrollin.com/"
  },
  {
    name: "PXP",
    path: "pxp",
    title: "PXP",
    coverImg: PxpCover,
    coverImgSmall: PxpCoverSmall,
    visual1: PxpVisual1,
    component: Pxp,
    date: "Dec. 2023",
    role: "Designer, AD",
    techs: ["Figma, React"],
    description:
      "I designed the new art direction and redesigned the e-commerce platform for Project X Paris, a streetwear fashion brand. The project focused on modernizing their visual identity while creating an engaging online shopping experience.",
  },
  {
    name: "Lea MUA",
    path: "Lea",
    title: "Makeup Artist Portfolio",
    coverImg: LeaCover,
    coverImgSmall: LeaCoverSmall,
    visual1: LeaVisual1,
    component: Lea,
    date: "Jan. 2024",
    role: "Designer, Developer",
    techs: ["Figma, React"],
    description:
      "I designed and developed a portfolio website for a talented makeup artist, showcasing her work and expertise in a modern and elegant way. The website features a clean design that highlights her makeup artistry through a carefully curated gallery of her best work.",

  }, 
  // {
  //   name: "Arcane",
  //   path: "arcane",
  //   title: "We lie when we are afraid",
  //   coverImg: arcaneCover,
  //   coverImgSmall: arcaneCoverSmall,
  //   visual1: arcaneVisual1,
  //   component: Arcane,
  //   date: "Nov. 2021",
  //   role: "Designer",
  //   techs: ["Figma, Photoshop"],
  //   description:
  //     "Being an avid League of Legends player, I fell in love with the Arcane series from Riot Games. This made me want to add my creative touch by combining my passions, so I created pages for each main character of the series. I let you admire the result!",
  //     websiteLink:'https://arcane-ruddy.vercel.app/'
  // }, 
  {
    name: "Grâce",
    path: "Grace",
    title: "Grace",
    coverImg: GraceCover,
    coverImgSmall: GraceCoverSmall,
    visual1: GraceVisual1,
    component: Grace,
    date: "Mar. 2024",
    role: "Designer, Developer",
    techs: ["Figma, React"],
    description:
      "I designed and developed a portfolio website for Grace, a talented photographer based in Paris. The website features a clean and minimalist design that elegantly showcases her photography work through a carefully curated gallery.",
      websiteLink: "https://www.grace-aymone.com/"
  },  
  {
    name: "Leana",
    path: "Ley",
    title: "Portfolio for Leana",
    coverImg: LeyCover,
    coverImgSmall: LeyCoverSmall,
    visual1: LeyVisual1,
    component: Ley,
    date: "Feb. 2024",
    role: "Designer, Developer",
    techs: ["Figma, React"],
    description:
      "I designed and developed a portfolio website for Leana, a talented photographer based in Dubai. The website showcases her stunning photography work through an elegant and minimalist design that lets her images take center stage.",
      websiteLink: "https://leanainan.com/"

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
  // {
  //   name: "Architech",
  //   path: "Architech",
  //   title: "Virtual Architect Innovation",
  //   coverImg: ArchitechCover,
  //   coverImgSmall: ArchitechCoverSmall,
  //   visual1: ArchitechVisual1,
  //   component: Architech,
  //   date: "Oct. 2023",
  //   role: "Designer, Developer",
  //   techs: ["Figma, Midjourney, React"],
  //   description:
  //     "Explore a cutting-edge web design project for architecture enthusiasts where AI-generated images take center stage. Midjourney seamlessly combines artificial intelligence and architectural aesthetics, offering a visually stunning experience.",
  //   websiteLink: 'https://archi-tech-v4.netlify.app/'
  // },  
  // {
  //   name: "Ceramic",
  //   path: "Poterie",
  //   title: "Ceramic Shop ",
  //   coverImg: PoterieCover,
  //   coverImgSmall: PoterieCoverSmall,
  //   visual1: PoterieVisual1,
  //   component: Poterie,
  //   date: "Nov. 2023",
  //   role: "Designer, Developer",
  //   techs: ["Figma, React JS, Midjourney"],
  //   description:
  //     "I wanted to create a pottery website, a curated space where artistry meets minimalism. All pictures were generated with Midjourney and shaped with precision on Figma and React, it's a digital canvas highlighting the pure essence of each ceramic creation. Experience the beauty of simplicity in a seamless and immersive exploration of pottery art.",
  //     websiteLink: "https://poterie-katy-v4.vercel.app/"
  // }, 
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
]

projectsData = projectsData.map((project, index) => ({
  ...project,
  id: uuidv4(),
  index,
}))

export default projectsData
