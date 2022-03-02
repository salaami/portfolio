import React from 'react' 
import Layout from '../components/Layout/Layout'
import Image from '../components/Image/Image'
import Me from '../assets/pictures/selfie.jpg'
import TextSection from '../components/TextSection/TextSection'

var Home = () =>{
    return (
        <Layout contentLeft={<Image src={Me}/>} contentRight={<TextSection content="Hi, my name is Salem.I'm a data engineer based in Hamburg." />} />
    )
}

export default Home
