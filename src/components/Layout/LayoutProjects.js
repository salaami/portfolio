import React from 'react'
import './LayoutProjects.css'
import Cards from '../Gallery/Cards'
import Socialbar from '../SocialBar/SocialBar'
import { Navbar } from '../Menu/Navbar'


export default function LayoutProjects(props) {
    return(
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
