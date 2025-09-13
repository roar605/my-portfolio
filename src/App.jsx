import Hero from './frontPage/Hero';
import AboutMe from './frontPage/AboutMe';
import Projects from './frontPage/Projects';
import SocialMedia from './frontPage/SocialMedia';
import TechStacks from './frontPage/TechStacks';

function App() {

  return (
    <div className='bg-[#f5f0e8]'>
      <Hero></Hero>
      <div className='border w-3/4 bg-[#f5f0e8] border-pink-400 m-auto'></div>
      <AboutMe></AboutMe>
      <div className='border w-3/4 bg-[#f5f0e8] border-pink-400 m-auto'></div>
      <Projects></Projects>
      <div className='border w-3/4 bg-[#f5f0e8] border-pink-400 m-auto'></div>
      <TechStacks></TechStacks>
      <div className='border w-3/4 bg-[#f5f0e8] border-pink-400 m-auto'></div>
      <SocialMedia></SocialMedia>
    </div>
    
  )
}

export default App
