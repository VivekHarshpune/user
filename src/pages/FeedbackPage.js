import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import './FeedbackPage.css'; // Import CSS for styling

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: 1,
    liked: '',
    suggestions: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Effect to scroll to the top on component mount
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []); // Runs once on mount

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/feedback`, formData);
      setSuccessMessage(response.data.message); // Set success message
      setSubmitted(true); // Show thank you message

      // Reset form data
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: 1,
        liked: '',
        suggestions: ''
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // Optionally handle error state here
    }
  };

  return (
    <div className="feedback-container">
      <header className="feedback-header">
        <img src="./images/FEEDBACK/241-2414561_delivering-feedback-hd-png-download.png" alt="Feednacl Logo" className="feedback-logo" />
        <h1>We Value Your Feedback</h1>
        <p>Your feedback helps us improve and serve you better!</p>
      </header>

      {!submitted ? (
        <section className="feedback-form-section">
          <h2>Share Your Thoughts</h2>
          <p>Let us know about your experience with our facilities. We are here to listen!</p>
          <form onSubmit={handleSubmit} className="feedback-form">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="feedback-input"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="feedback-input"
              required
            />
            <textarea
              name="liked"
              value={formData.liked}
              onChange={handleChange}
              placeholder="What did you like about our facilities?"
              className="feedback-textarea"
              required
            ></textarea>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              placeholder="What didn't you like? Any areas for improvement?"
              className="feedback-textarea"
              required
            ></textarea>
            <textarea
              name="suggestions"
              value={formData.suggestions}
              onChange={handleChange}
              placeholder="Any suggestions for us?"
              className="feedback-textarea"
            ></textarea>

            <label htmlFor="rating">Rate our services (1 to 5 stars):</label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="feedback-select"
              required
            >
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>

            <button type="submit" className="feedback-submit-btn">Submit Feedback</button>
          </form>
        </section>
      ) : (
        <section className="feedback-thankyou-section">
          <h2>Thank You!</h2>
          <p>{successMessage}</p> {/* Show the success message */}
          <p>Your feedback has been received. We truly appreciate your time and effort.</p>
          <p>We'll use your feedback to improve our services and provide you with the best experience possible.</p>
        </section>
      )}

      <footer className="feedback-footer">
        <p>Contact us at feedback@communitybook.com if you have any further thoughts or concerns.</p>
        <p>© 2024 Community Book Gym. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default FeedbackPage;
