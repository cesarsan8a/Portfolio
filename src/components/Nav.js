import React from 'react';
import { Link } from 'react-router-dom';
import cesar from '../utils/cesar_profile.jpeg';
import '../styles/Nav.css'

function Nav () {
  return (
    <nav>

      <div className="logo-container">
        <Link to="/">
          <h3>CS</h3>
          {/* <img className="logo-nav" src={ cesar }/> */}
        </Link>
      </div>

      <div className="links-container">
        <div className="nav-link">
          <Link to='/'>Home</Link>
        </div>

        <div className="nav-link">
          <Link to='/about'>About</Link>
        </div>

        <div className="nav-link">
          <Link to='/projects'>Projects</Link>
        </div>

        <div className="nav-link">
          <a href="https://www.canva.com/design/DAEFwHfLcM4/ofwrUoNcF7lNyFkmoeeGDA/view?utm_content=DAEFwHfLcM4&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" target="_blank">Resume</a>
        </div>

        <div className="nav-link">
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
