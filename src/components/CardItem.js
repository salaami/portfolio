import React from 'react'
import { Link } from 'react-router-dom'

var CardItem = (props) => {
    return (
        <>
            <div className="cards_item">
                <a className="cards__item__shadow" href={props.path}>
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img 
                            src={props.src} 
                            alt="Project Image"     
                            className="cards_item_img" 
                        />
                    </figure>
                    <div className="cards__item__info   ">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </a>
            </div>
          
        </>
    )
}

export default CardItem
