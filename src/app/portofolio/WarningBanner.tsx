'use client'

import { MessageSquareWarning } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/animations'

const WarningBanner = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="comic-panel p-4 gap-2 lg:mt-10 mt-4 mb-5 flex items-start bg-comic-yellow"
    >
      <MessageSquareWarning
        size={30}
        className="text-comic-black hidden lg:inline flex-shrink-0"
      />
      <p className="text-comic-black italic text-left font-bold">
        <span className="comic-text text-comic-red">WARNING:</span> Some
        projects may no longer be available due to several factors (missing
        documentation, privacy issues, project no longer running).
      </p>
    </motion.div>
  )
}

export default WarningBanner

