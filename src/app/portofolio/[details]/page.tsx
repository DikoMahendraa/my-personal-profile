'use client'

import { MainLayout } from '@/layouts/MainLayout'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { motion } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { detailPortofolio } from '../(fragments)/Content'

const PortfolioDetailPage = () => {
  const pathname = usePathname()
  const lastPathname = pathname.split('/').pop() as string
  const _detailPortofolio = useAtomValue(detailPortofolio)
  const isDesktop = _detailPortofolio.layout_type?.includes('desktop')

  const onViewDetails = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <MainLayout className="layout">
      {/* ⬅️ BACK */}
      <Link
        href="/portofolio"
        className="inline-flex items-center gap-2 mt-12 comic-chip mb-6 w-fit"
      >
        <ArrowLeft size={16} />
        Back to Portfolio
      </Link>

      {/* 🏷 TITLE */}
      <div className="comic-panel p-6 mb-8">
        <p className="lg:text-3xl text-2xl font-extrabold uppercase tracking-wide text-gray-800 dark:text-white">
          {lastPathname.split('-').join(' ')}
        </p>
      </div>

      {/* 🖼️ SCREENSHOTS */}
      <div
        className={`grid gap-6 ${
          !isDesktop ? 'lg:grid-cols-2 grid-cols-1' : 'grid-cols-1'
        }`}
      >
        {[...Array(_detailPortofolio.assets)].map((_, index) => {
          const imageSrc = `/portofolio/${_detailPortofolio.type}/${lastPathname}/${index + 1}.png`

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="comic-panel overflow-hidden"
            >
              <Image
                draggable={false}
                src={imageSrc}
                alt={`portfolio-image-${lastPathname}-${index}`}
                priority
                width={1920}
                height={1080}
                className="bg-white"
              />
            </motion.div>
          )
        })}
      </div>

      {/* 📘 DETAILS */}
      <div className="mt-10 space-y-8">
        {/* ABOUT */}
        <section className="comic-panel p-6">
          <p className="comic-title">About the Application</p>
          <div
            className="text-sm lg:text-base text-gray-600 dark:text-gray-300"
            dangerouslySetInnerHTML={{
              __html: _detailPortofolio.about as TrustedHTML,
            }}
          />

          <button
            onClick={
              _detailPortofolio.available
                ? () => onViewDetails(_detailPortofolio.link)
                : () => ({})
            }
            disabled={!_detailPortofolio.available}
            className={`comic-button mt-6 ${
              !_detailPortofolio.available && 'opacity-50 cursor-not-allowed'
            }`}
          >
            <ExternalLink size={16} />
            Visit Site
          </button>
        </section>

        {/* WORK DONE */}
        <section className="comic-panel p-6">
          <p className="comic-title">What I Worked On</p>
          <div className="grid sm:grid-cols-2 gap-3 mt-4">
            {_detailPortofolio?.todo?.map((item) => (
              <div key={item} className="comic-chip text-left">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section className="comic-panel p-6">
          <p className="comic-title">Technology Used</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {_detailPortofolio?.tech?.map((item) => (
              <span key={item} className="comic-chip capitalize">
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  )
}

export default PortfolioDetailPage
