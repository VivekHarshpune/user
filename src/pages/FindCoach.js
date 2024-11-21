import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './FindCoach.css'; // Optional: Add your styles here
import { Card, Input, Button } from 'antd';

const FindCoach = () => {
  const [coaches, setCoaches] = useState([]);
  const [filteredCoaches, setFilteredCoaches] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Dummy data for coaches
    const dummyCoaches = [
      { id: 1, name: 'Ramesh Kumar', experience: '5 years', specialty: 'Beginner Training', court: 'Court 1', price: 100, mobile: '9931198029' },
      { id: 2, name: 'Sita Sharma', experience: '8 years', specialty: 'Advanced Techniques', court: 'Court 2', price: 220, mobile: '9876543210' },
      { id: 3, name: 'Ajay Singh', experience: '3 years', specialty: 'Fitness & Conditioning', court: 'Court 3', price: 150, mobile: '8289115555' },
      { id: 4, name: 'Priya Verma', experience: '6 years', specialty: 'Strategy & Tactics', court: 'Court 1', price: 150, mobile: '9916616666' },
      { id: 5, name: 'Ravi Patel', experience: '10 years', specialty: 'Youth Training', court: 'Court 4', price: 250, mobile: '981914444' },
      { id: 6, name: 'Anita Joshi', experience: '4 years', specialty: 'Match Preparation', court: 'Court 2', price: 150, mobile: '787881333' },
      { id: 7, name: 'Mohammed Ali', experience: '7 years', specialty: 'Techniques & Skills', court: 'Court 3', price: 150, mobile: '8787811222' },
      { id: 8, name: 'Nisha Gupta', experience: '2 years', specialty: 'Physical Fitness', court: 'Court 1', price: 190, mobile: '9181911111' },
      { id: 9, name: 'Vikram Mehta', experience: '9 years', specialty: 'Mental Coaching', court: 'Court 4', price: 210, mobile: '89111118888' },
      { id: 10, name: 'Geeta Rao', experience: '1 year', specialty: 'Basic Skills', court: 'Court 2', price: 17, mobile: '9931197777' },
    ];

    setCoaches(dummyCoaches);
    setFilteredCoaches(dummyCoaches);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = coaches.filter(coach =>
      coach.name.toLowerCase().includes(value.toLowerCase()) ||
      coach.specialty.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCoaches(filtered);
  };

  const handleBookSession = (coachId) => {
    // Navigate to the booking page with the selected coach's ID
    navigate(`/booking/${coachId}`); // Update this line
  };

  return (
    <div className="find-coach-container">
      <h1>Find a Personal Coach</h1>
      <Input 
        placeholder="Search by name or specialty..." 
        value={searchTerm} 
        onChange={handleSearch} 
        className="search-input"
      />
      <div className="coaches-list">
        {filteredCoaches.length > 0 ? (
          filteredCoaches.map(coach => (
            <Card key={coach.id} className="coach-card">
              <h2>{coach.name}</h2>
              <p><strong>Specialty:</strong> {coach.specialty}</p>
              <p><strong>Experience:</strong> {coach.experience}</p>
              <p><strong>Court:</strong> {coach.court}</p>
              <p><strong>Price:</strong> Rs.{coach.price}</p>
              <p><strong>Mobile:</strong> {coach.mobile}</p>
              <Button 
                type="primary" 
                onClick={() => handleBookSession(coach.id)} // Update this line
              >
                Book Session
              </Button>
            </Card>
          ))
        ) : (
          <p>No coaches found.</p>
        )}
      </div>
    </div>
  );
};

export default FindCoach;
