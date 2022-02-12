import React from 'react'
import CardItem from '../components/CardItem'

var Projects = () => {
    return (
        <div className='pages'>
            <CardItem 
                title='Web Development'
                imageUrl='/assets/images/logo192.png'
                body="This website is my first shot in web development.It's acutally a react.js application. Check out the whole project on my Github."
                linkPath='https://github.com/salaami/portfolio'
            />
        </div>
    )
}

export default Projects
