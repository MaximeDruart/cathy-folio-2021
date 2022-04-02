/* eslint-disable no-dupe-keys */
import { v4 as uuidv4 } from "uuid"

import cl from "./assets/img/archives/cl.jpg"
import feelsRed from "./assets/img/archives/feelsRed.jpg"
import feels from "./assets/img/archives/feels.jpg"
import lila from "./assets/img/archives/lila.jpg"
import feelsBlue from "./assets/img/archives/feelsBlue.jpg"
import shibuya_device from "./assets/img/archives/shibuya_device.jpg"
import mandala from "./assets/img/archives/mandala.jpg"
import red from "./assets/img/archives/red.jpg"
import etude from "./assets/img/archives/etude.jpg"
import nike from "./assets/img/archives/nike.jpg"
import distortion from "./assets/img/archives/distortion.jpg"
import parallele from "./assets/img/archives/parallele.jpg"
import illu1 from "./assets/img/archives/illu1.jpg"
import illu2 from "./assets/img/archives/illu2.jpg"
import vans from "./assets/img/archives/vans.jpg"
import kill from "./assets/img/archives/kill.jpg"
import picto from "./assets/img/archives/picto.jpg"
import low from "./assets/img/archives/low.jpg"
import vol from "./assets/img/archives/vol.jpg"
import etudePhone from "./assets/img/archives/etude_phone.jpg"
import flamalice from "./assets/img/archives/flamalice.jpg"
import elijah from "./assets/img/archives/elijah.jpg"
import weekend from "./assets/img/archives/weekend.jpg"
import Blob from "./assets/img/archives/blob.jpg"
import room from "./assets/img/archives/room.jpg"
import selfKit from "./assets/img/archives/selfKit.jpg"

import flowerCard from "./assets/img/archives/flowerCard.jpg"
import folioBook from "./assets/img/archives/folioBook.jpg"
import logoWater from "./assets/img/archives/logoWater.jpg"

let archivesData = [
  {
    name: "elijah",
    coverImg: elijah,
    type: "print",
    description: "Homepage preview from Elijah portfolio",
  },
  {
    name: "Portfolio book",
    coverImg: folioBook,
    type: "mockup",
    description: "A little preview of my folio-book, coming soon...",
  },
  // {
  //   name: "DesignR",
  //   coverImg: designr,
  //   type: "website",
  //   description: "An API for designR (work only on desktop)",
  //   websiteLink: "https://designr.cathydolle.com/",
  // },
  {
    name: "1st Isometric room",
    coverImg: room,
    type: "3D",
    description: "This is my first 3D creation using Blender. Thanks to PolygonRunaway for his amazing course.",
  },
  {
    name: "Business Card",
    coverImg: flowerCard,
    type: "mockup",
    description: "A preview of my business card :)",
  },
  {
    name: "lila",
    coverImg: lila,
    type: "processing",
    description: "I generate this form using Processing",
  },
  {
    name: "vol",
    coverImg: vol,
    type: "print",
    description: "I create this poster, and generate the pattern using my code made from scratch on Processing",
    websiteLink: "",
  },
  {
    name: "Self Kit",
    coverImg: selfKit,
    type: "Design",
    description: "My personal branding kit :D",
  },
  {
    name: "Etude house",
    coverImg: etude,
    type: "Ui Design",
    description: "UI Design for the brand Etude House",
    websiteLink: "",
  },
  {
    name: "Blob",
    coverImg: Blob,
    type: "3D",
    description: "This is a blob made with Three JS",
  },
  {
    name: "picto",
    coverImg: picto,
    type: "logo",
    description: "I created pictograms of barrier gestures for the Shibuya district in Tokyo, going with the logo I made for it.",
  },
  {
    name: "weekend",
    coverImg: weekend,
    type: "print",
    description: "Photo of Bibi from her music video 'The weekend'"
  },
  {
    name: "Feels Blue",
    coverImg: feelsBlue,
    type: "processing",
    description: "Post and pattern create and generate with a code on Processing, Blue palette.",
  },
  {
    name: "Envelop logo",
    coverImg: logoWater,
    type: "Mockup",
    description: "Preview of my personal envelope where you will find my CV and information",
  },
  {
    name: "Nike homepage",
    coverImg: nike,
    type: "website",
    description: "UI Design of the homepage for the Nike website",
  },
  {
    name: "low",
    coverImg: low,
    type: "print",
    description: "Creation of a poster, the 'Low' pattern was generated with my code on Processing",
  },
  {
    name: "Kill geometry print",
    coverImg: kill,
    type: "Print",
    description: "Creation of a poster, the 'Kill' pattern was generated with my code on Processing",
  },
  {
    name: "Parallele magazine",
    coverImg: parallele,
    type: "Print",
    description: "Realization of a cover for the magazine 'parallele', art in the culture of science.",
  },
  {
    name: "Feels Cover",
    coverImg: feels,
    type: "Processing",
    description: "Creative cover for my project 'Feels'"
  },
  {
    name: "Flamalice portfolio",
    coverImg: flamalice,
    type: "website",
    description: "Portfolio I designed and developed for the artist Flamalice",
    websiteLink: "https://flamalice.com/",
  },
  {
    name: "etude house",
    coverImg: etudePhone,
    type: "UI design",
    description: "responsive UI design for Etude house brand, page checkout",
  },
  {
    name: "Feels Red",
    coverImg: feelsRed,
    type: "processing",
    description: "Post and pattern create and generate with a code on Processing, red palette.",
  },
  {
    name: "Cl presave",
    coverImg: cl,
    type: "Ui design",
    description: "Preview of the pre-save page for the release of the CL album",
  },
  {
    name: "Kaonashi human",
    coverImg: illu1,
    type: "Illustration",
    description: "Drawing made on a graphic tablet on the illustrator software, inspired by Suzani",
  },
  {
    name: "vans",
    coverImg: vans,
    type: "Ui design",
    description: "UI Design of a log in page for the brand Vans",
  },
  {
    name: "Shibuya Device Mockup",
    coverImg: shibuya_device,
    type: "Print",
    description: "Mockup on ipad of the logo I made for the shibuya district",
  },
  {
    name: "Mandala",
    coverImg: mandala,
    type: "Illustrator",
    description: "Mandala made on Illustrator for a homework, using the main elements of the movie 'Spirited Away'.",
  },
  {
    name: "red pic",
    coverImg: red,
    type: "book",
    description: "Preview picture from Elijah's Portfolio",
  },
  {
    name: "Distorsion Processing",
    coverImg: distortion,
    description: "Creating a distortion canva on Processing",
  },
  {
    name: "Princess Mononoke",
    coverImg: illu2,
    type: "Illustration",
    description: "Drawing made on a graphic tablet on the illustrator software, inspired by Suzani",
  },
]

archivesData = archivesData.map((archiveProject) => ({ ...archiveProject, id: uuidv4() }))

export default archivesData
