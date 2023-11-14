import React from "react";
import styled from "styled-components";
import { marginPage } from "../../styles/globalCustom";
import ProductCard from "../shop/ProductCard";
import logo from "./../../assets/img/shop/labs.svg";
import Headline from "../shared/modules/Headline";
import PageTemplate from "../pages/PageTemplate";

// SLIDER
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

// import figma_template from './../../assets/img/shop/figma_template.fig'
import figmaImg from "./../../assets/img/shop/figma_starter.jpg";
import reactImg from "./../../assets/img/shop/react_starter.jpg";
import inspiImg from "./../../assets/img/shop/inspi_web.jpg";
import folder from "./../../assets/img/shop/folder.svg";
import keycaps from "./../../assets/img/shop/keycaps.jpg";
import blossom from "./../../assets/img/shop/blossom.jpg";
// import blossomPdf from './../../assets/img/works/blossom/blossom.pdf'

import ProductCanvas from "../shop/ProductCanvas";
import Calendar from "./Courses/Calendar";

const listRessources = [
  {
    src: inspiImg,
    name: "Inspi Web",
    price: "0.00",
    link: "https://mica-farm-042.notion.site/Webdesign-103235638be74397b1a561f8d37ae9aa",
    span: "inspiWeb",
  },
  {
    src: figmaImg,
    name: "Figma Starter",
    price: "0.00",
    link: "https://www.figma.com/file/A6R9JTu0UfdyUOTzxK2yqw/Project-Template?type=design&node-id=0%3A1&mode=design&t=DUrXoJT1e9v0MqP4-1",
    span: "figma",
  },
  {
    src: reactImg,
    name: "Starter React",
    price: "0.00",
    link: "https://github.com/CathyDolle/template",
    span: "react",
  },
];

const listFolders = [
  {
    src: folder,
    folder: "folder",
    name: "Inspi",
    price: "0.00",
    link: "https://arc.net/folder/63EF5BC1-BD61-4FD1-900E-68C995D3FF14",
  },
  {
    src: folder,
    folder: "folder",
    name: "Dev",
    price: "0.00",
    link: "https://arc.net/folder/CCB8B9DC-FD5A-47B5-B31E-AAC2022F8380",
  },
  {
    src: folder,
    folder: "folder",
    name: "Design",
    price: "0.00",
    link: "https://arc.net/folder/F9B9869D-A2AA-4F42-B08E-76F84599E314",
  },
  {
    src: folder,
    folder: "folder",
    name: "Free fonts",
    price: "0.00",
    link: "/fonts.zip",
    download: "free fonts",
  },
];

const listProducts = [
  {
    src: keycaps,
    name: "keycaps",
    price: "???",
    span: "keycaps",
  },
  {
    src: blossom,
    name: "blossom",
    price: "???",
    span: "blossom",
  },
];

const StyledShop = styled.div`
  * {
    color: ${({ theme }) => theme.colors.text.standard};
  }
  ${marginPage};
  transition: background-color 0.6s;
  background: ${({ theme }) => theme.colors.background};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10vh !important;
  padding-bottom: 10vh !important;
  @media (max-width: 750px) {
    padding-top: 0;
  }
  .logo {
    width: 200px;
    mix-blend-mode: difference;
    @media (max-width: 750px) {
      display: none;
    }
  }
  p.desc {
    margin-top: 16px;
    font-size: 12px;
    opacity: 0.6;
    @media (max-width: 750px) {
      display: none;
    }
  }
  h1 {
    span {
      font-family: Ginger;
      font-size: 50px;
    }
    @media (max-width: 750px) {
      font-size: 32px;
      span {
        font-size: 36px;
      }
    }
  }
  .product_list {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 10vh;
    .splide {
      margin-left: -10vw;
    }
    .splide__list {
      width: 100vw;
      align-items: center;
    }
    .row_content {
      display: flex;
      flex-wrap: wrap;
      gap: 56px;
      @media (max-width: 750px) {
        gap: 32px;
      }
    }
    span {
      font-family: Ginger;
      font-size: 80px;
      text-transform: uppercase;
      @media (max-width: 750px) {
        font-size: 64px;
      }
    }
  }
`;

function Shop() {
  return (
    <PageTemplate hasTransitionPanel={true}>
      <StyledShop>
        {/* introduction */}
        <img
          data-aos="fade"
          data-aos-duration="600"
          className="logo"
          src={logo}
          alt="logo"
        />
        {/* <h1 className="text-h2">( KT.<span>LABS</span> )</h1> */}
        <p
          data-aos="fade"
          data-aos-duration="600"
          className="text-regular desc"
        >
          Création, passion, transmission.
        </p>

        {/* Calendar */}
        {/* <section className="product_list">
          <Headline name="Calendrier de l'avent" />
          <Calendar />
        </section> */}

        {/* Book case */}
        <section className="product_list">
          <Headline name="Book case" />
          <ProductCanvas />
        </section>
        {/* FREE RESSOURCES */}
        <section className="product_list">
          <Headline name="Free ressources" />

          {/* SLIDER Ressources */}
          <Splide
            data-aos="fade"
            data-aos-duration="800"
            options={{
              type: "loop",
              gap: "64px",
              drag: "free",
              autoWidth: true,
              arrows: false,
              pagination: false,
              autoScroll: {
                pauseOnHover: false,
                pauseOnFocus: false,
                rewind: false,
                speed: 1.8,
              },
            }}
            extensions={{ AutoScroll }}
          >
            {listRessources.map((ressource) => (
              <React.Fragment key={ressource.name}>
                <SplideSlide>
                  <ProductCard
                    src={ressource.src}
                    name={ressource.name}
                    price={ressource.price}
                    link={ressource.link}
                  />
                </SplideSlide>
                <SplideSlide>
                  <span>{ressource.span}</span>
                </SplideSlide>
              </React.Fragment>
            ))}
          </Splide>
        </section>

        {/* ARC FOLDERRS */}
        <section className="product_list">
          <Headline name="arc folder" />
          <div className="row_content" data-aos="fade" data-aos-duration="800">
            {listFolders.map((folder) => (
              <ProductCard
                key={folder.name}
                src={folder.src}
                folder={folder.folder}
                name={folder.name}
                price={folder.price}
                link={folder.link}
                download={folder.download}
              />
            ))}
          </div>
          {/* SLIDER DIY */}
        </section>

        {/* DIY */}
        <section className="product_list">
          <Headline name="Coming soon" />

          {/* SLIDER coming soon */}
          <Splide
            data-aos="fade"
            data-aos-duration="800"
            options={{
              type: "loop",
              gap: "64px",
              drag: "free",
              autoWidth: true,
              arrows: false,
              pagination: false,
              autoScroll: {
                pauseOnHover: false,
                pauseOnFocus: false,
                rewind: false,
                speed: -1.5,
              },
            }}
            extensions={{ AutoScroll }}
          >
            {listProducts.map((product) => (
              <React.Fragment key={product.name}>
                <SplideSlide>
                  <ProductCard
                    src={product.src}
                    name={product.name}
                    price={product.price}
                  />
                </SplideSlide>
                <SplideSlide>
                  <span>{product.span}</span>
                </SplideSlide>
              </React.Fragment>
            ))}
          </Splide>
        </section>
      </StyledShop>
    </PageTemplate>
  );
}

export default Shop;
