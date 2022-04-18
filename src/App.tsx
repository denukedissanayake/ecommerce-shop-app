import './App.css';
import Auth from './pages/Auth';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';
import Productlist from './pages/Productlist';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { CartContextProvider } from './context/CartContext'

function App() {

  const user = false;

  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:category' element={<Productlist />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/auth' element={ user ? <Navigate to='/' />: <Auth /> } />
            <Route path='/cart' element={<Cart />} />
            <Route path="*" element={<h1>Not Found - 404</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
