import React from "react";
import styled from "styled-components";
import CalendarCard from "./CalendarCard";

const cardsList = [
  {
    name: "keycap",
    number: "1",
    winner: "tang_xvt",
  },
  {
    name: "keycap",
    number: "3",
    size: "landscape",
    winner: "Niikk0",
  },
  {
    name: "Keycaps",
    number: "5",
    winner: 'LeiSua'
  },
  {
    name: "keycaps",
    number: "16",
    winner:"Foxof846"
  },
  {
    name: "keycaps",
    number: "12",
    size: "portrait",
    winner: "xdp__"
  },
  {
    name: "keycaps",
    number: "18",
    size: "landscape",
    winner: "NoYami_"
  },
  {
    name: "courses",
    number: "23",
    winner: "djmaliboy (english boy)"
  },
  {
    name: "courses",
    number: "14",
    winner: "ofholic"
  },
  {
    name: "figma course",
    number: "20",
    winner: "mickah_"
  },
  {
    name: "Ubereat",
    number: "17",
    winner: "reikoarts_ut"
  },
  {
    name: "courses",
    number: "6",
    size: "portrait",
    winner: "calflauren"
  },
  {
    name: "BLOSSOM",
    number: "24",
    size: "large",
    winner: "kirikikikou"
  },
  {
    name: "ThreeJS",
    number: "21",
    winner: "Kelbyyyy"
  },
  {
    name: "keycaps",
    number: "7",
    winner: 'RayleehHS'
  },
  {
    name: "ThreeJS",
    number: "15",
    size: "large",
    winner: "kiox"
  },
  {
    name: "keycaps",
    number: "13",
    winner:"Teloru"
  },
  {
    name: "keycaps",
    number: "9",
    size: "portrait",
    winner: "deformotion"
  },
  {
    name: "keycap",
    number: "2",
    winner: "pog_stream",
  },
  {
    name: "courses",
    number: "4",
    size: "large",
    winner: "Wann_R",
  },
  {
    name: "keycap",
    number: "19",
    winner: "brakhe"
  },
  {
    name: "keycaps",
    number: "11",
    size: "portrait",
    winner: "nyxthoo"
  },
  {
    name: "Figurine Léa",
    number: "22",
    winner: "iWaaze"
  },
  {
    name: "courses Three JS - 50%",
    number: "10",
    size: "landscape",
    winner:'code: KATY0D6B8F1E - KATY9F9DD6E7'
  },
  {
    name: "keycaps",
    number: "8",
    winner: "Dixies"
  },
];

const StyledCalendar = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template: repeat(5, 1fr) / repeat(8, 1fr);
  @media (max-width: 1000px) {
    grid-template: repeat(8, 1fr) / repeat(4, 1fr);
  }

  .landscape {
    aspect-ratio: inherit;
    grid-column: span 2;
  }
  .large {
    aspect-ratio: inherit;
    grid-column: span 2;
    grid-row: span 2;
    /* background-color: ${({ theme }) => theme.colors.text.disabled2};; */
  }
  .portrait {
    aspect-ratio: inherit;
    grid-row: span 2;
  }
`;

function Calendar() {
  return (
    <StyledCalendar>
      {cardsList.map((card, i) => (
        <CalendarCard
          delay={i}
          key={card.number}
          name={card.name}
          number={card.number}
          size={card.size}
          link={card?.link}
          winner={card?.winner}
        />
      ))}
    </StyledCalendar>
  );
}

export default Calendar;
