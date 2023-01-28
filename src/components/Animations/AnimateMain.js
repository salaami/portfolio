import { motion } from 'framer-motion'

const transitions = {
    inital: {
        opacity: 0,
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}

const AnimateMain = ({ children }) => {
    return (
        <motion.div
            variants={transitions}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
                duration: 3 
            }}
        >
            {children}
        </motion.div>
    )
}
export default AnimateMain
