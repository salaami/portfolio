import { React } from 'react'
import { ListData } from './ListData'
import './List.css'
import { motion } from 'framer-motion'
import { HoverVariants } from '../../Animations/HoverVariants.jsx'


export default function List() {
    return (
        <div className="list-container">

            {ListData.map((item, index) => {
                return (
                    <motion.a
                        className="list-item"
                        key={index}
                        href={item.Link}
                        style={{ backgroundImage: item.Color }}
                        variants={ HoverVariants }
                        whileHover="hovered"
                    >
                        <h4 className="list-title">
                            0{item.Id}.{item.Title}
                        </h4>
                        <div className="list-body">
                            <p className="list-text">
                                {item.Text}
                            </p>
                            <p className="tags-container">
                                {item.Tags.map((Tags, Id) => (
                                        <span
                                            className="list-tags"
                                            key={Id}
                                        >
                                            {Tags}
                                        </span>
                                ))}
                            </p>
                        </div>
                    </motion.a>
                )
            })}
        </div>
    )
}
