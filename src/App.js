import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'
import { AnimatePresence } from 'framer-motion'

export default function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/projects' exact component={Projects} />
      </Switch>
    </AnimatePresence>
  )
}

