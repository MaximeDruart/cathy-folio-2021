import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import projectsData from "../../../projectsData";
import HomeProjectDetail from "./ProjectPreviewDetail";

const Container = styled.div`
  * {
    font-family: NeueMontrealRegular;
  }
  .content {
    margin-bottom: 30px;
    @media (max-width: 769px) {
      margin-bottom: 18px;
    }
  }
  width: 100%;
  .project {
    width: 100%;
    .content {
      display: flex;
      .index {
        margin-top: 6px;
        font-size: 12px;
        @media (max-width: 769px) {
          margin-top: 4px;
        }
      }
      .title {
        margin-left: 30px;
        font-family: Ginger;
        text-transform: uppercase;
      }

      @media (max-width: 769px) {
        .title {
          margin-left: 26px;
        }
      }

      @media (max-width: 480px) {
        .title {
          margin-left: 18px;
        }
      }
    }

    .hover-images {
      position: fixed;
      z-index: 10000;
      background: grey;
      top: 0;
      left: 0;
      pointer-events: none;

      transition: opacity ease-out 0.3s;

      img {
        width: 30vw;
        height: auto;
        object-fit: cover;
      }
    }
  }
`;

const HomeProjects = () => {
  return (
    <Container>
      {projectsData.slice(0, 4).map((project, index) => (
        <HomeProjectDetail key={index} index={index} project={project} />
      ))}
      <div className="project">
        <motion.div
          whileHover={{ x: 15, transition: { ease: "easeOut" } }}
          className="content"
        >
          <div className="index">(XX)</div>

          <Link className="title text-h1" to="/works">
            more projects
          </Link>
        </motion.div>
        <div className="separator"> </div>
      </div>
    </Container>
  );
};

export default HomeProjects;
