import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../register/register.css';
import HOMESTAYY from '../img/image-1.png';
import BACK from '../img/back.png';
import Navbar from '../layout/Navbar';

const UserRegistration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phno: '',
        profileImage: null
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize navigate hook

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            profileImage: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const formDataToSend = new FormData();
        formDataToSend.append('firstName', formData.firstName);
        formDataToSend.append('lastName', formData.lastName);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('password', formData.password);
        formDataToSend.append('phno', formData.phno);
        if (formData.profileImage) {
            formDataToSend.append('profileImage', formData.profileImage);
        }

        try {
            await axios.post('http://localhost:5900/userRegistration', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            navigate('/login'); // Redirect to the login page after successful registration
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div>
            <Navbar />
            <br /><br /><br /><br /><br /><br /><br />
            <div className="signup-container">
                <div className="form-container">
                    <img src={HOMESTAYY} className="logo" alt="Logo" />
                    <h3 className="form-title">Create an Account</h3>
                    <form onSubmit={handleSubmit} className="form-grid">
                        <div>
                            <label className="form-label">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                className="form-input"
                                placeholder="Enter your first name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="form-label">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                className="form-input"
                                placeholder="Enter your last name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-input"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-input"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="form-label">Phone Number</label>
                            <input
                                type="text"
                                name="phno"
                                className="form-input"
                                placeholder="Enter your phone number"
                                value={formData.phno}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="form-label">Profile Image</label>
                            <input
                                type="file"
                                name="profileImage"
                                className="form-input"
                                onChange={handleFileChange}
                            />
                        </div>
                        {error && <p className="form-message">{error}</p>}
                        <div className="button-group">
                            <button type="submit" className="form-button btn sign-up">Sign Up</button>
                            <Link to="/login" className="form-button btn back-to-login">Back to Login</Link>
                        </div>
                    </form>
                    <p className="sign-in-link">
                        Already have an account? <Link to="/login">Sign In</Link>
                    </p>
                </div>
                <div className="image-container">
                    <img src={BACK} alt="Illustration" />
                </div>
            </div>
        </div>
    );
};

export default UserRegistration;
