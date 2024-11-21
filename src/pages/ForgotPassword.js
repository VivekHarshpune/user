import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [linkSent, setLinkSent] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate(); // Initialize useNavigate

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const response = await axios.post('http://localhost:5001/api/users/forgot-password', { email });
      setMessage(response.data.message);
      setError('');
      setLinkSent(true);
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError(err.response?.data.error || 'An error occurred while sending the reset link. Please try again.');
      setMessage('');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const response = await axios.post('http://localhost:5001/api/users/verify-otp', { email, otp });
      setMessage(response.data.message);
      setError('');
      navigate('/reset-password', { state: { email } }); // Redirect to reset password page
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError(err.response?.data.error || 'Invalid or expired OTP. Please try again.');
      setMessage('');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Forgot Password</h1>
        <form onSubmit={linkSent ? handleVerifyOTP : handleForgotPassword} style={styles.form}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={styles.input}
            required
            aria-label="Email address"
          />
          {linkSent && (
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              style={styles.input}
              required
              aria-label="One Time Password"
            />
          )}
          {message && <p style={styles.success}>{message}</p>}
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? 'Processing...' : linkSent ? 'Verify OTP' : 'Send Reset Link'}
          </button>
        </form>
        <div style={styles.options}>
          <a href="/login" style={styles.link}>Back to Login</a>
        </div>
      </div>
    </div>
  );
};

// Styles remain the same...
const styles = {
  container: {
    height: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    animation: 'fadeIn 1s ease-in-out',
  },
  card: {
    background: '#fff',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    width: '400px',
    maxWidth: '90%',
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center',
  },
  input: {
    padding: '15px',
    fontSize: '16px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'border-color 0.3s',
    textAlign: 'center',
    fontWeight: 'bold',
    width: '100%',
    maxWidth: '300px',
  },
  button: {
    padding: '15px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#667eea',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  options: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    color: '#667eea',
    textDecoration: 'none',
    fontSize: '14px',
  },
  success: {
    color: 'green',
    fontSize: '14px',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
};

export default ForgotPassword;
