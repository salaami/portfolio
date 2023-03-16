import './MobileNavbar.css'
import { useRef } from "react"
import { motion, useCycle } from "framer-motion"
import { MenuBtnToggle } from "./MenuBtnToggle"
import Navigation from "./Navigation"

const sidebar = {
  open: () => ({
    clipPath: `circle(${Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2)}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
}


export default function MobileNavbar() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)

  return (
    <motion.nav
      className="navi"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
    >
      <motion.div
        className="background"
        variants={sidebar}
      />
      <Navigation />
      <MenuBtnToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}
