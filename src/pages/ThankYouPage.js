import React from 'react';
import './ThankYouPage.css'; // Import CSS file for styling
import { PhoneOutlined, MailOutlined } from '@ant-design/icons'; // Import icons

const ThankYouPage = () => (
  <div className="thank-you-container">
    <div className="thank-you-message">
      <h1 className="thank-you-title">
        <span role="img" aria-label="Party Popper">🎉</span> Thank You!
      </h1>
      <p className="thank-you-text">
        We're thrilled to hear from you! Our team is already on it and will get back to you shortly.
      </p>
      <p className="thank-you-subtext">
        Your feedback is incredibly valuable to us. Thank you for being a part of our community!
      </p>
      <div className="cta-section">
        <p className="cta-text">While you wait, check out our web store for new arrivals and exclusive offers!</p>
        <button className="cta-button" onClick={() => window.location.href = '/'}>
          GO TO HOME
        </button>
      </div>

      {/* Added section for immediate assistance */}
      <div className="contact-alternative">
        <h3>Need Immediate Assistance?</h3>
        <p>
          You can also contact us directly via phone or email:
        </p>
        <p>
          <PhoneOutlined /> 9931198029 <br />
          <MailOutlined /> communitybook.contact@gmail.com
        </p>
      </div>
    </div>
  </div>
);

export default ThankYouPage;
