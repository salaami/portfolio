import React from 'react' 
import './Home.css'
import { useSpring, animated } from 'react-spring'
import Socialbar from '../../SocialBar/SocialBar'
import Navbar from '../../Navbar/Navbar'
import HomeText from './HomeText'


export default function Home() {
    const expands = useSpring({
        from: {
            clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)',
            opacity: 0,
        },
        to: {
            clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
            opacity: 1,
        }
    });

    return(
        <>
            <header></header>
            <body>
                <div className="sidebar-left">
                    <Navbar />
                </div>
                <animated.div className="home-content" style={expands}>
                    <HomeText />
                </animated.div>
                <div className="sidebar-right">
                    <Socialbar />
                </div>
            </body>
            <footer></footer>
        </>
    )
}

