import React from "react";
import "./Navbar.css";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { menuItemData } from "./MenuItemData";

const itemVariants = {
    closed: {
        opacity: 0
    },
    open: { 
        opacity: 0.95 
    }
};

const childVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1
      }
    }
  };

const easeVariants = {
    closed: {
        opacity: 0,
        x: -100,
    },
    open: {
        opacity: 0.95,
        x: 0,
    },
    exit:{
        opacity: 0,
        x: -100,
        transition: { 
            delay: 0.7, 
            duration: 0.3 
        }
    }
};



export default function Navbar() {
  const [open, cycleOpen] = useCycle(false, true);
  return (
    <div className="nav-container">
        <motion.button 
            className="nav-button"
            onClick={cycleOpen}
            whileHover={{
                backGround: "#010440",
                scale: 1.1,
            }}
        >
            { open ? "close" : "menu" }
        </motion.button>
        <AnimatePresence>
        {open && (
        <motion.div
            className="navbar-menu"
            variants={easeVariants}
            initial="closed" 
            animate="open"
            exit="exit"
        >
            <motion.div
                className="nav-item"
                initial="closed"
                animate="open"
                exit="closed"
                variants={childVariants}
                >
            {menuItemData.map(({ label, url, id }) => (
                <motion.a
                    className="nav-link"
                    key={id}
                    href={url}
                    whileHover={{ 
                        scale: 0.95                    }}
                    variants={itemVariants}
                >
                {label}
                </motion.a>
            ))}
            </motion.div>
        </motion.div>
        )}
        </AnimatePresence>
    </div>
  );
}
