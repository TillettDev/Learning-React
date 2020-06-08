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

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products}/>
        <Route path="/cart" render={(props) => <Cart {...props} initialItems={items} />}/>
      </Switch>
    </Router>
  );
}

export default App;
