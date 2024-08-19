import React, { useRef, useEffect } from 'react';
import './Skills.css';
import { motion, useInView, useAnimation } from 'framer-motion';
import { SkillData } from './SkillData';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [isInView, controls]);

  return (
    <div className="skill-container">
      <h1>Coding Skills Barometer</h1>
      <h2>Visualizing my Proficiency in Programming Languages</h2>
      <div className="skill-content" ref={ref}>
        {SkillData.map(({ Title, Level, Id }) => {
          const skillVariants = {
            initial: {
              width: "0%"
            },
            animate: {
              width: `${Level}%`,
              transition: {
                type: "easeInOut",
                delay: 1,
                duration: 1,
              }
            },
          };

          return (
            <div key={Id} className="skill-wrapper">
              <h3>{Title}</h3>
              <section className="bar-wrapper">
                <div className="background-bar" />
                <motion.div
                  key={Id}
                  className="skill-bar"
                  variants={skillVariants}
                  initial="initial"
                  animate={controls}
                >
                  <p>{Level}%</p>
                </motion.div>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}

