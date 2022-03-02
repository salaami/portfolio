import React from 'react';
import Navbar from '../NavBar/Navbar';
import Socialbar from '../SocialBar/SocialBar';
import './Layout.css';

var Layout = (props) => {
    return(
        <div className="layout">
            <div className="header">
            </div>
            <div className="content">
                <div className="sidebar">
                    <Navbar />
                </div>
                <div className="content-box-left">{props.contentLeft}</div>
                <div className="content-box-right">{props.contentRight}</div>
                <div className="sidebar">
                    <Socialbar />
                </div>
            </div>
            <div className="footer"></div>
        </div>
    )
}

export default Layout;