// src/components/Hero.jsx
import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function Hero() {
  const images = [
    "one.jpeg",
    "two.jpeg",
    "three.jpeg",
    "five.jpeg",
    // "six.jpeg",
    "seven.jpeg",
    "eight.jpeg",
    "nine.jpeg",
    "ten.jpeg",
  ]; 

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); 
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`slide-${i}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Welcome to Hackathon 2025 🚀
        </h1>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl">
          Innovate, collaborate, and build the future with us.
        </p>


        {/* <a
          href="https://forms.gle/x3H5Q7YdMvbHdXvf6"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-md hover:bg-cyan-300 transition"
        >
          {/* <Link to="/">Register</Link> */}
        {/* </a> */} 

      </div>
    </section>
  );
}
