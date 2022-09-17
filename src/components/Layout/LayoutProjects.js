import React from 'react'
import Socialbar from '../SocialBar/SocialBar'
import './LayoutProjects.css'
import Cards from '../Gallery/Cards'
import Footer from '../Layout/Footer'
import { Navbar } from '../Menu/Navbar'


var Layout = (props) => {
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

export default Layout;