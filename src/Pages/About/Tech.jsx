import React from 'react'
import './Tech.css'
import { motion } from 'framer-motion'
import { TechData } from './TechData'


export default function Tech() {
  return (
    <div
      className="tech-container"
    >
      <h1>Tech
      </h1>
      {TechData.map(({ Title, Level, Id }) => {
        return (
          <div
            key={Id}
            className="tech-wrapper"
          >
            <h2>{Title}</h2>
            <motion.div
              className="tech-bar"
              initial={{ width: "0%" }}
              animate={{ width: `${Level}%` }}
              transition={{
                duration: 0.3,
                type: 'tween',
                ease: 'easeInOut'
              }}
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
