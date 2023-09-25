import React from 'react'
import Navbar from "../NavBar/Navbar"
import HeroSlider from '../HeroSlider/Hero'
import About from '../About/About'
import Reason from '../Reason/Reason'
import "./Home.css"
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Map from "../Map/Map"
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='container-home'>
      <HeroSlider />
      <About />
      <Reason />
      <Map />
      <Contact />
      <Footer />
      </div>
    </div>
  )
}

export default Home