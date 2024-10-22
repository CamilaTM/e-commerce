import img from "./saquito.png"
import React, { useContext, useState } from 'react';
import { styled } from 'styled-components';
import { MyContext } from '../context/mycontext';


const StyledCard = styled.div`
        overflow: hidden;
        width:100%;
        height:100px;
        display:flex;
        border-radius:10px;
        margin-bottom:20px;
        border:gray 1px solid;


                        div:first-child{
                            width:30%;
                            heigth:100%;


                                img {
                                    width:100%;
                                    height:100%;
                                }
                        }

                        .div_child_card{
                            gap:5px;
                            width:50%;
                            heigth:100%;
                            display:flex;
                            flex-direction:column;
                            padding:10px 5px 5px 20px;

                                h1 {
                                    font-size:8px;
                                    margin-bottom:10px;
                                }

                                h2 {
                                    font-size:7px;
                                    color:gray;
                                }
                        }

                        .card_div_three{
                            width:20%;
                            heigth:100%;
                            gap:20px;
                            padding:20px;
                            display:flex;
                            margin-rigth:30px;
                            flex-direction:column;

                            button{
                                width:auto;
                                heigth:20px;
                                border:none;

                            }
                        }
                

`

const CardSmall = ({name, price, amount, id, style, hidden = true}) => {

    const {productShopping, setProductShopping} = useContext(MyContext);
    const {products, setProducts} = useContext(MyContext);


    const deleteFromShopping = (id) => {
        console.log("Eliminando producto con id:", id); // Verifica el id

        const newList = productShopping.filter((product) => product.id !== id)

        setProductShopping(newList)
    }

  return (
    <StyledCard style={style}>
        <div>
            <img src={img} alt="" />
        </div>
        <div className='div_child_card'>
            <div>
                <h1>Nombre</h1>
                <h2>{name} </h2>
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
        {
            hidden? 
            <div className='card_div_three'>
                <button
                onClick={() => deleteFromShopping(id)}
                >-</button>
            </div>
            
            :
            ""
        }
    </StyledCard>
  )
}

export default CardSmall