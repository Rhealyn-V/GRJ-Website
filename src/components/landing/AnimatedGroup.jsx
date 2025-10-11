import React from "react"
import { motion } from "motion/react"
import clsx from "clsx"

const presets = {
  slide: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring", stiffness: 100, damping: 18 },
  },
  blur: {
    initial: { opacity: 0, filter: "blur(8px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  "blur-slide": {
    initial: { opacity: 0, y: 24, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
}

export function AnimatedGroup({
  children,
  preset = "slide",
  className,
  delay = 0,
  ...props
}) {
  const animation = presets[preset] || presets.slide

  return (
    <motion.div
      initial={animation.initial}
      whileInView={animation.animate}
      transition={{ ...animation.transition, delay }}
      viewport={{ once: false, margin: "-50px" }}
      className={clsx(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
