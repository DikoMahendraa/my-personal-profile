'use client'

import React, { memo, useCallback } from 'react'
import { FileDown } from 'lucide-react'

const ButtonDownload = ({ text }: Readonly<{ text: string }>) => {
  const handleDownload = useCallback(() => {
    const link = document.createElement('a')
    link.href = '/docs/diko-en.pdf'
    link.download = 'resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  return (
    <button
      onClick={handleDownload}
      className="comic-button bg-cyan-400 lg:text-sm text-xs text-black hover:bg-cyan-300"
    >
      <FileDown size={16} />
      {text}
    </button>
  )
}

export default memo(ButtonDownload)
