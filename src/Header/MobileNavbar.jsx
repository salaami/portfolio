import './MobileNavbar.css'
import './NavData'
import {
  motion,
  useCycle,
  AnimatePresence
} from "framer-motion"
import { Link } from 'react-router-dom'
import { NavData } from './NavData'

const sideVariants = {
  closed: {
    transition: {
      staggeredChildren: 0.2,
      delayChildren: 0.2,
      staggeredDirection: -1
    }
  },
  open: {
    transition: {
      staggeredChildren: 0.2,
      delayChildren: 0.2,
      staggeredDirection: 1
    }
  },
}

const itemVariants = {
  open: {
    opacity: 1,
    x: 0
  },
  closed: {
    opacity: 0,
    x: 50
  }
}

const Path = props => (
  <motion.path
    strokeWidth="0.15rem"
    stroke="var(--lighter)"
    {...props}
  />
)

export default function MobileNavbar() {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <div>
      <button
        onClick={toggleOpen}
        className="btn-container"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
        >
          <Path
            variants={{
              closed: { d: "M 0 2 L 23 2" },
              open: { d: "M 2.5 19 L 19 2.5" }
            }}
            animate={isOpen ? "open" : "closed"}
          />
          <Path
            d="M 0 11.5 L 23 11.5"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
            animate={isOpen ? "open" : "closed"}
          />
          <Path
            variants={{
              closed: { d: "M 0 21 L 23 21" },
              open: { d: "M 2 2 L 19 19" }
            }}
            animate={isOpen ? "open" : "closed"}
          />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{
              width: 0,
              height: 0,
            }}
            animate={{
              width: "100vw",
              height: "100vh",
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
                <motion.div
                  key={Id}
                  variants={itemVariants}
                  whileHover={{ scale: 0.95 }}
                  className="nav-item"
                >
                  <Link
                    to={Route}
                    onClick={toggleOpen}
                  >
                    {Text}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  )
}
