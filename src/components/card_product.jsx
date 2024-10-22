import styled from 'styled-components';
import React, { useContext, useState } from 'react';
import { MyContext } from '../context/mycontext';
import img from "./saquito.png"
import { v4 as uuidv4 } from 'uuid';

const CardStyled = styled.div`

                    overflow: hidden;
                    width:600px;
                    height:250px;
                    min-width: 500px;
                    display:flex;
                    border-radius:30px;
                    border:gray 1px solid;

                        div:first-child{
                            width:45%;
                            heigth:100%;


                                img {
                                    width:100%;
                                    height:100%;
                                }
                        }

                        .div_child_card{
                            gap:20px;
                            width:45%;
                            heigth:100%;
                            display:flex;
                            flex-direction:column;
                            padding:40px 20px 20px 20px;

                                h1 {
                                    font-size:18px;
                                    margin-bottom:10px;
                                }

                                h2 {
                                    font-size:13px;
                                    color:gray;
                                }
                        }

                        .card_div_three{
                            width:15%;
                            heigth:100%;
                            padding:20px;
                            display:flex;
                            gap:20px;
                            flex-direction:column;

                            button{
                                width:auto;
                                heigth:20px;
                                border:none;

                            }
                        }
                }
`

const CardProduct = ({name, price, amount, id, showSection = true }) => {


    const {shopping, setShopping} = useContext(MyContext);
    const {products, setProducts} = useContext(MyContext);
    const {productShopping, setProductShopping} = useContext(MyContext);


    const changeState = () => {
        if(!shopping) {
            setShopping(true)
        }
    }


  
    const addProductToShopping = () => {
        const productNew = {   
            id: uuidv4(),
            nombre: name,
            precio: price,
            cantidad: amount,
        };
    
        setProductShopping([...productShopping, productNew]);
    }

  return (
    <CardStyled className='card'>
        <div>
            <img src={img} alt="" />
        </div>
        <div className='div_child_card'>
            <div>
                <h1>Nombre</h1>
                <h2>{name}</h2>
            </div>
            <div>
                <h1>Precio</h1>
                <h2>{price} </h2>
            </div>
            <div>
                <h1>Cantidad</h1>
                <h2>{amount} </h2>
            </div>  
        </div>
            {showSection && (
                <div className='card_div_three'>
                    <button
                    onClick={() => { changeState(); addProductToShopping(); }}
                    >+</button>
                </div>
            )}
    </CardStyled>
  )
}

export default CardProduct