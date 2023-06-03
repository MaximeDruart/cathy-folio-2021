/* eslint-disable no-dupe-keys */
import { v4 as uuidv4 } from "uuid"

// This is collection
import green from "./assets/img/archives/green.jpg"
import black from "./assets/img/archives/black.jpg"
import blue from "./assets/img/archives/blue.jpg"
import pink from "./assets/img/archives/pink.jpg"

// posters colo
import feelsBlue from "./assets/img/archives/feelsBlue.jpg"
import volPoster from "./assets/img/archives/volPoster.jpg"
// posters expo
import gardenPoster from "./assets/img/archives/gardenPoster.jpg"
import auraePoster from "./assets/img/archives/auraePoster.jpg"
import gardenTickets from "./assets/img/archives/gardenTickets.jpg"
import auraeTickets from "./assets/img/archives/auraeTickets.jpg"

import sylviaWeb from "./assets/img/archives/sylvia-web.jpg"

// processing
import lila from "./assets/img/archives/lila.jpg"
import Blob from "./assets/img/archives/blob.jpg"

// ghibli/game
import kaonashi from "./assets/img/archives/kaonashi.jpg"
import mononoke from "./assets/img/archives/mononoke.jpg"

// UI
import elijah from "./assets/img/archives/elijah.jpg"
import designr from "./assets/img/archives/designr.jpg"

// Edito
import zero from "./assets/img/archives/zero.jpg"

// myself
import selfBranding from "./assets/img/archives/selfBranding.jpg"
import selfCard from "./assets/img/archives/selfCard.jpg"


// 2022
import planetaria from "./assets/img/archives/planetaria.jpg"
import peaches from "./assets/img/archives/peaches.jpg"
import apollo from "./assets/img/archives/apollo.jpg"

// IA
import i7 from "./assets/img/archives/i7.png"

