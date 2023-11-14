import React from "react";
import styled from "styled-components";
import CalendarCard from "./CalendarCard";


const cardsList = [
  {
    name: "courses",
    number: "3",
    size: "landscape",
  },
  {
    name: "courses",
    number: "5",
  },
  {
    name: "courses",
    number: "16",
  },
  {
    name: "courses",
    number: "12",
    size: "portrait",
  },
  {
    name: "courses",
    number: "18",
    size: "landscape",
  },
  {
    name: "courses",
    number: "23",
  },
  {
    name: "courses",
    number: "14",
  },
  {
    name: "courses",
    number: "20",
  },
  {
    name: "courses",
    number: "17",
  },
  {
    name: "courses",
    number: "6",
    size: "portrait",
  },
  {
    name: "courses",
    number: "24",
    size: "large",
  },
  {
    name: "courses",
    number: "21",
  },
  {
    name: "courses",
    number: "7",
  },
  {
    name: "courses",
    number: "15",
    size: "large",
  },
  {
    name: "courses",
    number: "1",
    winner: "catnoom",
  },
  {
    name: "courses",
    number: "13",
  },
  {
    name: "courses",
    number: "9",
    size: "portrait",
  },
  {
    name: "courses",
    number: "2",
  },
  {
    name: "courses",
    number: "4",
    size: "large",
  },
  {
    name: "courses",
    number: "19",
  },
  {
    name: "courses",
    number: "11",
    size: "portrait",
  },
  {
    name: "courses",
    number: "22",
  },
  {
    name: "courses",
    number: "10",
    size: "landscape",
  },
  {
    name: "courses",
    number: "8",
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
