import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ThemeProvider from '@/providers/themeProvider'


export const metadata: Metadata = {
  title: 'Arlan-Blog',
  description: 'Arlan Medya blog app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className={`2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-2xl sm:max-w-xl m-auto  max-sm:px-5 px-6 font-poppins`}>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
