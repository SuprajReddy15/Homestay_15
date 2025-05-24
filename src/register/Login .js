import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../register/Login.css';
import HOMESTAYY from '../img/image-1.png';
import BACK from '../img/back.png';
import Navbar from '../layout/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all the fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5900/userlogin', {
        email,
        password,
      });

      if (response.status === 200) {
        const user = response.data;
        navigate('/success', { state: { user } });
      } else {
        setError('Invalid email or password.');
      }
    } catch (error) {
      setError(
        error.response?.status === 401
          ? 'Invalid email or password.'
          : 'Login failed. Please try again later.'
      );
    }
  };

  return (
    <div>
      <Navbar />
      <br /><br /><br /><br /><br /><br /><br />
      <div className="login-container">
        <div className="login-left">
          <img src={HOMESTAYY} className="logo" alt="Logo" />
          <h1>Welcome Back!</h1>
          <p>Please enter your login details below</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="error">{error}</p>}
            <p className="forgot-password">Forgot password?</p>
            <button type="submit" className="sign-in-btn">Sign in</button>
            <p className="or-text">Or continue with</p>
            <Link className="google-btn">
              <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google" />
              Log in with Google
            </Link>
          </form>
          <p className="sign-up-text">
            Don’t have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
        <div className="login-right">
          <img src={BACK} className="illustration" alt="Illustration" />
          <p>Manage your tasks efficiently with Homestay...</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
