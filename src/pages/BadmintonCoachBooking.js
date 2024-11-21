import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { Card, Input, Button, DatePicker, Select, message } from 'antd';
import dayjs from 'dayjs';
import styled from 'styled-components';
import axios from 'axios';

const { Option } = Select;

const BookingContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledCard = styled(Card)`
  margin-bottom: 20px;
  border-radius: 8px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #e6f7ff;
  padding: 10px;
  border-bottom: 1px solid #d9d9d9;
`;

const TotalPrice = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 15px;
`;

const CoachBooking = () => {
  const { coachId } = useParams();
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [time, setTime] = useState([]); 
  const [totalPrice, setTotalPrice] = useState(0);
  const [coachDetails, setCoachDetails] = useState(null);

  useEffect(() => {
    const fetchCoachDetails = () => {
      const dummyCoaches = [
        { id: 1, name: 'Ramesh Kumar', price: 100, specialty: 'Beginner Training', mobile: '9931198029' },
        { id: 2, name: 'Sita Sharma', price: 220, specialty: 'Advanced Techniques', mobile: '9876543210' },
        { id: 3, name: 'Ajay Singh', price: 150, specialty: 'Fitness & Conditioning', mobile: '8289115555' },
      ];

      const selectedCoach = dummyCoaches.find(coach => coach.id === parseInt(coachId));
      setCoachDetails(selectedCoach);
    };

    fetchCoachDetails();
  }, [coachId]);

  const handleBooking = async () => {
    if (!userName || !email || !startDate || !endDate || time.length === 0) {
      message.error('Please fill in all fields and select at least one time slot.');
      return;
    }

    const bookingData = {
      userName,
      email,
      coachId,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      time,
      totalPrice,
    };

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/coach/bookings`, bookingData);
      if (response.status === 201) {
        message.success('Booking created successfully! Redirecting to payment...');
        navigate('/coachrazorpay', { 
          state: { 
            totalPrice,
            coachDetails,
            userName,
            email,
            startDate,
            endDate,
            time
          } 
        });
      }
    } catch (error) {
      message.error('Failed to create booking. Please try again later.');
      console.error(error);
    }
  };

  const handlePriceCalculation = () => {
    if (startDate && endDate && coachDetails) {
      const days = dayjs(endDate).diff(dayjs(startDate), 'day') + 1; 
      const hourlyRate = coachDetails.price; 
      const selectedTimes = time.length; 
      const totalHours = selectedTimes * days; 

      setTotalPrice(hourlyRate * totalHours); 
    } else {
      message.error('Please select both start and end dates, and at least one time slot.');
    }
  };

  const timeSlots = Array.from({ length: 12 }, (_, index) => {
    const startHour = index + 9; 
    const formattedStartHour = startHour % 12 || 12; 
    const period = startHour < 12 ? 'AM' : 'PM'; 
    return `${formattedStartHour}:00 ${period}`; 
  });

  return (
    <BookingContainer>
      {coachDetails ? (
        <StyledCard title={<CardTitle>Coach Selected</CardTitle>}>
          <p><strong>Name:</strong> {coachDetails.name}</p>
          <p><strong>Specialty:</strong> {coachDetails.specialty}</p>
          <p><strong>Price:</strong> Rs.{coachDetails.price}/hour</p>
          <p><strong>Mobile:</strong> {coachDetails.mobile}</p> 
        </StyledCard>
      ) : (
        <p>Loading coach details...</p>
      )}

      <StyledCard title={<CardTitle>Booking Details</CardTitle>}>
        <Input 
          placeholder="Your Name" 
          value={userName} 
          onChange={(e) => setUserName(e.target.value)} 
        />
        <Input 
          placeholder="Your Email" 
          type="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        
        <DatePicker 
          placeholder="Select Start Date"
          format="YYYY-MM-DD"
          disabledDate={(current) => current && current < dayjs().startOf('day')} 
          onChange={setStartDate}
          style={{ marginRight: '10px' }}
        />
        
        <DatePicker 
          placeholder="Select End Date"
          format="YYYY-MM-DD"
          disabledDate={(current) => current && (current < dayjs().startOf('day') || current < startDate)} 
          onChange={setEndDate}
        />
        
        <Select 
          placeholder="Select Time" 
          value={time}
          onChange={setTime} 
          mode="multiple" 
          style={{ width: '100%', marginTop: '10px' }}
        >
          {timeSlots.map((slot) => (
            <Option key={slot} value={slot}>{slot}</Option>
          ))}
        </Select>

        <Button 
          type="primary" 
          onClick={handlePriceCalculation}
          style={{ marginTop: '10px' }}
        >
          Calculate Price
        </Button>
        <TotalPrice>Total Price: Rs.{totalPrice}</TotalPrice>
        <Button 
          type="primary" 
          onClick={handleBooking}
        >
          Confirm Booking
        </Button>
      </StyledCard>
    </BookingContainer>
  );
};

export default CoachBooking;
