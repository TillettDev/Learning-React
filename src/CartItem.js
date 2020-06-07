import React from 'react';
import './CartItem.css';

function CartItem ( {id, name, price, qty, updateQty, updateBasket } ) {

    const addOne = () => {
        updateQty(id, qty + 1)
    }
    const subtractOne = () => {
        updateQty(id, qty - 1)
    }

    const deleteItem = () => {
        updateBasket(id)
    }

    return(
        <div className="CartItem">
            <div className="CartItem-name">{name}</div>
            <div>£{price}</div>
            <div>
                <button onClick={subtractOne} disabled={qty < 2}>-</button>
                <span className="CartItem-qty">{qty}</span>
                <button onClick={addOne}>+</button>
            </div>
            <div>Sub Total: £{price * qty}</div>
            <div>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </div>
    )
}

export default CartItem;