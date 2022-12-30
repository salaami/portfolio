import React from 'react'
import './Projects.css'
import Header from '../../components/Header/Header'
import Cards from './Cards'
import Footer from '../../components/Footer/Footer'
import { motion } from 'framer-motion'
import { PageVariants } from '../../components/Animations/PageVariants'
import { PageTransition } from '../../components/Animations/PageTransition'

export default function Projects() {
    return (
        <div>
            <Header/>
            <motion.main
                className="container"
                variants={PageVariants}
                transition={PageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <div className="project-content">
                    <div >
                        <h1>PROJECTS</h1>
                            <article  className="project-text">
                                <p>
                                    This is a curated list of my private projects. 
                                    Dispite working in the data field, I consider myself a tech enthusiast. 
                                    That's why I try to keep my naive curiosity and discover other fields, too.
                                    An economic approach would be to focus on a single field like data engineering, 
                                    but I think that this rule does not apply here. 
                                    To keep a good learning spirit I like to follow my interests and thereby broaden my knowledge.
                                </p>
                            </article>
                    </div>
                    <Cards /> 
                </div>
            </motion.main>
            <Footer />
        </div>
    )
};
