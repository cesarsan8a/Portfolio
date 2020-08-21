import React, { Component } from 'react';
import Nav from './Nav';
import Intro from './Intro';
import '../styles/Home.css';

class Home extends Component {
  render () {
    return (
      <div className="home-container">
        <Nav />
        <Intro />

        <div className="profile-container">
          <div className="profile-img">
            <img src="http://placekitten.com/200/300" />
          </div>

          <div className="profile-about">
            <h2>Hello</h2> {/* transitions from hello and hola */}
            <div className="profile-about-p-cont">
              <p>I'm a web developer based in Melbourne, Australia. Other stuff about me, bla, bla, bla. Additional info. Ok, enough.</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
