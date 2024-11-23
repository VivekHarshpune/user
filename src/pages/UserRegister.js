import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEnvelope, FaLock, FaPhone, FaUser } from 'react-icons/fa';

const UserRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setLoading(true);

    if (!validateEmail(formData.email)) {
      setError('Invalid email format.');
      setLoading(false);
      return;
    }

    if (!validatePhone(formData.phone)) {
      setError('Phone number must be 10 digits.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/users/register', formData);
      if (response.status === 201) {
        const { token, userId, communityUserId } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('communityUserId', communityUserId);
        setSuccessMessage('Registration successful! Redirecting...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Error occurred during registration.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Create Account</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <FaUser style={styles.icon} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <FaEnvelope style={styles.icon} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <FaLock style={styles.icon} />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <FaPhone style={styles.icon} />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              style={styles.input}
            />
          </div>
          {error && <p style={styles.error}>{error}</p>}
          {successMessage && <p style={styles.success}>{successMessage}</p>}
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        <p style={styles.text}>Already have an account? <a href="/login" style={styles.link}>Sign in</a></p>
        <p style={styles.privacyPolicy}>
          By signing up, you agree to our <a href="/privacy-policy" style={styles.link}>Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

// Updated styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(120deg, #6A5ACD 0%, #7B68EE 100%)',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  card: {
    background: 'white',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
    boxSizing: 'border-box',
  },
  title: {
    marginBottom: '25px',
    color: '#4B0082',
    fontSize: '28px',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  icon: {
    padding: '12px',
    color: '#4B0082',
  },
  input: {
    flex: 1,
    padding: '12px',
    fontSize: '16px',
    border: 'none',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  button: {
    padding: '14px 20px',
    fontSize: '16px',
    backgroundColor: '#4B0082',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
  success: {
    color: 'green',
    marginBottom: '10px',
  },
  text: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#555',
  },
  link: {
    color: '#4B0082',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  privacyPolicy: {
    marginTop: '20px',
    fontSize: '12px',
    color: '#777',
  },
};

export default UserRegister;
