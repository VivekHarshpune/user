import React from 'react';
import { Link } from 'react-router-dom';
import './BadmintonWorldPage.css'; // Import a CSS file for styling

const BadmintonWorldPage = () => {
    return (
        <div className="badminton-world-page">
            <header className="header">
                <h1>Welcome to Badminton World</h1>
                <p>Your go-to place for everything badminton!</p>
            </header>

            <section className="features">
                <h2>Explore Our Features</h2>
                <div className="feature">
                    <h3>Latest News & Updates</h3>
                    <p>Stay updated with the latest news from the badminton community.</p>
                    <Link to="/news" className="feature-link">Read More</Link>
                </div>
                <div className="feature">
                    <h3>Upcoming Tournaments</h3>
                    <p>Check out the upcoming tournaments and events.</p>
                    <Link to="/tournaments" className="feature-link">View Events</Link>
                </div>
                <div className="feature">
                    <h3>Training Tips</h3>
                    <p>Find expert tips and resources to improve your game.</p>
                    <Link to="/training-tips" className="feature-link">Get Tips</Link>
                </div>
            </section>

            <section className="community">
                <h2>Join Our Community</h2>
                <p>Connect with other badminton enthusiasts!</p>
                <Link to="/community" className="community-link">Join Community</Link>
            </section>

            {/* New Section for Congratulating Winners */}
            <section className="congratulations">
                <h2>Congratulations to Our 2024 Winners!</h2>
                <p>Follow their journey on Instagram!</p>
                <a 
                    href="https://www.instagram.com/bai_media?igsh=bDA0N2thZzdtM2Vr" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="instagram-link"
                >
                    <img 
                        src="/images/82224389-7659-44f1-aaaa-41d4fe643067-1708335993.webp" // Adjusted image path
                        alt="Badminton Players" 
                        className="instagram-image" 
                    />
                </a>
            </section>

            <section className="products">
                <h2>Our Products</h2>
                <div className="product">
                    <h3>Yonex Badminton Racket</h3>
                    <p>Get the best deals on Yonex badminton products!</p>
                    <Link to="/yonex" className="product-link">Shop Now</Link>
                </div>
                <div className="product">
                    <h3>Lining Badminton Gear</h3>
                    <p>Explore our range of Lining badminton gear!</p>
                    <Link to="/lining" className="product-link">Shop Now</Link>
                </div>
                {/* Add more products as needed */}
            </section>

            <footer className="footer">
                <p>© 2024 Community Badminton. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default BadmintonWorldPage;
