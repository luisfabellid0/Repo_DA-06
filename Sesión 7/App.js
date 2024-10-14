import React from 'react';
import { CartProvider } from './CartContext';
import Cart from './Cart';
import Product from './Product';

const App = () => {
  return (
    <CartProvider>
      <Cart />
      <Product item={{ name: 'Product 1', price: 10 }} />
      <Product item={{ name: 'Product 2', price: 20 }} />
    </CartProvider>
  );
};

export default App;