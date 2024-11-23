import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '/Users/vivekharsh/Downloads/CAPESTONE PROJECT/capestonebook/user-interface/src/BadmintonBookingPage.css'; // Import necessary CSS

const areas = [
    {
      id: 1,
      name: 'Pune Camp',
      lat: 18.5255,
      lng: 73.9247,
      courts: [
        { name: 'Camp Court 1', details: { address: 'Address 1', phone: '1234567890', timings: '9 AM - 9 PM', rating: 4.5, } },
        { name: 'Camp Court 2', details: { address: 'Address 2', phone: '1234567891', timings: '9 AM - 9 PM', rating: 4.0 } },
        { name: 'Camp Court 3', details: { address: 'Address 3', phone: '1234567892', timings: '9 AM - 9 PM', rating: 4.2 } },
        { name: 'Camp Court 4', details: { address: 'Address 4', phone: '1234567893', timings: '9 AM - 9 PM', rating: 4.8 } },
        { name: 'Camp Court 5', details: { address: 'Address 5', phone: '1234567894', timings: '9 AM - 9 PM', rating: 4.7 } },
      ],
    },
    {
      id: 2,
      name: 'Viman Nagar',
      lat: 18.5705,
      lng: 73.9190,
      courts: [
        { name: 'Viman Court 1', details: { address: 'Address 6', phone: '1234567895', timings: '9 AM - 9 PM', rating: 4.3 } },
        { name: 'Viman Court 2', details: { address: 'Address 7', phone: '1234567896', timings: '9 AM - 9 PM', rating: 4.1 } },
        { name: 'Viman Court 3', details: { address: 'Address 8', phone: '1234567897', timings: '9 AM - 9 PM', rating: 4.4 } },
        { name: 'Viman Court 4', details: { address: 'Address 9', phone: '1234567898', timings: '9 AM - 9 PM', rating: 4.6 } },
        { name: 'Viman Court 5', details: { address: 'Address 10', phone: '1234567899', timings: '9 AM - 9 PM', rating: 4.9 } },
      ],
    },
    {
      id: 3,
      name: 'Kothrud',
      lat: 18.4790,
      lng: 73.8318,
      courts: [
        { name: 'Kothrud Court 1', details: { address: 'Address 11', phone: '1234567800', timings: '9 AM - 9 PM', rating: 4.2 } },
        { name: 'Kothrud Court 2', details: { address: 'Address 12', phone: '1234567801', timings: '9 AM - 9 PM', rating: 4.3 } },
        { name: 'Kothrud Court 3', details: { address: 'Address 13', phone: '1234567802', timings: '9 AM - 9 PM', rating: 4.1 } },
        { name: 'Kothrud Court 4', details: { address: 'Address 14', phone: '1234567803', timings: '9 AM - 9 PM', rating: 4.5 } },
        { name: 'Kothrud Court 5', details: { address: 'Address 15', phone: '1234567804', timings: '9 AM - 9 PM', rating: 4.6 } },
      ],
    },
    {
      id: 4,
      name: 'Aundh',
      lat: 18.5605,
      lng: 73.8141,
      courts: [
        { name: 'Aundh Court 1', details: { address: 'Address 16', phone: '1234567805', timings: '9 AM - 9 PM', rating: 4.4 } },
        { name: 'Aundh Court 2', details: { address: 'Address 17', phone: '1234567806', timings: '9 AM - 9 PM', rating: 4.3 } },
        { name: 'Aundh Court 3', details: { address: 'Address 18', phone: '1234567807', timings: '9 AM - 9 PM', rating: 4.5 } },
        { name: 'Aundh Court 4', details: { address: 'Address 19', phone: '1234567808', timings: '9 AM - 9 PM', rating: 4.7 } },
        { name: 'Aundh Court 5', details: { address: 'Address 20', phone: '1234567809', timings: '9 AM - 9 PM', rating: 4.8 } },
      ],
    },
    {
      id: 5,
      name: 'Hinjewadi',
      lat: 18.5860,
      lng: 73.7337,
      courts: [
        { name: 'Hinjewadi Court 1', details: { address: 'Address 21', phone: '1234567810', timings: '9 AM - 9 PM', rating: 4.6 } },
        { name: 'Hinjewadi Court 2', details: { address: 'Address 22', phone: '1234567811', timings: '9 AM - 9 PM', rating: 4.5 } },
        { name: 'Hinjewadi Court 3', details: { address: 'Address 23', phone: '1234567812', timings: '9 AM - 9 PM', rating: 4.7 } },
        { name: 'Hinjewadi Court 4', details: { address: 'Address 24', phone: '1234567813', timings: '9 AM - 9 PM', rating: 4.8 } },
        { name: 'Hinjewadi Court 5', details: { address: 'Address 25', phone: '1234567814', timings: '9 AM - 9 PM', rating: 4.9 } },
      ],
    },
    {
      id: 6,
      name: 'Baner',
      lat: 18.5500,
      lng: 73.8040,
      courts: [
        { name: 'Baner Court 1', details: { address: 'Address 26', phone: '1234567815', timings: '9 AM - 9 PM', rating: 4.3 } },
        { name: 'Baner Court 2', details: { address: 'Address 27', phone: '1234567816', timings: '9 AM - 9 PM', rating: 4.4 } },
        { name: 'Baner Court 3', details: { address: 'Address 28', phone: '1234567817', timings: '9 AM - 9 PM', rating: 4.5 } },
        { name: 'Baner Court 4', details: { address: 'Address 29', phone: '1234567818', timings: '9 AM - 9 PM', rating: 4.6 } },
        { name: 'Baner Court 5', details: { address: 'Address 30', phone: '1234567819', timings: '9 AM - 9 PM', rating: 4.7 } },
      ],
    },
    {
      id: 7,
      name: 'Hadapsar',
      lat: 18.4935,
      lng: 73.9343,
      courts: [
        { name: 'Hadapsar Court 1', details: { address: 'Address 31', phone: '1234567820', timings: '9 AM - 9 PM', rating: 4.4 } },
        { name: 'Hadapsar Court 2', details: { address: 'Address 32', phone: '1234567821', timings: '9 AM - 9 PM', rating: 4.5 } },
        { name: 'Hadapsar Court 3', details: { address: 'Address 33', phone: '1234567822', timings: '9 AM - 9 PM', rating: 4.6 } },
        { name: 'Hadapsar Court 4', details: { address: 'Address 34', phone: '1234567823', timings: '9 AM - 9 PM', rating: 4.7 } },
        { name: 'Hadapsar Court 5', details: { address: 'Address 35', phone: '1234567824', timings: '9 AM - 9 PM', rating: 4.8 } },
      ],
    },
    {
      id: 8,
      name: 'Shivajinagar',
      lat: 18.5252,
      lng: 73.8567,
      courts: [
        { name: 'Shivaji Court 1', details: { address: 'Address 36', phone: '1234567825', timings: '9 AM - 9 PM', rating: 4.6 } },
        { name: 'Shivaji Court 2', details: { address: 'Address 37', phone: '1234567826', timings: '9 AM - 9 PM', rating: 4.4 } },
        { name: 'Shivaji Court 3', details: { address: 'Address 38', phone: '1234567827', timings: '9 AM - 9 PM', rating: 4.5 } },
        { name: 'Shivaji Court 4', details: { address: 'Address 39', phone: '1234567828', timings: '9 AM - 9 PM', rating: 4.7 } },
        { name: 'Shivaji Court 5', details: { address: 'Address 40', phone: '1234567829', timings: '9 AM - 9 PM', rating: 4.8 } },
      ],
    },
    {
      id: 9,
      name: 'Wakad',
      lat: 18.5932,
      lng: 73.7764,
      courts: [
        { name: 'Wakad Court 1', details: { address: 'Address 41', phone: '1234567830', timings: '9 AM - 9 PM', rating: 4.5 } },
        { name: 'Wakad Court 2', details: { address: 'Address 42', phone: '1234567831', timings: '9 AM - 9 PM', rating: 4.6 } },
        { name: 'Wakad Court 3', details: { address: 'Address 43', phone: '1234567832', timings: '9 AM - 9 PM', rating: 4.7 } },
        { name: 'Wakad Court 4', details: { address: 'Address 44', phone: '1234567833', timings: '9 AM - 9 PM', rating: 4.8 } },
        { name: 'Wakad Court 5', details: { address: 'Address 45', phone: '1234567834', timings: '9 AM - 9 PM', rating: 4.9 } },
      ],
    },
    {
      id: 10,
      name: 'Kharadi',
      lat: 18.5540,
      lng: 73.9672,
      courts: [
        { name: 'Kharadi Court 1', details: { address: 'Address 46', phone: '1234567835', timings: '9 AM - 9 PM', rating: 4.3 } },
        { name: 'Kharadi Court 2', details: { address: 'Address 47', phone: '1234567836', timings: '9 AM - 9 PM', rating: 4.4 } },
        { name: 'Kharadi Court 3', details: { address: 'Address 48', phone: '1234567837', timings: '9 AM - 9 PM', rating: 4.5 } },
        { name: 'Kharadi Court 4', details: { address: 'Address 49', phone: '1234567838', timings: '9 AM - 9 PM', rating: 4.6 } },
        { name: 'Kharadi Court 5', details: { address: 'Address 50', phone: '1234567839', timings: '9 AM - 9 PM', rating: 4.7 } },
      ],
    },
  ];


  const BadmintonBookingPage = () => {
    const [manualArea, setManualArea] = useState('');
    const [error, setError] = useState(null);
    const [nearestArea, setNearestArea] = useState(null);
    const [selectedCourt, setSelectedCourt] = useState(null);
    const [availableCourts, setAvailableCourts] = useState([]);
    const [selectedTimeSlots, setSelectedTimeSlots] = useState([]); // Updated state for multiple time slots
    const [timeSlots, setTimeSlots] = useState([]);
    const [bookingDate, setBookingDate] = useState(''); // State for booking date
    const [isPopupVisible, setIsPopupVisible] = useState(true);
    const [numberOfPlayers, setNumberOfPlayers] = useState(1); // New state for number of players
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        // Automatically attempt to get the user's current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    findNearestArea(latitude, longitude);
                },
                (err) => {
                    setError('Location access denied. Please select an area manually.');
                }
            );
        } else {
            setError('Geolocation is not supported by this browser. Please select an area manually.');
        }
    }, []);

    const findNearestArea = (userLat, userLng) => {
        let nearest = null;
        let smallestDistance = Infinity;

        areas.forEach((area) => {
            const distance = Math.sqrt(
                Math.pow(userLat - area.lat, 2) + Math.pow(userLng - area.lng, 2)
            );

            if (distance < smallestDistance) {
                smallestDistance = distance;
                nearest = area.name;
            }
        });

        setNearestArea(nearest);
    };

    const handleManualSelection = (e) => {
        const selectedArea = e.target.value;
        setManualArea(selectedArea);
        const area = areas.find((area) => area.name === selectedArea);
        if (area) {
            setAvailableCourts(area.courts);
            setTimeSlots(generateTimeSlots(area.courts)); // Generate time slots based on courts
        } else {
            setAvailableCourts([]);
            setTimeSlots([]);
        }
        setSelectedCourt(null); // Reset selected court
    };

    const generateTimeSlots = (courts) => {
        const slots = [];
        const startHour = 6; // Court opens at 6 AM
        const endHour = 22; // Court closes at 10 PM
        const interval = 1; // 1-hour interval slots

        for (let hour = startHour; hour < endHour; hour += interval) {
            const timeSlot = `${hour}:00 - ${hour + interval}:00`;
            slots.push(timeSlot);
        }
        return slots;
    };

    const handleCourtSelection = (e) => {
        const selectedCourtName = e.target.value;
        const court = availableCourts.find(court => court.name === selectedCourtName);
        setSelectedCourt(court);
    };

    const handleTimeSlotSelection = (e) => {
        const selectedSlot = e.target.value;
        if (selectedSlot && !selectedTimeSlots.includes(selectedSlot)) {
            setSelectedTimeSlots([...selectedTimeSlots, selectedSlot]); // Add selected time slot to the array
        }
    };

    const handleBooking = () => {
        if (!selectedCourt) {
            alert('Please select a court.');
            return;
        }
        if (selectedTimeSlots.length === 0) {
            alert('Please select at least one time slot.');
            return;
        }
        if (!bookingDate) {
            alert('Please select a booking date.');
            return;
        }
        if (!manualArea && !nearestArea) { // Check if both manualArea and nearestArea are null
            alert('Please select an area.');
            return;
        }
    
        // Calculate total hours based on selected time slots
        const totalHours = selectedTimeSlots.length; // Each selected time slot counts as 1 hour
    
        // After successful booking, navigate to the confirmation page
        navigate('/booking-confirmation', {
            state: {
                area: manualArea || nearestArea, // Use manual area or nearest area
                courtName: selectedCourt.name,
                timeSlot: selectedTimeSlots.join(', '), // Pass selected time slots as a string
                date: bookingDate,
                numberOfPlayers: numberOfPlayers, // Include number of players in the state
                totalHours: totalHours // Pass total hours calculated
            }
        });
    };
    
    const closePopup = () => {
        setIsPopupVisible(false);
    };

    const navigateToBadmintonWorld = () => {
        navigate('/badminton-world');
    };

    return (
        <div className="badminton-booking-page">
            <h1 className="welcome-header">Welcome to Community Badminton Court</h1>
            <p className="description">
                Enjoy a seamless experience booking a badminton court at any of our top-rated locations in Pune.
            </p>

            {/* Nearest Area Section */}
            {error && <p className="error">{error}</p>}
            {nearestArea && (
                <p>Nearest area: <strong>{nearestArea}</strong></p>
            )}

            {/* Manual Location Selection */}
            <h2>Choose Your Location Manually</h2>
            <select onChange={handleManualSelection} value={manualArea}>
                <option value="">Select an area</option>
                {areas.map((area) => (
                    <option key={area.id} value={area.name}>
                        {area.name}
                    </option>
                ))}
            </select>

            {/* Available Courts Section */}
            {availableCourts.length > 0 && (
                <>
                    <h2>Available Courts</h2>
                    <select onChange={handleCourtSelection}>
                        <option value="">Select a court</option>
                        {availableCourts.map((court, index) => (
                            <option key={index} value={court.name}>
                                {court.name}
                            </option>
                        ))}
                    </select>

                    {selectedCourt && (
                        <div className="court-details">
                            <h3>Court Details</h3>
                            <p><strong>Name:</strong> {selectedCourt.name}</p>
                            <p><strong>Address:</strong> {selectedCourt.details.address}</p>
                            <p><strong>Phone:</strong> {selectedCourt.details.phone}</p>
                            <p><strong>Timings:</strong> {selectedCourt.details.timings}</p>
                            <p><strong>Rating:</strong> {selectedCourt.details.rating}</p>
                        </div>
                    )}
                </>
            )}

            {/* Date Selection */}
            <h2>Choose a Booking Date</h2>
            <input 
                type="date" 
                onChange={(e) => setBookingDate(e.target.value)} 
                value={bookingDate} 
                min={new Date().toISOString().split('T')[0]} // Prevent past date selection
            />

            {/* Number of Players Selection */}
            <h2>Number of Players</h2>
            <input 
                type="number" 
                value={numberOfPlayers} 
                onChange={(e) => setNumberOfPlayers(Math.max(1, e.target.value))} // Prevent less than 1
                min="1"
                max="10" // Assuming maximum number of players can be 10
            />

            {/* Time Slot Selection */}
            <h2>Choose Time Slots</h2>
            <p>Select your preferred time slots for booking:</p>
            <select onChange={handleTimeSlotSelection}>
                <option value="">Select a time slot</option>
                {timeSlots.map((slot, index) => (
                    <option key={index} value={slot}>
                        {slot}
                    </option>
                ))}
            </select>

            <h3>Selected Time Slots:</h3>
            <ul>
                {selectedTimeSlots.map((slot, index) => (
                    <li key={index}>{slot}</li>
                ))}
            </ul>

            <button className="book-now-btn" onClick={handleBooking}>
                Book Now
            </button>

            {/* Upcoming Events Section */}
            <div className="upcoming-events">
                <h2>Upcoming Events</h2>
                <ul>
                    <li>Local Tournament: September 30, 2024 - Join us!</li>
                    <li>New Court Opening: October 5, 2024 - Be there!</li>
                </ul>
            </div>

            {/* Advertisements Section */}
            <div className="ads-section">
                <h2>Advertisements</h2>
                <div className="ad">
                    <h3>Check out Yonex Products!</h3>
                    <p>Get the best badminton gear tailored for you.</p>
                </div>
                <div className="ad">
                    <h3>Discover Li-Ning's Exclusive Offers!</h3>
                    <p>Find the perfect badminton shoes and accessories.</p>
                </div>
            </div>

            {/* Pop-up Advertisement */}
            {isPopupVisible && (
                <div className="ad-popup">
                    <h3>Special Offer!</h3>
                    <p>Check out the latest Yonex and Li-Ning products!</p>
                    <button className="close-popup-btn" onClick={closePopup}>Close</button>
                    <button className="goto-badminton-world-btn" onClick={navigateToBadmintonWorld}>Go to Badminton World</button>
                </div>
            )}
        </div>
    );
};

export default BadmintonBookingPage;
