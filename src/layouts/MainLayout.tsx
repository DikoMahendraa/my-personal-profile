'use client'

import ScrollProgress from '@/components/ScrollProgress'
import { useScroll, useSpring, motion } from 'framer-motion'

type P = {
  className?: string
}

export const MainLayout = (props: React.PropsWithChildren<P>) => {
  const styles = ['layout min-h-[100vh]', props.className].join(' ')
  const { scrollYProgress } = useScroll()

  // Smooth spring animation for scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px] opacity-10 pointer-events-none" />
      <ScrollProgress scaleX={scaleX} />
      {props.children}
    </motion.main>
  )
}
