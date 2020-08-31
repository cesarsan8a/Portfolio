import React, { Component } from 'react';

class Project extends Component {
  render() {
    return(
      <div className="project-container">
        <h2>{ this.props.title }</h2>
        <div className="desc-pic">
          <div className="project-pic">
            <img src={ this.props.pic } alt="project"/>
          </div>

          <div className="description">
            <p>{ this.props.description }</p>
          </div>

        </div>
      </div>
    );
  }
}

export default Project;
