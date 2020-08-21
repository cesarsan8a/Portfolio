import React from 'react';
import '../styles/Intro.css';

function Intro () {
  return (
    <div className="intro-container">
      <div className="greeting">
        <h1>Hi I'm Cesar</h1>
        <h3>A web dev not a salad</h3>
      </div>

      <div className="intro-img-container">
        <img src="https://via.placeholder.com/700x300"/>
      </div>
    </div>
  );
}

export default Intro;
