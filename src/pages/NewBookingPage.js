import React, { useState } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './NewBookingPage.css';

const { Option } = Select;

const UserBackgroundForm = () => {
  const [loading, setLoading] = useState(false);

  const facilityRedirects = {
    badminton: 'http://localhost:3000/about-badminton',
    gym: 'http://localhost:3000/gymhome_welcome',
    'sports-complex': 'http://localhost:3000/sports-complexes',
    turf: 'http://localhost:3000/turf',
    pool: 'http://localhost:3000/swimming-pools',
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const apiUrl = `${process.env.REACT_APP_API_URL}/user-background`;
      await axios.post(apiUrl, values); // Use the environment variable for the API endpoint
      message.success('Information submitted successfully!');
      
      // Redirecting to the selected facility's URL
      const redirectUrl = facilityRedirects[values.facility];
      window.location.href = redirectUrl;
      
    } catch (error) {
      message.error('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="background-form-container">
      <div className="form-header">
        <h1 className="form-title">Tell Us About Yourself</h1>
        <p className="form-subtitle">Fill out this form to help us understand your preferences and guide you to the right facility!</p>
      </div>

      <Form
        layout="vertical"
        onFinish={onFinish}
        className="background-form"
      >
        <Form.Item
          label="Preferred Facility"
          name="facility"
          rules={[{ required: true, message: 'Please select a facility!' }]}
        >
          <Select placeholder="Select a facility" className="background-select">
            <Option value="badminton">Badminton Court</Option>
            <Option value="gym">Gym</Option>
            <Option value="pool">Swimming Pool</Option>
            <Option value="sports-complex">Sports Complex</Option>
            <Option value="turf">Turf</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: 'Please enter your location!' }]}
        >
          <Input placeholder="Enter your location" className="background-input" />
        </Form.Item>

        <Form.Item
          label="Interests"
          name="interests"
          rules={[{ required: true, message: 'Please enter your interests!' }]}
        >
          <Input placeholder="What activities are you interested in?" className="background-input" />
        </Form.Item>

        <Form.Item
          label="Additional Details"
          name="details"
        >
          <Input.TextArea placeholder="Any special requests or details" className="background-textarea" />
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={loading} className="background-button">
          Submit
        </Button>
      </Form>

      <div className="community-info">
        <h2 className="info-title">Why Choose Us?</h2>
        <p className="info-text">
          At Community Book, we offer world-class facilities with state-of-the-art equipment, accessible to all members. 
          Whether you're a fitness enthusiast or looking for recreational activities, we have something for everyone.
        </p>
      </div>

      <div className="contact-section">
        <h2 className="contact-title">Have Questions?</h2>
        <p className="contact-text">
          We’re here to help! If you have any questions or need assistance, feel free to <Link to="/contact" className="contact-link">contact us</Link>. 
          We look forward to hearing from you!
        </p>
      </div>
    </div>
  );
};

export default UserBackgroundForm;
