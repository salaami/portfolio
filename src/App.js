import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

var App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
