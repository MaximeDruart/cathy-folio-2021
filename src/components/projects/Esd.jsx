import React from "react"
import styled from "styled-components"
import preview from "../../assets/img/works/esd/preview.jpg"
import op from "../../assets/img/works/esd/op.jpg"
import visual2 from "../../assets/img/works/esd/visual2.jpg"
import myWork from "../../assets/img/works/esd/myWork.png"
import map from "../../assets/img/works/esd/map.png"
import collab from "../../assets/img/works/esd/collab.png"
import homepage from "../../assets/img/works/pxp/homepage.jpg"
import productPage from "../../assets/img/works/pxp/product_page.jpg"
import position from "../../assets/img/works/esd/position.jpg"
// mobile
import homeMobile from "../../assets/img/works/pxp/homepage_mobile.png"
import menuMobile from "../../assets/img/works/pxp/menu_mobile.png"
import productMobile from "../../assets/img/works/pxp/product_mobile.png"
import blogMobile from "../../assets/img/works/pxp/blog_mobile.png"


import FullImage from "../shared/FullImage"

import { Link } from "react-router-dom"

const StyledLv = styled.div`
  .what-i-do {
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    margin-top: 30vh;
    @media (max-width: 700px) {
      margin-top: 20vh;
    }
    img, video{
      width: 100%;
    }
    .title {
      text-align: center;
      .saol {
        font-family: Ginger;
        color: ${({ theme }) => theme.colors.primary1};
      }
    }
  }
img{
  width: 100%;
  margin-bottom: 50px;
}
.texture{
    display: flex;
    justify-content: space-between;
    img{
        width: 74%;
        &.gif{
            width: 22%;
        }
    }
}
.chart{
  .typography{
    span.text-typo{
        &.one {
          font-family: "Gotham";
        }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: white;
      }
      &.two{
        background-color: black;
        color: white;
      }
    }
  }
}
`

