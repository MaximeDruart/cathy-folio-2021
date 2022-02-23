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
import designr from "./assets/img/archives/designr.jpg"
import etude from "./assets/img/archives/etude.jpg"
import nike from "./assets/img/archives/nike.jpg"
import distortion from "./assets/img/archives/distortion.jpg"
import parallele from "./assets/img/archives/parallele.jpg"
import illu1 from "./assets/img/archives/illu1.jpg"
import illu2 from "./assets/img/archives/illu2.jpg"
import vans from "./assets/img/archives/vans.jpg"
import kill from "./assets/img/archives/kill.jpg"
import etudePhone from "./assets/img/archives/etude_phone.jpg"
import flamalice from "./assets/img/archives/flamalice.jpg"
import elijah from "./assets/img/archives/elijah.jpg"
import weekend from "./assets/img/archives/weekend.jpg"

import flowerCard from "./assets/img/archives/flowerCard.jpg"
import folioBook from "./assets/img/archives/folioBook.jpg"
import logoWater from "./assets/img/archives/logoWater.jpg"

let archivesData = [
  {
    name: "elijah",
    coverImg: elijah,
    type: "print",
    description: "elijah portfolio",
    websiteLink: "",
  },
  {
    name: "Portfolio book",
    coverImg: folioBook,
    type: "mockup",
    description: "My folio inside a book",
  },
  // {
  //   name: "DesignR",
  //   coverImg: designr,
  //   type: "website",
  //   description: "An API for designR (work only on desktop)",
  //   websiteLink: "https://designr.cathydolle.com/",
  // },
  {
    name: "Business Card",
    coverImg: flowerCard,
    type: "mockup",
    description: "my card inside flowers",
  },
  {
    name: "lila",
    coverImg: lila,
    type: "processing",
    description: "An API for designR (work only on desktop)",
  },
  {
    name: "Etude house",
    coverImg: etude,
    type: "Ui Design",
    description: "UI Design for Étude House",
    websiteLink: "",
  },
  {
    name: "weekend",
    coverImg: weekend,
    type: "print",
    description: "Bibi - The weekend view",
    websiteLink: "",
  },
  {
    name: "Feels Blue",
    coverImg: feelsBlue,
    type: "processing",
    description: "An API for designR (work only on desktop)",
  },
  {
    name: "Envelop logo",
    coverImg: logoWater,
    type: "Mockup",
    description: "Envelop with my logo",
    websiteLink: "",
  },
  {
    name: "Nike homepage",
    coverImg: nike,
    type: "website",
    description: "Homepage for Nike",
    websiteLink: "",
  },
  {
    name: "Kill geometry print",
    coverImg: kill,
    type: "Print",
    description: "Geometry print used processing",
    websiteLink: "",
  },
  {
    name: "Parallele magazine",
    coverImg: parallele,
    type: "Print",
    description: "Cover for magazine parallele",
  },
  {
    name: "Feels Cover",
    coverImg: feels,
    type: "Processing",
    description: "Cover for magazine parallele",
  },
  {
    name: "Flamalice portfolio",
    coverImg: flamalice,
    type: "website",
    description: "I made a portfolio for the illustrator Flamalice",
    websiteLink: "",
  },
  {
    name: "etude house",
    coverImg: etudePhone,
    type: "UI design",
    description: "etude house mobile checkout",
    websiteLink: "",
  },
  {
    name: "Feels Red",
    coverImg: feelsRed,
    type: "processing",
    description: "An API for designR (work only on desktop)",
  },
  {
    name: "Cl presave",
    coverImg: cl,
    type: "Ui design",
    description: "Cl Presave page",
    websiteLink: "",
  },
  {
    name: "Kaonashi human",
    coverImg: illu1,
    type: "Illustration",
    description: "remake from suzani",
    websiteLink: "",
  },
  {
    name: "vans",
    coverImg: vans,
    type: "Ui design",
    description: "log in page design for vans",
    websiteLink: "",
  },
  {
    name: "Shibuya Device Mockup",
    coverImg: shibuya_device,
    type: "Print",
    description: "A mockup for Ipad Device",
    websiteLink: "download",
  },
  {
    name: "Mandala",
    coverImg: mandala,
    type: "Illustrator",
    description: "I had to create a mandala for school, I choosed Chihiro theme",
    websiteLink: "",
  },
  {
    name: "red book",
    coverImg: red,
    type: "book",
    description: "One of my favourite book for inspiration",
    websiteLink: "https://red.com/",
  },
  {
    name: "Distorsion Processing",
    coverImg: distortion
  },
  {
    name: "Princess Mononoke",
    coverImg: illu2,
    type: "Illustration",
    description: "remake from suzani",
    websiteLink: "",
  },
]

archivesData = archivesData.map((archiveProject) => ({ ...archiveProject, id: uuidv4() }))

export default archivesData
