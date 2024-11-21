import React from 'react';
import './SuccessPage.css'; // Ensure this path is correct
import successLogo from '/Users/vivekharsh/Downloads/CAPESTONE PROJECT/capestonebook/user-interface/src/pages/images/payment/success-payment-in-hand-illustration-in-flat-style-approved-money-illustration-on-isolated-background-successful-pay-sign-business-concept-vector.jpg'; // Add the path to your logo image

const SuccessPage = () => {
    return (
        <div className="success-container">
            <img src={successLogo} alt="Success Logo" className="success-logo" />
            <h1 className="fade-in">Payment Successful!</h1>
            <p className="fade-in">Thank you for your booking!</p>
            <p className="fade-in">Your reservation has been successfully confirmed. We hope you enjoy your time.</p>
            <p className="fade-in">For any inquiries or assistance, feel free to contact us:</p>
            <ul className="fade-in">
                <li>Email:communitybook.contact@gmail.com</li>
                <li>Phone: 9931198029</li>
            </ul>
            <p className="fade-in">Have a wonderful day!</p>
            <a href="/" className="home-link fade-in">Go to Home</a>
        </div>
    );
};

export default SuccessPage;
