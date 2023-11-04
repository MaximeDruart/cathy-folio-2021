/* eslint-disable no-dupe-keys */
import { v4 as uuidv4 } from "uuid"

// This is collection
import green from "./assets/img/archives/green.jpg"
import black from "./assets/img/archives/black.jpg"
import blue from "./assets/img/archives/blue.jpg"
import pink from "./assets/img/archives/pink.jpg"

// posters expo
import gardenPoster from "./assets/img/archives/gardenPoster.jpg"
import gardenTickets from "./assets/img/archives/gardenTickets.jpg"
import auraePoster from "./assets/img/archives/auraePoster.jpg"


// processing
import designr from "./assets/img/archives/designr.jpg"

// archi
import archi1 from "./assets/img/archives/archi1.jpg"
import archi2 from "./assets/img/archives/archi2.jpg"
import archi3 from "./assets/img/archives/archi3.jpg"

// Edito
import zero from "./assets/img/archives/zero.jpg"

// myself
import selfCard from "./assets/img/archives/selfCard.jpg"


// 2022
import peaches from "./assets/img/archives/peaches.jpg"
import apollo from "./assets/img/archives/apollo.jpg"

// 2023
import discogs from "./assets/img/archives/discogs.jpg"
import discogs2 from "./assets/img/archives/discogs2.jpg"
import skincare from "./assets/img/archives/skincare.jpg"
import skincare2 from "./assets/img/archives/skincare2.jpg"

// IA
import i7 from "./assets/img/archives/i7.png"

let archivesData = [
  {
    name: "apollo",
    coverImg: apollo,
  },
  {
    name: "skincare",
    coverImg: skincare,
  },
  {
    name: "Chrome 0.7",
    coverImg: i7,
  },
  {
    name: "skincare2",
    coverImg: skincare2,
  },
  {
    name: "archi3",
    coverImg: archi3,
  },
  {
    name: "peaches",
    coverImg: peaches,
  },
  {
    name: "discogs",
    coverImg: discogs,
  },
  {
    name: "discogs2",
    coverImg: discogs2,
  },
  {
    name: "This is black",
    coverImg: black,
  },
  {
    name: "DesignR",
    coverImg: designr,
  },
  {
    name: "archi2",
    coverImg: archi2,
  },
  {
    name: "Zero10",
    coverImg: zero,
  },
  {
    name: "Aurae poster",
    coverImg: auraePoster,
  },
  {
    name: "selfCard",
    coverImg: selfCard,
  },
  {
    name: "This is blue",
    coverImg: blue,
  },
  {
    name: "Garden poster",
    coverImg: gardenPoster,
  },
  {
    name: "Garden Tickets",
    coverImg: gardenTickets,
  },
  {
    name: "This is green",
    coverImg: green,
  },
  {
    name: "This is pink",
    coverImg: pink,
  },
  {
    name: "archi1",
    coverImg: archi1,
  },
]

archivesData = archivesData.map((archiveProject) => ({ ...archiveProject, id: uuidv4() }))

export default archivesData
