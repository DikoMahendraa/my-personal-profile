import React from 'react'
import { MessageSquareWarning } from 'lucide-react'
import { Metadata } from 'next'
import ContentPortofolio from './(fragments)/Content'
import { metadataPortofolioPage } from '@/constants/seo'
import { MainLayout } from '@/layouts/MainLayout'

export const metadata: Metadata = {
  ...metadataPortofolioPage,
}

const PortofolioPage = () => {
  return (
    <MainLayout className="min-h-[100vh] layout">
      {/* Comic Warning Panel */}
      <div
        className="
          relative
          mt-10 mb-6
          bg-yellow-200
          comic-border
          comic-shadow
          rounded-xl
          p-5
          flex
          gap-4
          items-start
        "
      >
        {/* Label */}
        <span className="comic-label bg-red-600 text-white">
          WARNING!
        </span>

        {/* Halftone */}
        <div className="absolute inset-0 comic-halftone pointer-events-none rounded-xl" />

        <MessageSquareWarning
          size={32}
          className="text-black hidden lg:block"
        />

        <p className="relative z-10 text-black text-sm lg:text-base font-semibold italic">
          <b>Heads up:</b> Some projects may no longer be available due to
          missing documentation, privacy restrictions, or services that are
          no longer running.
        </p>
      </div>

      <ContentPortofolio />
    </MainLayout>
  )
}

export default PortofolioPage
