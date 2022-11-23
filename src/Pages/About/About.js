import React from "react"
import "./About.css"
import Header from "../../components/Header/Header"
import Tongue from './Charts/Tongue'
import Language from './Charts/Language'
import Framework from './Charts/Framework'
import Footer from "../../components/Footer/Footer"
import { motion } from "framer-motion"
import { PageVariants } from "../../components/Animations/PageVariants"
import { PageTransition } from "../../components/Animations/PageTransition"

export default function About() {

  return (
    <div>
      <Header />
      <main className="container">
        <motion.div 
          className="about-content"
          variants={PageVariants}
          transition={PageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="about-text">
            <h1>About</h1>
              <p>You have a question</p>
              <p>and would like to reach out to me?</p>
              <p>Then don't hesitate to send me a message and </p>
              <p>I'll try to answer as soon as I can.</p>
          </div>
          <div>
            <Language />
            <Framework />
            <Tongue />
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
