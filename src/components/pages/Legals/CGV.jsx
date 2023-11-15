import React from "react";
import PageTemplate from "../PageTemplate";
import styled from "styled-components";
import Headline from "../../shared/modules/Headline";
import { marginPage } from "../../../styles/globalCustom";

const contentsList = [
  {
    headline: "Article 1",
    title: "Objet",
    text: `Les présentes Conditions Générales de Vente (ci-après « CGV ») ont pour objet de définir les droits et obligations de Cathy Dollé (ci-après « le Prestataire ») et de ses clients (ci-après « les Clients ») dans le cadre de la vente de services de formation en ligne proposés sur le site web https://www.cathydolle.com/. La validation d'une commande de formation à travers le système de réservation intégré Cal.com implique l'acceptation entière et sans réserve des présentes CGV par le Client.`,
  },
  {
    headline: "Article 2",
    title: "Réservation des cours",
    text: `Pour procéder à la réservation d’un cours, le Client doit suivre le processus de réservation en ligne via le système Cal.com. Le Client sélectionnera la formation souhaitée, la date et l’heure selon les disponibilités affichées. La réservation est considérée comme ferme et définitive après la réception du paiement intégral du coût de la formation, qui confirme l'engagement du Client envers le Prestataire.`,
  },
  {
    headline: "Article 3",
    title: "Prix et paiement",
    text: `Les tarifs applicables aux formations sont ceux affichés sur le site web au moment de la réservation. Ces prix sont exprimés en euros et incluent toutes les taxes applicables. Le règlement des formations s'effectue en ligne via les options de paiement sécurisées fournies par Cal.com. Le Prestataire se réserve le droit de modifier ses prix à tout moment, tout en garantissant l'application des tarifs en vigueur au moment de la commande.`,
  },
  {
    headline: "Article 4",
    title: "Annulation et remboursement",
    text: `Les Clients peuvent annuler leur réservation en respectant les conditions suivantes : une annulation plus de 48 heures avant le début de la formation donne droit à un remboursement intégral, tandis qu'une annulation moins de 48 heures à l'avance entraînera la facturation de frais d'annulation correspondant à 50% du prix de la formation. En cas de non-présentation sans annulation préalable, le Client sera redevable de la totalité du montant de la formation. Des exceptions pour des circonstances particulières pourront être considérées au cas par cas.`,
  },
  {
    headline: "Article 5",
    title: "Propriété intellectuelle",
    text: `Tout le matériel pédagogique fourni lors des formations, y compris mais sans s'y limiter, les documents, les présentations, les vidéos et les graphiques, est la propriété exclusive de Cathy Dollé. Toute utilisation non autorisée, reproduction, distribution ou vente sans l'accord écrit préalable du Prestataire constitue une violation des droits de propriété intellectuelle et est passible de poursuites judiciaires.`,
  },
  {
    headline: "Article 6",
    title: "Limitation de responsabilité",
    text: `Le Prestataire s'engage à fournir les services de formation avec professionnalisme et diligence. Cependant, la responsabilité de Cathy Dollé ne pourra être engagée en cas de préjudice indirect subi par le Client, y compris toute perte d'exploitation, perte de profit ou perte de chance. La responsabilité du Prestataire sera en tout état de cause limitée au montant des sommes effectivement versées par le Client au titre de la formation concernée.`,
  },
  {
    headline: "Article 7",
    title: "Modification des CGV",
    text: `Cathy Dollé se réserve le droit de modifier les présentes CGV à tout moment. Les nouvelles CGV seront, le cas échéant, notifiées au Client avant leur entrée en vigueur et applicables uniquement aux contrats conclus postérieurement à cette modification.`,
  },
  {
    headline: "Article 8",
    title: "Loi applicable et juridiction",
    text: `Les présentes CGV sont soumises à la loi française. En cas de litige survenant entre le Prestataire et un Client, les parties s'engagent à rechercher en priorité une solution amiable. À défaut d'accord, le litige pourra être porté devant les tribunaux compétents selon les règles de droit commun.`,
  },
];

const StyledCGV = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 10vh;
  margin-bottom: 10vh;
  ${marginPage};
  h1{
    text-align: center;
  }
  .content {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 769px) {
      width: 80%;
    }
    p {
      margin-top: 20px;
      font-size: 12px;
    }
  }
`;

function CGV() {
  return (
    <PageTemplate hasTransitionPanel={true}>
      <StyledCGV>
        <h1 className="text-h2 serif">Conditions générales<br/>de vente</h1>
        {contentsList.map((content) => (
          <React.Fragment key={content.headline}>
            <Headline name={content.headline} />
            <div className="content">
              <h2 className="text-h3 serif">{content.title}</h2>
              <p className="text-regular">{content.text}</p>
            </div>
          </React.Fragment>
        ))}
      </StyledCGV>
    </PageTemplate>
  );
}

export default CGV;
