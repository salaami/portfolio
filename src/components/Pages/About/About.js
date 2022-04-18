import React from 'react' 
import SplitLayoutYellow from '../../Layout/SplitLayoutYellow'
import AboutText from '../About/AboutText'
import Image from '../../Image/Image'
import Me from '../../../assets/pictures/selfie.jpg'
import './About.css'

var About = () =>{
    return (
        <div className="pages">
            <SplitLayoutYellow contentLeft={<Image src={Me}/>} contentRight={<AboutText />}/>
        </div>
    )
}

export default About;
