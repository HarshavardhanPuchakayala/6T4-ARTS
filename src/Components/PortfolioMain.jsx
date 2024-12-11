import React from 'react'
import About from '../Components/About'
import Projects from './Projects'
import Footer from '../Components/Footer'
import Contact from './Contact'
export default function PortfolioMain() {
  return (
    <>
   <main className='main'>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
   </main>
    </>
  )
}
