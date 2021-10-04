import React from 'react'
import './CardItem.css'
import { Link } from 'react-router-dom'

var CardItem = (props) => {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={props.imageUrl} alt='' />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{props.title}</h3>
                </div>
                <div className="card-body">
                    <p>{props.body}</p>
                </div>
            </div>
        
        </div>
    )
}

export default CardItem
