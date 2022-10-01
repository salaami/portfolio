import React from 'react'
import './Projects.css'
import Navbar from '../../Menu/Navbar'
import Socialbar from '../../SocialBar/SocialBar'
import Cards from './Cards'

export default function Projects() {
    return (
        <>
            <header></header>
            <body>
                <div className="sidebar-left">
                    <Navbar />
                </div>
                    <div className="project-content">
                        <h1>Projects</h1>
                        <h2>
                            <p>Check out the things I build.</p>
                            <p>Here you'll find a collection of my projects.</p>
                        </h2>
                        <Cards /> 
                    </div>
                <div className="sidebar-right">
                    <Socialbar />
                </div>
            </body>
            <footer></footer>
        </>
    )
};
