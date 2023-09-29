import './globals.css'
import { Inter } from 'next/font/google'
import '../style/style-null.css';
import Header from '@/compomemts/Header';
import Footer from '@/compomemts/Footer';
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
        <Footer/>
        </body>
    </html>
  )
}
