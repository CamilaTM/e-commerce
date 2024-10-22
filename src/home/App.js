import './App.css';
import MyProvider from '../context/mycontext'
import Nav from '../components/Nav';
import ProductForm from '../components/productForm';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import { styled } from 'styled-components';
import ProductList from '../components/productList';
import Checkout from '../components/Checkout';
import Invoice from '../components/Invoice';

const AppStyled = styled.body`
  height: 100%;
`


function App() {
  return (
    <MyProvider>
        <Nav/>
        <Router>
          <Routes>
            <Route path="/producto" element={<ProductList/>} />
            <Route path="/crearproducto" element={<ProductForm/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/invoice" element={<Invoice/>} />
          </Routes>
        </Router>
    </MyProvider>
  );
}

export default App;
