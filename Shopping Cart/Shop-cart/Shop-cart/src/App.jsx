import React, { useState } from 'react';
import Header from './Components/Header';
import ProductList from './Components/Productlist';
import CartIcon from './Components/Carticon'
import Footer from './Components/Footer';
import LandingSection from './Components/LandingSection';

function App() {
    const [products] = useState([
        { id: 1, name: 'Apple iPhone 14 512 GB, Blue', description: 'iPhone 14 Plus has a supersized Super Retina XDR display. A new Main camera and improved image processing let you capture even more sensational shots in all kinds of light — especially low light.', price: '1,04,900', image:   'public/assets/Whitets.jpg' },

        { id: 2, name: 'Apple iPhone 13 128 GB, Midnight (Black)', description: 'Apple iPhone 13 128 GB, Blue', description: 'iPhone 14 Plus has a supersized Super Retina XDR display. A new Main camera and improved image processing let you capture even more sensational shots in all kinds of light — especially low light.', price: '64,900', image: 'src/assets/Apple13.jpg' },

        { id: 3, name: 'OnePlus Nord 3 5G 256 GB 16 GB RAM Misty Green', description: 'Eye Comfort, Video Color Boost, Screen Color Mode, Auto Brightness, Manual Brightness, Screen Color Temperature, Bright HDR Video Mode, Dark Mode', price: '37,999', image: 'src/assets/op256.jpg' },

        { id: 4, name: 'OnePlus Nord CE 2 Lite 5G,128 GB,6 GB RAM,Black Dusk', description: 'OnePlus Nord 3 5G 256 GB 16 GB RAM Misty Green', description: 'Eye Comfort, Video Color Boost, Screen Color Mode, Auto Brightness, Manual Brightness, Screen Color Temperature, Bright HDR Video Mode, Dark Mode', price: '17,999', image: 'src/assets/opn.png' },

        { id: 5, name: 'Samsung S22 Ultra 5G 256 GB, 12 GB RAM, Phantom Black', description: 'Dynamic AMOLED 2X with Vision Booster,  4 nm Octa Core Processor,  Corning Gorilla Glass Victus+', price: '1,02,000', image: 'src/assets/sag.jpg' },

        { id: 6, name: 'Samsung Galaxy Z Series Flip3 5G 128 GB, 8 GB RAM, Cream', description: 'Samsung Galaxy Z Series Flip3 5G 128 GB, 8 GB RAM, Cream,  Dynamic AMOLED 2X Main Display,  4.82cm (1.9 inch) Super AMOLED Cover display with 60Hz refresh rate', price: '1,12,999', image: 'src/assets/saz.jpg' },

        { id: 7, name: 'Xiaomi Redmi Note 12 5G 128 GB, 4 GB RAM, Frosted Green', description: 'Display: 16.94 cm (6.67 inch) Full HD + Super AMOLED,  Back Camera: 48 MP Main + 8 MP Ultra Wide + 2 MP Macro Camera', price: '16,999', image: 'src/assets/xr1.jpg' },

        { id: 8, name: 'Redmi 12C 64 GB, 4 GB RAM, Royal Blue', description: 'Display: 16.94 cm (6.67 inch) Full HD + Super AMOLED,  Back Camera: 48 MP Main + 8 MP Ultra Wide + 2 MP Macro Camera', price: '8,499', image: 'src/assets/xr2.jpg' },

        // Add more products as needed
    ]);

    const [cart, setCart] = useState([]);

    const addToCart = (productId) => {
        setCart(prevCart => [...prevCart, productId]);
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(id => id !== productId));
    };

    return (
        <div className="App">
            <Header cartCount={cart.length} />
            <LandingSection />
            <ProductList 
                products={products} 
                cart={cart} 
                addToCart={addToCart} 
                removeFromCart={removeFromCart} />
            <Footer />
        </div>
    );
}

export default App;
