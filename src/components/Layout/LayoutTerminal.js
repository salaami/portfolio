import React from 'react'
import { useSpring, animated } from 'react-spring'
import Socialbar from '../SocialBar/SocialBar'
import './LayoutTerminal.css'
import Header from './Header'
import Footer from './Footer'
import { Navbar } from '../Menu/Navbar'

const LayoutTerminal = (props) => {
    const expands = useSpring({
        from: {
            clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)',
            opacity: 0
        },
        to: {
            clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
            opacity: 1
        }
    });

    return(
        <div className="terminal-layout">
            <Header /> 
            <div className="terminal-content">
                <div className="terminal-sidebar"></div>
                <animated.div className="terminal-content-box" style={expands} >{props.content}</animated.div>
                <div className="terminal-sidebar">
                    <Socialbar />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LayoutTerminal
