// src/components/Footer.jsx
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a2a4f] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1 */}
          <div>
            <h3 className="text-sky-400 uppercase font-semibold mb-3">Hackathons</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#">Past Events</a></li>
              <li><a href="#">Guidelines</a></li>
              <li><a href="#">Register Now</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>

          {/* Column 2 – Social Icons (centered) */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-4">
              <a href="#" className="bg-white text-[#1a2a4f] p-3 rounded-full">
                <FaTwitter />
              </a>
              <a href="#" className="bg-white text-[#1a2a4f] p-3 rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-white text-[#1a2a4f] p-3 rounded-full">
                <FaGithub />
              </a>
              <a href="#" className="bg-white text-[#1a2a4f] p-3 rounded-full">
                <FaDribbble />
              </a>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sky-400 uppercase font-semibold mb-3">All Hackathons</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#">About</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 text-center space-y-4 text-sm text-gray-400">
          <div>All Hackathons 2025</div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#">Privacy & terms</a>
            <a href="#">Terms of service</a>
          </div>
          <div className="text-sm tracking-wider">HACKATHONS IN INDIA</div>
        </div>
      </div>
    </footer>
  );
}