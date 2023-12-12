import React from 'react'
import './Skills.css'
import { motion } from 'framer-motion'
import { SkillData } from './SkillData'




export default function Skills() {
  return (
    <div
      className="skill-container"
    >
      <h1>Coding Skills Barometer</h1>
      <h2>Visualizing my Proficiency in Programming Languages</h2>
      <div className="skill-content">
        {SkillData.map(({ Title, Level, Id }) => {
          const skillVariants = {
            initial: {
              width: "0%"
            },
            animate: {
              width: `${Level}%`,
              transition: {
                type: "tween",
                ease: "easeInOut"
              }
            },
          }
          return (
            <div
              key={Id}
              className="skill-wrapper"
            >
              <h3>{Title}</h3>
              <section className="bar-wrapper">
                <div className="background-bar"/>
                <motion.div
                  key={Id}
                  className="skill-bar"
                  variants={skillVariants}
                  initial="initial"
                  animate="animate"
                >
                  <p>
                    {Level}
                  </p>
                </motion.div>
              </section>
            </div>
          )
        })}
      </div>
    </div>
  )
}
