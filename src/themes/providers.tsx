'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode | React.ReactElement
}>) {
  return (
    <ThemeProvider defaultTheme="dark" forcedTheme="dark" attribute="class">
      {children}
    </ThemeProvider>
  )
}
