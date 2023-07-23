import React from 'react'
import Navbar from "../components/Navbar"
import Bgimg from "../components/Bgimg"
import Skills from "../components/Skills"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Bgimg/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home

