import React from 'react';
import Home from './Home';
import Work from './Work';
import '../styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={ Home } />
        <Route exact path="/work" component={ Work } />
      </div>
    </Router>
  );
}

export default App;
