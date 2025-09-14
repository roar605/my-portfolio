import React from 'react'
import aboutme from "../assets/aboutme.png"

function AboutMe() {
  return (
    <section className=" py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side (Text Section) */}
        <div>
          {/* About Me Button */}
          <span className="px-4 py-1  bg-pink-400 text-sm rounded-md font-semibold">
            ABOUT ME
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Hello! My name is <span className="text-purple-500">Rohit Kumar Singh</span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-xl font-semibold mt-6 leading-relaxed">
            I am a self-taught programmer with a passion for learning and
            exploring new technologies. I have a strong background in FrontEnd and Backend
            Development and improving full-stack development. I am always eager
            to expand my skillset and take on new challenges. In my free time, I
            enjoy reading books and watching a game of
            football. As a dedicated and driven individual, I am constantly
            seeking out opportunities to grow and improve as a programmer.
          </p>
        </div>

        {/* Right Side (Image Section) */}
        <div className="flex justify-center">
          <img
            src={aboutme}
            alt="Coding Illustration"
            className="rounded-lg shadow-lg max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe