import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../api/AuthContext';
import axios from 'axios';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/users/login', { email, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      login();
      navigate('/');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    }
  };

  const responseGoogle = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse;
      const res = await axios.post('http://localhost:5001/api/users/google-login', { idToken: credential });
      
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem('token', token);
        login(); // Call your context's login method
        navigate('/');
      } else {
        setError('Google login failed. Please try again.');
      }
    } catch (err) {
      console.error('Google login error:', err);
      setError(err.response ? err.response.data.error : 'Network error. Please try again later.');
    }
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.animatedTitle}>Login to Community Book</h1>
          <form onSubmit={handleLogin} style={styles.form}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={styles.input}
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={styles.input}
              required
            />
            {error && <p style={styles.error}>{error}</p>}
            <button type="submit" style={styles.button}>Login</button>
            <div style={styles.options}>
              <a href="/forgot-password" style={styles.link}>Forgot Password?</a>
              <label style={styles.rememberMe}>
                <input type="checkbox" style={styles.checkbox} />
                Remember Me
              </label>
            </div>
          </form>

          {/* Google Login */}
          <div style={styles.socialButtons}>
            <GoogleLogin
              onSuccess={responseGoogle}
              onError={() => setError('Failed to log in with Google. Please try again.')}
              style={styles.googleButton} // Custom style for Google button
            />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

// Styles with improved UI/UX
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
    transition: 'transform 0.5s ease',
  },
  animatedTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
    animation: 'slideIn 1.2s ease',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center',
  },
  input: {
    padding: '15px',
    fontSize: '15px',
    borderRadius: '15px',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'border-color 0.3s',
    textAlign: 'center',
    fontWeight: 'bold',
    width: '100%',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
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
    marginTop: '10px',
    boxShadow: '0 10px 20px rgba(102, 126, 234, 0.3)',
    width: '100%',
  },
  socialButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '20px',
  },
  options: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  link: {
    color: '#667eea',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.3s ease',
  },
  rememberMe: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '16px',
    color: '#555',
  },
  checkbox: {
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginTop: '10px',
  },
  googleButton: {},
};

export default UserLogin;
