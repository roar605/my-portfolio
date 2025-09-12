import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-300 ">
      {/* Left links */}
      <div className="flex space-x-6 text-sm font-medium">
        <a href="/">Home</a>
        <a href="/about">About Me</a>
        <a href="/projects">Projects</a>
        <a href="contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar