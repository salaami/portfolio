import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About'
import Projects from './components/Pages/Projects/Projects'
import Contact from './components/Pages/Contact/Contact'

var App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/projects' exact component={Projects} />
      </Switch>
    </Router>

  );
}

export default App;
