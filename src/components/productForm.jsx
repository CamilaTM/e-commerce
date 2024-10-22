import React, { useContext, useState } from 'react';
import { styled } from 'styled-components';
import { MyContext } from '../context/mycontext';
import img from "./saquito.png"
import { v4 as uuidv4 } from 'uuid';

const ProductFormStyled = styled.section`
   width: 100%;
   height: auto;

    article:first-child{
       width: 100%;
       height: 100vh;
       display: flex;
       align-items: center;
       padding-top:100px;
       justify-content: center;
    }

        .first_article {
            gap:30px;
            width: 400px;
            height: 500px;
            padding:30px;
            display: flex;
            border-radius:30px;
            align-items: center;
            flex-direction: column;
            background-color: #F1F1F1;

            .first_child{
                width: 100%;
                height:50px;
                display: flex;
                padding-top:25px;
                justify-content: center;

                    h1 {
                        font-size:25px;
                        font-family: 'Montserrat', sans-serif;

                    }
            }

            .second_child{
                width: 100%;
                padding-left:20px;
                display: flex;
                flex-direction: column;
                justify-content: center;

                    div{
                        display: flex;
                        gap:10px;
                        flex-direction: column;

                            label{
                                margin-top:20px;
                                font-size:12px;
                                font-family: 'Montserrat', sans-serif;

                            }

                            input{
                                max-width: 300px;
                                border:none;
                                height:30px;
                                
                            }
                    }
            }

            .child_three{
                button {
                    width:100px;
                    height:40px;
                    border:none;
                    color:white;
                    border-radius:10px;
                    background-color:#597CFF;
                }
            }
        }

        .second_article {
            gap:50px;
            width:100%;
            height:auto;
            padding:80px;
            display: flex;
            flex-wrap:wrap;
            justify-content: center;

                .card {
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
}
`

const ProductForm = ({showSection = true}) => {
    
    const {products, setProducts} = useContext(MyContext)
    const [valueName, setValueName] = useState("");
    const [valuePrice, setValuePrice] = useState("");
    const [valueAmount, setValueAmount] = useState("");


    const createNewProduct = () => {
        if(valueName && valuePrice && valueAmount){
            const productNew = {   
                    id: uuidv4(),
                    nombre: valueName,
                    precio: valuePrice,
                    cantidad: valueAmount,
                };
            
            setProducts([...products, productNew]);
            
        }

        setValueName("")
        setValuePrice("")
        setValueAmount("")
    }

    const deleteProduct = (id) => {
        const newListProducts = products.filter((product) => product.id  !== id )
            setProducts(newListProducts);
    }

    const valueInputName = (e) => {
        setValueName(e.target.value);
    }

    const valueInputPrice = (e) => {
        setValuePrice(e.target.value);
    }

    const valueInputAmount = (e) => {
        setValueAmount(e.target.value);
    }


  return (
    <ProductFormStyled>
        <article>
            <div className='first_article'>
                <div className='first_child'>
                    <h1>Crear producto</h1>
                </div>
                <div className='second_child'>
                    <div>
                        <label htmlFor="">Nombre</label>
                        <input 
                        type="text"
                        value={valueName}
                        onChange={valueInputName}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Precio</label>
                        <input 
                        type="text"
                        value={valuePrice}
                        onChange={valueInputPrice}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Cantidad disponible</label>
                        <input
                        type="text"
                        value={valueAmount}
                        onChange={valueInputAmount} 
                        />
                    </div>
                </div>
                <div className='child_three'>
                    <button
                    onClick={createNewProduct}
                    >Agregar</button>
                </div>
                <div>
                    <h1>Se ha agregado a la sección productoss</h1>
                </div>
            </div>
        </article>
        <article className='second_article'>
            {
                products.map((product, key) =>
                <div className='card' key={product.id}>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className='div_child_card'>
                        <div>
                            <h1>Nombre</h1>
                            <h2>{product.nombre}</h2>
                        </div>
                        <div>
                            <h1>Precio</h1>
                            <h2>{product.precio} </h2>
                        </div>
                        <div>
                            <h1>Cantidad</h1>
                            <h2>{product.cantidad} </h2>
                        </div>
                    </div>
                    {showSection && (
                        <div className='card_div_three'>
                            <button
                            onClick={() => deleteProduct(product.id)}
                            >x</button>
                            <button
                            >edit</button>
                        </div>
                    )}
                </div>
                )
            }
        </article>
    </ProductFormStyled>
  )
}

export default ProductForm