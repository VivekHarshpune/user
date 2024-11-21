import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal'; // Import the Modal component
import './CrowdLevelPredictor.css';

const CrowdLevelPredictor = () => {
  const [areas, setAreas] = useState({});
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedGym, setSelectedGym] = useState('');
  const [gymDetails, setGymDetails] = useState(null); // To hold gym details dynamically
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [predictedLevel, setPredictedLevel] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/areas');
        setAreas(response.data);
      } catch (error) {
        console.error('Error fetching areas:', error);
        setError('Failed to load areas. Please try again later.');
      }
    };

    fetchAreas();
  }, []);

  const handleGymDetails = async (area, gym) => {
    if (area && gym) {
      try {
        const response = await axios.get('http://localhost:5000/api/gym-details', {
          params: { area, gym_name: gym },
        });
        setGymDetails(response.data);
      } catch (error) {
        console.error('Error fetching gym details:', error);
        setGymDetails(null);
        setError('Failed to fetch gym details.');
      }
    } else {
      setGymDetails(null);
    }
  };

  const handlePredict = async () => {
    setError('');
    setPredictedLevel('');
    setIsLoading(true);

    if (!selectedArea || !selectedGym || !date || !time) {
      setError('Please fill in all fields.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/predict', {
        location: selectedArea,
        gym_name: selectedGym,
        date,
        time,
      });
      setPredictedLevel(response.data.traffic_level);
    } catch (error) {
      console.error('Error predicting crowd level:', error);
      setError('Failed to predict crowd level. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="crowd-level-predictor">
      <h1>Crowd Level Predictor</h1>
      {error && <p className="error-message">{error}</p>}

      <select
        onChange={(e) => {
          setSelectedArea(e.target.value);
          setSelectedGym('');
          handleGymDetails(e.target.value, '');
        }}
        value={selectedArea}
      >
        <option value="">Select Area</option>
        {Object.keys(areas).map((area) => (
          <option key={area} value={area}>
            {area}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => {
          setSelectedGym(e.target.value);
          handleGymDetails(selectedArea, e.target.value);
        }}
        disabled={!selectedArea}
        value={selectedGym}
      >
        <option value="">Select Gym</option>
        {selectedArea &&
          Object.keys(areas[selectedArea]).map((gym) => (
            <option key={gym} value={gym}>
              {gym}
            </option>
          ))}
      </select>

      {gymDetails && (
        <div className="gym-details">
          <h3>Gym Details</h3>
          <p>Opening Time: {gymDetails.opening_time}</p>
          <p>Closing Time: {gymDetails.closing_time}</p>
          <p>Total Capacity: {gymDetails.total_capacity}</p>
        </div>
      )}

      <input
        type="text"
        placeholder="Enter date (dd/mm/yyyy)"
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />

      <input
        type="text"
        placeholder="Enter time (HH:MM)"
        onChange={(e) => setTime(e.target.value)}
        value={time}
      />

      <button onClick={handlePredict} disabled={isLoading}>
        {isLoading ? 'Predicting...' : 'Predict Crowd Level'}
      </button>

      {predictedLevel && <h2>Predicted Crowd Level: {predictedLevel}</h2>}

      <button onClick={openModal}>Check Real-Time Availability</button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Real-Time Availability</h2>
        <p>Content goes here...</p>
      </Modal>
    </div>
  );
};

export default CrowdLevelPredictor;
