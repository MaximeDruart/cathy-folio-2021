import React from 'react';
import styled from 'styled-components';
import { marginPage } from '../../styles/globalCustom';
import ProductCard from '../shop/ProductCard';
// import logo from './../../assets/img/shop/logo.svg'
import soon from './../../assets/img/shop/soon.jpg'
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
  h1{
    margin-bottom: 64px;
    span{
        font-family: Ginger;
        font-size: 50px;
    }
    @media (max-width: 750px) {
      font-size: 32px;
      margin-bottom: 40px;
      span{
        font-size: 36px;
    }
    }
  }
  .product_list{
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
            <h1 className="text-h2">[KT.<span>LABS</span>]</h1>
            {/* <img className="logo" src={logo} alt="logo"/> */}
            <div className="product_list">
                <ProductCard link="https://buy.stripe.com/00gdRA9n7b5ubiU7ss" src={blossom}/>
                <ProductCard src={soon}/>
                <ProductCard src={soon}/>
            </div>
        </StyledShop>
    );
}

export default Shop;