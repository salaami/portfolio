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
                    <h1>PROJECTS</h1>
                    <h2>
                        <p>CHECK OUT THE THINGS I BUILD.</p>
                        <p>HERE YOU'LL FIND A OVERVIEW OF MY PROJECTS.</p>
                    </h2>
                    <Cards /> 
                </div>
            </motion.main>
            <Footer />
        </div>
    )
};
