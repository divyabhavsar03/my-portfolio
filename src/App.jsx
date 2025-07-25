import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Education from './Components/Education/Education'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Education/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App