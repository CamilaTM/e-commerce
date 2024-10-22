import styled from 'styled-components';
import CardProduct from './card_product';

import React, { useContext, useState } from 'react';
import { MyContext } from '../context/mycontext';
import Card_small from './card_small';
import CardSmall from './card_small';

import Cart from './Cart';


const ListProductsStyle = styled.section`
    gap: 50px;
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap:wrap;
    padding-top:100px;
    justify-content: center;
    
      article{
        position: fixed;          /* Fija el contenedor en la pantalla */
        top: 60px;  
        right: 0px;             /* Distancia desde la derecha */
        width: 400px;            /* Ancho del contenedor */
        height: 100%;         /* Altura máxima del contenedor */
        overflow-y: auto;        /* Agrega scroll si el contenido es demasiado largo */
        background-color: white; /* Color de fondo */
        border: 1px solid #ccc;  /* Borde del contenedor */
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra para darle profundidad */
        border-radius: 8px;      /* Bordes redondeados */
        z-index: 1000;           /* Asegura que el contenedor esté encima de otros elementos */
        padding: 15px;  
        padding-bottom:100px;
        
        
          .div_first_child {
            height: 100px;      
            display:flex;
            margin-bottom:50px;
            align-items: center;
            justify-content: center;
            position: relative;
            border-bottom: 1px solid gray;


             h1{
              font-size:20px;
             }

             button{
              top:0;
              left:0;
              border:none;
              position: absolute;
             }
          }
          /* Espaciado interno */

          .container_buy{
            width:100%
            height:70px;
            display:flex;
            justify-content: center;

              .button{
                height:40px;
                width:100px;
                border:none;
                color:white;
                border-radius:10px;
                background-color:#597CFF;
              }
          }
      }

`

const ProductList = () => {

    const {products, setProducts} = useContext(MyContext);
    const {shopping, setShopping} = useContext(MyContext);
    const {productShopping, setProductShopping} = useContext(MyContext);



    const closeShopping = () => {
      setShopping(!shopping)
    }

  return (
    <ListProductsStyle>
    {
        products.map((product, key) => 
            <CardProduct 
            key={product.id}
            name={product.nombre}
            price={product.precio}
            amount={product.cantidad}
            id={product.id}
            />
        )
    }
    {
      shopping ? 
        <Cart
        closeShopping={closeShopping}
        />
      :
      ""
    }
    </ListProductsStyle>
  )
}

export default ProductList