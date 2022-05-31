import React from 'react'
import './HomeText.css'
import Typewriter from 'typewriter-effect'

export default function HomeText() {
    return (
        <div className="home-text">
            <Typewriter 
                options = {{
                    cursor: '█',
                    skipAddStyles: false
                }}
                onInit = {(typewriter) => {
                    typewriter.typeString(
                        "Hello World!<br>"
                    ).pauseFor(
                        1000
                    ).typeString(
                        "My name is Salem.<br>"
                    ).pauseFor(
                        1000
                    ).typeString(
                        "I'm a data engineer<br>"
                    ).pauseFor(
                        1000
                    ).typeString(
                        "from Hamburg Germany.<br>"
                    ).pauseFor(
                        500
                    ).typeString(
                        "Welcome to my home page.<br>"
                    ).start()
       
                }}
            />

        </div>
    )
}   
