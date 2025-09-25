// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Correct routing import
import ElectricBorder from "../ReactBit/ElectricBorder";
import RotateText from "./RotateText";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm px-4 sm:px-6 py-4 w-full">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Left: RotateText */}
        {/* <div className="flex items-center bg-red-800 w-"> */}
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  flex  font-bold">
            <RotateText />
          </div>
        {/* </div> */}

        {/* Right: Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <ElectricBorder
            color="#1A2A4F"
            speed={1}
            chaos={0.5}
            thickness={3}
            style={{ borderRadius: 2, display: "inline-block" }}
          >
            <a
              href="https://forms.gle/F5dYXtgopLdDjoXn7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-md inline-block"
            >
              Register Now
            </a>
          </ElectricBorder>

          <a href="Hack8_guidelines.pdf" target="_blank" className="hover:text-blue-600 transition">
            Guidelines
          </a>
       
        </div>

        {/* Mobile: Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 mt-4 px-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <a
            href="https://forms.gle/F5dYXtgopLdDjoXn7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600"
          >
            Register
          </a>
           <a href="Hack8_guidelines.pdf" target="_blank" className="hover:text-blue-600 transition">
            Guidelines
          </a>
     
        </div>
      )}
    </nav>
  );
}
