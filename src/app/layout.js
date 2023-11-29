"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import ViewProvider from '@/providers/viewProvider'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ViewProvider>
          {children}
        </ViewProvider>
      </body>
    </html>
  )
}
