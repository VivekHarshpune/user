import React, { useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import './GymBookings.css'; // Optional: CSS for styling

const GymBookings = () => {
  const location = useLocation();
  const { location: gymLocation } = useParams(); // Removed gymName
  const gym = location.state;
  const navigate = useNavigate();

  const [membershipType, setMembershipType] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [price, setPrice] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    date: '', // Removed time from state
  });

  const membershipPrices = {
    premium: { 1: 5000, 3: 12000, 6: 21000, 12: 36000 },  // 1 month, 3 months, 6 months, 12 months
    standard: { 1: 3000, 3: 7000, 6: 12000, 12: 20000 },
    basic: { 1: 1000, 3: 2500, 6: 4000, 12: 7000 }
  };

  const handleMembershipChange = (e) => {
    const selectedType = e.target.value;
    setMembershipType(selectedType);
    setPrice(0); // Reset price when membership type changes
  };

  const handleTimePeriodChange = (e) => {
    const selectedPeriod = e.target.value;
    setTimePeriod(selectedPeriod);
    if (membershipType) {
      const calculatedPrice = membershipPrices[membershipType][selectedPeriod] || 0;
      setPrice(calculatedPrice);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Navigate to GymSubscriptionConfirmation page with form data
    navigate('/GymSubscriptionConfirmation', {
      state: {
        gym,
        ...formData,
        membershipType,
        timePeriod,
        price,
      },
    });
  };

  if (!gym) {
    return <h2>No gym selected. Please go back and select a gym.</h2>;
  }

  return (
    <div className="gym-bookings">
      <h1>Booking Details for {gym.name}</h1>
      <div className="gym-details">
        <p><strong>Location:</strong> {gym.location || gymLocation}</p>
        <p><strong>Rating:</strong> {gym.rating} ⭐</p>
        <p><strong>Phone:</strong> {gym.phone}</p>
        <p><strong>Timings:</strong> {gym.timing}</p>
        <p><strong>Facilities:</strong> {gym.facilities.join(', ')}</p>
      </div>

      <h2>Why Choose Our Gym?</h2>
      <p>
        Join us at {gym.name} and experience world-class facilities, certified trainers, and a vibrant community. Our gym offers tailored programs for all fitness levels to help you achieve your goals.
      </p>

      <h2>Book Your Slot</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} required />
        </div>
        
        <div className="form-group">
          <label htmlFor="membership">Membership Type:</label>
          <select id="membership" value={membershipType} onChange={handleMembershipChange} required>
            <option value="">Select Membership Type</option>
            <option value="premium">Premium (Personal Coach + Directions)</option>
            <option value="standard">Standard (Includes Coach)</option>
            <option value="basic">Basic (Membership Only)</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="timePeriod">Time Period:</label>
          <select id="timePeriod" value={timePeriod} onChange={handleTimePeriodChange} disabled={!membershipType} required>
            <option value="">Select Time Period</option>
            <option value="1">1 Month</option>
            <option value="3">3 Months</option>
            <option value="6">6 Months</option>
            <option value="12">12 Months</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Number:</label>
          <input type="tel" id="contact" name="contact" value={formData.contact} onChange={handleInputChange} required />
        </div>
        
        <div className="form-group">
          <label htmlFor="price">Total Price: {price > 0 ? `₹${price}` : 'N/A'}</label>
        </div>
        
        <button type="submit" disabled={price === 0}>Confirm Booking</button>
      </form>

      {/* Additional Information */}
      <div className="additional-info">
        <h3>Membership Benefits</h3>
        <ul>
          <li>Access to state-of-the-art gym equipment</li>
          <li>Personal training sessions</li>
          <li>Group fitness classes</li>
          <li>Nutritional guidance</li>
          <li>Discounts on merchandise</li>
        </ul>
        
        <h3>Payment Methods</h3>
        <p>We accept various payment methods including Credit/Debit cards, UPI, and Net Banking.</p>
        
        <h3>Offers</h3>
        <p>Check our website for seasonal offers and discounts on memberships!</p>
        
        <h3>Cancellation Policy</h3>
        <p>You can cancel your subscription within 7 days for a full refund. After that, please refer to our cancellation policy on our website.</p>

        <h3>Frequently Asked Questions</h3>
        <ul>
          <li><strong>Can I change my membership type later?</strong> Yes, you can upgrade or downgrade your membership at any time.</li>
          <li><strong>What if I miss a class?</strong> We allow you to reschedule your class if notified 24 hours in advance.</li>
          <li><strong>Are there family membership options?</strong> Yes, we offer discounted family packages!</li>
        </ul>
      </div>
    </div>
  );
};

export default GymBookings;
