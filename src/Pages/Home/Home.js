import React from 'react' 
import './Home.css'
import AnimateMain from "../../components/Animations/AnimateMain"

export default function Home() {
    return(
        <AnimateMain>
            <main>
                <div className="home-content" >
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
            </main>
        </AnimateMain>
    )
}

