import React, { useState, useEffect } from 'react';

function ProductList({ products, cart, addToCart, removeFromCart }) {
    const [readMoreId, setReadMoreId] = useState(null);

    const openModal = (id) => {
        setReadMoreId(id);
    };

    const closeModal = () => {
        setReadMoreId(null);
    };

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) closeModal();
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return (
        <div className='container'>
        <div className="product-grid">
            {products.map(product => (
                <div key={product.id} className="product">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>
                        {product.description.length > 25 ? `${product.description.substring(0, 25)}... ` : product.description}
                        {product.description.length > 25 && <span className="read-more" onClick={() => openModal(product.id)}>Read More</span>}
                    </p>
                    <p className="product-price">Price: ₹{product.price}</p>
                    {cart.includes(product.id) ?
                        <button className="cart-btn" onClick={() => removeFromCart(product.id)}>Remove from Cart</button> :
                        <button className="cart-btn" onClick={() => addToCart(product.id)}>Add to Cart</button>
                    }
                </div>
            ))}
            {readMoreId && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        {products.find(p => p.id === readMoreId).description}
                    </div>
                </div>
            )}
        </div>
        </div>
    );
    
}

export default ProductList;
