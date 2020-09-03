import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/Nav.css'

function Nav (props) {
  const location = {
    pathname: props.page,
    state: { fromDashboard: true }
  }
  return (
    <nav>
      <div className="logo-container">
        <Link to="/">
          <h3>CS</h3>
        </Link>
      </div>

      <div className="links-container">
        <div className="nav-link">
          <Link to='/'>Home</Link>
        </div>

        <div className="nav-link">
          <Link to='/work'>Work</Link>
        </div>

        <div className="nav-link">
          <a href="https://www.canva.com/design/DAEFwHfLcM4/ofwrUoNcF7lNyFkmoeeGDA/view?utm_content=DAEFwHfLcM4&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>

        <div className="nav-link">
          <HashLink
            to={location.pathname + '#contact'}
            smooth
          >
            Contact
          </HashLink>
        </div>

      </div>
    </nav>
  );
}

export default Nav;
