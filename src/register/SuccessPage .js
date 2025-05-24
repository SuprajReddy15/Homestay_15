import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaTimesCircle } from 'react-icons/fa';
import Home from '../templates/home';
import Navbar from '../layout/Navbar';

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialUser = location.state?.user || JSON.parse(localStorage.getItem('user')) || null;

  const [user, setUser] = useState(initialUser);
  const [userData, setUserData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (user) {
      const previousUserId = localStorage.getItem('previousUserId');
      if (!previousUserId || previousUserId !== user.id.toString()) {
        setShowPopup(true);
        localStorage.setItem('previousUserId', user.id.toString());
      }

      localStorage.setItem('user', JSON.stringify(user));

      const fetchUserData = async () => {
        try {
          const response = await axios.get('http://localhost:5900/getuserDetails', {
            method: 'GET',
            credentials: 'include',
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

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="success-page">
      <Home />
      <Navbar />

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <FaTimesCircle className="close-icon" onClick={closePopup} />
            <h2>Welcome!</h2>
            <p>
              {`Hello, ${user?.first_name} ${user?.last_name}! We're glad to see you.`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessPage;
