import React from 'react'
import { 
  AnimatePresence, 
  motion 
} from 'framer-motion'
import { 
  Route,
  Routes,
  useLocation
} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import Projects from '../Pages/Projects/Projects'

export default function AnimatedRoute() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/projects" element={<Projects />}/>
          </Routes>
      </AnimatePresence>
    </>
  )
}
