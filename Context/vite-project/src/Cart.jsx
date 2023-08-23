import React from 'react';
import { useCart, useDispatchCart } from './CartContext';

const Cart = () => {
    const { items } = useCart();
    const dispatch = useDispatchCart();

    return (
        <div className="cart">
            {items.map(item => (
                <div key={item.id} className="cart-item">
                    <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
                    <h4>{item.title}</h4>
                    <div className="quantity-control">
                        <button
                            onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: item.id })}
                            className="quantity-button"
                        >
                            -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                            onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: item.id })}
                            className="quantity-button"
                        >
                            +
                        </button>
                    </div>
                    <p>Total Price: ₹{item.price * item.quantity}</p>
                    <button
                        onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                        className="remove-button"
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
