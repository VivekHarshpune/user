import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './BookingConfirmation.css';

const BookingConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { courtName, timeSlot, date, area, numberOfPlayers, totalHours } = location.state || {};

    // State management
    const [hourlyRate, setHourlyRate] = useState(0);
    const [email, setEmail] = useState(''); // Email state for user data collection
    const [players, setPlayers] = useState(Array.from({ length: numberOfPlayers }, () => ({ name: '', phone: '' })));
    const validTotalHours = totalHours ? Number(totalHours) : 0;
    const totalPrice = hourlyRate * validTotalHours;

    // Fetch court prices when component mounts or when area/courtName changes
    useEffect(() => {
        const fetchCourtPrices = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/court-prices`);
                const priceData = response.data[area]?.[courtName];
                setHourlyRate(priceData || 0); // Default to 0 if no price found
            } catch (error) {
                console.error('Error fetching court prices:', error);
            }
        };

        if (area && courtName) {
            fetchCourtPrices();
        }
    }, [area, courtName]);

    // Handle changes for player details
    const handlePlayerChange = (index, field, value) => {
        const updatedPlayers = [...players];
        updatedPlayers[index][field] = value;
        setPlayers(updatedPlayers);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            // Validate if hourlyRate is available
            if (hourlyRate <= 0) {
                alert('Error: Hourly rate is not defined.');
                return;
            }

            // Check if all player names and phones are filled
            for (const player of players) {
                if (!player.name || !player.phone) {
                    alert('Please fill in all player details before submitting.');
                    return;
                }
            }

            // Retrieve token from localStorage
            const token = localStorage.getItem('token');
            if (!token) {
                alert('No token found. Please log in to continue.');
                return;
            }

            // Prepare booking data
            const bookingData = {
                courtName,
                timeSlot,
                date,
                area,
                numberOfPlayers,
                totalHours: validTotalHours,
                players,
                totalPrice,
                hourlyRate,
                email,
            };

            // Send booking data to backend with Authorization header
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/badminton/booking`,
                bookingData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token
                    },
                }
            );

            // Handle successful response
            if (response.status === 201) {
                navigate('/final-booking-details', {
                    state: bookingData,
                });
            } else {
                throw new Error('Failed to create booking');
            }
        } catch (error) {
            console.error('Error creating booking:', error.message);
            if (error.response) {
                console.error('Error response:', error.response.data);
                alert(error.response.data.message || 'An error occurred during booking. Please try again.');
            } else {
                alert('An unexpected error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="confirmation-page">
            <h1>Booking Confirmation</h1>
            <h2>Your Booking Details:</h2>
            <div className="booking-details">
                <p><strong>Area:</strong> {area || 'N/A'}</p>
                <p><strong>Court Name:</strong> {courtName || 'N/A'}</p>
                <p><strong>Time Slot:</strong> {timeSlot || 'N/A'}</p>
                <p><strong>Booking Date:</strong> {date || 'N/A'}</p>
                <p><strong>Number of Players:</strong> {numberOfPlayers || 'N/A'}</p>
                <p><strong>Total Hours:</strong> {validTotalHours || 'N/A'}</p>
                <p><strong>Hourly Rate:</strong> ₹{hourlyRate}</p>
                <p><strong>Total Price:</strong> ₹{totalPrice}</p>
            </div>

            <h2>Player Details</h2>
            {players.map((player, index) => (
                <div key={index} className="player-details">
                    <label>
                        Player {index + 1} Name:
                        <input 
                            type="text" 
                            value={player.name} 
                            onChange={(e) => handlePlayerChange(index, 'name', e.target.value)} 
                            placeholder="Enter player name"
                            required 
                        />
                    </label>
                    <label>
                        Player {index + 1} Phone:
                        <input 
                            type="text" 
                            value={player.phone} 
                            onChange={(e) => handlePlayerChange(index, 'phone', e.target.value)} 
                            placeholder="Enter player phone number"
                            required 
                        />
                    </label>
                </div>
            ))}

            <label>
                Get Bill @Email:
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Please enter your email to get the bill" 
                    required 
                />
            </label>

            <button className="submit-button" onClick={handleSubmit}>Confirm Booking</button>
            <button className="go-back-button" onClick={() => window.history.back()}>Go Back</button>
        </div>
    );
};

export default BookingConfirmation;
