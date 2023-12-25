import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ThemeProvider from '@/providers/themeProvider'
import AuthProvider from '@/providers/authProvider'


export const metadata: Metadata = {
  title: 'SakaryaKent-Fm',
  description: 'Sakarya Kent Fm 87.5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ThemeProvider>
            <div className={`2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-2xl sm:max-w-xl m-auto  max-sm:px-5 px-6 font-poppins`}>
              <Navbar />
              <main>
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
