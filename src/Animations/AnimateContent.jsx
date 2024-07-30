import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import './AnimateContent.css'; // Import the CSS file

interface Props {
  children: JSX.Element;
}

export const AnimateContent = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div
      ref={ref}
      className="animate-content-container"
    >
      <motion.div
        className="animate-content-motion"
        variants={{
          hidden: { opacity: 0, y: 55 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
