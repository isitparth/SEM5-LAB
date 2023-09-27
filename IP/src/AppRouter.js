import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Index from 'react-routing-app\src\Index.js';
import About from './About';

const AppRouter = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/index">Index</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      
      <Route path="/" exact component={Home} />
      <Route path="/index" component={Index} />
      <Route path="/about" component={About} />
    </Router>
  );
};

export default AppRouter;
