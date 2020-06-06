import React, { useState } from 'react';
import CartItem from './CartItem.js';
import './Cart.css';

function Cart ({ initialItems }) {

    const [items, setItems] = useState(initialItems);

    const updateQty = (id, newQty) => {
        const newItems = items.map(item => {
            if(item.id === id) {
                return {...item, qty: newQty}
            }
            return item;
        })
        setItems(newItems);
    }

    const total = items.reduce((total, item) => (total + item.qty * item.price), 0).toFixed(2);

    return(
        <div className="Cart">
            <h1>Shopping Cart</h1>
            <div className="Cart-items">
                {items.map(item => (
                    <CartItem {...item} updateQty={updateQty} key={item.id} />
                ))}
            </div>
            <div className="Cart-total">
                <h2 className="Cart-total-text">Total Price: £{total}</h2>
            </div>
        </div>
    )
}

export default Cart;