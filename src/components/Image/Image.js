import React from 'react'
import './Image.css'

var Image = (props) => {
    return(
            <img className="image" src={props.src}></img>
    )
}

export default Image;