import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Intro from './Intro';
import Project from './Project';
import Contact from './Contact';

import david from '../utils/david_phone.jpg';
import ttt from '../utils/tic-tac-toe.png';
import spotify from '../utils/spotify_playlist_maker.png';
import portfolio from '../utils/david_gum.jpg';
import worldTour from '../utils/ga_worldtour.png';

import '../styles/Work.css';

class Work extends Component {
  render() {
    return (
      <div className="work-container">
        <Nav />
        <Intro
          text="Hey! I'm still Cesar"
          david={ david }
        />

        <Project
          pic={ ttt }
          title="tic-tac-toe"
          description="The popular game of tic-tac-toe using HTML, CSS and JavaScript."
        />

        <Project
          pic={ spotify }
          title="Playlist Maker"
          description="Built using Ruby on Rails and the Spotify API, this entire CRUD systems allows the user to save songs on multiple playlists. "
        />

        <Project
          pic={ worldTour }
          title="Concert Planner"
          description="Built using React and the BandsInTown API, the user can see the upcoming concerts displayed in a world map."
        />

        <Project
          pic={ portfolio }
          title="Personal Portfolio"
          description="The very same webpage that you are looking right now (: . Built using React."
        />

        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Work;
