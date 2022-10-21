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
                    <h1>Projects</h1>
                    <h2>
                        <p>Check out the things I build.</p>
                        <p>Here you'll find a collection of my projects.</p>
                    </h2>
                    <Cards /> 
                </div>
            </main>
            <Footer />
        </div>
    )
};
