// CoachPaymentSuccess.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const CoachPaymentSuccess = () => {
    const { state } = useLocation();
    const { bookingDetails, paymentId } = state;

    return (
        <div>
            <h2>Booking Confirmed!</h2>
            <p>Coach: {bookingDetails.coachName}</p>
            <p>Start Date: {bookingDetails.startDate}</p>
            <p>End Date: {bookingDetails.endDate}</p>
            <p>Time Slots: {bookingDetails.timeSlots.join(', ')}</p>
            <p>Total Price: ₹{bookingDetails.totalPrice}</p>
            <p>Payment ID: {paymentId}</p>
            <p>Please keep this payment ID for your records.</p>
        </div>
    );
};

export default CoachPaymentSuccess;
