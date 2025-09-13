import tech from "../assets/tech.png"

function Hero() {
  // const [open, setOpen] = useState(false);

  return (
    <div className='relative h-screen bg-cover bg-center flex items-center justify-center ' >
      {/* bg image */}
      <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-70" style={{ backgroundImage: `url(${tech})` }}></div>

      {/* for my description */}
      <div className="relative z-10 text-black text-center">
        <h1 className="text-8xl ">Welcome to</h1>
        <h1 className="text-8xl">my portfolio</h1>
      </div>

     
    </div>
   
  )
}

export default Hero