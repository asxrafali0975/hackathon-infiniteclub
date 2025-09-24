// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router";

import ElectricBorder from "../ReactBit/ElectricBorder";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm px-4 sm:px-6 py-4 h-[15vh] flex">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-[90%]">
        <h1 className="text-xl font-bold text-blue-900">ASHRAF HACKATHONS</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">

          <Link to="/">Home</Link>




          <ElectricBorder
            color="#1A2A4F"
            speed={1}
            chaos={0.5}
            thickness={3}
            style={{ borderRadius: 2, display: "inline-block" }} // match button radius
          >
            <a
              href="https://forms.gle/x3H5Q7YdMvbHdXvf6"
              target="_blank"
              className="px-3 py-2 text-gray-700 font-semibold rounded-md inline-block"
            >
              Register now
            </a>
          </ElectricBorder>



          <a href="#" className="text-gray-700">
            Guidelines
          </a>



          <a href="/about" className="text-gray-700">
            About
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-3 space-y-2 px-4 mb-3">
          <a
            href="https://forms.gle/x3H5Q7YdMvbHdXvf6"
            className="text-gray-700"
          >
            Register
          </a>
          <a href="#" className="text-gray-700">
            Guidelines
          </a>
          <a href="/about" className="text-gray-700">
            About
          </a>
        </div>
      )}
    </nav>
  );
}
