import React from 'react'
import Socialbar from '../SocialBar/SocialBar'
import './LayoutBlack.css'
import Header from './Header'
import Footer from './Footer'

export default function LayoutBlack(props) {
    return(
        <div className="black-layout">
            <Header /> 
            <div className="black-content">
                <div className="black-sidebar">

                </div>
                <div className="black-content-box">{props.content}</div>
                <div className="black-sidebar">
                    <Socialbar />
                </div>
            </div>
            <Footer />
        </div>
    )
}

