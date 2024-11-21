import React from 'react';
import './AboutCommunityBook.css'; // Import the CSS file for styling

const AboutCommunityBook = () => (
  <div className="about-community-book">
    <h1>About Community Book</h1>
    
    <p>
      Welcome to <strong>Community Book</strong>, a platform that revolutionizes how local communities engage with fitness, sports, and recreational facilities. From badminton courts in Kothrud to turf in Baner, we connect you with top-tier amenities right in your neighborhood, ensuring that you have access to the best resources for a healthier, more active lifestyle.
    </p>
    
    <h2>Our Vision</h2>
    <p>
      Our vision is to create a unified platform where health, fitness, and community engagement intersect. Whether it's booking a swimming pool in Aundh or joining a fitness class in Viman Nagar, <strong>Community Book</strong> empowers individuals to connect with local facilities seamlessly. We believe in fostering a strong, health-focused community across Pune and beyond, making wellness accessible to all.
    </p>
    
    <h2>How It Works</h2>
    <p>
      <strong>Community Book</strong> simplifies the process of discovering and booking fitness and recreational facilities. Here's how it works:
    </p>
    <ul>
      <li><strong>Search:</strong> Find local facilities in your area, ranging from gyms to sports complexes.</li>
      <li><strong>Book Instantly:</strong> Book your slot with just a few clicks, ensuring a hassle-free experience.</li>
      <li><strong>Stay Updated:</strong> Get real-time updates on availability and facility status. No more last-minute surprises!</li>
      <li><strong>Engage:</strong> Connect with other community members through events, fitness challenges, and forums.</li>
    </ul>

    <h2>Key Features</h2>
    <p>
      What makes <strong>Community Book</strong> unique is our commitment to integrating technology with community needs. Here’s a look at the platform’s standout features:
    </p>
    <ul>
      <li><strong>Real-Time Updates:</strong> Stay updated on the availability of your favorite facilities, whether it’s a gym, a badminton court, or a swimming pool.</li>
      <li><strong>Effortless Booking:</strong> Our simple and intuitive booking system allows you to reserve facilities at any time from your phone or computer.</li>
      <li><strong>Community Forums:</strong> Engage with your neighborhood. Share your experience, recommend activities, and stay connected with local events.</li>
      <li><strong>Personalized Suggestions:</strong> Based on your booking history and preferences, we suggest the best facilities and services suited to your needs.</li>
      <li><strong>Vendor Management:</strong> Vendors can easily manage bookings, monitor facility usage, and receive feedback from users.</li>
    </ul>
    
    <h2>Flowchart - The Community Book Process</h2>
    <p>
      <strong>Step 1:</strong> User registers on the platform.<br/>
      <strong>Step 2:</strong> Vendor registers their facility, providing key details such as location, services, and availability.<br/>
      <strong>Step 3:</strong> Admin oversees the entire process, ensuring a smooth and secure experience for all users.<br/>
      <strong>Step 4:</strong> Users book facilities in real-time and engage with the community through events and challenges.<br/>
      [Include a visual flowchart here, showcasing the user journey from booking to community engagement.]
    </p>
    
    <h2>Discover New Features</h2>
    <p>
      As we grow, we constantly innovate to bring new features to the platform:
    </p>
    <ul>
      <li><strong>Volunteer Opportunities:</strong> Get involved in local community projects and events, helping foster a sense of belonging and teamwork.</li>
      <li><strong>Skill Sharing Platform:</strong> Offer and learn new skills from other community members, making learning a collaborative effort.</li>
      <li><strong>Neighborhood Watch:</strong> Stay safe and secure by connecting with your local neighborhood watch groups and updates.</li>
      <li><strong>Community Calendar:</strong> Keep track of important events, facility maintenance, and local happenings.</li>
    </ul>
    
    <h2>Our Mission</h2>
    <p>
      At <strong>Community Book</strong>, our mission is to create an inclusive, active, and health-conscious community. By breaking down the barriers to accessing fitness and recreational services, we aim to enhance your well-being while strengthening local connections. We are committed to making community-based fitness as accessible as ordering food online.
    </p>

    <button className="explore-button" onClick={() => window.location.href = '/'}>
      Back to Home
    </button>

    <footer className="footer">
      <div className="footer-links">
        <h3>Helpful Links</h3>
        <ul>
          <li><a href="https://www.facebook.com/CommunityBook">Facebook Our Story</a></li>
          <li><a href="https://www.instagram.com/CommunityBook">Instagram Recipes</a></li>
          <li><a href="https://www.youtube.com/CommunityBook">YouTube Blog</a></li>
          <li><a href="https://wa.me/1234567890">WhatsApp All Products</a></li>
          <li><a href="/refund-policy">Facebook Refund Policy</a></li>
          <li><a href="/shipping-policy">Instagram Shipping Policy</a></li>
          <li><a href="/privacy-policy">YouTube Privacy Policy</a></li>
          <li><a href="/terms-of-service">WhatsApp Terms of Service</a></li>
          <li><a href="/contact-us">Facebook Contact Us</a></li>
          <li><a href="/help">Instagram Help</a></li>
        </ul>
      </div>
      <div className="footer-follow">
        <h3>Follow Us</h3>
        <div className="social-media">
          <a href="https://www.facebook.com/CommunityBook" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/CommunityBook" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.youtube.com/CommunityBook" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
      <div className="footer-copy">
        <p>© All Rights Reserved, 2024, CommunityBook</p>
      </div>
    </footer>
  </div>
);

export default AboutCommunityBook;
