import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h3>🌿 D-Market</h3>
                    <p>Empowering farmers through digital innovation. Connect, grow, and thrive with technology.</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Email: support@dmarket.com</p>
                    <p>Phone: +91 9307489625</p>
                    <p>Location: Parbhani, Maharashtra, India</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} D-Market. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
