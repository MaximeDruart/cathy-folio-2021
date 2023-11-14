import React from "react";
import PageTemplate from "../PageTemplate";
import styled from "styled-components";
import Headline from "../../shared/modules/Headline";
import { marginPage } from "../../../styles/globalCustom";

const StyledCGV = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding-top: 10vh;
  padding-bottom: 10vh;
  ${marginPage};
  .content{
    width: 60%;
    p{
        margin-top: 32px;
        font-size: 12px;
    }
  }
`;

function CGV() {
  return (
    <PageTemplate hasTransitionPanel={true}>
      <StyledCGV>
        <h1 className="text-h2 serif">CGV</h1>
        <p>hello world</p>
        <Headline name="article 1" />
        <div className="content">
          <h2 className="text-h3 serif">Article 1 : Objet du Contrat</h2>
          <p className="text-regular">
            Le Contrat a pour objet de définir les modalités d’accès et
            d'utilisation de la Plateforme par l’Utilisateur. Tout Utilisateur
            souhaitant accéder à la Plateforme doit avoir préalablement consulté
            le Contrat. En outre, lors de son inscription, l'Utilisateur est
            invité à accepter le Contrat en cochant la case prévue à cet effet.
            Si l'Utilisateur refuse de se conformer à l'une quelconque des
            obligations et conditions contenues dans le Contrat, il doit
            renoncer à accéder à la plateforme éditée par TJJ et à l’utiliser.
            L'Utilisateur déclare être majeur, ou être un mineur émancipé, ou,
            si ce n'est pas le cas, avoir obtenu le consentement de ses parents
            ou de ses représentants légaux pour accéder à la Plateforme et à
            l’utiliser. TJJ se réserve le droit de modifier à tout moment le
            Contrat. Toute modification prendra effet immédiatement à compter de
            la mise en ligne de la nouvelle version du Contrat sur la
            Plateforme. L'Utilisateur s'engage donc à consulter régulièrement le
            Contrat pour prendre connaissance des modifications y ayant été
            apportées. L'Utilisateur est libre de se désinscrire et d’arrêter
            tout utilisation du site édité par TJJ si le Contrat modifié ne lui
            convient pas. A défaut, il sera réputé accepter sans réserve la
            nouvelle version du Contrat.
          </p>
        </div>
      </StyledCGV>
    </PageTemplate>
  );
}

export default CGV;
