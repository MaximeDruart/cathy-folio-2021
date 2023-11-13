import React from "react";
import styled from "styled-components";
import open from "./../../../assets/img/courses/open.svg";
import close from "./../../../assets/img/courses/close.svg";
import shop from "./../../../assets/img/courses/shop.svg";
import user from "./../../../assets/img/courses/user.svg";
import clock from "./../../../assets/img/courses/clock.svg";
import skill from "./../../../assets/img/courses/skill.svg";
import { useState } from "react";

const StyledItem = styled.div`
  width: 100%;
  border-top: solid 0.5px ${({ theme }) => theme.colors.text.disabled2};
  &:last-child {
    border-bottom: solid 0.5px ${({ theme }) => theme.colors.text.disabled2};
  }
  h5 {
    color: ${({ theme }) => theme.colors.primary1};
    font-size: 10px;
  }
  .headline {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4vh 0;
    @media (max-width: 1000px) {
      align-items: flex-start;
    }
    .actions {
      display: flex;
      gap: 16px;
      a,
      button {
        height: 64px;
        aspect-ratio: 1/1;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        transition: background-color 0.5s;
        &:hover {
          background-color: ${({ theme }) => theme.colors.primary1};
        }
        @media (max-width: 769px) {
          height: 50px;
        }
      }
    }
  }
  .infos {
    padding: 4vh 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    visibility: visible;
    height: 476.16px;
    opacity: 1;
    transition: all 0.6s ease-in-out;
    @media (max-width: 1000px) {
      height: 358px;
    }
    img {
      height: 400px;
      aspect-ratio: 1/1;
      @media (max-width: 1000px) {
        display: none;
      }
    }
    .course_infos {
      width: 100%;
      height: 400px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      @media (max-width: 1000px) {
        width: 100%;
        height: auto;
        gap: 64px;
      }
      h5 {
        color: ${({ theme }) => theme.colors.primary1};
        margin-bottom: 32px;
        font-weight: 100;
      }
      .description_container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (max-width: 1000px) {
          width: 100%;
        }
        .desc {
          display: flex;
          flex-direction: column;
          p {
            width: 300px;
          }
          button.price {
            width: 100%;
            margin-top: 32px;
            text-align: center;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: black;
            gap: 4px;
            transition: all 0.5s;
            padding-bottom: 2px;
            border: none;
            border-bottom: solid 0.8px;
            color: ${({ theme }) => theme.colors.text.standard};
            width: fit-content;
            background-color: transparent;
            &:hover {
              letter-spacing: 1px;
              /* background-color: ${({ theme }) => theme.colors.primary1}; */
            }
            @media (max-width: 1000px) {
              margin-bottom: 5vw;
            }
          }
        }
        .tags_container {
          width: 100%;
          display: flex;
          gap: 16px;
          @media (max-width: 1000px) {
            margin-top: 32px;
          }
          h5 {
            margin-bottom: 8px;
          }
          .tag {
            display: flex;
            flex-direction: column;
            .content {
              display: flex;
              gap: 8px;
              align-items: center;
              padding: 14px 20px;
              border: solid 0.5px ${({ theme }) => theme.colors.text.disabled3};
              img {
                width: 12px;
                height: 12px;
                opacity: 0.8;
              }
              span {
                display: inline-block;
                color: ${({ theme }) => theme.colors.text.standard};
                opacity: 0.5;
              }
            }
          }
        }
      }
      .course_content {
        display: flex;
        flex-direction: column;
        width: 146px;
        justify-content: space-between;
        align-items: flex-start;
        @media (max-width: 1000px) {
          width: 100%;
        }
        .content {
          ul {
            list-style: none;
            flex-direction: column;
            display: flex;
            gap: 8px;
            li {
              text-transform: uppercase;
              font-size: 11px;
            }
          }
        }
        @media (max-width: 1300px) {
          display: none;
        }
      }
    }
    &.hidden {
      opacity: 0;
      /* display: none; */
      height: 0;
      padding: 0;
    }
  }
`;

function Item({
  name,
  img,
  description,
  price,
  people,
  level,
  contents,
  time,
  link,
}) {
  const [visible, setVisible] = useState(false);
  return (
    <StyledItem data-aos="fade-right" data-aos-duration="1000">
      <div className="headline">
        <h2 onClick={() => setVisible(!visible)} className="text-h2 serif">
          {name}
        </h2>
        <div className="actions">
          <button
            data-cal-link={link}
            data-cal-config='{"layout":"month_view"}'
          >
            <img src={shop} alt="img" />
          </button>
          <button onClick={() => setVisible(!visible)}>
            <img src={visible ? close : open} alt="img" />
          </button>
        </div>
      </div>
      <div className={`infos ${visible ? "" : "hidden"}`}>
        {/* <img src={img} alt="img" /> */}
        <div className="course_infos">
          <div className="description_container">
            <div className="desc">
              <h5 className="text-h5">description</h5>
              <p className="text-regular">{description}</p>
              <button
                data-cal-link={link}
                data-cal-config='{"layout":"month_view"}'
                className="price text-h6"
              >
                {price}
              </button>
            </div>
            <div className="tags_container">
              <div className="tag">
                <h5 className="text-h5">durée</h5>
                <div className="content">
                  <img src={clock} alt="img" />
                  <span className="text-button">{time}</span>
                </div>
              </div>
              <div className="tag">
                <h5 className="text-h5">Max people</h5>
                <div className="content">
                  <img src={user} alt="img" />
                  <span className="text-button">{people} people</span>
                </div>
              </div>
              <div className="tag">
                <h5 className="text-h5">skill level</h5>
                <div className="content">
                  <img src={skill} alt="img" />
                  <span className="text-button">{level}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="course_content">
            <div className="content">
              <h5 className="text-h5">content</h5>
              <ul>
                {contents.map((content, i) => (
                  <li key={`chapter${i}`} className="text-h6">
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <img src={img} alt="img" />
        </div>
      </div>
    </StyledItem>
  );
}

export default Item;
