import React, { Component } from 'react';
import '../styles/Intro.css';

const characteristics = [
  "Web Developer",
  "Engineer",
  "Latino",
  "Problem Solver",
  "Team player",
  "It's pronounced like the salad",
  "Not a salad, though"
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
          <h1>{this.props.text}</h1>
          <div className="characteristics">
            <h2>{ characteristics[this.state.adj] }</h2>
          </div>
        </div>

        <div className="david">
          <img src={ this.props.david } alt="David banner" />
        </div>

      </div>
    );
  }
}

export default Intro;
