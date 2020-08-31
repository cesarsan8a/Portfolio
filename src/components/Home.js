import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Intro from './Intro';
import Contact from './Contact';
import cesar from '../utils/cesar_profile.jpeg';
import david from '../utils/david_gum.jpg';
import '../styles/Home.css';

class Home extends Component {
  render () {
    return (
      <div className="home-container">
        <Nav />
        <Intro
          text="Hey! I'm Cesar. I'm a"
          david={ david }
        />

        <div className="profile-container">
          <div className="profile-img">
            <div className="blue"></div>
            <img src={ cesar } alt="Cesar's profile" />
            <div className="pink"></div>
          </div>

          <div className="profile-about">
            <div className="profile-about-p-cont">
              <p>I'm a web developer based in Melbourne, Australia. Other stuff about me, bla, bla, bla. Additional info. Ok, enough.</p>
            </div>
          </div>
        </div>

        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
