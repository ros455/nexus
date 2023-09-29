import './globals.css'
import { Inter } from 'next/font/google'
import '../style/style-null.css';
import Header from '@/compomemts/Header';
import Footer from '@/compomemts/Footer';
import VisibleArrowUp from '@/compomemts/ArrowUp/VisibleArrowUp';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nexus Lab',
  description: 'Nexus lab Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        {/* <VisibleArrowUp/> */}
        <Footer/>
        </body>
    </html>
  )
}
