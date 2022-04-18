import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'

export default function header() {
    return (
        <div className="header-container">
            <div className="header">
                <div className="sign">
                    <p className="sign-dark">salem|</p>
                    <p className="sign-light">salleh</p>
                </div>
            </div>
            <div className="window-bar">
                <div className="sides"></div>
                <div className="window-top">
                    <Navbar/>
                    <div className="dots">
                        <span className="dot">_</span>
                        <span className="dot">◻</span>
                        <span className="dot">x</span>
                    </div>
                </div>
                <div className="sides"></div>
            </div>
        </div>
    )
}
