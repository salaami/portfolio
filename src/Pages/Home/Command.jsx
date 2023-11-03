
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import Cursor from './Cursor.jsx'


export default function Command() {
  const [done, setDone] = useState(false);
  const baseText = "whoami";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 1,
      ease: "easeInOut",
      onComplete: () => {
        setDone(true);
      }
    })
    return controls.stop
  }, [])

  return (
    <span className="cursor-container">
      <motion.span>{displayText}</motion.span>
      {done && (
        <>
          <br /> <br />
        </>
      )}
      <Cursor />
    </span>
  )
}
