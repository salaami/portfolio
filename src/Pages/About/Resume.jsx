import React from 'react'
import './Resume.css'
import { ResumeData } from './ResumeData'
import { motion } from 'framer-motion'


export default function Resume() {
  const slideAnimation = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    animate: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "easeInOut",
        delay: 1,
      },
    },
  }

  return (
    <article className="resume-content">
      <h1>Resume</h1>
      <h2>Work Experience</h2>
      <section className="career-paragraph">
        {ResumeData.map(({ Id, Company, Title, Period, Tasks }) => {
          return(
            <div className="job-entry" key={Id}>
              <div className="job-key-info">
                <span className="time-period">{Period}</span>
                <h4 className="job-title">{Title}</h4>
                <span className="company">{Company}</span>
              </div>
              <motion.div
                className="job-details"
                variants={slideAnimation}
                initial="initial"
                animate="animate"
              >
                <ul className="job-tasks">
                  {Tasks.map((task, taskId) => (
                    <li className="task-item" key={taskId}>
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          )
        })}
      </section>
    </article>
  )
}

