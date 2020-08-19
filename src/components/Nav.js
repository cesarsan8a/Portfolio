import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css'

function Nav () {
  return (
    <nav>

      <div className="logo-container">
        <Link to="/">
          <img className="logo-nav" src="http://placekitten.com/200/300"/>
        </Link>
      </div>

      <div className="links-container">
        <div className="nav-link">
          <Link to='/projects'>Projects</Link>
        </div>

        <div className="nav-link">
          <Link to='/resume'>Resume</Link>
        </div>

        <div className="nav-link">
          <Link to='/contact'>Contact</Link>
        </div>

      </div>
    </nav>
  );
}

export default Nav;
