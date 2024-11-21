// src/components/CreateYourPlan.js

import React, { useState } from 'react';
import './CreateYourPlan.css';

const CreateYourPlan = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
    dietaryPreference: 'vegetarian',
    medicalConditions: '',
  });

  const [bmi, setBmi] = useState(null);
  const [caloricNeeds, setCaloricNeeds] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100; // Convert height to meters
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
  };

  const calculateCaloricNeeds = (weight, height, age, activityLevel) => {
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Mifflin-St Jeor Equation for Men
    return (bmr * activityLevel).toFixed(2); // TDEE calculation based on activity level
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedBmi = calculateBMI(formData.weight, formData.height);
    setBmi(calculatedBmi);

    // Assuming a default activity level of 1.2 (sedentary)
    const caloricIntake = calculateCaloricNeeds(formData.weight, formData.height, formData.age, 1.2);
    setCaloricNeeds(caloricIntake);
  };

  return (
    <div className="create-plan">
      <h2>Create Your Own Workout Plan</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label>Height (cm):</label>
          <input type="number" name="height" value={formData.height} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label>Weight (kg):</label>
          <input type="number" name="weight" value={formData.weight} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Dietary Preference:</label>
          <select name="dietaryPreference" value={formData.dietaryPreference} onChange={handleChange}>
            <option value="vegetarian">Vegetarian</option>
            <option value="non-vegetarian">Non-Vegetarian</option>
            <option value="vegan">Vegan</option>
          </select>
        </div>

        <div className="form-group">
          <label>Medical Conditions:</label>
          <textarea name="medicalConditions" value={formData.medicalConditions} onChange={handleChange} />
        </div>

        <button type="submit" className="submit-button">Calculate Plan</button>
      </form>

      {bmi && (
        <div className="results">
          <h3>Your BMI: {bmi}</h3>
          <h3>Your Daily Caloric Needs: {caloricNeeds} calories</h3>
        </div>
      )}
    </div>
  );
};

export default CreateYourPlan;
