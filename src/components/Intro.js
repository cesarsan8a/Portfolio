import React from 'react';
import '../styles/Intro.css';

const characteristics = [
  "Web Developer",
  "Chemical Engineer",
  "Latino",
  "Not a salad"
];

const describeMe = function (adj) {
  return adj[Math.round(Math.random() * 3)];
}

function Intro () {
  return (
    <div className="intro-container">
      <div className="greeting">
        <h1>I'm Cesar</h1>
      </div>

      <div className="characteristics">
        <h2>{ describeMe(characteristics) }</h2>
      </div>

      <div className="intro-img-container">
        <img src="https://via.placeholder.com/700x300"/>
      </div>
    </div>
  );
}

export default Intro;
