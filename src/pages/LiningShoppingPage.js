import React from 'react';
import './LiningShoppingPage.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import welcomeImage from '/Users/vivekharsh/Downloads/CAPESTONE PROJECT/capestonebook/user-interface/src/pages/images/maxresdefault.jpg'; // Adjust the path as needed

const LiningShoppingPage = () => {
    const categories = [
        'Racquets',
        'Strings',
        'Shuttlecocks',
        'Apparel',
        'Footwear',
        'Bags',
        'Accessories'
    ];

    const products = [
        {
            id: 1,
            name: 'Lining Windstorm 78',
            description: 'A lightweight racket designed for exceptional speed.',
            price: 9000, // Price in INR
            image: '/images/Badminton/li-ning-windstorm-78-plus-badminton-racquet-navy-gold-unstrung_1.webp',
        },
        {
            id: 2,
            name: 'Lining Aeronaut 9000',
            description: 'This racket offers great power and precision for aggressive players.',
            price: 19999, // Price in INR
            image: '/images/Badminton/4a6d6195-d6c8-4d87-8d4e-3ecdd12ddf27.__CR0,2,4501,1392_PT0_SX970_V1___.jpg', // Updated image path
        },
        {
            id: 3,
            name: 'Lining G-Force 3000',
            description: 'Perfect for beginners, offering excellent power and control.',
            price: 7500, // Price in INR
            image: '/images/Badminton/g2-3-75-inches-g-force-3000-i-strung-1-ligfl3000ia-82-badminton-original-imaffvg9e3gb7bda.webp',
        },
        {
            id: 4,
            name: 'Lining Badminton Shoes',
            description: 'Comfortable shoes designed for enhanced badminton performance.',
            price: 11000, // Price in INR
            image: '/images/Badminton/download (1).jpeg',
        },
        // Add more products as needed
    ];

    return (
        <div className="lining-shopping-page">
            <header className="header">
                <h1>Lining Badminton Shop</h1>
                <p>Your go-to destination for all Lining badminton products!</p>
                <img src={welcomeImage} alt="Welcome to Lining Shop" className="welcome-image" />
            </header>

            <nav className="category-nav">
                <h2>Shop by Category</h2>
                <ul className="category-list">
                    {categories.map((category, index) => (
                        <li key={index} className="category-item">
                            <Link to={`/category/${category.toLowerCase()}`}>{category}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <section className="product-list">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">₹{product.price.toFixed(2)}</p>
                        <div className="compare-section">
                            <input type="checkbox" id={`compare-${product.id}`} />
                            <label htmlFor={`compare-${product.id}`}>Add to Compare</label>
                        </div>
                        <Link to={`/product/${product.id}`} className="view-details-btn">View Details</Link>
                    </div>
                ))}
            </section>

            <footer className="footer">
                <div className="footer-links">
                    <Link to="/badminton">Badminton</Link>
                    <Link to="/tennis">Tennis</Link>
                    <Link to="/golf">Golf</Link>
                    <Link to="/running">Running</Link>
                    <Link to="/snowboarding">Snowboarding</Link>
                </div>
                <p>© 2024 CommunityBook Badminton. All rights reserved.</p>
                <div className="social-media">
                    <a href="https://www.facebook.com/Lining" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com/Lining" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.youtube.com/user/Lining" target="_blank" rel="noopener noreferrer">YouTube</a>
                    <a href="https://www.instagram.com/lining/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </footer>
        </div>
    );
};

export default LiningShoppingPage;
