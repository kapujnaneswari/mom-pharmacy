import React from 'react';
import './footer.css';
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">About Mom Pharmacy</h2>
        <p>Mom Pharmacy is your trusted health partner for medicine delivery, doctor consultation, lab tests, and wellness advice.</p>
        <p>We deliver You in just 10 mins!</p>
        <div className="social-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>

        <p className="footer-bottom">&copy; {new Date().getFullYear()} Mom Pharmacy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;




