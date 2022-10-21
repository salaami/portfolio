import React from 'react'
import './HomeText.css'

export default function HomeText() {
    return (
        <div className="home-text">
            <div className="prompt">
                <div className="prompt-text">SALEM ~ HOME</div>
                <div className="triangle"/>
                    <div className="command">
                        WHOAMI
                    </div>
            </div>
            <div className="response">
                MY NAME IS SALEM.<br/>
                I AM A DATA ENGINEER <br/>
                FROM HAMBURG CITY.<br/>
            </div>
        </div>
    )
}   
