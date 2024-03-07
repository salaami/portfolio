import React from "react"
import "./About.css"
import { TransitionVariants } from "../../Animations/TransitionVariants";
import { motion } from "framer-motion";
import Intro from './Intro'
import Skills from './Skills'
import Tech from './Tech'
import Resume from './Resume'
import AnimateContent from '../../Animations/AnimateContent'

export default function About() {
  return (
    <motion.div
      className="about-wrapper"
      initial="inital"
      animate="animate"
      exit="exit"
      variants={TransitionVariants}
    >
      <AnimateContent>
        <Intro/>
      </AnimateContent>
      <AnimateContent>
        <Resume/>
      </AnimateContent>
      <AnimateContent>
        <Skills />
      </AnimateContent>
      <AnimateContent>
        <Tech />
      </AnimateContent>
    </motion.div>
  );
}
