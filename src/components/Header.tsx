'use client'

import { Home, Blocks, Bot } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { memo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const navbar = [
  { href: '/', icon: <Home />, name: 'Profile' },
  { href: '/portofolio', icon: <Blocks />, name: 'Portofolio' },
  { href: '/assistant', icon: <Bot />, name: 'Assistant' },
]

const HeaderItem: React.FC<{ pathname: string }> = ({ pathname }) => {
  return navbar.map((item) => {
    const isActive = pathname === item.href

    return (
      <div key={item.name} className="py-2 mr-6 hidden lg:block">
        <Link
          href={item.href}
          className={`
            relative
            px-4 py-2
            border-[3px] border-black
            rounded-md
            font-extrabold
            transition
            shadow-[3px_3px_0_0_#000]
            hover:translate-x-1 hover:translate-y-1 hover:shadow-none
            ${isActive ? 'bg-yellow-300 text-black' : 'bg-white text-black'}
          `}
        >
          {item.name}

          {isActive && (
            <motion.span
              layoutId="navbar-desktop"
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-xs font-extrabold"
              transition={{ type: 'spring', stiffness: 300 }}
            >
              ▲
            </motion.span>
          )}
        </Link>
      </div>
    )
  })
}

const Header = () => {
  const pathname = usePathname()

  return (
    <nav
      className="
        sticky top-0 z-20
        bg-white
        border-b-[4px] border-black
        shadow-[0_6px_0_0_#000]
      "
    >
      {/* Halftone */}
      <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.05] pointer-events-none" />

      <div className="layout relative flex items-center justify-end py-4">
        <HeaderItem pathname={pathname} />

        {/* Mobile Comic Bottom Nav */}
        <div
          className="
            lg:hidden
            fixed bottom-0 left-0 w-full
            bg-white
            border-t-[4px] border-black
            shadow-[0_-6px_0_0_#000]
            py-3
          "
        >
          <div className="flex justify-center gap-12">
            {navbar.map((item) => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex flex-col items-center text-xs font-extrabold
                    transition
                    ${isActive ? 'text-black' : 'text-black'}
                  `}
                >
                  <span
                    className={`
                      p-2 rounded-md border-[3px] border-black
                      shadow-[2px_2px_0_0_#000]
                      ${isActive ? 'bg-yellow-300' : 'bg-white'}
                    `}
                  >
                    {item.icon}
                  </span>
                  <span className="mt-1">{item.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default memo(Header)
