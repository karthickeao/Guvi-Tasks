import React from 'react';
import { useCart } from './CartContext';

const CartSummary = () => {
    const { items } = useCart();

    const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-summary">
            <h2>Cart Summary</h2>
            <p>Total Quantity: {totalQuantity}</p>
            <p>Total Amount: ₹{totalAmount}</p>
        </div>
    );
};

export default CartSummary;
