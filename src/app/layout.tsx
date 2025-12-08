import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EcoMindStore',
  description: 'EcoMindStore offers personalized mental health and sustainability products that cater to individuals looking for eco-friendly solutions while managing their well-being. The platform uses AI to suggest items based on user behavior, ensuring a unique and beneficial experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
