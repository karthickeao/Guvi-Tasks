import React from 'react';
import Carticon from './Carticon';

function Header({ cartCount }) {
    return (
        <header className="app-header">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                </ul>
            </nav>
            <Carticon cartCount={cartCount} />
        </header>
    );
}

export default Header;
