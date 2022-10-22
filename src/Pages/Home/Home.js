import React from 'react' 
import './Home.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Home() {
    return(
        <div className="container">
            <Header />
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
            <Footer />
        </div>
    )
}

