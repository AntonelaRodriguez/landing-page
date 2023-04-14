import React from 'react';
import './styles/footer.css';
import logo from "../assets/logoShok.png";
import facebook from "../assets/Group 2790.png"
import skype from "../assets/Group 2789.png"
import link from "../assets/Group 2791.png"
import ig from "../assets/Group 2792.png"
import long from "../assets/Group 2793.png"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__column">
      <img src={logo} alt="Logo" className="footer__logo" />
        {/* <img src="/logo.png" alt="Logo" className="footer__logo" /> */}
      </div>

      <div className="footer__columns">
        <div className="footer__contatcs">
        <h3 className="footer__title">Contact Us</h3>
        <ul className="footer__list">
          <li>+1 123-456-7890</li>
          <li>1234 Elm Street, Springfield, IL</li>
          <li>info@example.com</li>
        </ul>
        </div>
        <div>
        <h3 className="footer__title">Our Company</h3>
        <ul className="footer__list">
          <li><a href="#about">About</a></li>
          <li><a href="#product">Product</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#career">Career</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
        </div>
        <div>
        <h3 className="footer__title">Social Contacts</h3>
        <ul className="footer__list">
          <li><a href="#facebook">Facebook</a></li>
          <li><a href="#linkedin">LinkedIn</a></li>
          <li><a href="#youtube">Youtube</a></li>
          <li><a href="#vimeo">Vimeo</a></li>
          <li><a href="#skype">Skype</a></li>
        </ul>
        </div>
        <div className="footer__double" >
        
          <div>
          <div className="footer__address">
            <h3 className="footer__title">Address</h3>
            <p>1234 Elm Street</p>
            <p>Springfield, IL</p>
          </div>
          </div>
          <div>
          <div className="footer__follow-us">
            <h3 className="footer__title">Follow Us</h3>
            <div className="footer__social-icons">
              <img src={facebook} alt="Facebook" className="footer__social-icon" />
              <img src={skype} alt="LinkedIn" className="footer__social-icon" />
              <img src={link} alt="Youtube" className="footer__social-icon" />
              <img src={ig} alt="Vimeo" className="footer__social-icon" />
            </div>
          </div>
          </div>
        
        </div>
      </div>
      <div className="footer__image">
        <img src={long} alt="Long Image" className="footer__long-image" />
      </div>
    </footer>
  );
}

export default Footer;
