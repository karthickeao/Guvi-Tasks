import React from 'react';

function Carticon({ cartCount }) {
    return (
        <div className="cart-icon">
            <span className="cart-count">{cartCount}</span>
              🛒 Cart
        </div>
    );
}

export default Carticon;
