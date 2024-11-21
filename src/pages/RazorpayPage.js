import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RazorpayPage.css';

const RazorpayPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const amount = state?.totalPrice * 100 || 0;
    const email = state?.email || 'john.doe@example.com';
    const userName = state?.players?.[0]?.name || 'John Doe';

    const bookingDetails = {
        courtName: state?.courtName,
        timeSlot: state?.timeSlot,
        date: state?.date,
        area: state?.area,
        numberOfPlayers: state?.numberOfPlayers,
        totalHours: state?.totalHours,
        totalPrice: state?.totalPrice,
        players: state?.players,
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
        const options = {
            key: "rzp_test_q50UfOMNch5Tbj",
            amount: amount,
            currency: "INR",
            name: "Community Book",
            description: "Payment for booking",
            handler: async function (response) {
                setLoading(true);

                try {
                    const res = await axios.post(`${process.env.REACT_APP_API_URL}/razorpay/payment`, {
                        email,
                        courtName: bookingDetails.courtName,
                        timeSlot: bookingDetails.timeSlot,
                        date: bookingDetails.date,
                        area: bookingDetails.area,
                        numberOfPlayers: bookingDetails.numberOfPlayers,
                        totalHours: bookingDetails.totalHours,
                        totalPrice: bookingDetails.totalPrice,
                        players: bookingDetails.players,
                        paymentId: response.razorpay_payment_id // Send payment ID
                    });
                    
                    if (res.status === 201) {
                        alert("Payment successful! Booking details email sent successfully!");
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
        <div className="razorpay-container">
            <h2>Payment Page</h2>
            <p>Total Amount: ₹{(amount / 100).toFixed(2)}</p>
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

export default RazorpayPage;
