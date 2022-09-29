import React from 'react'
import './Projects.css'
import { Navbar } from '../../Menu/Navbar'
import Socialbar from '../../SocialBar/SocialBar'
import Cards from '../../Gallery/Cards'

var Projects = () => {
    return (
        <div className="project-container">
            <div className="sidebar-left">
                <Navbar />
            </div>
            <div className="content">
                <div className="project-content-box">
                    <Cards /> 
                </div>

            </div>
            <div className="sidebar-right">
                <Socialbar />
            </div>
        </div>
    )
}

export default Projects
