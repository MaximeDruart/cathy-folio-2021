/* eslint-disable no-dupe-keys */
import { v4 as uuidv4 } from "uuid"

// This is collection
import green from "./assets/img/archives/green.jpg"
import black from "./assets/img/archives/black.jpg"
import blue from "./assets/img/archives/blue.jpg"
import pink from "./assets/img/archives/pink.jpg"

// posters expo
import gardenTickets from "./assets/img/archives/gardenTickets.jpg"
import auraePoster from "./assets/img/archives/auraePoster.jpg"




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
import skincare2 from "./assets/img/archives/skincare2.jpg"

import r1 from "./assets/img/archives/r1.jpg"
import r2 from "./assets/img/archives/r2.jpg"
import r3 from "./assets/img/archives/r3.jpg"
import r4 from "./assets/img/archives/r4.jpg"
import r5 from "./assets/img/archives/r5.jpg"
import r6 from "./assets/img/archives/r6.jpg"
import r7 from "./assets/img/archives/r7.jpg"
import r8 from "./assets/img/archives/r8.jpg"
import r9 from "./assets/img/archives/r9.jpg"
import r10 from "./assets/img/archives/r10.jpg" 
import r11 from "./assets/img/archives/r11.jpg"
import r12 from "./assets/img/archives/r12.jpg"
import r13 from "./assets/img/archives/r13.jpg"
import r14 from "./assets/img/archives/r14.jpg"
import r15 from "./assets/img/archives/r15.jpg"
import r16 from "./assets/img/archives/r16.jpg"
import r17 from "./assets/img/archives/r17.jpg"
import r18 from "./assets/img/archives/r18.jpg"
  





// IA
import i7 from "./assets/img/archives/i7.png"

let archivesData = [
  {
    name: "r1",
    coverImg: r1,
  },  
  {
    name: "r2",
    coverImg: r2,
  },  
  {
    name: "r18",
    coverImg: r18,
  }, 
  {
    name: "r3",
    coverImg: r3,
  },
  {
    name: "r4",
    coverImg: r4,
  },
  {
    name: "r5",
    coverImg: r5,
  },
  {
    name: "r6",
    coverImg: r6,
  },
  {
    name: "r7",
    coverImg: r7,
  },
  {
    name: "r8",
    coverImg: r8,
  },    
  {
    name: "r9",
    coverImg: r9,
  },
  {
    name: "r10",
    coverImg: r10,
  },  
  {
    name: "r11",
    coverImg: r11,
  },
  {
    name: "r12",
    coverImg: r12,
  },
  {
    name: "r13",
    coverImg: r13,
  },
  {
    name: "r14",
    coverImg: r14,
  },
  {
    name: "r15",
    coverImg: r15,
  },  
  {
    name: "r16",
    coverImg: r16,
  },  
  {
    name: "r17",
    coverImg: r17,
  },  
  {
    name: "apollo",
    coverImg: apollo,
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
