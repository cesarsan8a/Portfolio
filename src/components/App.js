import React from 'react';
import Home from './Home';
import Work from './Work';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ Home } />
        <Route exact path="/work" component={ Work } />
      </div>
    </Router>
  );
}

export default App;
