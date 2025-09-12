import React from 'react'
import { Button } from "@/components/retroui/Button";
import HomePage from './frontPage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './frontPage/Hero';
import AboutMe from './frontPage/AboutMe';
import Projects from './frontPage/Projects';
import SocialMedia from './frontPage/SocialMedia';


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutMe/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<SocialMedia/>}/>
    </Routes>
  )
}

export default App
