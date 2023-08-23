import React from 'react';
import { useDispatchCart } from './CartContext';

const ProductList = ({ products }) => {
    const dispatch = useDispatchCart();

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product">
                    <img src={product.thumbnail} alt={product.title} className="product-image" />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>Price: ₹{product.price}</p>
                    <button
                        onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
                        className="add-button"
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
