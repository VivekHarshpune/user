// src/components/CustomWorkoutPlans.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './CustomWorkoutPlans.css';

const CustomWorkoutPlans = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log('Inquiry submitted:', formData);
    // Optionally reset the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCreatePlanClick = () => {
    navigate('/createyourplan'); // Navigate to Create Your Plan page
  };

  return (
    <div className="custom-workout-plans">
      <h1>Custom Workout Plans</h1>
      <p>Welcome to your personalized fitness journey! We provide tailored workout plans that fit your unique fitness goals and preferences.</p>

      <h2>What We Provide:</h2>
      <ul>
        <li>Personalized workout routines based on your fitness level</li>
        <li>Nutritional guidance to complement your fitness plan</li>
        <li>Progress tracking to keep you motivated</li>
        <li>Ongoing support and adjustments to your plan</li>
      </ul>

      <h2>How It Works:</h2>
      <ul>
        <li>1. Fill out your fitness goals.</li>
        <li>2. Select your preferred workout types.</li>
        <li>3. Set your workout schedule.</li>
        <li>4. Get a tailored workout plan just for you!</li>
      </ul>

      <h2>Get Started</h2>
      <button className="start-button" onClick={handleCreatePlanClick}>Create Your Plan</button>

      <h2>Inquiry Form</h2>
      <form className="inquiry-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

        <button type="submit" className="submit-button">Submit Inquiry</button>
      </form>
    </div>
  );
};

export default CustomWorkoutPlans;
