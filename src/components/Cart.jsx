import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { MyContext } from '../context/mycontext';
import CardSmall from './card_small';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//id
import { v4 as uuidv4 } from 'uuid';


const StyledArticle = styled.article`

`

const Cart = ( {closeShopping} ) => {

    const {products, setProducts} = useContext(MyContext);
    const {shopping, setShopping} = useContext(MyContext);
    const {productShopping, setProductShopping} = useContext(MyContext);
    const {userAndPurchaseData, setUserAndPurchaseData} = useContext(MyContext);
    const {infoUser, setInfoUser} = useContext(MyContext);




const productToBuy = () => {
  const newUser = {
    id: uuidv4(),
    user: null,
    purchases: productShopping
  };


  setUserAndPurchaseData((prevUsers) => [...prevUsers, newUser]);
};


console.log(userAndPurchaseData);

  return (
    <StyledArticle>
        <div className='div_first_child'>
          <h1>Carrito</h1>
          <button
          onClick={closeShopping}
          >x</button>
        </div>
        <div>
          {
            productShopping.map((product, key) =>
              <CardSmall
              key={product.id}
              id={product.id}
              name={product.nombre}
              price={product.precio}
              amount={product.cantidad}
              />
            )
          }
        </div>
        <div className='container_buy'>
        <Link to="/checkout">
          <button
            onClick={productToBuy}
            className='button'
            >Comprar</button>
        </Link>
        </div>
    </StyledArticle>
  )
}

export default Cart