import React, { useState } from 'react';
import './VirtualTour.css'; // External CSS file for styling

const gymData = {
  "Kharadi": {
    "Gold's Gym": { "opening_time": "06:00", "closing_time": "22:00", "total_capacity": 60 },
    "Talwalkars Gym": { "opening_time": "05:30", "closing_time": "23:00", "total_capacity": 50 },
    "Anytime Fitness": { "opening_time": "00:00", "closing_time": "23:59", "total_capacity": 55 },
    "Snap Fitness": { "opening_time": "06:00", "closing_time": "22:00", "total_capacity": 45 },
    "Krazy Fitness": { "opening_time": "05:00", "closing_time": "23:00", "total_capacity": 40 }
  },
  "Aundh": {
    "Snap Fitness": { "opening_time": "06:00", "closing_time": "22:00", "total_capacity": 45 },
    "Fitness First": { "opening_time": "05:00", "closing_time": "23:00", "total_capacity": 65 },
    "Gold's Gym": { "opening_time": "06:00", "closing_time": "22:00", "total_capacity": 60 },
    "Talwalkars Gym": { "opening_time": "05:30", "closing_time": "23:00", "total_capacity": 55 },
    "Bodycraft Fitness": { "opening_time": "06:00", "closing_time": "22:00", "total_capacity": 50 }
  },
  // Add more locations here...
};

const VirtualTour = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedGym, setSelectedGym] = useState('');
  const [gymDetails, setGymDetails] = useState(null);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
    setSelectedGym(''); // Reset gym when location changes
    setGymDetails(null); // Reset gym details when location changes
  };

  const handleGymChange = (event) => {
    const gymName = event.target.value;
    setSelectedGym(gymName);
    setGymDetails(gymData[selectedLocation][gymName]); // Set the gym details
  };

  return (
    <div className="virtual-tour-page">
      <div className="virtual-tour-container">
        <h1 className="virtual-tour-title">Welcome to the Community Book Virtual Gym Tour</h1>
        <p className="virtual-tour-description">
          Choose your location and gym to explore their facilities and details.
        </p>

        {/* Location Selection */}
        <div className="virtual-tour-location-selection">
          <label htmlFor="location">Choose your location:</label>
          <select id="location" value={selectedLocation} onChange={handleLocationChange}>
            <option value="">-- Select Location --</option>
            {Object.keys(gymData).map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Gym Selection */}
        {selectedLocation && (
          <div className="virtual-tour-gym-selection">
            <label htmlFor="gym">Choose your gym:</label>
            <select id="gym" value={selectedGym} onChange={handleGymChange}>
              <option value="">-- Select Gym --</option>
              {Object.keys(gymData[selectedLocation]).map((gym) => (
                <option key={gym} value={gym}>
                  {gym}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Gym Details Display */}
        {gymDetails && (
          <div className="virtual-tour-gym-details">
            <h3>Gym Details for {selectedGym}</h3>
            <p>Opening Time: {gymDetails.opening_time}</p>
            <p>Closing Time: {gymDetails.closing_time}</p>
            <p>Total Capacity: {gymDetails.total_capacity}</p>
          </div>
        )}

        {/* Virtual 360 View */}
        {selectedGym && (
          <div className="virtual-tour-virtual-view">
            <a-scene embedded>
              <a-sky src="/images/GYM_VIRTUAL/fitness-gym-club-full-360-degree-panorama-spherical-projection-WA695E.jpg"
                     height="100%" width="100%"></a-sky>
            </a-scene>
          </div>
        )}

        {/* Exit Button */}
        <button className="virtual-tour-exit-button" onClick={() => alert('Tour Exited')}>
          Exit Tour
        </button>
      </div>
    </div>
  );
};

export default VirtualTour;
