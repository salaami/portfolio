import React from 'react'
import './Projects.css'
import Cards from './Cards'
import { motion } from 'framer-motion'
import { TransitionVariants } from '../../AnimatedRoute/TransitionVariants'

export default function Projects() {
    return (
        <main>
            <motion.div 
                className="project-content"
                initial="inital"
                animate="animate"
                exit="exit"
                variants={TransitionVariants}
            >
                <h2>PROJECTS</h2>
                <article  className="project-text">
                    <p>
                        This is a curated list of my private projects. 
                        Despite working in the data field, I am enthusiastic about many different technological subjects. 
                        That's why I try to keep my naive curiosity and discover related topics, too.
                        To keep a good learning spirit I like to follow my interests and thereby broaden my knowledge.
                    </p>
                </article>
                <Cards /> 
            </motion.div>
        </main>
    )
};
