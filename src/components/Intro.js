import React, { Component } from 'react';
import '../styles/Intro.css';

const characteristics = [
  "Web Developer",
  "Chemical Engineer",
  "Latino",
  "Not a salad"
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

  startAdjChange = () => {
    this.intervalId = setInterval(this.changeAdj, 3000);
    console.log('interval');
  }

  componentDidMount() {
    this.startAdjChange();
  }

  render () {
    return (
      <div className="intro-container">
        <div className="greeting">
          <h1>I'm Cesar</h1>
        </div>

        <div className="characteristics">
          <h2>{ characteristics[this.state.adj] }</h2>
        </div>

        <div className="intro-img-container">
          <img src="https://via.placeholder.com/700x300"/>
        </div>
      </div>
    );
  }
}

export default Intro;
