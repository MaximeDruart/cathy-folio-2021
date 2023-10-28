import React from 'react';
import styled from 'styled-components';
import { marginPage } from '../../styles/globalCustom';
import ProductCard from '../shop/ProductCard';
import logo from './../../assets/img/shop/logo.svg'
// import chess from './../../assets/img/shop/chess.jpg'
import vod from './../../assets/img/shop/vod.jpg'
import keycaps from './../../assets/img/shop/keycaps.jpg'
import blossom from './../../assets/img/shop/blossom.jpg'

// import figma_template from './../../assets/img/shop/figma_template.fig'
import figmaImg from './../../assets/img/shop/figma_starter.jpg'
import reactImg from './../../assets/img/shop/react_starter.jpg'
import inspiImg from './../../assets/img/shop/inspi_web.jpg'

import react from 'react';


const StyledShop = styled.div `
  * {
    color: ${({ theme }) => theme.colors.text.standard};
  }
  ${marginPage};
  transition: background-color 0.6s;
  background:  ${({ theme }) => theme.colors.background};  
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
  /* .logo{
    width: 100px;
    mix-blend-mode: difference;
    margin-bottom: 64px;
  } */
  @media (max-width: 750px) {
    padding-top: 15vh !important;
 }
 .logo{
    width: 200px;
    mix-blend-mode: difference;
 }
 p.desc{
    margin-top: 8px;
    font-size: 12px;
    opacity: 0.6;
  }
  h1{
    span{
        font-family: Ginger;
        font-size: 50px;
    }
    @media (max-width: 750px) {
      font-size: 32px;
      span{
        font-size: 36px;
    }
    }
  }
  .product_list{
    margin-top: 64px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
`

function Shop() {
    return (
        <StyledShop>
            <img className="logo" src={logo} alt="logo"/>
            {/* <h1 className="text-h2">( KT.<span>LABS</span> )</h1> */}
            <p className="text-regular desc">Création, passion, transmission.</p>
            <div className="product_list">
                {/* <ProductCard 
                // link="https://buy.stripe.com/00gdRA9n7b5ubiU7ss" 
                src={blossom}
                name="BLOSSOM"
                page="/works/blossom"
                price="29"
                linkName="WIP..."
                /> */}
                {/* <ProductCard src={chess}
                 name="CHESS GAME"
                 price="???"   
                //  page="/works/chess"     
                 linkName="locked"
                 /> */}
{/*                  
                <ProductCard src={keycaps}
                 name="KEYCAPS"
                 price="???"
                 linkName="locked"
                //  page="/works/keycaps"     
                 /> */}
                <ProductCard src={inspiImg}
                  name="Inspi Web"
                  price="0.00"
                  link="https://mica-farm-042.notion.site/Webdesign-103235638be74397b1a561f8d37ae9aa"
                  linkName="go to notion"   
                 />

                <ProductCard src={figmaImg}
                  name="Starter Figma"
                  price="0.00"
                  link="https://www.figma.com/file/A6R9JTu0UfdyUOTzxK2yqw/Project-Template?type=design&node-id=0%3A1&mode=design&t=DUrXoJT1e9v0MqP4-1"
                  linkName="go to file"   
                 />

                <ProductCard src={reactImg}
                  name="Starter React"
                  price="0.00"
                  link="https://github.com/CathyDolle/template"
                  linkName="go to github"   
                 />
            </div>
        </StyledShop>
    );
}

export default Shop;