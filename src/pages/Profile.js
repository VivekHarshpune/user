import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../api/AuthContext';
import { Card, Spin, Button, Modal, Input, Form } from 'antd';
import './Profile.css';

const Profile = () => {
  const { isAuthenticated, logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchProfile = async () => {
      if (isAuthenticated) {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get('http://localhost:5001/api/users/profile', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProfile();
  }, [isAuthenticated]);

  const showModal = () => {
    form.setFieldsValue(userData);
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const token = localStorage.getItem('token');
      await axios.put('http://localhost:5001/api/users/profile', values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(values);
      setIsModalVisible(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="greeting-container">
        <h1 className="greeting-title">Welcome to Community Book!</h1>
        <p className="greeting-text">
          Join our community to unlock access to exclusive features and state-of-the-art facilities. 
          Register now to start enjoying all that we have to offer!
        </p>
        <Button type="primary" className="register-button" onClick={() => window.location.href = '/register'}>
          Register Now
        </Button>
        <Button type="default" className="login-button" onClick={() => window.location.href = '/login'}>
          Login
        </Button>
        <div className="features-container">
          <h2 className="features-title">Features Provided by CommunityBook</h2>
          <div className="features-list">
            <div className="feature-item">
              <h3>Real-time Facility Updates</h3>
              <p>Stay informed with the latest status of facilities and never miss out on planning your day effectively.</p>
            </div>
            <div className="feature-item">
              <h3>Effortless Booking Functionality</h3>
              <p>Book your slots in just a few clicks. Our intuitive booking system is designed for your convenience.</p>
            </div>
            <div className="feature-item">
              <h3>Personalized Recommendations</h3>
              <p>Get tailored suggestions based on your preferences and past activities for a bespoke experience.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      {loading ? (
        <Spin size="large" tip="Loading..." />
      ) : (
        <div className="card-wrapper">
          <Card className="profile-card">
            <h1>Community Book - Your Profile</h1>
            {userData ? (
              <>
                <p><strong>Name:</strong> {userData.name}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Phone:</strong> {userData.phone}</p>
                <Button className="update-btn" onClick={showModal}>Update Profile</Button>
                <Button className="logout-btn" onClick={logout}>Logout</Button>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </Card>
        </div>
      )}
      <Modal
        title="Update Profile"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Profile;
