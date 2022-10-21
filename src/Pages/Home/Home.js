import React from 'react' 
import './Home.css'
import Header from '../../components/Header/Header'
import HomeText from './HomeText'
import Footer from '../../components/Footer/Footer'

export default function Home() {
    return(
        <div className="container">
            <Header />
            <main>
                <div className="home-content" >
                    <HomeText />
                </div>
            </main>
            <Footer />
        </div>
    )
}

