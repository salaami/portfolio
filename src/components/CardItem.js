import React from 'react'
import './CardItem.css'


var CardItem = (props) => {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={props.imageUrl} alt='' />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h4>{props.title}</h4>
                </div>
                <div className="card-body">
                    <p>{props.body}</p>
                </div>
            </div>
        
        </div>
    )
}

export default CardItem
