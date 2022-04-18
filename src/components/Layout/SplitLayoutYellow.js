import React from 'react'
import Socialbar from '../SocialBar/SocialBar'
import './SplitLayoutYellow.css'
import Header from './Header'
import Footer from './Footer'

var Layout = (props) => {
    return(
        <div className="split-yellow-layout">
            <Header />
            <div className="content">
                <div className="sidebar">
                </div>
                <div className="content-box-left">{props.contentLeft}</div>
                <div className="content-box-right">{props.contentRight}</div>
                <div className="sidebar">
                    <Socialbar />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;