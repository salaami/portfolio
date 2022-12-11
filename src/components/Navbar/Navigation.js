import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { menuItemData } from "./MenuItemData";

const variants = {
    open: {
        transition: { 
            staggerChildren: 0.07, 
            delayChildren: 0.2 
        }
    },
    closed: {
        transition: { 
            staggerChildren: 0.05, 
            staggerDirection: -1 
        }
    }
};

export const Navigation = () => (
  <div>
  {menuItemData.map(({ label, url, id }) => (
    <motion.a variants={variants}
      className="nav-link"
      key={id}
      href={url}
      whileHover={{ 
        scale: 0.95                    
      }}
    >
    </motion.a>
))}
  </div>
);