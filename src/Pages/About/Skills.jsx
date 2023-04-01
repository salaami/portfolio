import React from 'react'
import './Skills.css'
import { motion } from 'framer-motion'
import { SkillData } from './SkillData'


export default function Skills() {
  return (
    <div
      className="skill-container"
    >
      <h1>SKILLS</h1>
      {SkillData.map(({ Title, Level, Id }) => {
        return (
          <div
            key={Id}
            className="skill-wrapper"
          >
            <h2>{Title}</h2>
            <motion.div
              key={Id}
              className="skill-bar"
              initial={{ width: "0%" }}
              animate={{ width: `${Level}%` }}
            >
              <p>
                {Level}
              </p>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}
