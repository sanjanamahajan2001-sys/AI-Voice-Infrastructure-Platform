import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Voice Platform | Infrastructure Dashboard',
  description: 'Enterprise AI Voice Agent Management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
