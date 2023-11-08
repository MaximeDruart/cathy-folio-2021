import React from "react";
import PageTemplate from "../PageTemplate";
import styled from "styled-components";
import { marginPage } from "../../../styles/globalCustom";
import logo from "./../../../assets/img/courses/logo.svg";
import Item from "./Course";

// courses img assets

import course1 from "./../../../assets/img/courses/course1.png";

const coursesList = [
  {
    name: "figma initiation",
    img: course1,
    description:
      "Cours d'initiation de Figma pour réaliser des maquettes web de manière efficace. Ojectif principal : vous fournir les clés essentielles pour commencer à utiliser Figma de manière autonome. 60% de théorie, et 40% de pratique.",
    price: "COMING SOON",
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
  },
  {
    name: "branding identity",
    img: course1,
    description:
      "Cours d'identité graphique pour découvrir comment développer votre propre style créatif. Des conseils pour vous démarquer et exprimer votre patte artistique de manière distinctive.",
    price: "COMING SOON",
    people: "6",
    level: "intermédiaire",
    content: [
      "Colorimétrie",
      "Moodboard",
      "Typographie",
      "Assets",
      "Spécialisations",
      "Propulsion",
    ],
    time: "1H",
  },
  {
    name: "veille & inspiration",
    img: course1,
    description:
      "Cours dédié à la recherche d'inspiration: astuces de veille, création de moodboard percutants. Conseils et outils pratiques afin de mettre en place des concepts visuels uniques.",
    price: "COMING SOON",
    people: "6",
    level: "intermédiaire",
    content: ["veille", "moodboard", "inspiration", "outils", "concepts"],
    time: "1H",
  },
  {
    name: "Design Mentoring",
    img: course1,
    description:
      "Session sur-mesure où je vous accompagne personnellement dans le développement de votre projet. Aide, feedbacks, et conseils en design personnalisés. Veuillez noter qu'un briefing de votre projet est requis avant la séance.",
    price: "COMING SOON",
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
  return (
    <PageTemplate hasTransitionPanel={true}>
      <StyledCourses>
        <img className="logo" src={logo} alt="img" />
        <p className="text-regular desc">
          Accédez aux secrets du Web Design en 1 Heure
        </p>
        <div className="demi-spacer" />
        <div className="intro" data-aos="fade" data-aos-duration="800">
          <p className="text-regular">
            Quick Courses a été conçu spécialement pour ceux et celles qui
            souhaiteraient se lancer dans le domaine du web design. Ces sessions
            d’1h ont pour objectif de maximiser votre temps et votre
            apprentissage. Que vous soyez novice ou que vous cherchiez à affiner
            vos compétences, je vous offre mes clés les plus précieuses que j’ai
            acquises durant mes années dernières années d’expériences.
          </p>
          <p className="text-regular">
            Avec plus de 5 ans d'expérience dans ce domaine, mon parcours m'a
            conduit à la passion du partage de connaissances, principalement via
            des streams sur Twitch. C'est cet enthousiasme pour l'enseignement
            qui m'a inspiré à créer ce projet. Je serai ravie de vous guider et
            vous inspirer lors de votre apprentissage dans ce domaine
            passionnant qui est le webdesign :3
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
          />
        ))}
      </StyledCourses>
    </PageTemplate>
  );
}

export default Courses;
