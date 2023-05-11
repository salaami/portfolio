import React from "react"
import "./About.css"
import { TransitionVariants } from "../../AnimatedRoute/TransitionVariants";
import { motion } from "framer-motion";
import Skills from './Skills'
import Tech from './Tech'

export default function About() {
  return (
    <motion.div
      className="about-content"
      initial="inital"
      animate="animate"
      exit="exit"
      variants={TransitionVariants}
    >
      <article>
        <h1>Intro</h1>
        I began as an economics and business student.
        In my part-time job, I had to cope with tedious reporting tasks.
        After taking a Business Intelligence and Data Mining class, I was able to automate and optimize these.
        This experience motivated me to redirect my career towards the data space.
        I wrote my thesis in business informatics and started my first full-time job as a system manager at a media agency.
        I transitioned to the Business Intelligence department and began using relational databases to streamline reporting efforts.
        As our infrastructure improved, I shifted my focus to data integration and data transformation tasks.
        I found it very inspiring to work in an environment that encourages constant learning and development.
      </article>
      <Skills />
      <Tech />
    </motion.div>
  );
}
