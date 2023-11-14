import React from "react";
import PageTemplate from "../PageTemplate";
import styled from "styled-components";
import { marginPage } from "../../../styles/globalCustom";

const StyledMentions = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding-top: 10vh;
  padding-bottom: 10vh;
  ${marginPage};
`;

function Mentions() {
  return (
    <PageTemplate hasTransitionPanel={true}>
      <StyledMentions>
        <h1>mentions</h1>
        <p>
          Le Contrat a pour objet de définir les modalités d’accès et
          d'utilisation de la Plateforme par l’Utilisateur. Tout Utilisateur
          souhaitant accéder à la Plateforme doit avoir préalablement consulté
          le Contrat. En outre, lors de son inscription, l'Utilisateur est
          invité à accepter le Contrat en cochant la case prévue à cet effet. Si
          l'Utilisateur refuse de se conformer à l'une quelconque des
          obligations et conditions contenues dans le Contrat, il doit renoncer
          à accéder à la plateforme éditée par TJJ et à l’utiliser.
          L'Utilisateur déclare être majeur, ou être un mineur émancipé, ou, si
          ce n'est pas le cas, avoir obtenu le consentement de ses parents ou de
          ses représentants légaux pour accéder à la Plateforme et à l’utiliser.
          TJJ se réserve le droit de modifier à tout moment le Contrat. Toute
          modification prendra effet immédiatement à compter de la mise en ligne
          de la nouvelle version du Contrat sur la Plateforme. L'Utilisateur
          s'engage donc à consulter régulièrement le Contrat pour prendre
          connaissance des modifications y ayant été apportées. L'Utilisateur
          est libre de se désinscrire et d’arrêter tout utilisation du site
          édité par TJJ si le Contrat modifié ne lui convient pas. A défaut, il
          sera réputé accepter sans réserve la nouvelle version du Contrat.
        </p>
      </StyledMentions>
    </PageTemplate>
  );
}

export default Mentions;
