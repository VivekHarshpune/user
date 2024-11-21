import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { message, Card, Row, Col, Spin, Select, Modal, Button, Input, List } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './BookingDetailsPage.module.css'; // Import styles correctly for CSS Modules
import { useCallback } from 'react';

const { Option } = Select;

const BookingDetailsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState('badminton'); // Default to badminton
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [newParticipants, setNewParticipants] = useState([]);
  const [showAddOptions, setShowAddOptions] = useState(false);
  const navigate = useNavigate();

  const fetchBookings = useCallback(async () => {
    const token = localStorage.getItem('token');
  
    if (!token) {
      message.error('You are not logged in. Redirecting to login page...');
      navigate('/login');
      return;
    }
  
    setBookings([]);
    setLoading(true);
  
    try {
      const endpointMap = {
        badminton: '/badminton/user-bookings',
        gym: '/gym/user-gymbookings',
        'sports-complex': '/sports-complex/user-sportsbookings',
      };
  
      const selectedEndpoint = endpointMap[selectedType];
  
      if (!selectedEndpoint) {
        message.error('Invalid booking type selected.');
        setLoading(false);
        return;
      }
  
      const response = await axios.get(`${process.env.REACT_APP_API_URL}${selectedEndpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.data && response.data.length > 0) {
        setBookings(response.data);
      } else {
        setBookings([]);
        message.info(`You have no ${selectedType} bookings at the moment.`);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        message.error('Unauthorized access. Please log in again.');
        navigate('/login');
      } else {
        message.error('Failed to fetch bookings. Please try again later.');
      }
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  }, [selectedType, navigate]);
  
  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  const handleEditParticipants = (booking) => {
    setSelectedBooking(booking);
    setNewParticipants([]); // Reset new participants
    setShowAddOptions(false); // Reset the add options view
    setIsModalVisible(true);
  };

  const handleDeleteParticipant = (index) => {
    const participantToRemove = selectedBooking.players[index];
    const updatedParticipants = selectedBooking.players.filter((_, i) => i !== index);

    setSelectedBooking({ ...selectedBooking, players: updatedParticipants });

    // Save the participant ID to be removed for the backend request
    setShowAddOptions(true);
    setSelectedBooking(prev => ({
      ...prev,
      playersToRemove: participantToRemove._id ? [participantToRemove._id] : []
    }));
  };

  const handleAddParticipantChange = (index, field, value) => {
    const updatedNewParticipants = [...newParticipants];
    updatedNewParticipants[index] = { ...updatedNewParticipants[index], [field]: value };
    setNewParticipants(updatedNewParticipants);
  };

  const handleAddParticipants = async () => {
    if (newParticipants.some(participant => !participant.name || !participant.phone || !participant.email)) {
      message.error('Please fill out all participant details.');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      message.error('Authorization token is missing. Please log in again.');
      navigate('/login');
      return;
    }

    const updatedParticipants = [...selectedBooking.players, ...newParticipants];
    setSelectedBooking({ ...selectedBooking, players: updatedParticipants });
    setNewParticipants([]); // Reset new participants
    setShowAddOptions(false); // Hide the add options view

    try {
      // Call backend to update participants
      await axios.post(
        `${process.env.REACT_APP_API_URL}/badminton/update-participants`,
        {
          bookingId: selectedBooking._id,
          playersToAdd: newParticipants,
          playersToRemove: selectedBooking.playersToRemove || [], // Specify participants to remove
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Ensure this header is properly set
          },
        }
      );
      message.success('Participants updated successfully.');
      setIsModalVisible(false);
      setLoading(true);
      await fetchBookings(); // Refresh bookings list
    } catch (error) {
      if (error.response && error.response.status === 401) {
        message.error('Unauthorized access. Please log in again.');
        navigate('/login');
      } else {
        message.error('Failed to update participants.');
        console.error('Error updating participants:', error);
      }
    }
  };

  const sendNotificationToUsers = async () => {
    const token = localStorage.getItem('token'); // Ensure token is fetched from localStorage

    if (!token) {
        message.error('Authorization token is missing. Please log in again.');
        navigate('/login');
        return;
    }

    try {
        // Send the request to notify community users
        await axios.post(`${process.env.REACT_APP_API_URL}/badminton/notify-users`, {
            bookingId: selectedBooking._id,
        }, {
            headers: {
                Authorization: `Bearer ${token}`, // Make sure the token is sent here
            }
        });

        message.success('Notification sent to registered users.');
    } catch (error) {
        message.error('Failed to send notification. Please try again later.');
        console.error('Error sending notifications:', error);
    }
};

  return (
    <div className={styles.bookingsPageContainer}>
      <div className={styles.headerSection}>
        <h1>Your Bookings</h1>
        <Select
          value={selectedType}
          onChange={(value) => setSelectedType(value)}
          className={styles.bookingTypeSelector}
        >
          <Option value="badminton">Badminton</Option>
          <Option value="gym">Gym</Option>
          <Option value="sports-complex">Sports Complex</Option>
        </Select>
      </div>

      {loading ? (
        <Spin size="large" tip="Loading..." className={styles.loadingSpinner} />
      ) : bookings.length > 0 ? (
        <Row gutter={[16, 16]} className={styles.bookingList}>
          {bookings.map((booking) => (
            <Col xs={24} sm={12} lg={8} key={booking._id}>
              <Card
                hoverable
                title={<span className={styles.bookingTitle}>{booking.courtName}</span>}
                className={styles.bookingCard}
              >
                <div className={styles.cardContent}>
                  <p><strong>Area:</strong> {booking.area}</p>
                  <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
                  <p><strong>Time Slot:</strong> {booking.timeSlot}</p>
                  <p><strong>Number of Players:</strong> {booking.numberOfPlayers}</p>
                  <p><strong>Total Price:</strong> ₹{booking.totalPrice}</p>
                  <div className={styles.playersList}>
                    <p><strong>Players:</strong></p>
                    <ul>
                      {booking.players.map((player, index) => (
                        <li key={index} className={styles.playerItem}>
                          {player.name} - {player.phone}
                          <Button type="link" onClick={() => handleDeleteParticipant(index)}>
                            Delete
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button type="primary" onClick={() => handleEditParticipants(booking)}>
                    Edit Participants
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div className={styles.noBookingsMessage}>
          <p>No bookings found for {selectedType}.</p>
        </div>
      )}

      {isModalVisible && selectedBooking && (
        <Modal
          title="Edit Participants"
          open={isModalVisible} // Updated to use `open`
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <List
            dataSource={selectedBooking.players}
            renderItem={(player, index) => (
              <List.Item>
                {player.name} - {player.phone}
                <Button type="link" onClick={() => handleDeleteParticipant(index)}>
                  Delete
                </Button>
              </List.Item>
            )}
          />
          {showAddOptions && (
            <>
              <h3>Do you want to add someone manually or notify others?</h3>
              <Button type="primary" onClick={() => setNewParticipants([{ name: '', phone: '', email: '' }])}>
                Add Friend Manually
              </Button>
              <Button type="dashed" onClick={sendNotificationToUsers} style={{ marginTop: '10px' }}>
                Notify Community Users
              </Button>
            </>
          )}
          {newParticipants.length > 0 && (
            <>
              <h3>Add Participants</h3>
              {newParticipants.map((_, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                  <Input
                    placeholder="Name"
                    value={newParticipants[index].name}
                    onChange={(e) => handleAddParticipantChange(index, 'name', e.target.value)}
                  />
                  <Input
                    placeholder="Phone"
                    value={newParticipants[index].phone}
                    onChange={(e) => handleAddParticipantChange(index, 'phone', e.target.value)}
                  />
                  <Input
                    placeholder="Email"
                    value={newParticipants[index].email}
                    onChange={(e) => handleAddParticipantChange(index, 'email', e.target.value)}
                  />
                </div>
              ))}
              <Button type="primary" onClick={handleAddParticipants}>
                Add Participants
              </Button>
            </>
          )}
        </Modal>
      )}
    </div>
  );
};

export default BookingDetailsPage;
