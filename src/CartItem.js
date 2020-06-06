import React from 'react';
import './CartItem.css';

function CartItem ( {id, name, price, qty, updateQty} ) {

    const addOne = () => {
        updateQty(id, qty + 1)
    }
    const subtractOne = () => {
        updateQty(id, qty - 1)
    }

    return(
        <div className="CartItem">
            <div className="CartItem-name">{name}</div>
            <div>£{price}</div>
            <div>
                <button onClick={subtractOne} disabled={qty < 2}>-</button>
                <span class="CartItem-qty">{qty}</span>
                <button onClick={addOne}>+</button>
            </div>
            <div>Sub Total: £{price * qty}</div>
        </div>
    )
}

export default CartItem;