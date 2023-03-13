import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Navbar from '@/components/navbar'
import Banner from '@/components/banner'
import Homecards from '@/components/homecards'
import Hero from '@/components/hero'
import Wecan from '@/components/wecan'
import Choose from '@/components/choose'
import Joinus from '@/components/joinus'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
    <Hero/>
    <Wecan/>
    <Choose/>
    <Joinus/>
  </>   
  )
}
