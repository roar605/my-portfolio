import Hero from './frontPage/Hero';
import AboutMe from './frontPage/AboutMe';
import Projects from './frontPage/Projects';
import SocialMedia from './frontPage/SocialMedia';
import TechStacks from './frontPage/TechStacks';
import Navbar from './frontPage/Navbar';

function App() {

  return (
    <div className='bg-[#f5f0e8]'>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className='border w-3/4 bg-[#f5f0e8] border-pink-400 m-auto'></div>
      <AboutMe></AboutMe>
      <div className='border w-3/4 bg-[#f5f0e8] border-pink-400 m-auto'></div>
      <Projects></Projects>
      <div className='border w-3/4 bg-[#f5f0e8] border-pink-400 m-auto'></div>
      <TechStacks></TechStacks>
      <div className='border w-3/4 bg-[#f5f0e8] border-pink-400 m-auto'></div>
      <SocialMedia></SocialMedia>
      <footer className="w-full px-20 bg-pink-300 text-gray  py-2 px-6 flex justify-between items-center text-sm">
        <p>
          Made by{" "}
          <span className="text-purple-800 font-semibold">Rohit</span>
        </p>
        <p className='text-gray-800'>Copyright © 2024 Rohit Inc.</p>
      </footer>
    </div>

  )
}

export default App
