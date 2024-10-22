import React from 'react';
import { styled } from 'styled-components';
import { useContext, useState } from 'react';
import { MyContext } from '../context/mycontext';
import CardSmall from './card_small';
import Button from './button';
import { v4 as uuidv4 } from 'uuid';

import PurchaseSuccessful from './purchaseSuccessful';


const StyledCheckout = styled.section`
  width: 100%;
  height: auto;
    position: relative;


  .container_first{
    display: flex;
    flex-wrap: wrap;

    article {
      width: 50%;
      height: auto;
    }

    .article_first_child {
      display: flex;
      height: 800px;
      padding: 100px 50px;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      border-right: 1px solid gray;

      > div:first-child {
        height: 100px;

        > h1 {
          font-size: 30px;
        }
      }

    .container_cards{
        height: 600px;
        overflow: scroll;
    }
      
    }

    .article_second_child {
        display: flex;
        align-items: center;
        flex-direction:column;
        padding: 80px 20px 80px 20px;

        .div_first{
            height: 100px;

                h1{
                    font-size:30px;
                }
        }

        .div_second{
            gap:60px;
            width:100%;
            display: flex;
            flex-wrap:wrap;
            justify-content: center;

            >div {
                width:30%;
                >div{
                    display: flex;
                    flex-direction:column;

                        label{
                            font-size:15px;
                            margin-bottom:30px;
                        }
                }
            }
        }

        

        .container_button{
          width:100%;
          height:200px;
          display: flex;
          align-items:center;
          justify-content: center;
        }
      
    }
  }


  input {
      border: none;
      height: 40px;
      max-width: 350px;
      padding-left:10px;
      margin-bottom:20px;
      border-radius: 10px;
      background-color: #efefef;
    }
`
const Checkout = () => {

    const [valueName, setValueName] = useState("");
    const [valueAddress, setValueAddress] = useState("");
    const [valueDocument, setValueDocument] = useState("");
    const [valueNeighborhood , setValueNeighborhood] = useState("");
    const [valueCity, setValueCity] = useState("");
    const [valueEmail, setValueEmail] = useState("");



    const {productShopping, setProductShopping} = useContext(MyContext);
    const {purchaseSuccessful, setPurchaseSuccessful} = useContext(MyContext);
    const {infoUser, setInfoUser} = useContext(MyContext);
    const {userAndPurchaseData, setUserAndPurchaseData} = useContext(MyContext);


    console.log(userAndPurchaseData);

    const thePurchaseWasSuccessful = () => {
        if(!purchaseSuccessful){
            setPurchaseSuccessful(true);
        }


        if(valueName && valueAddress && valueDocument && valueNeighborhood && valueEmail && valueCity){
            const newUser = {
                id: uuidv4(),
                nombre: valueName,
                direccion: valueAddress,
                documento: valueDocument,
                barrio: valueNeighborhood,
                ciudad: valueCity,
                email: valueEmail,
            }

            setInfoUser([...infoUser, newUser])
        }

        setValueName("");
        setValueAddress("");
        setValueDocument("");
        setValueNeighborhood("");
        setValueCity("");
        setValueEmail("");
    };

    console.log("aqui",infoUser);

    const pushUser = () => {
        console.log('Contenido de infoUser:', infoUser); // Verifica el contenido
    
        setUserAndPurchaseData((prevUsers) => {
            const updatedUsers = [...prevUsers];
    
            if (updatedUsers.length > 0) {
                // Usa at para acceder al último elemento
                const lastUser = infoUser.at(-1); // Esto obtiene el último objeto de infoUser
    
                updatedUsers[updatedUsers.length - 1] = {
                    ...updatedUsers[updatedUsers.length - 1],
                    user: lastUser, // Asigna el último objeto
                };
            }
    
            return updatedUsers; // Retorna el array actualizado
        });
    };

  return (
    <StyledCheckout>
        {
            purchaseSuccessful ? 
            <PurchaseSuccessful/>
            :
            ""
        }
        <div className='container_first'>
            <article className='article_first_child'>
                <div>
                    <h1>Mi carrito</h1>
                </div>
                <div className='container_cards'>
                    {
                        productShopping.map((product, key) =>
                        <CardSmall
                        key={product.id}
                        name={product.nombre}
                        price={product.precio}
                        cantidad={product.cantidad }
                        style={{width: "400px", height: "150px", fontSize:"30px"}}
                        hidden={false}
                        />
                        )
                    }
                </div>
            </article>
            <article className='article_second_child'>   
                    <div className='div_first'>
                        <h1>Información personal</h1>
                    </div>
                    <div className='div_second'>
                        <div>
                            <div>
                                <label htmlFor="">Nombre y apellidos</label>
                                <input
                                value={valueName}
                                onChange={(e)=> setValueName(e.target.value)}
                                type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Documento identidad</label>
                                <input 
                                type="text"
                                value={valueDocument}
                                onChange={(e)=> setValueDocument(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="">Dirección</label>
                                <input
                                value={valueAddress}
                                type="text"
                                onChange={(e)=> setValueAddress(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Barrio</label>
                                <input 
                                value={valueNeighborhood}
                                type="text"
                                onChange={(e)=> setValueNeighborhood(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="">Ciudad</label>
                                <input
                                type="text"
                                value={valueCity}
                                onChange={(e)=> setValueCity(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Email</label>
                                <input
                                value={valueEmail}
                                type="text"
                                onChange={(e)=> setValueEmail(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='container_button'>
                        <Button
                        onClick={ () => {
                            thePurchaseWasSuccessful();
                            pushUser();
                        }}  
                        text={"Finalizar compra"}
                        />
                    </div>
            </article>
        </div>
    </StyledCheckout>
  )
}

export default Checkout