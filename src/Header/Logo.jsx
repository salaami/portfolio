import { motion } from "framer-motion"

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <motion.path
        d="M20,20 C40,0 60,100 80,80"
        variants={icon}
        initial="hidden"
        animate="visible"
        stroke="black"
        strokeWidth="2"
        fill="transparent"
      />
    </svg>
  );
}

