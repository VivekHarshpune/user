import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutBadminton.css';

const AboutBadminton = () => {
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  const handleBookingClick = () => {
    navigate('/badminton-court'); // Navigate to the booking page
  };

  const handleFindCoachClick = () => {
    navigate('/find-coach'); // Navigate to the find coach page
  };

  return (
    <div className="about-badminton">
      <h1 className="welcome-title">Welcome to the Badminton Community in Pune!</h1>
      <div className="introduction">
        <p className="intro-text">
          Join us in exploring the vibrant world of badminton. Whether you’re a beginner or a seasoned player, our community is here to support you in your badminton journey!
        </p>
      </div>

      <section className="news-section">
        <h2>Latest Worldwide News</h2>
        <div className="news-ticker">
          <div className="scrolling-text">
            <span role="img" aria-label="Earth globe">🌍</span> New World Champion Crowned in the Latest Tournament! |
            <span role="img" aria-label="Calendar">📅</span> Upcoming Major Tournaments: Don't Miss Out! |
            <span role="img" aria-label="Light bulb">💡</span> Tips from the Pros: How to Improve Your Game!
          </div>
        </div>
      </section>

      <section className="news-section">
        <h2>Latest India News</h2>
        <div className="news-list">
          <div className="news-item">
            <span role="img" aria-label="Earth globe">🌍</span> New Indian Champion Crowned in the Latest Tournament!
          </div>
          <div className="news-item">
            <span role="img" aria-label="Calendar">📅</span> Upcoming Major Tournaments: Don't Miss Out!
          </div>
          <div className="news-item">
            <span role="img" aria-label="Light bulb">💡</span> Tips from the Pros: How to Improve Your Game!
          </div>
        </div>
      </section>

      <section className="event-section">
        <h2>Upcoming Events in Pune</h2>
        <div className="event-list">
          <div className="event-card">
            <h3><span role="img" aria-label="Trophy">🏆</span> Pune City Badminton Championship</h3>
            <p>Date: <strong>11/15/2024</strong></p>
            <button className="register-btn">Register</button>
          </div>
          <div className="event-card">
            <h3><span role="img" aria-label="Medal">🏅</span> Weekly Training Sessions</h3>
            <p>Every Saturday at 4 PM</p>
            <button className="register-btn">Join Now</button>
          </div>
          <div className="event-card">
            <h3><span role="img" aria-label="Graduation cap">🎓</span> Badminton Skills Workshop</h3>
            <p>Date: <strong>11/30/2024</strong></p>
            <button className="register-btn">Learn More</button>
          </div>
        </div>
      </section>

      <section className="winners-section">
        <h2>International Tournament Winners</h2>
        <div className="winners-list">
          <div className="winner-item">2023 - World Badminton Championships: Kento Momota</div>
          <div className="winner-item">2022 - Olympics Gold Medal: Viktor Axelsen</div>
          <div className="winner-item">2021 - All England Open Champion: Lee Zii Jia</div>
        </div>
      </section>

      <section className="indian-tournaments-section">
        <h2>Recent Indian Tournament Winners</h2>
        <div className="indian-tournaments-list">
          <div className="indian-item">2023 - National Badminton Championships: Ashwini Ponnappa</div>
          <div className="indian-item">2022 - Indian Premier Badminton League: Pune Smashers - Winner</div>
          <div className="indian-item">2021 - All India Badminton Tournament: Kidambi Srikanth</div>
        </div>
      </section>

      <section className="resources-section">
        <h2>Resources to Improve Your Skills</h2>
        <ul className="resources-list">
          <li><span role="img" aria-label="Video camera">🎥</span> Online Training Videos and Tutorials</li>
          <li><span role="img" aria-label="Books">📚</span> Books and Articles by Expert Coaches</li>
          <li><span role="img" aria-label="Badminton racket">🏸</span> Local Badminton Clubs in Pune for Practice</li>
        </ul>
      </section>

      <section className="coach-section">
        <h2>Find a Personal Coach</h2>
        <p className="coach-text">
          Ready to elevate your badminton skills? Click below to find a personal coach that suits your needs!
        </p>
        <button className="find-coach-btn" onClick={handleFindCoachClick}>
          Find a Coach
        </button>
      </section>

      <section className="booking-section">
        <h2>Ready to Play Badminton?</h2>
        <button className="book-badminton-btn" onClick={handleBookingClick}>
          Book a Court Now
        </button>
      </section>
    </div>
  );
};

export default AboutBadminton;
