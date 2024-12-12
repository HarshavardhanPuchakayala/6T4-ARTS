import React from 'react'
import Header from './Header'
import About from '../Components/About'
import Projects from './Projects'
import Footer from '../Components/Footer'
import Contact from './Contact'
export default function PortfolioMain() {
  return (
    <>
   <main className='main'>
    <Header/>
    <Projects/> 
    <About/>
    <Contact/>
    <Footer/>
   </main>
    </>
  )
}
