import React from 'react'
import './Image.css'

var Image = (props) => {
    return(
            <img className="image" src={props.src} alt={props.description}></img>
    )
}

export default Image;