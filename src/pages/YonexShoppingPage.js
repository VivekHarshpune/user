import React from 'react';
import './YonexShoppingPage.css'; // Import a CSS file for styling
import { Link } from 'react-router-dom';

const YonexShoppingPage = () => {
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
            name: 'Yonex Nanoflare 700',
            description: 'Lightweight and aerodynamic racket for superior speed and control.',
            price: 10000, // Price in INR
            image: '/images/Badminton/4a6d6195-d6c8-4d87-8d4e-3ecdd12ddf27.__CR0,2,4501,1392_PT0_SX970_V1___.jpg', // Updated image path
        },
        {
            id: 2,
            name: 'Yonex Astrox 99',
            description: 'Designed for aggressive players, it delivers power and precision.',
            price: 22999, // Price in INR
            image: '/images/Badminton/yonex-astrox-99.jpg', // Updated image path
        },
        {
            id: 3,
            name: 'Yonex Muscle Power 29',
            description: 'Perfect for beginners, offering excellent power and stability.',
            price: 7999, // Price in INR
            image: '/images/Badminton/download.jpeg', // Updated image path
        },
        {
            id: 4,
            name: 'Yonex Badminton Shoes SHB 65',
            description: 'Comfortable and durable shoes designed for badminton performance.',
            price: 10999, // Price in INR
            image: '/images/Badminton/news240820_960_02.webp', // Updated image path
        },
        // Add more products as needed
    ];

    return (
        <div className="yonex-shopping-page">
            <header className="header">
                <h1>Yonex Badminton Shop</h1>
                <p>Your one-stop shop for all Yonex badminton products!</p>
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
                        <p className="price">₹{product.price.toFixed(2)}</p> {/* Price in INR */}
                        <div className="compare-section">
                            <input type="checkbox" id={`compare-${product.id}`} />
                            <label htmlFor={`compare-${product.id}`}>Add to Compare</label>
                        </div>
                        <Link to={`/product/${product.id}`} className="product-link">View Details</Link>
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
                <p>© 2024 CommunityBook. All rights reserved.</p>
                <div className="social-media">
                    <a href="https://www.facebook.com/Yonex" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com/Yonex" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.youtube.com/user/Yonex" target="_blank" rel="noopener noreferrer">YouTube</a>
                    <a href="https://www.instagram.com/yonex/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </footer>
        </div>
    );
};

export default YonexShoppingPage;
