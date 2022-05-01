import './App.css';
import Auth from './pages/Auth';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';
import Productlist from './pages/Productlist';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { CartContextProvider } from './state/context/CartContext'
import { AuthContext, AuthContextProvider } from './state/context/AuthContext';
import Order from './pages/Order';
import { useContext } from 'react';

function App() {
  const { user } = useContext(AuthContext) || {};
  console.log(user)

  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:category' element={<Productlist />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/auth' element={ user.currentUser ? <Navigate to='/' />: <Auth /> } />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<Order />} />
            <Route path="*" element={<h1>Not Found - 404</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
