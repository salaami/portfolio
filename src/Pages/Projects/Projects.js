import React from 'react'
import './Projects.css'
import Header from '../../components/Header/Header'
import Cards from './Cards'
import Footer from '../../components/Footer/Footer'

export default function Projects() {
    return (
        <div className="container">
            <Header/>
            <main>
                <div className="project-content">
                    <h1>PROJECTS</h1>
                    <h2>
                        <p>CHECK OUT THE THINGS I BUILD.</p>
                        <p>HERE YOU'LL FIND A OVERVIEW OF MY PROJECTS.</p>
                    </h2>
                    <Cards /> 
                </div>
            </main>
            <Footer />
        </div>
    )
};
