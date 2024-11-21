import React from 'react';
import './ShoppingPage.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images with the correct relative paths
import image1 from '../assets/images/gymshoping/1200x800px_02(2).webp';
import image2 from '../assets/images/gymshoping/bnr_3565157_o.webp';
import image3 from '../assets/images/gymshoping/bnr_3568497_o.webp';
// Add more images as needed...

const ShoppingPage = () => {
    const categories = [
        'Supplements',
        'Protein Shakes',
        'Tablets',
        'Pre-Workouts',
        'Vitamins',
        'Fat Burners',
        'Protein Bars',
        'Herbal Products'
    ];

    const products = [
        {
            id: 1,
            name: 'HealKart Protein Powder',
            description: 'High-quality protein powder for muscle recovery.',
            price: 1500,
            image: 'https://example.com/healkart-protein.jpg',
            category: 'Protein Shakes',
        },
        {
            id: 2,
            name: 'Muscle Blaze Creatine',
            description: 'Boost your strength and endurance with this creatine supplement.',
            price: 1200,
            image: 'https://example.com/muscle-blaze-creatine.jpg',
            category: 'Supplements',
        },
        {
            id: 3,
            name: 'HealKart Multivitamins',
            description: 'Daily multivitamin for optimal health.',
            price: 800,
            image: 'https://example.com/healkart-multivitamins.jpg',
            category: 'Vitamins',
        },
        {
            id: 4,
            name: 'Muscle Blaze Fat Burner',
            description: 'Natural fat burner to support weight loss.',
            price: 1600,
            image: 'https://example.com/muscle-blaze-fatburner.jpg',
            category: 'Fat Burners',
        },
        {
            id: 5,
            name: 'Protein Bar Variety Pack',
            description: 'Delicious protein bars for a quick snack.',
            price: 750,
            image: 'https://example.com/protein-bars.jpg',
            category: 'Protein Bars',
        },
        {
            id: 6,
            name: 'HealKart Omega-3 Supplements',
            description: 'Supports heart health and brain function.',
            price: 1100,
            image: 'https://example.com/healkart-omega3.jpg',
            category: 'Supplements',
        },
        {
            id: 7,
            name: 'Muscle Blaze Pre-Workout Formula',
            description: 'Energizing pre-workout supplement for optimal performance.',
            price: 1400,
            image: 'https://example.com/muscle-blaze-pre-workout.jpg',
            category: 'Pre-Workouts',
        },
        {
            id: 8,
            name: 'HealKart Herbal Tablets',
            description: 'Natural herbal tablets for wellness.',
            price: 700,
            image: 'https://example.com/healkart-herbal-tablets.jpg',
            category: 'Tablets',
        },
        // Add more products as needed
    ];

    // Array of images to be used in the slider
    const welcomeImages = [
        image1,
        image2,
        image3,
        // Add other images similarly...
    ];

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,             // Enable autoplay
        autoplaySpeed: 1500,        // Change slide every 3 seconds
    };

    return (
        <div className="shopping-page">
            <header className="header">
                <h1>Exclusive Health Care Products</h1>
                <p>Your go-to destination for all exclusive health care products!</p>

                <Slider {...settings}>
                    {welcomeImages.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Welcome ${index + 1}`} className="welcome-image" />
                        </div>
                    ))}
                </Slider>
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
                    <Link to="/supplements">Supplements</Link>
                    <Link to="/protein-shakes">Protein Shakes</Link>
                    <Link to="/tablets">Tablets</Link>
                    <Link to="/pre-workouts">Pre-Workouts</Link>
                    <Link to="/herbal-products">Herbal Products</Link>
                </div>
                <p>© 2024 CommunityBook Health Care. All rights reserved.</p>
                <div className="social-media">
                    <a href="https://www.facebook.com/HealKart" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com/HealKart" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.instagram.com/healkart/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </footer>
        </div>
    );
};

export default ShoppingPage;
