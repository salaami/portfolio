import React from 'react'
import { 
  AnimatePresence, 
  motion 
} from 'framer-motion'
import { 
  Route,
  Routes
} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import Projects from '../Pages/Projects/Projects'

const transAnimation = {
  inital: {
      opacity: 0,
  },
  animate: {
      opacity: 1
  },
  exit: {
      opacity: 0
  }
}

export default function AnimatedRoute() {
  return (
    <>
      <AnimatePresence>
        <motion.div
            variants={transAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 2
            }}
        >
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/projects" element={<Projects />}/>
            </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
