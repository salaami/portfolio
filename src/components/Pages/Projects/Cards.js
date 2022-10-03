import { React } from 'react'
import { CardsData } from './CardsData'
import './Cards.css'

export default function Cards( Title, Text, Link, Framework ) {
    return (
            <div className="card-container">
                
            {CardsData.map((item) => {
                return (
                    <li className="card">
                        <a className="link" href={ item.Link }>
                            <div className="card-header">{ item.Title }</div>
                                <p className="card-text">{ item.Text }</p>
                                <div className="framework">{ item.Framework }</div>
                        </a>
                    </li>
                )
            })}
        </div>
    )
}
