import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './GymWelcome.css';
import availabilityLogo from './images/images.png'; // Adjust the path as necessary

const gyms = [
  // Kothrud
  { name: "Gold's Gym", rating: 4.5, phone: '123-456-7890', timing: '6 AM - 10 PM', facilities: ['Weights', 'Cardio'], location: 'Kothrud' },
  { name: 'Talwalkars Gym', rating: 4.0, phone: '234-567-8901', timing: '5 AM - 11 PM', facilities: ['Yoga', 'Swimming Pool'], location: 'Kothrud' },
  { name: 'Snap Fitness', rating: 4.2, phone: '345-678-9012', timing: '6 AM - 10 PM', facilities: ['Weights', 'Cardio', 'Yoga'], location: 'Kothrud' },
  { name: 'Fitness First', rating: 4.3, phone: '456-789-0123', timing: '5 AM - 10 PM', facilities: ['Group Classes', 'Swimming Pool'], location: 'Kothrud' },
  { name: 'The Gym', rating: 4.1, phone: '567-890-1234', timing: '6 AM - 10 PM', facilities: ['Cardio', 'Zumba'], location: 'Kothrud' },

  // Pimple Saudagar
  { name: 'Anytime Fitness', rating: 4.6, phone: '678-901-2345', timing: '24 Hours', facilities: ['Weights', 'Cardio'], location: 'Pimple Saudagar' },
  { name: 'Talwalkars Gym', rating: 4.2, phone: '789-012-3456', timing: '5 AM - 10 PM', facilities: ['Yoga', 'Cardio'], location: 'Pimple Saudagar' },
  { name: 'Snap Fitness', rating: 4.0, phone: '890-123-4567', timing: '6 AM - 10 PM', facilities: ['Weights', 'Zumba'], location: 'Pimple Saudagar' },
  { name: 'Krazy Fitness', rating: 4.1, phone: '901-234-5678', timing: '6 AM - 9 PM', facilities: ['Cardio', 'Yoga'], location: 'Pimple Saudagar' },
  { name: "Gold's Gym", rating: 4.5, phone: '012-345-6789', timing: '6 AM - 10 PM', facilities: ['Weights', 'Cardio'], location: 'Pimple Saudagar' },

  // Viman Nagar
  { name: "Gold's Gym", rating: 4.3, phone: '123-456-7891', timing: '6 AM - 10 PM', facilities: ['Weights', 'Cardio'], location: 'Viman Nagar' },
  { name: 'Talwalkars Gym', rating: 4.2, phone: '234-567-8902', timing: '5 AM - 10 PM', facilities: ['Yoga', 'Swimming Pool'], location: 'Viman Nagar' },
  { name: 'Anytime Fitness', rating: 4.4, phone: '345-678-9013', timing: '24 Hours', facilities: ['Weights', 'Cardio'], location: 'Viman Nagar' },
  { name: 'Inshape Fitness', rating: 4.0, phone: '456-789-0124', timing: '6 AM - 10 PM', facilities: ['Cardio', 'Yoga'], location: 'Viman Nagar' },
  { name: 'Fitness Factory', rating: 4.1, phone: '567-890-1235', timing: '5 AM - 10 PM', facilities: ['Weights', 'Group Classes'], location: 'Viman Nagar' },

  // Aundh
  { name: 'Talwalkars Gym', rating: 4.2, phone: '678-901-2346', timing: '6 AM - 10 PM', facilities: ['Yoga', 'Cardio'], location: 'Aundh' },
  { name: "Gold's Gym", rating: 4.5, phone: '789-012-3457', timing: '5 AM - 10 PM', facilities: ['Weights', 'Zumba'], location: 'Aundh' },
  { name: 'Anytime Fitness', rating: 4.3, phone: '890-123-4568', timing: '24 Hours', facilities: ['Weights', 'Cardio'], location: 'Aundh' },
  { name: 'Snap Fitness', rating: 4.0, phone: '901-234-5679', timing: '6 AM - 10 PM', facilities: ['Yoga', 'Swimming Pool'], location: 'Aundh' },
  { name: 'Bodycraft Fitness', rating: 4.4, phone: '012-345-6780', timing: '5 AM - 10 PM', facilities: ['Weights', 'Group Classes'], location: 'Aundh' },

  // Wakad
  { name: 'Talwalkars Gym', rating: 4.1, phone: '123-456-7892', timing: '6 AM - 10 PM', facilities: ['Yoga', 'Swimming Pool'], location: 'Wakad' },
  { name: "Gold's Gym", rating: 4.5, phone: '234-567-8903', timing: '5 AM - 10 PM', facilities: ['Weights', 'Cardio'], location: 'Wakad' },
  { name: 'Anytime Fitness', rating: 4.4, phone: '345-678-9014', timing: '24 Hours', facilities: ['Weights', 'Cardio'], location: 'Wakad' },
  { name: 'Krazy Fitness', rating: 4.2, phone: '456-789-0125', timing: '6 AM - 10 PM', facilities: ['Yoga', 'Swimming Pool'], location: 'Wakad' },
  { name: 'Snap Fitness', rating: 4.3, phone: '567-890-1236', timing: '6 AM - 10 PM', facilities: ['Weights', 'Zumba'], location: 'Wakad' },

  // Baner
  { name: "Gold's Gym", rating: 4.6, phone: '678-901-2347', timing: '6 AM - 10 PM', facilities: ['Weights', 'Cardio'], location: 'Baner' },
  { name: 'Talwalkars Gym', rating: 4.2, phone: '789-012-3458', timing: '5 AM - 10 PM', facilities: ['Yoga', 'Swimming Pool'], location: 'Baner' },
  { name: 'Anytime Fitness', rating: 4.4, phone: '890-123-4569', timing: '24 Hours', facilities: ['Weights', 'Cardio'], location: 'Baner' },
  { name: 'Core Fitness', rating: 4.3, phone: '901-234-5670', timing: '6 AM - 10 PM', facilities: ['Group Classes', 'Yoga'], location: 'Baner' },
  { name: 'The Body Lab', rating: 4.1, phone: '012-345-6781', timing: '5 AM - 10 PM', facilities: ['Weights', 'Cardio'], location: 'Baner' },

  // Hadapsar
  { name: 'Talwalkars Gym', rating: 4.2, phone: '123-456-7893', timing: '6 AM - 10 PM', facilities: ['Yoga', 'Swimming Pool'], location: 'Hadapsar' },
  { name: "Gold's Gym", rating: 4.5, phone: '234-567-8904', timing: '5 AM - 10 PM', facilities: ['Weights', 'Cardio'], location: 'Hadapsar' },
  { name: 'Fitness First', rating: 4.4, phone: '345-678-9015', timing: '5 AM - 10 PM', facilities: ['Group Classes', 'Cardio'], location: 'Hadapsar' },
  { name: 'Anytime Fitness', rating: 4.3, phone: '456-789-0126', timing: '24 Hours', facilities: ['Weights', 'Yoga'], location: 'Hadapsar' },
  { name: 'Snap Fitness', rating: 4.0, phone: '567-890-1237', timing: '6 AM - 10 PM', facilities: ['Cardio', 'Zumba'], location: 'Hadapsar' },

  // Kharadi
  { name: "Gold's Gym", rating: 4.5, phone: '678-901-2348', timing: '6 AM - 10 PM', facilities: ['Weights', 'Cardio'], location: 'Kharadi' },
  { name: 'Talwalkars Gym', rating: 4.1, phone: '789-012-3459', timing: '5 AM - 10 PM', facilities: ['Yoga', 'Swimming Pool'], location: 'Kharadi' },
  { name: 'Anytime Fitness', rating: 4.4, phone: '890-123-4570', timing: '24 Hours', facilities: ['Weights', 'Cardio'], location: 'Kharadi' },
  { name: 'Snap Fitness', rating: 4.3, phone: '901-234-5671', timing: '6 AM - 10 PM', facilities: ['Zumba', 'Yoga'], location: 'Kharadi' },
  { name: 'Krazy Fitness', rating: 4.2, phone: '012-345-6782', timing: '6 AM - 10 PM', facilities: ['Weights', 'Swimming Pool'], location: 'Kharadi' },
];
const GymWelcome = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [filteredGyms, setFilteredGyms] = useState(gyms);
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []); // Runs once on mount

  const handleLocationChange = (event) => {
    const location = event.target.value;
    setSelectedLocation(location);

    if (location) {
      const filtered = gyms.filter((gym) => gym.location === location);
      setFilteredGyms(filtered);
    } else {
      setFilteredGyms(gyms);
    }
  };

  const handleBookNow = (gym) => {
    navigate(`/booking/${gym.name}/${gym.location}`, { state: gym });
  };

  const handlePopupToggle = () => {
    setShowPopup((prev) => !prev);
  };

  const handlePopupClick = () => {
    handlePopupToggle();
    navigate('/crowd-level-predictor'); // Navigate to the availability page
  };

  const handleMouseDown = (e) => {
    const popup = popupRef.current;

    // Store the initial mouse position and popup position
    const offsetX = e.clientX - popup.getBoundingClientRect().left;
    const offsetY = e.clientY - popup.getBoundingClientRect().top;

    const handleMouseMove = (e) => {
      popup.style.left = `${e.clientX - offsetX}px`;
      popup.style.top = `${e.clientY - offsetY}px`;
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Hide the button on login or profile pages
  const hidePopupButton = location.pathname === '/login' || location.pathname === '/profile';

  return (
    <div className="gym-welcome">
      <h1>Welcome to the Gym Finder!</h1>
      <h2>Select your preferred location:</h2>
      <select value={selectedLocation} onChange={handleLocationChange}>
        <option value="">All Locations</option>
        <option value="Kothrud">Kothrud</option>
        <option value="Pimple Saudagar">Pimple Saudagar</option>
        <option value="Viman Nagar">Viman Nagar</option>
        <option value="Aundh">Aundh</option>
        <option value="Wakad">Wakad</option>
        <option value="Baner">Baner</option>
        <option value="Hadapsar">Hadapsar</option>
        <option value="Kharadi">Kharadi</option>
      </select>

      <div className="personalized-fitness">
        <h2>Your Personalized Fitness Journey</h2>
        <button onClick={() => navigate('/personalized-fitness')}>Start Now</button>
      </div>


      <div className="gym-list">
        {filteredGyms.map((gym, index) => (
          <div className="gym-card" key={index}>
            <h3>{gym.name}</h3>
            <p>Rating: {gym.rating} ⭐</p>
            <p>Phone: {gym.phone}</p>
            <p>Timings: {gym.timing}</p>
            <p>Facilities: {gym.facilities.join(', ')}</p>
            <button onClick={() => handleBookNow(gym)}>Book Now</button>
          </div>
        ))}
      </div>

      
      {/* Pop-up for Real-Time Availability */}
      {showPopup && (
        <div className="popup" ref={popupRef} onMouseDown={handleMouseDown}>
          <div className="popup-content">
            <h2>Real-Time Availability!</h2>
            <p>Click the button below to check real-time gym availability.</p>
            <button onClick={handlePopupClick}>Avail this amazing Featured</button>
            <button onClick={handlePopupToggle}>Close</button>
          </div>
        </div>
      )}

      {/* Button to Trigger Popup */}
      {!hidePopupButton && (
        <button className="show-popup-btn" onClick={handlePopupToggle}>
          <img src={availabilityLogo} alt="Availability Logo" className="availability-logo" />
          <span>Discover Gym Availability Instantly!</span>
        </button>
      )}
    </div>
  );
};

export default GymWelcome;
