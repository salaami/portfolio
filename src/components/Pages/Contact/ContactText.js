import React from 'react'
import './ContactText.css'
import Typewriter from 'typewriter-effect'

export default function ContactText() {
    return (
        <div className="contact-text">
            <Typewriter 
                options = {{
                    cursor: '█',
                    loop: true,
                    skipAddStyles: false
                }}
                onInit = {(typewriter) => {
                    typewriter.typeString(
                        "You have a question<br>"
                    ).pauseFor(
                        700
                    ).typeString(
                        "or just like to say hello?<br>"
                    ).pauseFor(
                        1000
                    ).typeString(
                        "Reach out to me via mail, LinkedIn or Xing.<br>"
                    ).pauseFor(
                        1000
                    ).typeString(
                        "I will get back to you as soon as I can."
                    ).start()
       
                }}
            />
        </div>
    )
}
