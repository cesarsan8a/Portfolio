import React from 'react';
import Home from './Home';
import Projects from './Projects';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ Home } />
        <Route exact path="/projects" component={ Projects } />
      </div>
    </Router>
  );
}

export default App;
