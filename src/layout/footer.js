import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaCalendarAlt, FaComments, FaGoogle } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import '../css/footer.css';
import HOMESTAYY from '../img/image-1.png';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <div className="footer-column">
                    <div className="footer-logo">
                        <img src={HOMESTAYY} alt="Travel Tours Logo" className="logo" />
                    </div>
                    <p className="footer-description">This phrase invites people to embark on a global adventure with the company promoting it, suggesting that by engaging with them, the first step towards exploring the world is readily available.</p>
                </div>

                <div className="footer-column">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><FaMapMarkerAlt size={20} /> Destinations</li>
                        <li><FaCalendarAlt size={20} /> Tours Schedule</li>
                        <li><FaComments size={20} /> Contact Us</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4 className="footer-heading">Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                            <FaGoogle size={24} />
                        </a>
                    </div>
                </div>

                <div className="footer-column">
                    <h4 className="footer-heading">Contact Us</h4>
                    <p className="footer-contact">We are here to assist you. Reach out for any inquiries.</p>
                    <div className="subscribe-form">
                        <input type="email" placeholder="Email" className="subscribe-input" />
                        <button className="subscribe-button">
                            Subscribe <FiSend size={20} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="pp">© 2024 Homestay Tours. All rights reserved by SALEEM DUDEKULA.</p>
            </div>
        </footer>
    );
}

export default Footer;
