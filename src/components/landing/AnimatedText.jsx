"use client"

import React from "react"
import { motion } from "motion/react"
import clsx from "clsx"

export function AnimatedText({
  as: Component = "p",
  children,
  delay = 0,
  className,
  preset = "blur-slide",
  ...props
}) {
  const variants = {
    slide: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
    },
    blur: {
      initial: { opacity: 0, filter: "blur(8px)" },
      animate: { opacity: 1, filter: "blur(0px)" },
    },
    "blur-slide": {
      initial: { opacity: 0, y: 24, filter: "blur(8px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    },
  }

  const variant = variants[preset] || variants["slide"]

  return (
    <motion.div
      initial={variant.initial}
      whileInView={variant.animate}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 18,
        delay,
      }}
      viewport={{ once: false }}
    >
      <Component className={clsx(className)} {...props}>
        {children}
      </Component>
    </motion.div>
  )
}
