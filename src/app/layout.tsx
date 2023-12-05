import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { AppContextProvider } from '@/context/AppContext'
import Footer from '@/components/Layout/Footer'
import { Header } from '@/components/Layout/Header'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800',  '900']})

export const metadata: Metadata = {
  title: 'Dash Sphere',
  description: 'Transformando dados em decisões',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className} antialiased`}>
        <AppContextProvider>
          <Header />
            {children}
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  )
}
