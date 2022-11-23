import { motion } from "framer-motion"
import './ButtonHover.css'

const outlineVariants = {
  default: {
    strokeWidth: 0,
    pathLength: 0,
    stroke: "grey",
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: {
    strokeWidth: "5rem",
    pathLength: 1,
    stroke: "#F20505",
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const textVariants = {
  default: {
    color: "#A60321",
    x: 0
  },
  hover: {
    color: "#05F2DB",
    x: "1.5rem",
    transition: {
      duration: 0.1
    }
  }
};

export default function HoverButton({Text}) {
    return (
    <div>
        <motion.div
            whileHover="hover"
            initial="default"
            animate="default"
            className="hoverButton"
        >
            <motion.p 
                variants={textVariants} 
                className="hoverButtonText"
            >{ Text }
            </motion.p>
            <motion.svg 
                viewBox="0 0 1500 1100" 
            >
                <motion.path
                    variants={outlineVariants}
                    fill="none"
                    d="M 0, 0 H 1500 V 1100 H 0 Z"
                />
            </motion.svg>
        </motion.div>
    </div>
    );
}
