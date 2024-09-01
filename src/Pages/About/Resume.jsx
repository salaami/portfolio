import React, { useRef, useEffect } from 'react';
import './Resume.css';
import { motion, useInView } from 'framer-motion';
import { ResumeData } from './ResumeData';

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const slideVariants = {
    initial: {
      x: '-100%',
      opacity: 0,
    },
    animate: {
      x: '0%',
      opacity: 1,
      transition: {
        type: 'easeInOut',
        delay: 1,
        duration: 0.8,
      },
    },
  };

  return (
    <article className="resume-content">
      <h1>Resume</h1>
      <h2>Work Experience</h2>
      <section className="career-paragraph" ref={ref}>
        {ResumeData.map(({ Id, Company, Title, Period, Tasks }) => (
          <div className="job-entry" key={Id}>
            <div className="job-key-info">
              <span className="time-period">{Period}</span>
              <h4 className="job-title">{Title}</h4>
              <span className="company">{Company}</span>
            </div>
            <motion.div
              className="job-details"
              variants={slideVariants}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
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
        ))}
      </section>
    </article>
  );
}

