import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import AboutMe from './AboutMe'
import Projects from './Projects'
import TechStacks from './TechStacks'
import SocialMedia from './SocialMedia'
import Footer from './Footer'

function HomePage() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <TechStacks></TechStacks>
      <SocialMedia></SocialMedia>
      <Footer></Footer>
    </div>

  )
}

export default HomePage