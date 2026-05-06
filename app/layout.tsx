import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Toaster } from '@/components/ui/toaster'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { MeshGradient } from '@/components/MeshGradient'

const inter = Inter({ subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Aaron Tumbs — Software Engineer',
  description: "Aaron Tumbs's portfolio — Full-Stack Developer & AI Builder",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${jetbrainsMono.variable}`}>
        <MeshGradient />
        <Header />
        <main className="relative overflow-x-hidden">
          {children}
          <Toaster />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
