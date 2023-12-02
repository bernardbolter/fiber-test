"use client"

import { Inter } from 'next/font/google'
import './globals.css'
// import ViewProvider from '@/providers/viewProvider'
import ARProvider from '@/providers/arProvider'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ARProvider>
          {children}
        </ARProvider>
      </body>
    </html>
  )
}
