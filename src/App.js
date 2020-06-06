import React from 'react';
import Cart from './Cart.js';
import './App.css';

const items = [
  {id: 1, name: 'Bread', price: 1.99, qty: 1},
  {id: 2, name: 'Apple', price: 0.5, qty: 5},
  {id: 3, name: 'Cheese', price: 3.25, qty: 3},
]

function App() {
  return (
    <>
    <Cart initialItems={items} />
    </>
  );
}

export default App;
