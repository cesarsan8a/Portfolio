import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
          <NavLink
            to='/'
            activeStyle={{
              color: "#fc5185",
              textShadow: "2px 2px #3fc1c9"
            }}
            exact
          >
            Home
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink
            to='/work'
            activeStyle={{
              color: "#fc5185",
              textShadow: "2px 2px #3fc1c9"
            }}
          >
            Work
          </NavLink>
        </div>

        <div className="nav-link">
          <a href="https://www.canva.com/design/DAEVmIr9B1E/1Xr3cVoOU52RmNL_AJ7HJA/view?utm_content=DAEVmIr9B1E&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" rel="noopener noreferrer">Resume</a>
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
