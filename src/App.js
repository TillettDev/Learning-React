import React from 'react';
import Navigation from './Navigation.js';
import Home from './Home.js';
import Products from './Products.js';
import Cart from './Cart.js';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const items = [
  {id: 1, name: 'Bread', price: 1.99, qty: 1},
  {id: 2, name: 'Apple', price: 0.5, qty: 5},
  {id: 3, name: 'Cheese', price: 3.25, qty: 3},
]

const products = [
  {id: 1, name: 'Apple', img: './images/Apple.png', desc: 'Apple', price: 0.25, inStock: 20},
  {id: 2, name: 'Grapes', img: './images/Grapes.png', desc: 'Grapes', price: 2.25, inStock: 20},
  {id: 3, name: 'Orange', img: './images/Orange.png', desc: 'Orange', price: 2.25, inStock: 25},
  {id: 4, name: 'Strawberries', img: './images/Strawberries.png', desc: 'Strawberries', price: 2.50, inStock: 15},
  {id: 5, name: 'Watermelon', img: './images/Watermelon.png', desc: 'Watermelon', price: 3, inStock: 10},
  {id: 6, name: 'Avacado', img: './images/Avacado.png', desc: 'Avacado', price: 3, inStock: 10},
];

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" render={(props) => <Products {...props} products={products}/> } />
        <Route path="/cart" render={(props) => <Cart {...props} initialItems={items} />}/>
      </Switch>
    </Router>
  );
}

export default App;
