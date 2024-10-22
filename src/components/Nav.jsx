import React from 'react';
import { styled } from 'styled-components';
import { useContext } from 'react';
import { MyContext } from '../context/mycontext';


const NavStyled = styled.nav`
    width: 100%;
    height: 60px;
    display: flex;
    z-index:100px;
    position: fixed;
    position: relative;
    align-items: center;
    background-color:white;
    justify-content: center;
    border-bottom: 1px solid rgb(226, 226, 226);

    ul {
    width: 100%;
    display: flex;
    max-width: 600px;
    align-items: center;
    justify-content: space-between;
    }

    ul li {
        font-size: 15px;
        font-weight: 700;
        font-family: "Montserrat", sans-serif;
    }


    ul li:hover{
        color: blue;
    }

    li{
        a {
            color:black;
            text-decoration:none;
        }
    }

    div {
        gap:10px;
        right:80px;
        display: flex;
        position:absolute;

            h1{
                font-size:13px;
            }
    }

`
const Nav = () => {

    const {productShopping, setProductShopping} = useContext(MyContext);
    const {shopping, setShopping} = useContext(MyContext);


    const openShopping = () => {
        setShopping(!shopping)
      }


  return (
    <NavStyled>
        <ul>
            <li><a href="/producto">Productos</a></li>
            <li><a href="/crearproducto">Crear productos</a></li>
            <li><a href="/invoice">Invoice</a></li>
        </ul>
        <div 
        onClick={openShopping}
        >🛒 <h1>{productShopping.length} </h1></div>
    </NavStyled>
  )
}

export default Nav