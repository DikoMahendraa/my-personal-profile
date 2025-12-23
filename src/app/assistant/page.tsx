import CardAssistant from '@/components/CardAssistant'
import { metadataAssistantPage } from '@/constants/seo'
import { MainLayout } from '@/layouts/MainLayout'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  ...metadataAssistantPage,
}

const AssistantPage = () => {
  return (
    <MainLayout className="layout min-h-[100vh]">
      {/* ===================== */}
      {/* 📰 COMIC PAGE HEADER */}
      {/* ===================== */}
      <div className="comic-panel comic-halftone my-6 p-6">
        <p className="text-2xl text-black font-extrabold tracking-wide">
          🤖 TOOLS & ASSISTANTS
        </p>
        <p className="mt-2 text-sm font-semibold text-black">
          Tools and all the sources that I use
        </p>
      </div>

      {/* ===================== */}
      {/* 📦 COMIC CONTENT */}
      {/* ===================== */}
      <div className="comic-panel comic-hover p-4">
        <CardAssistant />
      </div>
    </MainLayout>
  )
}

export default AssistantPage
