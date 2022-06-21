/* eslint-disable no-dupe-keys */
import { v4 as uuidv4 } from "uuid"

// This is collection
import green from "./assets/img/archives/green.jpg"
import black from "./assets/img/archives/black.jpg"
import blue from "./assets/img/archives/blue.jpg"
import pink from "./assets/img/archives/pink.jpg"

// posters colo
import feelsRed from "./assets/img/archives/feelsRed.jpg"
import feelsBlue from "./assets/img/archives/feelsBlue.jpg"
import killPoster from "./assets/img/archives/killPoster.jpg"
import volPoster from "./assets/img/archives/volPoster.jpg"
// posters expo
import gardenPoster from "./assets/img/archives/gardenPoster.jpg"
import auraePoster from "./assets/img/archives/auraePoster.jpg"
import gardenTickets from "./assets/img/archives/gardenTickets.jpg"
import auraeTickets from "./assets/img/archives/auraeTickets.jpg"
import auraeKit from "./assets/img/archives/auraeKit.jpg"

// processing
import lila from "./assets/img/archives/lila.jpg"
import distortion from "./assets/img/archives/distortion.jpg"
import Blob from "./assets/img/archives/blob.jpg"

// ghibli/game
import mandala from "./assets/img/archives/mandala.jpg"
import kaonashi from "./assets/img/archives/kaonashi.jpg"
import mononoke from "./assets/img/archives/mononoke.jpg"
import acnh from "./assets/img/archives/acnh.jpg"

// UI
import elijah from "./assets/img/archives/elijah.jpg"
import designr from "./assets/img/archives/designr.jpg"

// Edito
import parallele from "./assets/img/archives/parallele.jpg"

// 3D
import isometricRoom from "./assets/img/archives/isometricRoom.jpg"

// myself
import selfBranding from "./assets/img/archives/selfBranding.jpg"
import selfCard from "./assets/img/archives/selfCard.jpg"

// music
import bibi from "./assets/img/archives/bibi.jpg"

// 2022
import zero from "./assets/img/archives/zero.jpg"
import room2 from "./assets/img/archives/room2.jpg"

let archivesData = [
  {
    name: "elijah",
    coverImg: elijah,
    type: "print",
    description: "Elijah is a french photographer based in Paris. I designed and developed his portfolio trying to create an identity to feat with his content. There is a preview of the Homepage. Case study avalaible on the link below.",
    websiteLink: "https://www.cathydolle.com/works/elijah",
  },
  {
    name: "This is black",
    coverImg: black,
    type: "UI",
    description: "This is black is an UI composition inspired by MarcZeni. I used Zhong Lin's Picture for this design, an amazing photographer.",
  },
  {
    name: "Isometric 3D room",
    coverImg: isometricRoom,
    type: "3D",
    description: "This is my first 3D creation using Blender. Thanks to PolygonRunaway for his amazing course.",
  },
  {
    name: "DesignR",
    coverImg: designr,
    type: "ui",
    description: "DesignR is one of a tool that any designer or developer can use. Browse collection, find the Mixx you like and use it for your design or website. Easily and instantly download every element of each Mixx, including: images, typography and colors Simple and Efficent that’s DesignR. This is a fictive project we designed and developed with my group at school.",
    websiteLink: "https://designr.cathydolle.com/",
  },
  {
    name: "My room in 3D",
    coverImg: room2,
    type: "3D",
    description: "I created my room on spline, and put a lot of my passions on it, it was a very nice experience! Love the soft",
  },
  {
    name: "Zero10",
    coverImg: room2,
    type: "Print",
    description: "Preview of a magazine page about Fashion digital clothes NFT.",
  },
  {
    name: "My ACNH Island",
    coverImg: acnh,
    type: "print",
    description: "Being a big fan of animal crossing, I always liked to create my own little universe. I find the ACNH version very complete, which has allowed me to expand and develop my creativity. My island named 'Eldia' (a little reference to SNK ;) ) has been recorded in a video, and viewed over than 1 million times on Youtube !! For those who are curious, don't hesitate to watch it :D. All these helped me a lot for my creativity and inspiration, I highly recommend the game for those who don't have it ^-^",
    websiteLink: "https://www.youtube.com/watch?v=QbiMWZTUefU&t=31s",
  },
  {
    name: "Aurae Kit",
    coverImg: auraeKit,
    type: "print",
    description: "Summer edition : Aurae Exposition for 5SENS, an experimental fictive place. Picture by Yomagick. If you want to see the project you can check my case study.",
    websiteLink: "https://www.cathydolle.com/works/sens",
  },
  {
    name: "Bibi The weekend",
    coverImg: bibi,
    type: "music",
    description: "Bibi is one of my favourite singer, and I decided to made some art with her. I also wanted to share you her album that is amazing.",
    websiteLink: "https://www.youtube.com/watch?v=EDUDc2JXQ9A&t=1422s",
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
    name: "kill Poster geometry print",
    coverImg: killPoster,
    type: "Print",
    description: "Creation of a poster, the 'killPoster' pattern was generated with my code on Processing",
  },
  {
    name: "Parallele magazine",
    coverImg: parallele,
    type: "Print",
    description: "Realization of a cover for the magazine 'parallele', art in the culture of science.",
  },
  // {
  //   name: "Flamalice portfolio",
  //   coverImg: flamalice,
  //   type: "website",
  //   description: "Portfolio I designed and developed for the artist Flamalice",
  //   websiteLink: "https://flamalice.com/",
  // },
  {
    name: "Feels Red",
    coverImg: feelsRed,
    type: "processing",
    description: "Post and pattern create and generate with a code on Processing, red palette. If you want to see more you can check my Feel's case study.",
    websiteLink: "https://www.cathydolle.com/works/feels",
  },
  {
    name: "Kaonashi human",
    coverImg: kaonashi,
    type: "Illustration",
    description: "Drawing made on a graphic tablet on the illustrator software, inspired by Suzani",
  },
  {
    name: "Mandala",
    coverImg: mandala,
    type: "Illustrator",
    description: "Mandala made on Illustrator for a homework, using the main elements of the movie 'Spirited Away'.",
  },
  {
    name: "Distorsion Processing",
    coverImg: distortion,
    description: "Creating a distortion canva on Processing",
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
