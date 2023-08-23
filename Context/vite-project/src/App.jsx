import React from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import CartSummary from './CartSummary';
import { CartProvider } from './CartContext';
import productData from '../product.json';

const App = () => {
  return (
    <CartProvider>
        <div className="app">
           <h1>Products</h1>
            <ProductList products={productData.products} />
            
            <div className="cart-section">
                <h1>My Cart</h1>
                <Cart />
                <CartSummary />
            </div>
        </div>
    </CartProvider>
);
};
export default App;
