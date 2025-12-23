import { motion } from 'framer-motion'
import type { MotionValue } from 'framer-motion'

interface ScrollProgressProps {
  scaleX: MotionValue<number>
}

export default function ScrollProgress({ scaleX }: ScrollProgressProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left z-50"
      style={{ scaleX }}
    />
  )
}
