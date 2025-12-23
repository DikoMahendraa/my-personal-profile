'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { frontendTools } from '@/constants/assistant'

export default function CardAssistant() {
  return (
    <div className="grid gap-8 mt-6">
      {frontendTools.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: index * 0.1 }}
          className="comic-panel comic-hover p-5"
        >
          {/* 🏷 SECTION TITLE */}
          <p className="text-lg font-extrabold tracking-wide mb-4 text-black">
            {item.title}
          </p>

          {/* 🧩 GRID TOOLS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {item.tools?.map((tool) => (
              <Link
                key={tool.name}
                href={tool.url}
                target="_blank"
                className="comic-chip"
              >
                {tool.name}
              </Link>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
