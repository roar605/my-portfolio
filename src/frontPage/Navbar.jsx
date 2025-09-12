import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-300 ">
      {/* Left links */}
      <div className="flex space-x-6 text-sm font-medium">
        <a href="#">Home</a>
        <a href="#">Collection</a>
        <a href="#">Service</a>
        <a href="#">About Us</a>
      </div>

      {/* Logo / Title */}
      <h1 className="text-xl font-semibold tracking-wide">Heritage.</h1>

      {/* Profile button */}
      <div className="flex items-center space-x-2 bg-gray-200 px-3 py-1 rounded-full cursor-pointer">
        <span className="text-sm font-medium">Irfan dedek</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </nav>
  )
}

export default Navbar