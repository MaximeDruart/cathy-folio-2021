import React from 'react';
import styled from 'styled-components';
import { marginPage } from '../../styles/globalCustom';
import ProductCard from '../shop/ProductCard';
import logo from './../../assets/img/shop/logo.svg'
// import chess from './../../assets/img/shop/chess.jpg'
import vod from './../../assets/img/shop/vod.jpg'
import keycaps from './../../assets/img/shop/keycaps.jpg'
import blossom from './../../assets/img/shop/blossom.jpg'


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
                <ProductCard 
                // link="https://buy.stripe.com/00gdRA9n7b5ubiU7ss" 
                src={blossom}
                name="BLOSSOM"
                page="/works/blossom"
                price="29"
                linkName="pre-order"
                />
                {/* <ProductCard src={chess}
                 name="CHESS GAME"
                 price="???"   
                //  page="/works/chess"     
                 linkName="locked"
                 /> */}
                <ProductCard src={keycaps}
                 name="KEYCAPS"
                 price="???"
                 linkName="locked"
                //  page="/works/keycaps"     
                 />
                <ProductCard src={vod}
                 name="Twitch"
                 price="???"
                 linkName="locked"
                //  page="/works/keycaps"     
                 />
            </div>
        </StyledShop>
    );
}

export default Shop;