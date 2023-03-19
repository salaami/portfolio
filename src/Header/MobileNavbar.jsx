import './MobileNavbar.css'
import './NavData'
import { motion, useCycle, AnimatePresence } from "framer-motion"
import { NavData } from './NavData'

const sideVariants = {
  close: {
    transition: {
      staggeredChildren: 0.2,
      staggeredDirection: -1
    }
  },
  open: {
    transition: {
      staggeredChildren: 0.2,
      staggeredDirection: 1
    }
  },
}

const itemVariants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  }
}


export default function MobileNavbar() {
  const [open, cycleOpen] = useCycle(false, true)

  return (
    <div>
      <div className="btn-container">
        <button
          onClick={cycleOpen}
        >{open ? "Close" : "Open"}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{
              width: 0,
              height: 0,
            }}
            animate={{
              width: "100vw",
              height: "100vh",
              right: 0,
              top: 0,
            }}
            exit={{
              width: 0,
              transition: {
                delay: 0.4,
                type: "tween",
                duration: 0.3,
              }
            }}
          >
            <motion.div
              className="container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {NavData.map(({ Text, Id, Route }) => (
                <motion.a
                  key={Id}
                  href={Route}
                  variants={itemVariants}
                  whileHover={{ scale: 0.95 }}
                >
                  {Text}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  )
}
