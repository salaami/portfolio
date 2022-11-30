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

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

export default function Navbar() {
    const [open, cycleOpen] = useCycle(false, true);
    return (
        <div>
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
            <motion.button 
                className="nav-btn"
                onClick={cycleOpen}
                whileHover={{
                    scale: 0.9,
                }}
            >
            { open ? (
                <svg
                    viewBox="0 0 100 100"
                    width="40"
                    height="40"
                    className="icon"
                >
                    <motion.line
                        x1="0"
                        y1="0" 
                        x2="100" 
                        y2="100"
                        variants={draw}
                    />
                    <motion.line
                        x1="0"
                        y1="100" 
                        x2="100" 
                        y2="0"
                        variants={draw}
                    />
                </svg>  
            ) : (
                <svg
                    viewBox="0 0 100 100"                    
                    width="40"
                    height="40"
                    className="icon"
                >
                    <motion.line
                        x1="0"
                        y1="5" 
                        x2="100" 
                        y2="5"
                        variants={draw}
                    />
                    <motion.line
                        x1="0"
                        y1="50" 
                        x2="100" 
                        y2="50"
                        variants={draw}
                    />
                    <motion.line
                        x1="0"
                        y1="95" 
                        x2="100" 
                        y2="95"
                        variants={draw}
                    />
                </svg> 
            )}
            </motion.button> 
    </div>
  );
}
