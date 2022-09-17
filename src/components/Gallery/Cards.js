import React from 'react'
import { CardsData } from './CardsData'
import './Cards.css'

export default function Cards( Title, Text, Link, Framework ) {
    return (
            <div className="card-container">
                
            {CardsData.map((item) => {
                return (
                    <div className="card">
                        <a href={ item.Link } className="link">
                            <div className="card-header">{ item.Title }</div>
                            <p className="card-text">{ item.Text }</p>
                            <div className="framework">{ item.Framework }</div>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}
