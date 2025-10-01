import React from 'react'
import bgImage from '../../assets/images/Building.png'
//import { assets } from '../../assets/assets'
function Hero() {
  return (
    <section
      className="relative min-h-screen pt-60 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* ✅ Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* ✅ Hero Content */}
      <div className="relative z-10 grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 text-white">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            GRJ Group of Company
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-200">
            "Welcome to GRJ Group of Company — a forward-thinking enterprise committed to excellence across industries.
            With innovation at our core and integrity as our foundation, we deliver trusted solutions that drive
            progress, empower communities, and shape a better future."
          </p>
          <div className="flex flex-wrap items-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-white rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              Speak to Sales
            </a>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          {/* Replace with your image 
          <img
            src=""
            alt="mockup"
            className="max-w-full h-auto"
          />
          */}
        </div>
      </div>
    </section>
  )
}

export default Hero
