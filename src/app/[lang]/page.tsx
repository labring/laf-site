import { Inter } from 'next/font/google'
import Navbar from './navbar'
import Hero from './hero'
import Ability from './ability'
import Choice from './choice'
import Footer from './footer'
import JoinUs from './joinus'
import Contact from './contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="flex flex-col lg:max-w-[1200px] lg:mx-[48px]">
          <Hero />
          <Ability />
          <Choice />
          <JoinUs />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  )
}
