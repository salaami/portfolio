import React from 'react'
import './TextSection.css'

var TextSection= (props) => {
    return(
        <p className="content">{props.content}</p> 
    )
}

export default TextSection;