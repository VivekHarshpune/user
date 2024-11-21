import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { message, Spin, Button, Input } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

const ConfirmJoinPage = () => {
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const { bookingId } = useParams(); // Extract bookingId from the URL
  const navigate = useNavigate();

  // Fetch booking details
  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/badminton/booking/${bookingId}`);
        setBooking(response.data); // Set booking details in state
        setLoading(false);
      } catch (error) {
        console.error('Error fetching booking details:', error);
        message.error('Failed to fetch booking details');
        setLoading(false);
      }
    };

    fetchBookingDetails();
  }, [bookingId]);

  // Handle the join action
  const handleJoinBooking = async () => {
    if (!userDetails.name || !userDetails.email || !userDetails.phone) {
      message.error('Please fill out all the fields');
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/badminton/join-booking`, {
        bookingId,
        ...userDetails, // Include user details
      });

      if (response.status === 200) {
        message.success('You have successfully joined the booking!');
        navigate('/'); // Redirect to home or another page
      }
    } catch (error) {
      message.error('Failed to join the booking. Please try again later.');
    }
  };

  if (loading) {
    return <Spin size="large" tip="Loading..." />;
  }

  if (!booking) {
    return <div>No booking found.</div>;
  }

  return (
    <div>
      <h2>Booking Details</h2>
      <p><strong>Court Name:</strong> {booking.courtName}</p>
      <p><strong>Area:</strong> {booking.area}</p>
      <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
      <p><strong>Time Slot:</strong> {booking.timeSlot}</p>
      <p><strong>Number of Players:</strong> {booking.numberOfPlayers}</p>
      <p><strong>Total Price:</strong> ₹{booking.totalPrice}</p>
      
      {/* User input fields */}
      <Input 
        placeholder="Your Name"
        value={userDetails.name}
        onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
      />
      <Input 
        placeholder="Your Email"
        value={userDetails.email}
        onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
      />
      <Input 
        placeholder="Your Phone"
        value={userDetails.phone}
        onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
      />

      {/* Button to join the booking */}
      <Button type="primary" onClick={handleJoinBooking}>
        Join Now
      </Button>
    </div>
  );
};

export default ConfirmJoinPage;
