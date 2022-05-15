import React from 'react'
import './AboutText.css'
import Typewriter from 'typewriter-effect'

export default function AboutText() {
    return (
        <div className="about-text">
            <Typewriter 
                options = {{
                    cursor: '█',
                    loop: true,

                }}
                onInit = {(typewriter) => {
                    typewriter.typeString(
                        "I am Salem Salleh,<br>"
                    ).pauseFor(
                        1000
                    ).typeString(
                        "a data engineer<br>"
                    ).pauseFor(
                        1000
                    ).typeString(
                        "from Hamburg.<br>"
                    ).start()
       
                }}
            />
        </div>
    )
}   
