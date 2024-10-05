import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'AiGree',
  description: 'A solution every body agrees',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth scroll-pt-[100px] ${poppins.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden custom-scrollbar antialiased flex justify-center">
        <div className="w-full max-w-[402px] min-h-screen shadow-custom">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
