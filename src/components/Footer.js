import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { SiGithub, SiTwitter, SiLinkedin } from "react-icons/si";
import '../styles/Footer.css';

function Footer () {
  return (
    <div className="footer-cont">

      <div className="links-cont">
        <div className="footer-link">
          <a href="https://twitter.com/Cesarsan8a" target="_blank" rel="noopener noreferrer">
            <IconContext.Provider value={{ size: "2em", className: "logo-links" }}>
              <SiTwitter />
            </IconContext.Provider>
          </a>
          <div className="footer-link-us"></div>
        </div>

        <div className="footer-link">
          <a href="https://github.com/cesarsan8a" target="_blank" rel="noopener noreferrer">
            <IconContext.Provider value={{ size: "2em", className: "logo-links" }}>
              <SiGithub />
            </IconContext.Provider>
          </a>
          <div className="footer-link-us"></div>
        </div>

        <div className="footer-link">
          <a href="https://www.linkedin.com/in/cesarsanchez0ch04/" target="_blank" rel="noopener noreferrer">
            <IconContext.Provider value={{ size: "2em", className: "logo-links" }}>
              <SiLinkedin />
            </IconContext.Provider>
          </a>
          <div className="footer-link-us"></div>
        </div>

      </div>

      <div className="cc-cesar">
        <p>©2020 <Link to="/">Cesar Sanchez</Link>. All rights reserved.</p>
      </div>

    </div>
  );
}

export default Footer;
