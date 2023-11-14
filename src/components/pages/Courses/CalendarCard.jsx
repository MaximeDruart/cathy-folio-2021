import React from "react";
import styled from "styled-components";
import arrow from "./../../../assets/icons/link.svg";

const StyledCalendarCard = styled.div`
  border: solid 0.5px ${({ theme }) => theme.colors.text.disabled2};
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  transition: border 0.5s;
  &:hover {
    border: solid 0.5px ${({ theme }) => theme.colors.text.text};
    p.text-h3 {
      opacity: 1;
    }
  }
  &.active {
    border: solid 0.5px ${({ theme }) => theme.colors.text.text};
    .infos {
      display: block;
    }
    p.text-h3 {
      opacity: 1;
    }
    &.large {
      background-color: ${({ theme }) => theme.colors.primary1};
    }
  }
  .infos {
    display: none;
    p.text-h6 {
      text-transform: uppercase;
    }
    p.text-small {
      color: #998ee0;
    }
    a.text-small {
      position: absolute;
      bottom: 12px;
      left: 12px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      img {
        margin-left: 4px;
        width: 14px;
        height: 14px;
        /* margin-bottom: 3px; */
      }
    }
  }
  p.text-h3 {
    font-size: 4vw;
    margin-left: auto;
    line-height: 80%;
    opacity: 0.3;
    transition: opacity 0.5s;
    @media (max-width: 1000px) {
      font-size: 8vw;
    }
  }
`;

function CalendarCard({ number, name, size, delay, winner, link }) {
  return (
    <StyledCalendarCard
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={`${(delay % 7) * 2}00`}
      className={`${size} ${winner ? "active" : ""}`}
    >
      <div className="infos">
        <p className="text-h6">{name}</p>
        <p className="text-small">{`@${winner}`}</p>
        {link && (
          <a className="text-small" href={link} target="_blank">
            link
            <img src={arrow} alt="img" />
          </a>
        )}
      </div>
      <p className="text-h3 serif">{number}</p>
    </StyledCalendarCard>
  );
}

export default CalendarCard;
