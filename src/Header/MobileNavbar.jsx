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
      <AnimatePresence>
        {open && (
          <motion.aside
            animate={{
              width: "100vw"
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
              className="nav-container"
              initial="closed"
              animate="open"
              variants={sideVariants}
            >
              {NavData.map(({ Text, Id, Route }) => (
                <motion.a
                  key={Id}
                  href={Route}
                  variants={itemVariants}
                >{Text}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="btn-container">
        <button
          onClick={cycleOpen}
        >{open ? "close" : "open"}
        </button>
      </div>
    </div>
  )
}
