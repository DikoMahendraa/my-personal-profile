'use client'

import CardPortofolio from '@/components/CardPortofolio'
import React, { useCallback, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { listFilterPortofolio, portofolio } from '@/constants/portofolio'
import Image from 'next/image'
import { ChevronDown, FolderGit2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

type TDetailPortofolio = (typeof portofolio)['personal'][0]

export const detailPortofolio = atomWithStorage<TDetailPortofolio>(
  'detail',
  {} as TDetailPortofolio
)

const Content = () => {
  const router = useRouter()
  const [, setDetailPortofolio] = useAtom(detailPortofolio)

  const [tab, setTab] = useState(portofolio.tab[0])
  const [filter, setFilter] = useState('')
  const [showFilter, setShowFilter] = useState(false)

  const listAllPortofolio = useMemo(
    () => portofolio.company.concat(portofolio.personal),
    []
  )

  const listPortofolio = useCallback(() => {
    switch (tab) {
      case portofolio.tab[1]:
        return portofolio.company
      case portofolio.tab[2]:
        return portofolio.personal
      default:
        return listAllPortofolio
    }
  }, [listAllPortofolio, tab])

  const listFilterByTech = useCallback(() => {
    if (!filter) return listPortofolio()

    return listPortofolio().filter((item) => {
      const techs = (item.tech as string[]).map((t) =>
        t.toLowerCase().replace('js', '').replace(/ /g, '')
      )
      return techs.includes(
        filter.toLowerCase().replace('js', '').replace(/ /g, '')
      )
    })
  }, [filter, listPortofolio])

  const onPreviewDetail = useCallback(
    (item: TDetailPortofolio) => {
      router.push(`/portofolio/${item.name.toLowerCase().replace(/ /g, '-')}`)
      setDetailPortofolio(item)
    },
    [router, setDetailPortofolio]
  )

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* ===================== */}
      {/* 🧭 COMIC FILTER BAR */}
      {/* ===================== */}
      <div className="flex items-center justify-between py-6">
        {/* Tabs */}
        <div className="flex gap-3">
          {portofolio.tab.map((item) => {
            const active = tab === item
            return (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={`
                  px-4 py-2
                  comic-border
                  rounded-md
                  font-extrabold
                  text-sm capitalize
                  comic-hover
                  ${active ? 'bg-yellow-300' : 'bg-white'}
                `}
              >
                {item}
              </button>
            )
          })}
        </div>

        {/* Filter */}
        <div className="relative">
          <button
            onClick={() => setShowFilter((v) => !v)}
            className="comic-border comic-shadow-sm bg-white px-3 py-2 rounded-md flex items-center gap-2 font-extrabold text-sm"
          >
            FILTER
            <ChevronDown
              size={14}
              className={`transition ${showFilter ? 'rotate-180' : ''}`}
            />
          </button>

          {showFilter && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                absolute right-0 mt-3
                bg-white
                comic-border
                comic-shadow
                rounded-lg
                p-3
                w-[12rem]
                z-10
              "
            >
              {listFilterPortofolio.map((item) => (
                <li
                  key={item.name}
                  onClick={() => {
                    setFilter(item.name)
                    setShowFilter(false)
                  }}
                  className="
                    flex items-center gap-2
                    p-2 rounded-md
                    cursor-pointer
                    font-semibold text-sm
                    hover:bg-yellow-100
                  "
                >
                  <Image
                    src={item.icons}
                    alt={item.name}
                    width={16}
                    height={16}
                  />
                  {item.name.replace('js', '')}
                </li>
              ))}

              <button
                onClick={() => {
                  setFilter('')
                  setShowFilter(false)
                }}
                className="mt-2 w-full comic-border rounded-md py-1 text-xs font-extrabold bg-red-100"
              >
                RESET
              </button>
            </motion.ul>
          )}
        </div>
      </div>

      {/* ===================== */}
      {/* 📦 COMIC CARD GRID */}
      {/* ===================== */}
      <div className="grid grid-cols-2 gap-6 pb-16">
        {listFilterByTech().map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="col-span-2 lg:col-span-1"
          >
            <div className="comic-panel comic-halftone comic-hover">
              <CardPortofolio
                {...item}
                onPreview={() => onPreviewDetail(item as TDetailPortofolio)}
                labelDescription={portofolio.label_description}
                labelRole={portofolio.label_role}
                labelTech={portofolio.label_tech_used}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===================== */}
      {/* 📭 EMPTY STATE */}
      {/* ===================== */}
      {listFilterByTech().length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="comic-panel comic-halftone text-center py-10"
        >
          <FolderGit2 size={48} className="mx-auto mb-4" />
          <p className="font-extrabold text-sm">NO PORTFOLIO FOUND</p>
        </motion.div>
      )}
    </motion.section>
  )
}

export default Content
