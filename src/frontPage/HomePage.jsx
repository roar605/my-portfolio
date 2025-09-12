import React, { useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import AboutMe from './AboutMe'
import Projects from './Projects'
import TechStacks from './TechStacks'
import SocialMedia from './SocialMedia'
import Footer from './Footer'
import Menu from './Menu'

function HomePage() {

  return (
    <div className='bg-[#f5f0e8] w-screen h-screen'>
      <Navbar></Navbar>
      <Hero></Hero>
    </div>

  )
}

export default HomePage