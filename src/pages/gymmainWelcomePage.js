import React, { useState, useEffect } from 'react';
import './gymmainWelcomePage.css'; // External CSS file for styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const WelcomePage = () => {
  const navigate = useNavigate(); // Initialize navigate

  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic (e.g., sending data to server)
    console.log('Form Submitted:', formData);
    setModalOpen(false); // Close the modal after submission

    // Optionally navigate to another page
    console.log('Navigating to /gymhome_welcome'); // Debug log
    navigate('/gym'); // Navigate to gym welcome page
  };

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="welcome-container">
      <header className="welcome-header">
        <h1>Welcome to Community Book Gym</h1>
        <p>Your fitness journey starts here!</p>
      </header>

      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <h3>State-of-the-Art Equipment</h3>
            <p>Our gym is equipped with the latest fitness technology to help you reach your goals.</p>
          </div>
          <div className="feature">
            <h3>Expert Trainers</h3>
            <p>Our certified trainers are here to guide you through personalized workout plans.</p>
          </div>
          <div className="feature">
            <h3>Flexible Hours</h3>
            <p>Open 24/7 to fit your busy schedule. Workout whenever you want!</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Members Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"Community Book Gym has changed my life! The trainers are amazing and so supportive."</p>
            <h4>- Sarah L.</h4>
          </div>
          <div className="testimonial">
            <p>"Great atmosphere! I love coming here every day. Highly recommend!"</p>
            <h4>- Mike D.</h4>
          </div>
          <div className="testimonial">
            <p>"The variety of classes keeps me motivated and engaged. I’ve never felt better!"</p>
            <h4>- Emma R.</h4>
          </div>
        </div>
      </section>

      <section className="membership-section">
        <h2>Join Us Today!</h2>
        <p>Sign up for our membership and take the first step towards a healthier you.</p>
        <button className="signup-button" onClick={() => setModalOpen(true)}>Sign Up Now</button>
      </section>

      {/* Modal for booking */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
            <h2>Book Your Gym Slot</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
              </label>
              <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>© 2024 Community Book Gym. All Rights Reserved.</p>
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

export default WelcomePage;
