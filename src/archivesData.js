/* eslint-disable no-dupe-keys */
import { v4 as uuidv4 } from "uuid"

// This is collection
import green from "./assets/img/archives/green.jpg"
import black from "./assets/img/archives/black.jpg"
import blue from "./assets/img/archives/blue.jpg"
import pink from "./assets/img/archives/pink.jpg"

// posters colo
import volPoster from "./assets/img/archives/volPoster.jpg"
// posters expo
import gardenPoster from "./assets/img/archives/gardenPoster.jpg"
import auraePoster from "./assets/img/archives/auraePoster.jpg"
import gardenTickets from "./assets/img/archives/gardenTickets.jpg"
import auraeTickets from "./assets/img/archives/auraeTickets.jpg"


// processing
import lila from "./assets/img/archives/lila.jpg"

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
  },
  {
    name: "planetaria",
    coverImg: planetaria,
  },
  {
    name: "Chrome 0.7",
    coverImg: i7,
  },
  {
    name: "peaches",
    coverImg: peaches,
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
    name: "Zero10",
    coverImg: zero,
  },
  {
    name: "Business Card",
    coverImg: selfCard,
  },
  {
    name: "Aurae poster",
    coverImg: auraePoster,
  },
  {
    name: "lila",
    coverImg: lila,
  },
  {
    name: "This is blue",
    coverImg: blue,
  },
  {
    name: "volPoster",
    coverImg: volPoster,
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
    name: "Self Kit",
    coverImg: selfBranding,
  },
  {
    name: "Aurae Tickets",
    coverImg: auraeTickets,
  },
  {
    name: "This is pink",
    coverImg: pink,
  },
  {
    name: "Kaonashi human",
    coverImg: kaonashi,
  },
  {
    name: "Princess Mononoke",
    coverImg: mononoke,
  },
]

archivesData = archivesData.map((archiveProject) => ({ ...archiveProject, id: uuidv4() }))

export default archivesData
