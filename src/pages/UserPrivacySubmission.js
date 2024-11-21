import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Make sure to install react-router-dom
import './UserPrivacySubmission.css'; // Import a CSS file for styling

const UserPrivacySubmission = () => {
  const location = useLocation();
  const { userAccepted, userEmail } = location.state || { userAccepted: false, userEmail: '' };

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="user-privacy-submission">
      <h1>Privacy Policy Acceptance</h1>
      {userAccepted ? (
        <div>
          <p>Thank you for accepting the User Privacy Policy!</p>
          <p>An email confirmation has been sent to <strong>{userEmail}</strong> regarding your acceptance of our privacy policy.</p>
        </div>
      ) : (
        <p>It seems you have not accepted the policy. Please go back and accept it.</p>
      )}

      <div className="content">
        <h2>Your Privacy Matters</h2>
        <p>
          At Community Book, we understand that your privacy is essential. We aim to provide a secure platform where you can manage your activities with confidence.
          By accepting our privacy policy, you help us protect your personal information and enhance your user experience.
        </p>

        <h2>What to Expect Next</h2>
        <p>
          After accepting the privacy policy, you will gain access to personalized recommendations, special offers, and timely updates tailored to your preferences.
          We strive to improve our services continuously based on user feedback, ensuring that your voice is heard.
        </p>

        <h2>Need Help?</h2>
        <p>
          If you have any questions or concerns about our privacy practices, don't hesitate to reach out to our support team.
          We are here to assist you with any inquiries you may have regarding your data and our policies.
        </p>
      </div>

      <footer className="footer">
        <p>We respect our users' privacy and are committed to protecting your information.</p>
        <p>Thank you for being a part of the Community Book family!</p>
        <p>Contact us: <a href="mailto:support@communitybook.com">communitybook.contact@gmail.com</a></p>
        <p>&copy; 2024 Community Book. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default UserPrivacySubmission;
