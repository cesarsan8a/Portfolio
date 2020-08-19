import React from 'react';
import Home from './Home';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ Home } />
      </div>
    </Router>
  );
}

export default App;
