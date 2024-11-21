import React, { useEffect } from 'react'; // Import useEffect
import './turfPage.css'; // External CSS file for styling

const TurfPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className="turf-container">
      <header className="turf-header">
        <h1>Welcome to Our Turf Fields</h1>
        <p>Experience the best turf for your sports activities!</p>
      </header>

      <section className="turf-features-section">
        <h2>Why Choose Our Turf Fields?</h2>
        <div className="turf-features">
          <div className="turf-feature">
            <h3>High-Quality Turf</h3>
            <p>Our turf fields are made from premium materials for the best playing experience.</p>
          </div>
          <div className="turf-feature">
            <h3>Multiple Sports</h3>
            <p>Perfect for soccer, football, and more. Our fields accommodate various sports.</p>
          </div>
          <div className="turf-feature">
            <h3>Convenient Booking</h3>
            <p>Easy online booking for your convenience. Reserve your slot now!</p>
          </div>
        </div>
      </section>

      <section className="turf-testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="turf-testimonials">
          <div className="turf-testimonial">
            <p>"The turf fields are fantastic! My team loves playing here!"</p>
            <h4>- Sarah T.</h4>
          </div>
          <div className="turf-testimonial">
            <p>"Great facilities and easy to book. Highly recommend!"</p>
            <h4>- David R.</h4>
          </div>
          <div className="turf-testimonial">
            <p>"The quality of the turf is unmatched. Perfect for training!"</p>
            <h4>- Emma L.</h4>
          </div>
        </div>
      </section>

      <section className="turf-membership-section">
        <h2>Join Us Today!</h2>
        <p>Become a member and enjoy exclusive access to our turf fields.</p>
        <button className="turf-signup-button">Sign Up Now</button>
      </section>

      <footer className="turf-footer">
        <p>© 2024 Turf Fields. All Rights Reserved.</p>
        <p>Follow us on social media:</p>
        <div className="turf-social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default TurfPage;
