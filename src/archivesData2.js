/* eslint-disable no-dupe-keys */
import { v4 as uuidv4 } from "uuid"

import cl from "./assets/img/archives/cl.jpg"
import mandala from "./assets/img/archives/mandala.jpg"
import mandarin from "./assets/img/archives/mandarin.jpg"
import yu_lin from "./assets/img/archives/yu_lin.jpg"
import bank from "./assets/img/archives/bank.jpg"
import abidaisy from "./assets/img/archives/abidaisy.jpg"
import designr from "./assets/img/archives/designr.jpg"
import etude from "./assets/img/archives/etude.jpg"
import nike from "./assets/img/archives/nike.jpg"








let archivesData = [
  {
    name: "Cl presave",
    path: "Cl presave",
    coverImg: cl,
    type: "Ui design",
    description:
      "Cl Presave page",
    websiteLink: "",
  },
  {
    name: "Mandala",
    path: "Mandala",
    coverImg: mandala,
    type: "Illustrator",
    description:
      "I had to create a mandala for school, I choosed Chihiro theme",
    websiteLink: "",
  },
  {
    name: "Le mandarin",
    path: "Le mandarin",
    coverImg: mandarin,
    type: "website",
    description:
      "A website for the restaurant : Le mandarin",
    websiteLink: "https://mandarin-merveilleux.com/",
  },
  {
    name: "Yu Lin Beauté",
    path: "Yu Lin Beauté",
    coverImg: yu_lin,
    type: "website",
    description:
      "A website for Yu Lin Beauté",
    websiteLink: "https://yulinbeaute.com/",
  },
  {
    name: "Bank Login Page",
    path: "Bank Login Page",
    coverImg: bank,
    type: "Ui design",
    description:
      "Ui & web developtment of a Log in page for a Bank",
    websiteLink: "https://loginbank.netlify.app/",
  },
  {
    name: "Abidaisy Portfolio",
    path: "Abidaisy Portfolio",
    coverImg: abidaisy,
    type: "website",
    description:
      "A portfolio for the artist Abidaisy",
    websiteLink: "https://abidaisy.com/",
  },
  {
    name: "DesignR",
    path: "DesignR",
    coverImg: designr,
    type: "website",
    description:
      "An API for designR (work only on desktop)",
    websiteLink: "https://designr.cathydolle.com/",
  },
  {
    name: "Etude house",
    path: "Etude house",
    coverImg: etude,
    type: "Ui Design",
    description:
      "UI Design for Étude House",
    websiteLink: "",
  },
  {
    name: "Nike homepage",
    path: "Nike homepage",
    coverImg: nike,
    type: "Ui Design",
    description:
      "UI Design for Nike",
    websiteLink: "",
  },
]

archivesData = archivesData.map((archiveProject) => ({ ...archiveProject, id: uuidv4() }))

export default archivesData
