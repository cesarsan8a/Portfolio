import React, { Component } from 'react';
import cesar from '../utils/cesar_profile.jpeg';
import '../styles/Intro.css';

const characteristics = [
  "Web Developer",
  "Engineer",
  "Latino",
  "It's pronounced like the salad",
  "I'm not a salad, though"
];


class Intro extends Component {
  constructor() {
    super();
    this.state = {
      adj: 0, // index of the characteristic to display
    }
  }

  changeAdj = () => { // loop through the array of characteristics
    if ( this.state.adj < (characteristics.length - 1) ) {
      this.setState({ adj: this.state.adj + 1 });
    } else {
      this.setState({ adj: 0 });
    }
  }

  startAdjChange = () => { // set the time interval between the characteristics
    this.intervalId = setInterval(this.changeAdj, 3000);
  }

  componentDidMount() {
    this.startAdjChange();
  }

  render () {
    return (
      <div className="intro-container">
        <div className="greeting">
          <img src={ cesar } alt="Cesar's profile pic" />
          <h1>Hey, I'm Cesar</h1>
        </div>

        <div className="characteristics">
          <h2>{ characteristics[this.state.adj] }</h2>
        </div>

      </div>
    );
  }
}

export default Intro;
