import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './FinalBookingDetails.css'; // Assuming you have the CSS in a separate file

const FinalBookingDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { 
        courtName, 
        timeSlot, 
        date, 
        area, 
        numberOfPlayers, 
        totalHours, 
        players, 
        totalPrice, 
        email, // Include email from previous state
        paymentCancelled // New state flag
    } = location.state || {};

    const handlePayment = () => {
        // Pass all relevant booking details to the payment page
        navigate('/razorpay', { 
            state: { 
                courtName, 
                timeSlot, 
                date, 
                area, 
                numberOfPlayers, 
                totalHours, 
                players, 
                totalPrice,
                email // Pass email to payment page if needed
            } 
        });
    };

    return (
        <div className="final-booking-details">
            <h1>Booking Confirmation</h1>
            <h2>Your Booking Information</h2>
            <div className="booking-details">
                <p><strong>Area:</strong> {area || 'N/A'}</p>
                <p><strong>Court Name:</strong> {courtName || 'N/A'}</p>
                <p><strong>Time Slot:</strong> {timeSlot || 'N/A'}</p>
                <p><strong>Booking Date:</strong> {date || 'N/A'}</p>
                <p><strong>Number of Players:</strong> {numberOfPlayers || 'N/A'}</p>
                <p><strong>Total Hours:</strong> {totalHours || 'N/A'}</p>
                <p><strong>Total Price:</strong> ₹{totalPrice || '0'}</p>
                <p><strong>Email for Bill:</strong> {email || 'N/A'}</p> {/* Display email */}
            </div>

            <h2>Players Details</h2>
            {players && players.length > 0 ? (
                players.map((player, index) => (
                    <div key={index} className="player-details">
                        <label><strong>Player {index + 1}:</strong> {player.name} (Phone: {player.phone})</label>
                    </div>
                ))
            ) : (
                <p>No player details available.</p>
            )}

            {paymentCancelled ? (
                <div className="retry-payment-message">
                    <p>Payment was canceled. Would you like to retry?</p>
                    <button className="retry-payment-button" onClick={handlePayment}>Retry Payment</button>
                </div>
            ) : (
                <button className="go-back-button" onClick={handlePayment}>Proceed to Payment</button>
            )}
        </div>
    );
};

export default FinalBookingDetails;
