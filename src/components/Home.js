import React, { Component } from 'react';
import Nav from './Nav';
import Intro from './Intro';

class Home extends Component {
  render () {
    return (
      <div>
        <Nav />
        <Intro />
      </div>
    );
  }
}

export default Home;
