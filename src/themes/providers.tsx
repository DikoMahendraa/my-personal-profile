'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode | React.ReactElement
}>) {
  return (
    <ThemeProvider defaultTheme="light" forcedTheme="light" attribute="class">
      {children}
    </ThemeProvider>
  )
}
