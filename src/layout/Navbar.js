import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HOMESTAYY from '../img/image-1.png';
import { FaUserCircle, FaSignOutAlt, FaClipboardList, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialUser = location.state?.user || JSON.parse(localStorage.getItem('user')) || null;

  const [user, setUser] = useState(initialUser);
  const [userData, setUserData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));

      const fetchUserData = async () => {
        try {
          const response = await axios.get('http://localhost:5900/getuserDetails', {
            withCredentials: true,
          });
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      const fetchUserImage = async () => {
        try {
          const response = await axios.get(`http://localhost:5900/profile/${user.id}/image`, {
            responseType: 'blob',
            withCredentials: true,
          });
          const imageUrl = URL.createObjectURL(response.data);
          setProfileImage(imageUrl);
        } catch (error) {
          console.error('Error fetching user image:', error);
        }
      };

      fetchUserData();
      fetchUserImage();
    }
  }, [user]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5900/logout');
      localStorage.removeItem('user');
      setUser(null);
      setUserData(null);
      setProfileImage(null);
      setShowDropdown(false);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="logo">
          <div className="logo-image">
            <a href="/">
              <img src={HOMESTAYY} alt="Logo" />
            </a>
          </div>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="">About</Link></li>
          <li><Link to="/tour">Tour</Link></li>
          <li><Link to="/hotels">Hotels</Link></li>
          <li><Link to="">Blog</Link></li>
          <li><Link to="">Contact</Link></li>
        </ul>
        <div className="auth-section">
          {user ? (
            <div className="user-profile" onClick={toggleDropdown}>
              <button className="dropdown-toggle-btn">
                {showDropdown ? <FaTimes /> : <FaBars />}
              </button>
              {showDropdown && (
                <div className="dropdown-menu">
                  <div className="dropdown-header">
                    <div className="dropdown-user-info">
                      {profileImage ? (
                        <img src={profileImage} alt="Profile" className="dropdown-profile-image" />
                      ) : (
                        <FaUserCircle size={50} />
                      )}
                      <span className="dropdown-user-name">
                        {user?.first_name || 'User'} {user?.last_name || ''}
                      </span>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <Link to="/profile">
                        <FaUserCircle /> Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <FaClipboardList /> Bookings
                      </Link>
                    </li>
                    <li onClick={handleLogout}>
                      <button className="logout-btn">
                        <FaSignOutAlt /> Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-buttons">
              <Link className="login-btn" to="/login">LOGIN</Link>
              <Link className="signup-btn" to="/register">SIGNUP</Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
