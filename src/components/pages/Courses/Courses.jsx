import React from "react";
import PageTemplate from "../PageTemplate";
import styled from "styled-components";
import { marginPage } from "../../../styles/globalCustom";
import logo from "./../../../assets/img/courses/logo.svg";
import Item from "./Course";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

// courses img assets

import coaching from "./../../../assets/img/courses/coaching.mp4";
import figma from "./../../../assets/img/courses/figma.mp4";
import inspi from "./../../../assets/img/courses/inspi.mp4";

const coursesList = [
  {
    name: "figma initiation",
    img: figma,
    description:
      "Cours d'initiation de Figma pour réaliser des maquettes web de manière efficace. Objectif principal : vous fournir les clés essentielles pour commencer à utiliser Figma de manière autonome. Possible de choisir votre horaire custom en DM.",
    price: "50€ L'HEURE",
    people: "6",
    level: "easy",
    content: [
      "frames",
      "grids",
      "style de texte",
      "composants",
      "autolayout",
      "shortcuts",
    ],
    time: "1H - 1H30",
    link: "katy-v4/figma-initiation",
  },
  // {
  //   name: "branding identity",
  //   img: coaching,
  //   description:
  //     "Cours d'identité graphique pour découvrir comment développer votre propre style créatif. Des conseils pour vous démarquer et exprimer votre patte artistique de manière distinctive.",
  //   price: "COMING SOON",
  //   people: "6",
  //   level: "intermédiaire",
  //   content: [
  //     "Colorimétrie",
  //     "Moodboard",
  //     "Typographie",
  //     "Assets",
  //     "Spécialisations",
  //     "Propulsion",
  //   ],
  //   time: "1H",
  // },
  {
    name: "veille & inspiration",
    img: inspi,
    description:
      "Cours dédié à la recherche d'inspiration: astuces de veille, création de moodboard et d'itentité web. Conseils et outils pratiques afin de mettre en place des concepts visuels uniques sur Figma. Possible de choisir votre horaire custom en DM.",
    price: "60€ L'HEURE",
    people: "6",
    level: "intermédiaire",
    content: ["veille", "moodboard", "inspiration", "outils", "concepts"],
    time: "1H - 1H30",
    link: "katy-v4/inspiration-identite-web",
  },
  {
    name: "Design Mentoring",
    img: coaching,
    description:
      "Session sur-mesure où je vous accompagne personnellement dans le développement de votre projet. Aide, feedbacks, et conseils en design personnalisés. Veuillez noter qu'un briefing de votre projet est requis avant la séance. ",
    price: "80€ L'HEURE / RDV EN DM",
    people: "1",
    level: "easy",
    content: ["vision", "design", "conseils", "feedbacks", "sur-mesure"],
    time: "1 hour",
  },
];

const StyledCourses = styled.div`
  * {
    color: ${({ theme }) => theme.colors.text.standard};
  }
  ${marginPage};
  transition: background-color 0.6s;
  background: ${({ theme }) => theme.colors.background};
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 10vh;
  padding-bottom: 10vh;
  p {
    font-family: "Romie";
    font-size: 12px;
  }
  .logo {
    width: 400px;
    mix-blend-mode: difference;
    @media (max-width: 1000px) {
      width: 50vw;
      margin-top: 16vh;
    }
  }
  p.desc {
    margin-top: 16px;
    font-size: 12px;
    opacity: 0.6;
  }
  .intro {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 100px;
    flex-wrap: wrap;
    p {
      width: 380px;
    }
    @media (max-width: 1300px) {
      gap: 64px;
    }
    @media (max-width: 700px) {
      gap: 32px;
      p {
        width: 80%;
      }
    }
  }
`;

function Courses() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#AFB6CE" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <PageTemplate hasTransitionPanel={true}>
      <StyledCourses>
        <img
          data-aos="fade"
          data-aos-duration="600"
          className="logo"
          src={logo}
          alt="img"
        />
        <p
          data-aos="fade"
          data-aos-duration="600"
          className="text-regular desc"
        >
          Les conseils pratiques du Webdesign en 1H
        </p>
        <div className="demi-spacer" />
        <div className="intro" data-aos="fade" data-aos-duration="800">
          <p className="text-regular">
            Quick Courses a été conçu spécialement pour ceux et celles qui
            souhaiteraient se lancer dans le domaine du webdesign. Ces sessions
            d’1h ont pour objectif de maximiser votre temps et votre
            apprentissage. Que vous soyez novice ou que vous cherchiez à affiner
            vos compétences, je vous offre mes clés les plus précieuses que j’ai
            acquises durant mes dernières années d’expériences.
          </p>
          <p className="text-regular">
            Avec plus de 5 ans d'expérience dans ce domaine, mon parcours m'a
            conduit à la passion du partage de connaissances, principalement via
            des streams sur Twitch. C'est cet enthousiasme pour l'enseignement
            qui m'a inspiré à créer ce projet. Les cours seront segmentés en 2
            parties : 60% de théorie et 40% de pratique vous permettant ainsi de
            vous guider durant votre apprentissage et mise en oeuvre.
          </p>
        </div>
        <div className="demi-spacer" />
        {coursesList.map((course) => (
          <Item
            key={course.name}
            name={course.name}
            img={course.img}
            description={course.description}
            price={course.price}
            people={course.people}
            level={course.level}
            time={course.time}
            contents={course.content}
            link={course.link}
          />
        ))}
      </StyledCourses>
    </PageTemplate>
  );
}

export default Courses;
