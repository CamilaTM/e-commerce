import { createContext, useState } from "react";
import { useEffect } from "react";

export const MyContext = createContext();


const MyProvider = ({children}) => {

  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);



  const [productShopping, setProductShopping] = useState(() => {
    const savedproductShopping = localStorage.getItem('productShopping');
    return savedproductShopping ? JSON.parse(savedproductShopping) : [];
  });

  useEffect(() => {
    localStorage.setItem('productShopping', JSON.stringify(productShopping));
  }, [productShopping]);


  const [infoUser, setInfoUser] = useState(() => {
    const savedinfoUser = localStorage.getItem('infoUser');
    return savedinfoUser ? JSON.parse(savedinfoUser) : [];
  });

  useEffect(() => {
    localStorage.setItem('infoUser', JSON.stringify(infoUser));
  }, [infoUser]);


  //Estado de usuarios y sus compras
  const [userAndPurchaseData, setUserAndPurchaseData] = useState(() => {
    const savedData = localStorage.getItem('userAndPurchaseData');
    return savedData ? JSON.parse(savedData) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('userAndPurchaseData', JSON.stringify(userAndPurchaseData));
  }, [userAndPurchaseData]);



  const [purchaseSuccessful, setPurchaseSuccessful] = useState(false)




    const [shopping, setShopping] = useState(false)



  return (
    <MyContext.Provider value={{products, setProducts, shopping, setShopping, productShopping, setProductShopping, purchaseSuccessful, setPurchaseSuccessful, infoUser, setInfoUser, userAndPurchaseData, setUserAndPurchaseData}}>
        {children}
    </MyContext.Provider>
  )
}

export default MyProvider