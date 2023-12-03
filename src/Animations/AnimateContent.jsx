import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
    }
  },
};

export default function AnimateContent({ children }) {
  const elementRef = useRef(null);
  const controls = useAnimation();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    const handleScroll = async () => {
      if (!animated && element) {
        const { top, bottom } = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight && bottom >= 0) {
          await controls.start("visible");
          setAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, animated]);

  return (
    <motion.div
      ref={elementRef}
      initial="hidden"
      animate={controls}
      variants={fadeIn}
    >
      {children}
    </motion.div>
  );
}

