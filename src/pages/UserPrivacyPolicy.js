import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import axios from 'axios'; // Import Axios for API calls
import './UserPrivacyPolicy.css'; // Import a CSS file for styling

const UserPrivacyPolicy = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState(''); // State for email input
  const [error, setError] = useState(null); // State for error messages
  const [loading, setLoading] = useState(false); // State for loading status
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update email state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isChecked) {
      setLoading(true); // Set loading state to true
      setError(null); // Reset error state

      try {
        // Send email to the user
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/send-email`, {
          to: email,
          subject: 'Privacy Policy Acceptance',
message: `
Dear User,

Thank you for accepting our User Privacy Policy. We are thrilled to welcome you to the Community Book!

Your acceptance of this policy is a vital step in fostering a relationship built on trust and transparency. At Community Book, we are dedicated to protecting your privacy and ensuring that your personal information is handled with the utmost care and responsibility. We understand that privacy is of paramount importance to our users, and we are committed to safeguarding your data throughout your journey with us.

By accepting our privacy policy, you can rest assured that your personal information will only be used for purposes that enhance your experience. We may collect data such as your name, email address, and preferences, which will help us tailor our services to better meet your needs. Our policy outlines how we gather, use, and protect this data, ensuring you have complete visibility into our practices.

You can review our complete Privacy Policy on our website at [Community Book Privacy Policy](link_to_privacy_policy). This document provides a thorough explanation of the types of information we collect, the specific purposes for which we use it, and the robust measures we implement to protect your privacy. We encourage you to read through it carefully, as it contains important information about your rights and our obligations regarding your personal data.

As part of our commitment to delivering an exceptional user experience, you can expect to receive personalized communications tailored to your interests. These may include updates on new features, exclusive offers, and invitations to community events. Our goal is to keep you informed and engaged while ensuring your experience with Community Book is both enjoyable and seamless.

If you have any questions, concerns, or suggestions regarding our privacy practices or your personal information, please do not hesitate to reach out to our dedicated support team. We are here to assist you with any inquiries you may have and to ensure that your experience with Community Book aligns with your expectations regarding privacy and data protection.

Thank you for being an integral part of our community. We are excited to have you with us and look forward to providing you with a valuable and enriching experience!

Warm regards,

The Community Book Team

contact us @communitybook.contact@gmail.com
`
,
        });

        if (response.status === 200) {
          console.log('Email sent successfully.');
          // Redirect to the submission page with state
          navigate('/user-privacy-submission', { state: { userAccepted: true, userEmail: email } });
        } else {
          setError('Failed to send email. Please try again later.');
          console.error('Failed to send email:', response.statusText);
        }
      } catch (error) {
        setError('Error sending email. Please check your input and try again.');
        console.error('Error sending email:', error);
      } finally {
        setLoading(false); // Set loading state to false
      }
    }
  };

  return (
    <div className="user-privacy-policy"> {/* Changed class name to a unique one */}
      <h1>User Privacy Policy</h1>
      <p><strong>Effective Date:</strong> 1st October 2024</p>
      
      <p>At <strong>Community Book</strong>, we value your privacy. This User Privacy Policy outlines the types of personal information we collect, how we use and protect it, and your rights regarding your data. Your trust is paramount, and we aim to be transparent about our practices.</p>
      
      <h2>1. Data We Collect</h2>
      <p>We may collect and process the following types of personal data:</p>
      <ul>
        <li><strong>Name:</strong> To personalize your experience and communications.</li>
        <li><strong>Phone number:</strong> For account verification and support.</li>
        <li><strong>Email:</strong> To send updates and confirmations, including the acceptance of our privacy policy.</li>
        <li><strong>Date of birth:</strong> To ensure eligibility and provide age-specific services.</li>
        <li><strong>Current address:</strong> To help us provide location-based services.</li>
        <li><strong>Height and weight:</strong> If applicable, to recommend suitable facilities or services.</li>
        <li><strong>Payment history and transaction details:</strong> To manage your bookings and payments securely.</li>
        <li><strong>Preferences:</strong> Such as preferred facilities, past bookings, and feedback, to enhance your experience.</li>
        <li><strong>Device information:</strong> Including IP address, browser type, and operating system, to improve our platform's functionality.</li>
        <li><strong>Geolocation data:</strong> To suggest nearby facilities and improve location-based services.</li>
        <li><strong>Microphone access:</strong> For voice assistant functionality in our chatbot services.</li>
      </ul>
      
      <h2>2. Purpose of Data Collection</h2>
      <p>Your personal data helps us to:</p>
      <ul>
        <li><strong>Enhance your experience:</strong> Tailoring services to your needs and preferences.</li>
        <li><strong>Facilitate bookings:</strong> Making it easy for you to reserve and pay for our facilities.</li>
        <li><strong>Improve services:</strong> Using data analytics and machine learning to continuously enhance our offerings.</li>
        <li><strong>Provide timely updates:</strong> Sending personalized communications regarding your account and our services.</li>
        <li><strong>Secure your data:</strong> Implementing robust security measures to protect your information.</li>
        <li><strong>Authenticate users:</strong> Ensuring secure login and account access through services like Google login.</li>
      </ul>

      <h2>3. Data Sharing</h2>
      <p>We may share your data with trusted third parties to help us provide our services, including:</p>
      <ul>
        <li><strong>Razorpay:</strong> Our payment processor, ensuring secure transactions.</li>
        <li><strong>Google:</strong> For user authentication and login functionality.</li>
        <li><strong>Google Dialogflow ES:</strong> For providing our chatbot services and improving user interactions.</li>
      </ul>
      <p>We will not sell or rent your personal data to third parties for marketing purposes without your explicit consent.</p>

      <h2>4. Data Retention</h2>
      <p>Your data will be retained for a maximum of <strong>3 months</strong> from your last login. After this period, we will delete your data unless:</p>
      <ul>
        <li>Required by law to retain it.</li>
        <li>Necessary for ongoing services that you have requested.</li>
      </ul>

      <h2>5. Security Measures</h2>
      <p>We take the security of your personal data seriously and implement a variety of security measures, including:</p>
      <ul>
        <li><strong>SSL/TLS encryption:</strong> To protect data during transmission.</li>
        <li><strong>OTP verification:</strong> To ensure secure registration and logins.</li>
        <li><strong>Data anonymization:</strong> Where applicable, to protect your identity.</li>
        <li><strong>Two-factor authentication:</strong> An optional security measure for enhanced protection.</li>
      </ul>
      <p>While we strive to protect your personal data, please note that no method of transmission over the internet is 100% secure.</p>

      <h2>6. User Rights</h2>
      <p>You have the following rights regarding your personal data:</p>
      <ul>
        <li><strong>Access:</strong> You can request access to the personal data we hold about you.</li>
        <li><strong>Modification:</strong> You can update or modify your personal data at any time.</li>
        <li><strong>Deletion:</strong> You can request the deletion of your account and associated data.</li>
        <li><strong>Data portability:</strong> You can request to receive your data in a machine-readable format (e.g., JSON, CSV).</li>
        <li><strong>Opt-out:</strong> You can opt-out of marketing communications and non-essential data collection.</li>
      </ul>

      <h2>7. Cookies and Tracking</h2>
      <p>We use cookies and similar technologies to enhance your experience on our platform. Cookies help us:</p>
      <ul>
        <li>Remember your preferences and settings.</li>
        <li>Analyze site traffic and usage patterns.</li>
        <li>Deliver personalized content and advertisements.</li>
      </ul>
      <p>You can manage cookie settings through your browser preferences, but disabling cookies may affect your experience on our site.</p>

      <h2>8. Consent</h2>
      <p>By using our platform, you consent to the collection and use of your personal data as outlined in this policy. We will seek explicit permission for:</p>
      <ul>
        <li>Geolocation data.</li>
        <li>Microphone access for voice commands.</li>
        <li>Using Google login for authentication.</li>
      </ul>
      
      <h2>9. Changes to the Privacy Policy</h2>
      <p>We may update this User Privacy Policy periodically. Any significant changes will be communicated via pop-up notifications on our website or through email. We encourage you to review this policy regularly to stay informed about how we are protecting your information.</p>

      <h2>10. Contact Us</h2>
      <p>If you have any questions or concerns regarding this policy or our data practices, please contact us through the "Contact Us" page on our website. We are here to assist you and address any issues you may have.</p>

      <form onSubmit={handleSubmit}>
        <div className="email-container">
          <label htmlFor="user-email">Email:</label>
          <input 
            type="email" 
            id="user-email" 
            value={email} 
            onChange={handleEmailChange} 
            required 
            placeholder="Enter your email" 
          />
        </div>
        <div className="checkbox-container">
          <input 
            type="checkbox" 
            id="accept-policy" 
            checked={isChecked} 
            onChange={handleCheckboxChange} 
          />
          <label htmlFor="accept-policy">
            By accepting the privacy policy, you agree with Community Book and its practices.
          </label>
        </div>
        <button type="submit" disabled={!isChecked || !email || loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>} {/* Display error messages */}
    </div>
  );
};

export default UserPrivacyPolicy;
