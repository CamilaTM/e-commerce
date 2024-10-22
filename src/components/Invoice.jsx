import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { MyContext } from '../context/mycontext';

 
const StyleInvoice = styled.section`
    width: 100%;
    height: auto;
    display:flex;
    align-items: center;
    padding-top:100px;
   justify-content: center;

        >div {
            width: 500px;
            height: auto;
            display: flex;
            align-items:center;
            border-radius:20px;
            background-color:gray;
            border:1px solid gray;
            background-color:white;
            flex-direction: column;
            padding:60px 20px 80px 20px;
            
                .first_child{
                    gap:20px;
                    display: flex;
                    text-align:center;
                    flex-direction: column;

                    h1 {
                        font-size:30px;
                    }

                    h2 {
                        font-size:14px;
                        color:gray;
                    }
                }

                .second_child {
                    width:350px;
                    

                        >div:first-child {
                            margin-top:30px;
                            h1 {
                                color:black;
                                font-size:16px;
                                margin-bottom:30px;
                            }
                        }

                        .container_info{
                            margin-bottom:20px;
                            text-align:center;
                            display:flex;
                            flex-wrap:wrap;
                            justify-content:space-between;

                             >div {
                                max-width:200px;
                                h1{
                                    font-size:14px;
                                }

                                h2{
                                    color:gray;
                                    font-size:13px;
                                    margin-top:15px;
                                }
                             }
                        }

                        .total {
                            width:100%;
                            display:flex;
                            margin-top:30px;
                            font-size:14px;
                            justify-content: flex-end
                        }


                }
                
        }
`

const Invoice = () => {
    const {productShopping, setProductShopping} = useContext(MyContext);
    const {infoUser, setInfoUser} = useContext(MyContext);

    console.log(infoUser);

    let acum = 0;

    productShopping.forEach(product => {
        let container = parseFloat( product.precio)

        acum = acum + container
        
        console.log(acum);
    });

  return (
    <StyleInvoice>
        <div>
            <div className='first_child'>
                <h1>Factura</h1>
                <h2>No. 394858</h2>
            </div>
            <div className='second_child'>
                <div><h1>Productos</h1></div>
                {
                    productShopping.map((product) =>
                <div className='container_info'>
                   <div>
                        <h1>Producto</h1>
                        <h2>{product.nombre} </h2>
                   </div>
                   <div>
                        <h1>Cantidad</h1>
                        <h2>{product.cantidad} </h2>
                   </div>
                   <div>
                        <h1>Precio</h1>
                        <h2>{product.precio} </h2>
                   </div>
                </div>
                    
                    )
                }
                <div className='total'>
                    <h1>Total:</h1>
                    <h2>{acum} </h2>
                </div>   
            </div>
            {
                infoUser.map((user) => 
               
            <>
            <div className='second_child'>
                <div><h1>Datos Personales</h1></div>
                <div className='container_info'>
                   <div>
                        <h1>Nombre</h1>
                        <h2>{user.nombre} </h2>
                   </div>
                   <div>
                        <h1>Doc. Identidad</h1>
                        <h2>{user.documento}</h2>
                   </div>
                   <div>
                        <h1>Dirección</h1>
                        <h2>{user.direccion} </h2>
                   </div>
                </div> 
            </div>
            <div className='second_child'>
                <div><h1></h1></div>
                <div className='container_info'>
                   <div>
                        <h1>Ciudad</h1>
                        <h2>{user.ciudad} </h2>
                   </div>
                   <div>
                        <h1>Barrio</h1>
                        <h2>{user.barrio} </h2>
                   </div>
                   <div>
                        <h1>Email</h1>
                        <h2>{user.email} </h2>
                   </div>
                </div> 
            </div>
            </>
                )
            }
        </div>
    </StyleInvoice>
  )
}

export default Invoice