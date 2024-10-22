import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import { MyContext } from '../context/mycontext'


const StylePurchase = styled.article`
  position: absolute;
  top: 25%;
  right: 30%;
  bottom: 50%;
  width: 700px;
  display:flex;
  height: 400px;
  border-radius:20px;
  align-items: center;
  border: 1px solid gray;
  background-color:white;
  flex-direction:column;
  justify-content: center;

    div:nth-child(1){
      position: absolute;
      right: 40px;
      top: 40px;
    }

    div:nth-child(2) {
      padding:30px;
      text-align:center;

        h1 {
          font-size:30px;
        }

        h2 {
          font-size:15px;
          margin-top:30px;
          color:gray;
        }
    }

`

const PurchaseSuccessful = () => {

  const {purchaseSuccessful, setPurchaseSuccessful} = useContext(MyContext);

  return (
    <StylePurchase>
      <div
      onClick={() => setPurchaseSuccessful(!purchaseSuccessful)}
      >
        <h1>X</h1>
      </div>
      <div>
        <h1>Su compra se ha completado satisfactoriamente</h1>
        <h2>Podrá ver su recibo en la sección Invoice</h2>
      </div>
    </StylePurchase>
  )
}


export default PurchaseSuccessful