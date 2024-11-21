import React, { useEffect } from 'react'; // Import React and useEffect
import './swimmingPoolsPage.css'; // External CSS file for styling

const SwimmingPoolsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className="swimming-pools-container">
      <header className="swimming-pools-header">
        <h1>Welcome to Our Swimming Pools</h1>
        <p>Dive into a world of fun and fitness!</p>
      </header>

      <section className="features-section">
        <h2>Why Choose Our Swimming Pools?</h2>
        <div className="features">
          <div className="feature">
            <h3>State-of-the-Art Facilities</h3>
            <p>Our pools are designed with the latest technology for a safe and enjoyable experience.</p>
          </div>
          <div className="feature">
            <h3>Swimming Lessons</h3>
            <p>Join our professional instructors for swimming lessons for all ages.</p>
          </div>
          <div className="feature">
            <h3>Family-Friendly Environment</h3>
            <p>Enjoy a day at the pool with fun activities for the whole family!</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Guests Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"The swimming pools are amazing! My kids had a blast!"</p>
            <h4>- Sarah W.</h4>
          </div>
          <div className="testimonial">
            <p>"Great facilities and friendly staff. We'll be back!"</p>
            <h4>- Mark T.</h4>
          </div>
          <div className="testimonial">
            <p>"The swimming lessons are fantastic! Highly recommend!"</p>
            <h4>- Emily K.</h4>
          </div>
        </div>
      </section>

      <section className="events-section">
        <h2>Upcoming Events</h2>
        <div className="events">
          <div className="event">
            <h3>Swimming Gala</h3>
            <p>Date: November 10, 2024</p>
            <p>Join us for a thrilling swimming competition!</p>
          </div>
          <div className="event">
            <h3>Family Pool Party</h3>
            <p>Date: December 5, 2024</p>
            <p>A fun-filled day with games and activities for the entire family!</p>
          </div>
        </div>
      </section>

      <section className="membership-section">
        <h2>Join Us Today!</h2>
        <p>Become a member and enjoy exclusive access to our swimming pools.</p>
        <button className="signup-button">Sign Up Now</button>
      </section>

      <footer className="footer">
        <p>© 2024 Swimming Pools. All Rights Reserved.</p>
        <p>Follow us on social media:</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default SwimmingPoolsPage;
