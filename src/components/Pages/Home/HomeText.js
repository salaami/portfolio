import React from 'react'
import './HomeText.css'
import Typewriter from 'typewriter-effect'
import { useSpring, animated } from 'react-spring'

export default function HomeText() {
    const fade = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        delay: 3000
    });
    return (
        <div className="home-text">
            <div className="prompt">
                <div className="prompt-text">salem ~ home</div>
                <div className="triangle"/>
                    <div className="command">
                    <Typewriter 
                        options = {{
                            cursor: '█',
                            skipAddStyles: false
                        }}
                        onInit = {(typewriter) => {
                            typewriter.pauseFor(500).typeString("whoami").start()
                    
                        }}    
                    />
                    
                    </div>
            </div>
            <animated.div style = {fade} className="response">
                Hi,<br/>
                my name is Salem.<br/>
                I'm a data engineer from Hamburg.<br/>
                Welcome to my homepage.<br/>
            </animated.div>
        </div>
    )
}   
