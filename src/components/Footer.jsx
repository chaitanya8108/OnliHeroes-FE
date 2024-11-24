import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Social icons
import "../styles/Footer.css"
const Footer = () => {
  return (
    <footer className="footer py-0  bg-dark text-light">
      <div className="container d-flex justify-content-between align-items-center justify-content-center bg-dark footerContainer">
        {/* Left Section: Brand and Copyright */}
        <div className="footer-left text-gray">
          <h5 className="font-weight-bold text-white mb-0 text-center">onlyHeroes</h5>
          <p className="mb-0">&copy; {new Date().getFullYear()} onlyHeroes. All rights reserved.</p>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="footer-right">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon mx-2"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon mx-2"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon mx-2"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon mx-2"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon mx-2"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
