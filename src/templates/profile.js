import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Navbar from '../layout/Navbar';
import '../css/profile.css';

export default function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialUser = location.state?.user || JSON.parse(localStorage.getItem('user')) || null;

  const [user, setUser] = useState(initialUser);
  const [userData, setUserData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    if (user) {
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

  return (
    <div>
      <Navbar />
      <br/><br/><br/><br/><br/><br/><br/><br/>
    <div className="profile-container">
      <div className="cover-photo-container">
        <button className="upload-cover-photo-btn">Upload Cover Photo</button>
      </div>
      <br/><br/><br/><br/><br/><br/>
      <div className="profile-header">
        {profileImage ? (
          <img src={profileImage} alt="Profile" className="profile-image" />
        ) : (
          <FaUserCircle size={100} className="default-profile-icon" />
        )}
        <div className="profile-info">
          <h2>{user?.first_name || 'User'} {user?.last_name || 'User'} <FiEdit className="edit-icon" /></h2>
          <h4>{user?.email || 'User'}</h4>
          <p className="location-info"><HiOutlineLocationMarker /> {userData?.location || 'Location not available'}</p>
          <div className="points-info">
            <span>2840 PTS</span>
          </div>
        </div>
      </div>
      <div className="profile-navigation">
        <button className="nav-btn">Timeline</button>
        <button className="nav-btn">Booking History </button>
        <button className="nav-btn">New Bookings </button>
        <button className="nav-btn ">My Favourites</button>
        <button className="nav-btn">Account Settings</button>
      </div>
    </div>
    </div>
  );
}
