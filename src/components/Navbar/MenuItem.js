import React from 'react'
import { MenuItemData } from './MenuItemData'
import { motion } from "framer-motion";

export default function MenuItem( url, label ) {
    return (
        <div>
            {MenuItemData.map((item) => {
                return (
                    <motion.li 
                        className="menu-list-item"
                        whileHover={{ scale: 0.9 }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 100
                        }}
                    >
                        <a href={ item.url }>{ item.label }</a>
                    </motion.li>
                )
            })}           
        </div>
    )
}
