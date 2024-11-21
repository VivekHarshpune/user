import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './GymSubscriptionConfirmation.css';

const GymSubscriptionConfirmation = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    
    // Ensure that price is correctly set from the state
    const amount = state?.price ? state.price * 100 : 0; // Convert to paise for Razorpay
    const email = state?.email || 'john.doe@example.com';
    const userName = state?.name || 'John Doe';

    // Log the passed price for debugging
    console.log("Price passed to payment page:", state?.price);

    const bookingDetails = {
        gymName: state?.gym?.name,
        location: state?.gym?.location,
        membershipType: state?.membershipType,
        timePeriod: state?.timePeriod,
        date: state?.date,
        price: state?.price,
    };

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handlePayment = async () => {
        if (amount === 0) {
            alert('Error: Payment amount is zero. Please check your booking details.');
            return;
        }

        const options = {
            key: "rzp_test_q50UfOMNch5Tbj", // Replace with your Razorpay key
            amount: amount,
            currency: "INR",
            name: "Community Book",
            description: "Payment for gym subscription",
            handler: async function (response) {
                setLoading(true);
                try {
                  const res = await axios.post(`${process.env.REACT_APP_API_URL}/gym-payment`, {
                    email,
                    gymName: bookingDetails.gymName,
                    location: bookingDetails.location,
                    membershipType: bookingDetails.membershipType,
                    timePeriod: bookingDetails.timePeriod,
                    date: bookingDetails.date,
                    price: bookingDetails.price,
                    paymentId: response.razorpay_payment_id // Send payment ID
                });
                

                    if (res.status === 201) {
                        alert("Payment successful! Gym subscription details email sent successfully!");
                        navigate('/success');
                    } else {
                        throw new Error('Email sending failed');
                    }
                } catch (error) {
                    console.error('Error sending email:', error.response || error.message);
                    alert('Error sending email. Please check your booking details.');
                } finally {
                    setLoading(false);
                }
            },
            prefill: {
                name: userName,
                email: email,
                contact: "", // Replace with a valid dynamic contact number if available
            },
            theme: {
                color: "#F37254"
            },
            modal: {
                ondismiss: function() {
                    alert("Payment was canceled. Please try again.");
                    navigate('/final-booking-details', { 
                        state: { 
                            ...state, 
                            paymentCancelled: true 
                        } 
                    });
                }
            }
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    return (
        <div className="subscription-confirmation">
            <h2>Gym Subscription Payment</h2>
            <p><strong>Booking Reference:</strong> {`GYMSUBSCRIPTION-${userName.toUpperCase()}-RPAPSF6N5`}</p>
            <p><strong>Member Name:</strong> {userName}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Contact Number:</strong> {state?.contact || 'N/A'}</p>
            <p><strong>Gym:</strong> {bookingDetails.gymName}</p>
            <p><strong>Location:</strong> {bookingDetails.location}</p>
            <p><strong>Date:</strong> {bookingDetails.date}</p>
            <p><strong>Membership Type:</strong> {bookingDetails.membershipType}</p>
            <p><strong>Time Period:</strong> {bookingDetails.timePeriod} Months</p>
            <p><strong>Total Price:</strong> ₹{(amount / 100).toFixed(2)}</p>
            <button 
                onClick={handlePayment} 
                className="pay-now-button" 
                disabled={loading}
            >
                {loading ? 'Processing...' : 'Pay Now'}
            </button>
        </div>
    );
};

export default GymSubscriptionConfirmation;
