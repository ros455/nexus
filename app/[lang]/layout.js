// import './globals.css'
import { Inter } from 'next/font/google'
import '../../style/style-null.css';
import Header from '@/compomemts/Header';
import Footer from '@/compomemts/Footer';
import { Locale, i18n } from '@/i18n.config'
import VisibleArrowUp from '@/compomemts/ArrowUp/VisibleArrowUp';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nexus Lab',
  description: 'Nexus lab Developer',
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({children,params}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Header lang={params.lang}/>
        {children}
        <VisibleArrowUp/>
        <Footer lang={params.lang}/>
        </body>
    </html>
  )
}
