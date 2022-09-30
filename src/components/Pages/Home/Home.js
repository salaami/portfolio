import React from 'react' 
import './Home.css'
import { useSpring, animated } from 'react-spring'
import Socialbar from '../../SocialBar/SocialBar'
import Navbar from '../../Menu/Navbar'
import HomeText from './HomeText'


export default function Home() {
    const expands = useSpring({
        from: {
            clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)',
            opacity: 0
        },
        to: {
            clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
            opacity: 1
        }
    });

    return(
        <div className="home-container">
            <div className="home-sidebar-left">
                <Navbar />
            </div>
            <animated.div className="home-content" style={expands}>
                <HomeText />
            </animated.div>
            <div className="home-sidebar-right">
                <Socialbar />
            </div>
        </div>
    )
}

