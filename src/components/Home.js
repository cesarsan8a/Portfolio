import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Intro from './Intro';
import cesar from '../utils/cesar_profile.jpeg';
import '../styles/Home.css';

class Home extends Component {
  render () {
    return (
      <div className="home-container">
        <Nav />
        <Intro />

        <div className="profile-container">
          <div className="profile-img">
            <img src={ cesar } />
          </div>

          <div className="profile-about">
            <h2>Hello</h2> {/* transitions from hello and hola */}
            <div className="profile-about-p-cont">
              <p>I'm a web developer based in Melbourne, Australia. Other stuff about me, bla, bla, bla. Additional info. Ok, enough.</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
