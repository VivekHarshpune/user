import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { message, Spin } from 'antd';
import axios from 'axios';

const CoachRazorpayPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const { totalPrice, coachDetails, userName, email, startDate, endDate, time } = location.state || {};

  useEffect(() => {
    if (!totalPrice || !coachDetails) {
      message.error('Invalid booking details. Please go back and try again.');
      navigate('/'); // Redirect to home or booking page
      return;
    }

    const loadRazorpayScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Razorpay SDK'));
        document.body.appendChild(script);
      });
    };

    const initiatePayment = async () => {
      try {
        // Load Razorpay SDK
        await loadRazorpayScript();

        const response = await axios.post(`${process.env.REACT_APP_API_URL}/razorpay/create`, {
          amount: totalPrice * 100, // Amount in paise
          currency: 'INR',
        });

        console.log('Razorpay Order Response:', response.data); // Log response for debugging

        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Use environment variable
          amount: response.data.amount,
          currency: response.data.currency,
          name: 'Coaching Service',
          description: 'Booking Payment',
          order_id: response.data.id,
          handler: async (paymentResponse) => {
            // Handle successful payment
            message.success('Payment successful!');

            // Store payment details in the database
            try {
              await axios.post(`${process.env.REACT_APP_API_URL}/coach/razorpay/payment`, {
                paymentId: paymentResponse.razorpay_payment_id,
                email,
                coachName: coachDetails.name,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                timeSlots: time,
                totalPrice,
              });
              // Redirect to confirmation page
              navigate('/confirmation', { state: { userName, email, coachDetails, startDate, endDate, time } });
            } catch (error) {
              console.error('Failed to store payment details:', error.response ? error.response.data : error.message);
              message.error('Failed to store payment details. Please try again later.');
            }
          },
          theme: {
            color: '#F37254',
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (error) {
        console.error('Error initiating payment:', error); // Log the entire error object
        message.error('Failed to initiate payment. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    initiatePayment();
  }, [totalPrice, coachDetails, navigate, email, endDate, startDate, time, userName]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {loading ? (
        <div>
          <Spin tip="Processing Payment..." size="large" />
          <p>If you are not redirected, please try again.</p>
        </div>
      ) : (
        <p>Redirecting...</p>
      )}
    </div>
  );
};

export default CoachRazorpayPayment;
