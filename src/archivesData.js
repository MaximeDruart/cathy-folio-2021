/* eslint-disable no-dupe-keys */
import { v4 as uuidv4 } from "uuid"

import cl from "./assets/img/archives/cl.jpg"
import cl_print from "./assets/img/archives/cl_print.jpg"
import katy_v4 from "./assets/img/archives/katy_v4.jpg"
import shibuya_device from "./assets/img/archives/shibuya_device.jpg"
import mandala from "./assets/img/archives/mandala.jpg"
import mandarin from "./assets/img/archives/mandarin.jpg"
import yu_lin from "./assets/img/archives/yu_lin.jpg"
import bank from "./assets/img/archives/bank.jpg"
import abidaisy from "./assets/img/archives/abidaisy.jpg"
import designr from "./assets/img/archives/designr.jpg"
import etude from "./assets/img/archives/etude.jpg"
import nike from "./assets/img/archives/nike.jpg"
import illu1 from "./assets/img/archives/illu1.jpg"
import illu2 from "./assets/img/archives/illu2.jpg"
import vans from "./assets/img/archives/vans.jpg"
import aker from "./assets/img/archives/aker.jpg"
import minecraft from "./assets/img/archives/minecraft.jpg"
import akali from "./assets/img/archives/akali.jpg"
import kill from "./assets/img/archives/kill.jpg"
import etudePhone from "./assets/img/archives/etude_phone.jpg"
import shibuCard from "./assets/img/archives/shibuCard.jpg"
import bankCard from "./assets/img/archives/bankCard.jpg"
import ekko from "./assets/img/archives/ekko.jpg"
import flamalice from "./assets/img/archives/flamalice.jpg"
import uplift from "./assets/img/archives/uplift.jpg"


let archivesData = [
  {
    name: "DesignR",
    path: "DesignR",
    coverImg: designr,
    type: "website",
    description: "An API for designR (work only on desktop)",
    websiteLink: "https://designr.cathydolle.com/",
  },
  {
    name: "Etude house",
    path: "Etude house",
    coverImg: etude,
    type: "Ui Design",
    description: "UI Design for Étude House",
    websiteLink: "",
  },
    {
    name: "Kill geometry print",
    path: "Kill geometry print",
    coverImg: kill,
    type: "Print",
    description: "Geometry print used processing",
    websiteLink: "",
  },
  {
    name: "Flamalice portfolio",
    path: "Flamalice portfolio",
    coverImg: flamalice,
    type: "website",
    description: "I made a portfolio for the illustrator Flamalice",
    websiteLink: "",
  },
  {
    name: "Uplift",
    path: "Uplift",
    coverImg: uplift,
    type: "print",
    description: "uplift branding logo",
    websiteLink: "",
  },
  {
    name: "Ekko giants",
    path: "Ekko giants",
    coverImg: ekko,
    type: "UI Design",
    description: "ekko ui design from league of legends",
    websiteLink: "",
  },
  {
    name: "Shibuya card",
    path: "Shibuya card",
    coverImg: shibuCard,
    type: "Print",
    description: "A visit card with the shibuya logo I made",
    websiteLink: "",
  },
      {
    name: "etude house",
    path: "etude house",
    coverImg: etudePhone,
    type: "UI design",
    description: "etude house mobile checkout",
    websiteLink: "",
  },
  {
    name: "bank Card",
    path: "bank Card",
    coverImg: bankCard,
    type: "Print",
    description: "bank Card branding",
    websiteLink: "",
  },
  {
    name: "Cl presave",
    path: "Cl presave",
    coverImg: cl,
    type: "Ui design",
    description: "Cl Presave page",
    websiteLink: "",
  },
  {
    name: "Akali giants",
    path: "Akali giants",
    coverImg: akali,
    type: "Ui design",
    description: "Akali giants ui design",
  },
  {
    name: "Cl Print",
    path: "Cl Print",
    coverImg: cl_print,
    type: "Print",
    description: "Cl Print for her new album",
    websiteLink: "",
  },
  {
    name: "Kaonashi human",
    path: "Kaonashi human",
    coverImg: illu1,
    type: "Illustration",
    description: "remake from suzani",
    websiteLink: "",
  },
  {
    name: "vans",
    path: "vans",
    coverImg: vans,
    type: "Ui design",
    description: "log in page design for vans",
    websiteLink: "",
  },
  {
    name: "Katy_v4 mini folio",
    path: "Katy_v4 mini folio",
    coverImg: katy_v4,
    type: "website",
    description: "old website for my v4 folio",
  },
  {
    name: "Shibuya Device Mockup",
    path: "Shibuya Device Mockup",
    coverImg: shibuya_device,
    type: "Print",
    description: "A mockup for Ipad Device",
    websiteLink: "download",
  },
  {
    name: "Mandala",
    path: "Mandala",
    coverImg: mandala,
    type: "Illustrator",
    description: "I had to create a mandala for school, I choosed Chihiro theme",
    websiteLink: "",
  },
  {
    name: "Le mandarin",
    path: "Le mandarin",
    coverImg: mandarin,
    type: "website",
    description: "A website for the restaurant : Le mandarin",
    websiteLink: "https://mandarin-merveilleux.com/",
  },
  {
    name: "Yu Lin Beauté",
    path: "Yu Lin Beauté",
    coverImg: yu_lin,
    type: "website",
    description: "A website for Yu Lin Beauté",
    websiteLink: "https://yulinbeaute.com/",
  },
  {
    name: "Bank Login Page",
    path: "Bank Login Page",
    coverImg: bank,
    type: "Ui design",
    description: "Ui & web developtment of a Log in page for a Bank",
    websiteLink: "https://loginbank.netlify.app/",
  },
  {
    name: "Abidaisy Portfolio",
    path: "Abidaisy Portfolio",
    coverImg: abidaisy,
    type: "website",
    description: "A portfolio for the artist Abidaisy",
    websiteLink: "https://abidaisy.com/",
  },
  {
    name: "Nike homepage",
    path: "Nike homepage",
    coverImg: nike,
    type: "Ui Design",
    description: "UI Design for Nike",
    websiteLink: "",
  },
  {
    name: "Princess Mononoke",
    path: "Princess Mononoke",
    coverImg: illu2,
    type: "Illustration",
    description: "remake from suzani",
    websiteLink: "",
  },

  {
    name: "Aker",
    path: "Aker",
    coverImg: aker,
    type: "website",
    description: "website for Aker shop",
    websiteLink: "",
  },
  {
    name: "Minecraft",
    path: "Minecraft",
    coverImg: minecraft,
    type: "Ui design",
    description: "website for a minecraft server",
    websiteLink: "",
  },
]

archivesData = archivesData.map((archiveProject) => ({ ...archiveProject, id: uuidv4() }))

export default archivesData
