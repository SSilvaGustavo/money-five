import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { AppContextProvider } from '@/context/AppContext'
import Footer from '@/components/Layout/Footer'
import { Header } from '@/components/Layout/Header'
import { SessionProvider } from '@/components/SessionProvider'
import { authOptions } from '@/utils/authOptions'
import { getServerSession } from 'next-auth'
import ClientProvider from '@/components/ClientProvider'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800',  '900']})

export const metadata: Metadata = {
  title: 'Dash Sphere',
  description: 'Transformando dados em decisões',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className} antialiased`}>
      <SessionProvider>
          <AppContextProvider>
            <Header />
              {children}
              <ClientProvider />
            <Footer />
          </AppContextProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
