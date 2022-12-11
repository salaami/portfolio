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
                viewBox="0 0 5000 2000" 
            >
                <motion.path
                    variants={outlineVariants}
                    fill="none"
                    d="M 3900 1900 L 0 1900 L 0 0 L 3900 0 Z"
                />
            </motion.svg>
        </motion.div>
    </div>
    );
}
