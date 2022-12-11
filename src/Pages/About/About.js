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
            <h1>ABOUT</h1>
              <p>My journey started as a student of economics and business.
              An introductory programming and data mining classes sparked my interest,
              at a time when I was largley bored 
              by the highly specialized topics of my buiness courses.
              On the side I was earning some money as a working student.
              I was supervised with tedious reporting tasks.
              The limited capabilities of Microsoft Excel along with the mental pain it can cause
              strengthened my interest in technologies that can ease it.
              That was where I took the decision to redirect my career 
              towards the data space after my business intelligence and data mining class.
              Back then I wrote my thesis in that very field, 
              hoping that I can land a related job afterwards.
              As a graduate with limited hands-on experience 
              I decided to take my first job as a system manager for media software.
              While I was mainly busy with maintaing media tools and reporting tasks 
              I got in touch with the BI department at my company.
              Eventually the opportunity arouse to become a part of them.
              Starting out I was using relational data base systems 
              to mitigate the reporting efforts at my employer.

              </p>

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
