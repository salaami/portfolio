import './MobileNavbar.css'
import {
  motion,
  useCycle,
  AnimatePresence
} from "framer-motion"
import { Link } from 'react-router-dom'
import { NavbarData } from './NavbarData'

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1
    }
  },
}

const itemVariants = {
  open: {
    opacity: 1,
    scale: 1,
  },
  closed: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.1
    }
  }
}

const Path = props => (
  <motion.path
    strokeWidth="0.15rem"
    stroke="var(--highlight-2)"
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
              open: { d: "M 2.5 19 L 19 2.5" },
              transition: {
                type: 'tween',
                ease: 'easeInOut'
              }
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
              width: "100vw",
              height: 0,
            }}
            animate={{
              width: "100vw",
              height: "100vh",
            }}
            exit={{
              height: 0,
              transition: {
                delay: 0.2,
                type: "tween",
                ease: 'easeInOut',
                duration: 0.2,
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
              {NavbarData.map(({ Text, Id, Route }) => (
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
                   0{Id}|{Text}
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