const Lv = () => {
  return (
    <StyledLv>
       <h2 className='text-h2'>Project X Paris</h2>
          {/* chart */}
          <div className="chart">
        <div className="art-direction">
          <h4 className="text-h4">Présentation</h4>
          <p className="text-description">Crée en 2015 par la volonté de deux frères designers, PROJECT X PARIS est une marque française fortement influencée par notre époque et les réseaux sociaux.
Project X Paris propose un style urbain associé à une mode parisienne.
Les produits sont également distribués dans plus de 1500 revendeurs à travers le monde.
Tous les modèles sont traités et dessinés par leur stylistes dans les studios parisiens afin d’assurer une coupe parfaite et dans l’air du temps.</p>
        </div>
        <div className="spacer"></div>
        <div className="art-direction">
            <div className="spacer"></div>
           <div className='headline text-regular'>Positionnement</div>
          <div className='separator'></div>
          <img src={position} alt='pxp' />
         <div className="demi-spacer"></div>
           <div className='headline text-regular'>Boutiques physiques</div>
          <div className='separator'></div>
          <img src={map} alt='pxp' />
        </div>
      </div>
      <div className="demi-spacer"></div>
      <h2 className='text-h2'>Business Modele</h2>
      <p className="text-description"> Système de précommandes pour sécuriser les pièces de mode.<br></br>
 Stock disponible tout au long de la saison : le bon produit au bon moment.<br></br>
 Flexibilité maximale avec un risque minimal.<br></br>
 Positionnement équitable des prix.</p>
        <div className="demi-spacer"></div>
      {/* forces */}
      <h2 className='text-h2'>Force de communication</h2>
      <p className="text-description">Marque coup de cœur des chanteurs, rappeurs et des youtubeurs. PROJECT X PARIS s’est inséré dans le milieu urbain auprès d’artistes, sportifs et influen- ceurs du moment. Sur les réseaux sociaux : + de 200K abonnés sur Snapchat et Instagram, de nombreuses collaborations telles que : Akon, French Montana, Chris Brown, Gunna, Nemar, etc (US)
Orelsan, Koba Lad, Vegedream, Ninho, Gradur, SCH, Dinor, Noah Lunsi, Soso Maness, Naps, Uzi etc (FR)</p>
<div className="demi-spacer"></div>
        <div className='headline text-regular'>Collaborations</div>
          <div className='separator'></div>
          <img src={collab} alt='pxp' />
      <div className="demi-spacer"></div>
      {/* missions ui */}
      <h2 className='text-h2'>Mes missions</h2>
      <p className="text-description">J'ai eu pour objectif de refaire le design du site e-commerce de Project X Paris, pour cela j'ai du établir un benchmark sur les concurrents afin de se démarquer et proposer un contenu, et une expérience utilisateur la plus fluide et agréable possible. Que ce soit en terme de navigation, mais également tout le tunnel d'achat.</p>
      {/* start case */}
      <div className="spacer"></div>
      <FullImage src={visual2} alt='preview' />
      <div className="spacer"></div>
      {/* CHART */}
      <h2 className='text-h2'>Charte graphique</h2>
          {/* chart */}
          <div className="chart">
        <div className="art-direction">
          <h4 className="text-h4">Art direction</h4>
          <p className="text-description">Pour ce projet, j'ai du m'adapter aux codes de la marque mais j'ai été autorisée à modifier la palette de couleur ainsi que la typographie. Project X Paris est une marque de streetwear qui se veut moderne et haut de gamme. J'ai donc choisi des couleurs sobres, permettant de mettre avant leur photos, et leur produits qui sont déjà très souvent colorés. Pour la typographie, j'ai gardé leur police de base mais ai modifié la graisse pour rendre le contenu plus agréable à lire, et plus moderne.</p>
        </div>
        <div className="typography">
          <h4 className="text-h4">Typography</h4>
          <span className="text-typo one">Gotham<br/>Aa 123</span>
        </div>
        <div className="colors">
          <h4 className="text-h4">Colors</h4>
          <div className="color one">#FFFFFFFF</div>
          <div className="color two">#000000</div>
        </div>
      </div>
      {/* end chart */}
      <div className="spacer"></div>
      <FullImage src={preview} alt='preview' />
      <div className="spacer"></div>
      {/* desktop ui */}
      <h2 className='text-h2'>La refonte</h2>
      <p className='text-description'>
      Dans un premier temps, j'ai commencé par faire des recherches et un benchmark sur comment les concurrents mettait en page leur site-ecommerce sur mobile. Pourquoi mobile ? Car c'est via le smartphone que la majorité des clients consomment chez Project X Paris (plus de 70%), il fallait donc prioriser ce format (responsive first!). J'ai ensuite décliné le design, et adapté le format sur desktop. Je me suis concentrée sur la refonte des pages principales du site internet, puis adapté le reste des pages aux pages principales afin de garder le site homogène.</p>
      <br/>
      <br/>
      <h4 className="text-h4">Recherches UX</h4>
      <p  className='text-description'>
      La recherche UX était très important pour cette mission, car il ne fallait pas perdre le client lors de sa phase d'achat. De nombreux paniers abandonnés ont été rélevés il fallait donc optimiser le site internet et proposer une expérience plus fluide et facile pour l'utilisateur. Le design reste très improtant, car il fait également parti de l'expérience du site, le client est amené à rester et le visiter, mais si nous avons un bon design, et une expérience vide, cela n'optimisera pas les ventes.
      </p>
      <div className="spacer"></div>
      <h2 className='text-h2'>UI Design</h2>
      <p className='text-description'>
      Voici un preview des pages principales retravaillées</p>
        {/* homepage */}
        <div className='demi-spacer'></div>
      <div className='headline text-regular'>homepage</div>
      <div className='separator'></div>
      <img src={homepage} alt='pxp' />
      <div className='spacer'></div>
      <div className='headline text-regular'>product page</div>
      <div className='separator'></div>
      <img src={productPage} alt='pxp' />
      <div className='spacer'></div>
      {/* responsive ui */}
      <h2 className='text-h2'>Responsive UI</h2>
      <div className='demi-spacer'></div>
      <div className='headline text-regular'>responsive selection</div>
      <div className='separator'></div>
      <div className='responsive'>
        <img src={homeMobile} alt='responsive'></img>
        <img src={menuMobile} alt='responsive'></img>
        <img src={productMobile} alt='responsive'></img>
        <img src={blogMobile} alt='responsive'></img>
      </div>      
      <div className="big-spacer"></div>
      <h2 className='text-h2'>Intégration web</h2>
      <p  className='text-description'>
      Pour l'intégration j'ai dû apprendre la manière utilisée au sein de l'entreprise : Elementor. Avant de mettre le site en production, nous avons intégré les nouvelles maquettes dans une version Beta afin de vérifier si tout était prêt avant de mettre cela sur le site officiel. Cela permet de passer par une étape de vérification et ne pas faire d'erreur sur la plateforme e-commerce qui pourrait nuire aux ventes.
      </p>
      <br/>
      <br/>
      <h4 className="text-h4">Optimisations</h4>
      <p  className='text-description'>
      Il était important d'optimsé le site internet pour gagner en temps de chargement mais également optimiser l'expérience utilisateur. Lorsque le site est trop lent les utilisateurs ont tendances à quitter le site. Pour cela il fallait donc faire attention aux poids des images : les compresser. Mais également aux modules qui ne devaient pas peser trop lourd.
      </p>
      <br/>
      <br/>
      <h4 className="text-h4">Le SEO</h4>
      <p  className='text-description'>
      Nous devions également faire attention au SEO, et bien respecté la nommenclature des titres et aux textes dédiés. Ne pas faire d'erreur dans les noms des composants et produits.
      </p>
      <div className="spacer"></div>
      <FullImage src={op} alt='preview' />
      <div className="spacer"></div>
       {/* collab */}
       <h2 className='text-h2'>Nouvelles collections</h2>
      <p className='text-description'>
      Par la suite, j'ai participé au lancement des nouvelles collections et collaborations pour Project X Paris. Il fallait donc s'occuper des visuels et d'une page dédiée à celle-ci, et que tout soit prêt pour le jour J.</p>
      <br/>
      <br/>
      <h4 className="text-h4">Les newsletters</h4>
      <p  className='text-description'>
      J'ai également conceptionné et redesigné les newsletter de la marque afin de donner envie aux clients d'accéder au site internet et de les fidéliser.
      </p>
      <div className="demi-spacer"></div>
      <h2 className='text-h2'>Bilan et perspectives</h2>
      <p className='text-description'>
      J'ai énormément apris chez Project X Paris, je n'avais encore jamais travaillé dans une si grande entreprise. Hormis le design et le developpement web, j'ai eu de la chance de participer à d'autres tâches afin de visualiser ce que chaque personne faisait dans l'entreprise : la gestion du stock, les shootings photos, le service client etc. ce qui m'a permit d'observé l'importance de chacun d'eux. J'ai pu observer comment fonctionnait une entreprise dans le textile dans tout ses angles, l'organisation et les étapes à suivre pour qu'une marque fonctionne durablement dans le temps.</p> 
      <br/>
      <br/>
      <h4 className="text-h4">Ce qui a changé</h4>
      <p className='text-description'>
      Je suis sortie de ma zone de confort en manipulant de nouveaux logiciels mais j'ai également appris une nouvelle méthode de travail qui était propre à Project X Paris. Tout était très bien organisé et encadré, cela m'a permit de gagner en régularité (ce que je n'avais pas en arrivant chez eux).
      <br/> 
      Appris à écouter les opinions des autres et ne pas rester dans ma bulle : à m'adapter. Pousser mes recherches plus loin, et que la vision la plus importante restait celle du client : je ne devais pas me fier à mes goûts personnels. </p>
      <br/>
      <br/>
      <h4 className="text-h4">Réussite</h4>
      <p className='text-description'>
      Grâce à cette expérience j'ai gagné en maturité, mais également enrichi mes compétances et me suis adaptée au monde du travail. J'ai réussi à intégrer AKQA Paris, l'une des plus grandes agences de design dans le monde, dans le secteur du luxe, et je n'aurai jamais réussi à être prise si je n'avais pas fais cette alternance chez Project X Paris.</p>
      <div className="demi-spacer"></div>
      <h2 className='text-h2'>Remerciements</h2>
      <p className='text-description'>
      Je tiens à remercier Jimmy Gov, l'un des fondateurs de Project X Paris, de m'avoir accepté en tant qu'alternante et également Mickael Austrui, mon manager qui a su m'écouter et m'apprendre beaucoup de choses. Sa patience et son efficacité au travail sont 2 qualités que j'ai beaucoup apprécié chez lui. Il m'inspire, et m'a motivé tout du long de cette alternance. J'ai pu apprendre tellement de choses grâce à lui. Merci encore Mickael !</p> 
      <div className='home-section what-i-do'>
          <div className='headline text-regular'>About me</div>
          <div className='separator'></div>
          <div className='title text-h2-5'>
            Si vous voulez en savoir plus sur moi, vous retrouverez mon <span className='saol'>CV</span> ainsi que des <span className='saol'>infos</span> supplémentaires sur mon <span className='saol'>portfolio</span>
          </div>
          <div className="demi-spacer"></div>
          <Link className='button' to="/home">Visiter le portfolio</Link>
      </div>
      <div className="demi-spacer"></div>
      <FullImage src={myWork} alt='preview' />
    </StyledLv>
  )
}

export default Lv
