import React from 'react'
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import TV from './Components/TV/TV'
import Partition from './Components/Partition/Partition'
import Download from './Components/Download/Download'
import Watch from './Components/Watch/Watch'
import Profiles from './Components/Profiles/Profiles'
import Accordion from './Components/FAQ/Accordion'
import Footer from './Components/Footer/Footer'

function App() {
  
  return (
    <>
      {/* <Navbar/> */}
      <Hero/>
      <Partition/>
      <TV/>
      <Partition/>
      <Download/>
      <Partition/>
      <Watch/>
      <Partition/>
      <Profiles/>
      <Partition/>
      <Accordion/>
      <Partition/>
      <Footer/>
    </>
  )
}

export default App
