import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, message, Spin } from 'antd';
import { useParams } from 'react-router-dom';

const PaymentSplitPage = () => {
  const { bookingId } = useParams(); // Get the booking ID from the URL
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get(`/api/badminton/booking/${bookingId}`);
        setBooking(response.data); // Set the booking data
        setLoading(false);
      } catch (error) {
        message.error('Failed to fetch booking details');
        setLoading(false);
      }
    };
    fetchBookingDetails();
  }, [bookingId]);

  const handlePayment = async () => {
    try {
      // Call the backend to initiate payment (e.g., create a payment link for the user)
      const response = await axios.post('/api/payment/create-payment', { bookingId });

      // Simulating a payment link response
      const { paymentLink } = response.data;

      // Redirect user to the payment link
      window.location.href = paymentLink;
    } catch (error) {
      message.error('Failed to create payment link');
    }
  };

  if (loading) {
    return <Spin size="large" tip="Loading..." />;
  }

  if (!booking) {
    return <div>No booking found.</div>;
  }

  const shareAmount = booking.totalPrice / booking.numberOfPlayers;

  return (
    <div>
      <h2>Payment Split for Booking</h2>
      <p><strong>Court Name:</strong> {booking.courtName}</p>
      <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
      <p><strong>Total Price:</strong> ₹{booking.totalPrice}</p>
      <p><strong>Share Per Player:</strong> ₹{shareAmount}</p>

      <h3>Participants</h3>
      {booking.players.map((player, index) => (
        <div key={index}>
          <p>{player.name} - ₹{shareAmount}</p>
          {player.paymentStatus === 'paid' ? (
            <span>Paid</span>
          ) : (
            <Button onClick={handlePayment}>Pay Your Share</Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default PaymentSplitPage;
