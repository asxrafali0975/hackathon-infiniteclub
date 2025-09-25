// src/components/Hero.jsx
import { Link } from "react-router-dom"; // ✅ fixed import
import { useEffect, useState } from "react";
import CountdownTimer from "./CountDown";

export default function Hero() {
  const images = [
    "one.jpeg",
    "two.jpeg",
    "three.jpeg",
    "five.jpeg",
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
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4 sm:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 leading-tight">
          Welcome to{" "}
          <span className="bg-[#26dcf5] text-black px-2 py-1 rounded-lg">
            Hack8
          </span>{" "}
          Hackathon 2025 🚀
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-5 sm:mb-6 max-w-[90%] sm:max-w-xl md:max-w-2xl leading-relaxed">
          Innovate, collaborate, and build the future with us.
        </p>

        <CountdownTimer />

        {/* Register button (optional) */}
        {/* <a
          href="https://forms.gle/x3H5Q7YdMvbHdXvf6"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-6 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-md hover:bg-cyan-300 transition"
        >
          Register Now
        </a> */}
      </div>
    </section>
  );
}
