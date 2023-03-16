import { motion } from "framer-motion"
import { MenuItem } from "./MenuItem"
import { NavData } from "./NavData"

const variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

export default function Navigation() {
  <motion.ul variants={variants}>
    {NavData.map(({ Route, Id, Text }) => (
      <a
        key={Id}
        href={Route}
      >
        <MenuItem
          id={Id}
          text={Text}
        />
      </a>
    ))}
  </motion.ul>
}
