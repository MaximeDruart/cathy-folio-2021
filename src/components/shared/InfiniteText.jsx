import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
// import { motion } from "framer-motion";
import gsap from "gsap";

const topWords = ["digital", "creative", "design", "UI/UX", "Product"];
const bottomWords = [
  "photoshop",
  "figma",
  "illustrator",
  "adobexd",
  "indesign",
];

const Container = styled.div`
  .line {
    width: 100vw;
    justify-content: flex-end;
    flex-flow: row nowrap;
    display: inline-flex;
    /* margin-bottom: 20px; */
    .string {
      display: inline-block;
      height: auto;
      padding-left: 2vw;
    }

    span {
      text-transform: uppercase;
      line-height: auto;
      font-family: "Ginger";

      &:not(:last-child) {
        margin-right: 2vw;
      }
    }
  }

  .bottom-line {
    margin-top: 20px;
    justify-content: flex-start;

    @media (max-width: 769px) {
      margin-top: 12px;
    }

    @media (max-width: 480px) {
      margin-top: 0px;
    }
  }
`;

const InfiniteText = () => {
  const topStringRef = useRef(null);
  const topLineContainer = useRef(null);
  const bottomStringRef = useRef(null);
  const bottomLineContainer = useRef(null);

  useLayoutEffect(() => {
    const topStringWidth = topStringRef.current.getBoundingClientRect().width;
    gsap.to(topLineContainer.current, {
      x: topStringWidth,
      ease: "linear",
      duration: 22,
      repeat: -1,
    });

    const bottomStringWidth =
      bottomStringRef.current.getBoundingClientRect().width;
    gsap.to(bottomLineContainer.current, {
      x: -bottomStringWidth,
      ease: "linear",
      duration: 22,
      repeat: -1,
    });
  }, []);
  return (
    <Container>
      <div ref={topLineContainer} className="line top-line">
        <div ref={topStringRef} className="string">
          {topWords.map((text, i) => (
            <span key={i} className="text-h1">
              {text}
            </span>
          ))}
        </div>
        <div className="string">
          {topWords.map((text, i) => (
            <span key={i} className="text-h1">
              {text}
            </span>
          ))}
        </div>
        <div className="string">
          {topWords.map((text, i) => (
            <span key={i} className="text-h1">
              {text}
            </span>
          ))}
        </div>
      </div>
      <div ref={bottomLineContainer} className="line bottom-line">
        <div ref={bottomStringRef} className="string">
          {bottomWords.map((text, i) => (
            <span key={i} className="text-h1">
              {text}
            </span>
          ))}
        </div>
        <div className="string">
          {bottomWords.map((text, i) => (
            <span key={i} className="text-h1">
              {text}
            </span>
          ))}
        </div>
        <div className="string">
          {bottomWords.map((text, i) => (
            <span key={i} className="text-h1">
              {text}
            </span>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default InfiniteText;
