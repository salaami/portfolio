import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
 

var Cards = () => {
    return (
        <div className='cards'>
            <h1>Projects</h1>
            <div className="cards__container">
                <ul className="cards__items">
                    <CardItem 
                        src='/assets/images/logo192.png'
                        text="My personal website is a react.js application."
                        label='website'
                        path='https://github.com/salaami/portfolio'
                    />
                </ul>
    
            </div>
            
        </div>
    )
}

export default Cards
