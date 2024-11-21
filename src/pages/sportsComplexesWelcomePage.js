import React, { useEffect } from 'react'; // Import useEffect
import './sportsComplexesWelcomePage.css'; // External CSS file for styling

const SportsComplexesWelcomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className="sports-complexes-container">
      <header className="sports-complexes-header">
        <h1>Welcome to Our Sports Complexes</h1>
        <p>Your adventure in fitness and fun starts here!</p>
      </header>

      <section className="features-section">
        <h2>Why Choose Our Sports Complexes?</h2>
        <div className="features">
          <div className="feature">
            <h3>Diverse Facilities</h3>
            <p>From swimming pools to tennis courts, we have it all for your fitness needs.</p>
          </div>
          <div className="feature">
            <h3>Community Events</h3>
            <p>Join us for exciting events that bring our community together.</p>
          </div>
          <div className="feature">
            <h3>Expert Coaching</h3>
            <p>Our experienced coaches are here to guide you at every step.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Members Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"The sports complexes have something for everyone! My family loves it!"</p>
            <h4>- Alex G.</h4>
          </div>
          <div className="testimonial">
            <p>"I enjoy the variety of activities available. It's a great place to stay active."</p>
            <h4>- Lisa M.</h4>
          </div>
          <div className="testimonial">
            <p>"The staff is friendly and the facilities are always clean. Highly recommend!"</p>
            <h4>- John S.</h4>
          </div>
        </div>
      </section>

      <section className="upcoming-events-section">
        <h2>Upcoming Events</h2>
        <div className="events">
          <div className="event">
            <h3>Family Fun Day</h3>
            <p>Date: October 15, 2024</p>
            <p>Join us for a day filled with games, sports, and family activities!</p>
          </div>
          <div className="event">
            <h3>Yoga Workshop</h3>
            <p>Date: October 22, 2024</p>
            <p>Relax and rejuvenate at our special yoga workshop. Open to all levels!</p>
          </div>
          <div className="event">
            <h3>Fitness Challenge</h3>
            <p>Date: November 5, 2024</p>
            <p>Test your limits and compete in our exciting fitness challenge!</p>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <h2>Photo Gallery</h2>
        <div className="gallery">
          <img src="image1.jpg" alt="Sports Complex 1" />
          <img src="image2.jpg" alt="Sports Complex 2" />
          <img src="image3.jpg" alt="Sports Complex 3" />
          <img src="image4.jpg" alt="Sports Complex 4" />
        </div>
      </section>

      <section className="blog-section">
        <h2>Latest Blog Posts</h2>
        <div className="blog-posts">
          <div className="post">
            <h3>Top 5 Tips for Staying Active</h3>
            <p>Discover effective ways to incorporate fitness into your daily routine.</p>
          </div>
          <div className="post">
            <h3>The Benefits of Team Sports</h3>
            <p>Learn how participating in team sports can improve your health and well-being.</p>
          </div>
          <div className="post">
            <h3>Nutrition for Athletes</h3>
            <p>Explore the best nutrition practices to fuel your workouts and recovery.</p>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <h2>Stay Updated!</h2>
        <p>Sign up for our newsletter to receive the latest news and updates.</p>
        <input type="email" placeholder="Enter your email" className="email-input" />
        <button className="subscribe-button">Subscribe</button>
      </section>

      <section className="membership-section">
        <h2>Join Us Today!</h2>
        <p>Become a member and discover a world of sports and fitness.</p>
        <button className="signup-button">Sign Up Now</button>
      </section>

      <footer className="footer">
        <p>© 2024 Sports Complexes. All Rights Reserved.</p>
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

export default SportsComplexesWelcomePage;
