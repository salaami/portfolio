import React from 'react'
import './Header.css'
import { Navbar } from '../Menu/Navbar'

export default function header() {
    return (
        <div className="header-container">
            <div className="header">
                <Navbar />
            </div>
            <div className="window-bar">
                <div className="sides">
                </div>
                <div className="window-top">
                    <div className="dots">
                        <span className="min"></span>
                        <span className="max"></span>
                        <span className="close"></span>
                    </div>
                </div>
                <div className="sides"></div>
            </div>
        </div>
    )
}
