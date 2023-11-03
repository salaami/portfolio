import { motion } from "framer-motion";
import './Cursor.css'

const cursorVariants = {
  blinking: {
    opacity: [0, 1, 1, 0],
    transition: {
      duration: 1,
      repeat: 1,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};

export default function Cursor() {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="cursor"
    >█
    </motion.div>
  );
}

