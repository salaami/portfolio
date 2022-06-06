import React from 'react'
import './HomeText.css'
import Typewriter from 'typewriter-effect'
import { useSpring, animated } from 'react-spring'

export default function HomeText() {
    const fade = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        delay: 3000
    });
    return (
        <div className="home-text">
            <div className="prompt">
                <div className="prompt-name">&nbsp;salem&nbsp;</div>
                <div className="triangle-name"></div>
                <div className="prompt-tilde">&nbsp;~&nbsp;</div>
                <div className="triangle-tilde"></div>
                <Typewriter 
                    options = {{
                        cursor: '█',
                        skipAddStyles: false
                    }}
                    onInit = {(typewriter) => {
                        typewriter.pauseFor(500).typeString(
                            "whoami"
                        ).start()
                    }}
                />
            </div>
            <animated.div style = {fade} className="response">
                My name is Salem.<br/>
                I'm a data engineer<br/>
                from Hamburg Germany.<br/>
            </animated.div>
        </div>
    )
}   
