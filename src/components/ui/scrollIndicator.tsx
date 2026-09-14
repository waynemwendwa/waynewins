"use client"

import { motion } from "framer-motion"
import { CircleArrowDown } from "lucide-react"
import React from "react"

const bounceAnimation = {
  animate: {
    y: [0, 10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

const ScrollDownIndicator: React.FC = () => {
  const handleClick = () => {
    const target = document.getElementById("about")
    target?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.div
      onClick={handleClick}
      className="absolute top-40 left-1/2 -translate-x-1/2 cursor-pointer text-primary"
      {...bounceAnimation}
    >
      <CircleArrowDown size={32} strokeWidth={2.5} />
    </motion.div>
  )
}

export default ScrollDownIndicator;
