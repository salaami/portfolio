import React from 'react' 
import LayoutBlack from '../../Layout/LayoutBlack'
import HomeText from './HomeText'
import { useSpring, animated } from 'react-spring'


export default function Home() {

    
    return (
            <LayoutBlack content={<HomeText />} />
    )
}

