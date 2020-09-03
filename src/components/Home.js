import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Intro from './Intro';
import Contact from './Contact';
import { Link } from 'react-router-dom';

import cesar from '../utils/cesar_profile.jpeg';
import david from '../utils/david_gum.jpg';
import '../styles/Home.css';

class Home extends Component {
  render () {
    return (
        <div className="home-container">
          <Nav page="/" />
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
                <h2>Hi.</h2>
                <h3>I’m a web developer based in Melbourne, Australia</h3>
                <p>I have a passion for backend development, and I love to build great code that makes <span id="nerd">nerdy</span> cool stuff happen.</p>
              </div>
              <div className="can-do">
                <h2>What can I do?</h2>
                <h3>I can design what you want</h3>
                <p>I enjoy figuring out how to bring ideas to life using code. I have experience developing with HTML, CSS, JavaScript, Ruby on Rails and React. Check out my <Link to="/work">projects</Link> to see examples of my work.</p>
              </div>

              <div className="can-help">
                <h2>I can help.</h2>
                <h3>I’m currently available for work</h3>
                <p>I have a curious and detail-oriented attitude towards coding, and I love contributing to a team to make big things possible. If you have a product or project that needs a fast-paced learner with up-to-date training across a variety of languages, I’m your guy.</p>
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