let archivesData = [
  {
    name: "apollo",
    coverImg: apollo,
    type: "UI Design",
    description: "Bohinc studio creates work of iconic beauty that honours traditional principles of craft and employs expertise in material and manufacturing techniques. I redesigned their website.",
    websiteLink: "https://www.cathydolle.com/works/bohinc",
  },
  {
    name: "sylvia website",
    coverImg: sylviaWeb,
    type: "UI Design",
    websiteLink: "https://sylvia-clothes.netlify.app/",
  },
  {
    name: "elijah",
    coverImg: elijah,
    type: "print",
    description: "Elijah is a french photographer based in Paris. I designed and developed his portfolio trying to create an identity to feat with his content. There is a preview of the Homepage. Case study avalaible on the link below.",
    websiteLink: "https://www.cathydolle.com/works/elijah",
  },
  {
    name: "planetaria",
    coverImg: planetaria,
    type: "UI Design",
    description: "Bohinc studio creates work of iconic beauty that honours traditional principles of craft and employs expertise in material and manufacturing techniques. I redesigned their website.",
    websiteLink: "https://www.cathydolle.com/works/bohinc",
  },
  {
    name: "Chrome 0.7",
    coverImg: i7,
    type: "IA",
    description: "Generated with MidJourney",
  },
  {
    name: "peaches",
    coverImg: peaches,
    type: "UI Design",
    description: "Bohinc studio creates work of iconic beauty that honours traditional principles of craft and employs expertise in material and manufacturing techniques. I redesigned their website.",
    websiteLink: "https://www.cathydolle.com/works/bohinc",
  },
  {
    name: "This is black",
    coverImg: black,
    type: "UI",
    description: "This is black is an UI composition inspired by MarcZeni. I used Zhong Lin's Picture for this design, an amazing photographer.",
  },
  {
    name: "DesignR",
    coverImg: designr,
    type: "ui",
    description: "DesignR is one of a tool that any designer or developer can use. Browse collection, find the Mixx you like and use it for your design or website. Easily and instantly download every element of each Mixx, including: images, typography and colors Simple and Efficent that’s DesignR. This is a fictive project we designed and developed with my group at school.",
    websiteLink: "https://designr.cathydolle.com/",
  },
  {
    name: "Zero10",
    coverImg: zero,
    type: "Print",
    description: "Preview of a magazine page about Fashion digital clothes NFT.",
  },
  {
    name: "Business Card",
    coverImg: selfCard,
    type: "mockup",
    description: "A preview of my business card, if you want to see my self branding you can visit my case study.",
    websiteLink: "https://www.cathydolle.com/works/branding",
  },
  {
    name: "Aurae poster",
    coverImg: auraePoster,
    type: "print",
    description: "Summer edition : Aurae Exposition for 5SENS, an experimental fictive place. Picture by Yomagick. If you want to see the project you can check my case study.",
    websiteLink: "https://www.cathydolle.com/works/sens",
  },
  {
    name: "lila",
    coverImg: lila,
    type: "processing",
    description: "I generate this form using Processing",
  },
  {
    name: "This is blue",
    coverImg: blue,
    type: "UI",
    description: "This is blue is an UI composition inspired by MarcZeni. I used Zhong Lin's Picture for this design, an amazing photographer.",
  },
  {
    name: "volPoster",
    coverImg: volPoster,
    type: "print",
    description: "I create this poster, and generate the pattern using my code made from scratch on Processing",
  },
  {
    name: "Garden poster",
    coverImg: gardenPoster,
    type: "print",
    description: "Spring edition : Garden Exposition for 5SENS, an experimental fictive place. Picture by Yomagick. If you want to see the project you can check my case study.",
    websiteLink: "https://www.cathydolle.com/works/sens",
  },
  {
    name: "Garden Tickets",
    coverImg: gardenTickets,
    type: "print",
    description: "Spring edition : Garden Exposition for 5SENS, an experimental fictive place. Entry tickets.Picture by Yomagick. If you want to see the project you can check my case study.",
    websiteLink: "https://www.cathydolle.com/works/sens",
  },
  {
    name: "This is green",
    coverImg: green,
    type: "UI",
    description: "This is green is an UI composition inspired by MarcZeni. I used Zhong Lin's Picture for this design, an amazing photographer.",
  },
  {
    name: "Self Kit",
    coverImg: selfBranding,
    type: "Design",
    description: "My personal branding kit :D. If you want to see my self branding you can visit my case study.",
    websiteLink: "https://www.cathydolle.com/works/branding",
  },
  {
    name: "Aurae Tickets",
    coverImg: auraeTickets,
    type: "print",
    description: "Summer edition : Aurae Exposition for 5SENS, an experimental fictive place. Entry tickets. Picture by Yomagick. If you want to see the project you can check my case study.",
    websiteLink: "https://www.cathydolle.com/works/sens",
  },
  {
    name: "This is pink",
    coverImg: pink,
    type: "UI",
    description: "This is pink is an UI composition inspired by MarcZeni. I used Zhong Lin's Picture for this design, an amazing photographer.",
  },
  {
    name: "Blob",
    coverImg: Blob,
    type: "3D",
    description: "This is a blob made with Three JS",
  },
  {
    name: "Feels Blue",
    coverImg: feelsBlue,
    type: "processing",
    description: "Post and pattern create and generate with a code on Processing, Blue palette. If you want to see more you can check my Feel's case study.",
    websiteLink: "https://www.cathydolle.com/works/feels",
  },
  {
    name: "Kaonashi human",
    coverImg: kaonashi,
    type: "Illustration",
    description: "Drawing made on a graphic tablet on the illustrator software, inspired by Suzani",
  },
  {
    name: "Princess Mononoke",
    coverImg: mononoke,
    type: "Illustration",
    description: "Drawing made on a graphic tablet on the illustrator software, inspired by Suzani",
  },
]

archivesData = archivesData.map((archiveProject) => ({ ...archiveProject, id: uuidv4() }))

export default archivesData
