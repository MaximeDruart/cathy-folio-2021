import React from "react";
import PageTemplate from "../PageTemplate";
import styled from "styled-components";
import Headline from "../../shared/modules/Headline";
import { marginPage } from "../../../styles/globalCustom";

const contentsList = [
  {
    headline: "info 01",
    title: "Éditeur",
    text: `Cathy Dollé, auto-entrepreneuse enregistrée sous le numéro SIRET 907 438 840 00015, spécialisée dans la formation sur le web design, le branding et domaines connexes.`,
  },
  {
    headline: "info 02",
    title: "Contact",
    text: `Pour toute question ou demande, veuillez contacter Cathy Dollé par e-mail à cathy.dolle@live.fr ou par téléphone au +336 52 81 19 79.`,
  },
  {
    headline: "Info 3",
    title: "Hébergement",
    text: `Le site est hébergé par OVH SAS, société au capital de 10 174 560 €, inscrite au RCS Lille Métropole sous le numéro 424 761 419 00045, située au 2 rue Kellermann, 59100 Roubaix, France.`,
  },
  {
    headline: "Info 4",
    title: "Propriété intellectuelle",
    text: `Les éléments du site tels que les textes, images, graphismes et logos sont la propriété exclusive de Cathy Dollé, sauf mentions contraires. Toute reproduction non autorisée est interdite.`,
  },
  {
    headline: "Info 5",
    title: "Protection des données personnelles :",
    text: `Conformément aux dispositions de la loi « informatique et libertés » et du RGPD, tout utilisateur dispose d'un droit d'accès, de rectification et d'opposition aux données personnelles le concernant.
    `,
  },
  {
    headline: "Info 6",
    title: "Droit applicable :",
    text: `Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront compétents.
    `,
  },
];

const StyledMentions = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 10vh;
  margin-bottom: 10vh;
  ${marginPage};
  h1 {
    text-align: center;
  }
  .content {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media (max-width: 769px) {
      width: 60%;
    }
    p {
      margin-top: 20px;
      font-size: 12px;
      text-align: center;
    }
  }
`;

function Mentions() {
  return (
    <PageTemplate hasTransitionPanel={true}>
      <StyledMentions>
        <h1 className="text-h2 serif">
          Conditions générales
          <br />
          de vente
        </h1>
        {contentsList.map((content) => (
          <React.Fragment key={content.headline}>
            <Headline name={content.headline} />
            <div className="content">
              <h2 className="text-h3 serif">{content.title}</h2>
              <p className="text-regular">{content.text}</p>
            </div>
          </React.Fragment>
        ))}
      </StyledMentions>
    </PageTemplate>
  );
}

export default Mentions;
