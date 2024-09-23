import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import LogoSlider from './components/LogoSlider'
import Work from './components/Work'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'
import './App.css'

const App = () => {
  return (
    <div className='bg-[#f0ded0] min-h-screen min-w-screen'>
      <Navbar />
      <About />
      <LogoSlider />
      <Work />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
