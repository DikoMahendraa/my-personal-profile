'use client'

import { useTheme } from 'next-themes'
import { Moon, Home, Sun, Blocks, Bot, Notebook } from 'lucide-react'

import { usePathname } from 'next/navigation'
import { memo, useCallback, useMemo } from 'react'
import Link from 'next/link'

import { motion } from 'framer-motion'

const navbar = [
  {
    href: '/',
    icon: <Home />,
    name: 'Profile',
  },
  {
    icon: <Blocks />,
    href: '/portofolio',
    name: 'Portofolio',
  },
  {
    icon: <Bot />,
    href: '/assistant',
    name: 'Assistant',
  },
  {
    icon: <Notebook />,
    href: 'https://coco-blog.vercel.app/',
    name: 'Notes',
  },
]

const HeaderItem: React.FC<{ pathname: string }> = ({ pathname }) => {
  return navbar.map((item) => (
    <div key={item.name} className="py-4 mr-6 lg:block hidden">
      <Link
        href={item.href}
        target={item.name === 'Notes' ? '_blank' : ''}
        className={`relative dark:text-gray-400 dark:hover:text-cyan-600/80 ${item.name === 'Notes' ? 'hover:bg-cyan-500 bg-cyan-500/25 px-6 py-2 rounded-lg !text-white' : ''} ${pathname === item.href && 'dark:!text-cyan-300 font-semibold'}`}
      >
        {item.name}

        {pathname === item.href && (
          <motion.div
            className="absolute inset-x-0 h-px -bottom-1 from-primary-dark-soft bg-gradient-to-r dark:from-cyan-300/50 dark:bg-unset"
            layoutId="navbar-desktop"
            transition={{
              type: 'tween',
              duration: 0.25,
            }}
          />
        )}
      </Link>
    </div>
  ))
}

const Header = () => {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const switchDarkMode = useCallback(() => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }, [setTheme, theme])

  const iconMode = useMemo(
    () => (theme === 'light' ? <Moon /> : <Sun className="text-white" />),
    [theme]
  )

  return (
    <nav className="bg-white dark:bg-primary-dark sticky top-0 w-full z-10">
      <div className="layout flex items-center justify-between py-4">
        <div className="flex items-center">
          <HeaderItem pathname={pathname} />
          <div className="lg:hidden flex w-full fixed bottom-0 py-3 justify-center gap-12 rounded-t-lg border border-b-0 border-cyan-500 dark:bg-primary-dark bg-gray-200 left-0">
            {navbar?.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`relative flex items-center flex-col text-xs dark:text-gray-400 ${pathname === item.href && 'dark:text-cyan-300 text-cyan-500 font-semibold'}`}
                >
                  {item.icon}
                  <span className="mt-1">{item.name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex items-center space-x-2 ml-4">
            <button
              className="text-sm italic capitalize cursor-pointer"
              onClick={switchDarkMode}
            >
              {iconMode}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default memo(Header)
