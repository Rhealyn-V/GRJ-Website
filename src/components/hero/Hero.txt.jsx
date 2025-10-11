import React from "react"
import bgImage from "../../assets/images/Building.png"
import { HashLink } from "react-router-hash-link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import ContactDialog from "@/components/template/ContactDialog"

function Hero() {
  return (
    <section
      className="relative min-h-screen pt-60 bg-cover bg-center bg-no-repeat" id="hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* ✅ Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* ✅ Hero Content */}
      <div className="relative z-10 grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 text-white">
          <h1 className="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl font-orbitron">
            GRJ Group of Company
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-200">
            Welcome to GRJ Group of Company — a forward-thinking enterprise
            committed to excellence across industries. With innovation at our
            core and integrity as our foundation, we deliver trusted solutions
            that drive progress, empower communities, and shape a better future.
          </p>

          {/* ✅ Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Get Started (Primary Button) */}
            <HashLink smooth to="#ourbusinesses">
            <Button
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
            </HashLink>
            <ContactDialog />
            {/* Talk to Us (Outline Button) */}
            {/* <HashLink smooth to="/#contact">
              <Button
                size="lg"
                variant="outline"
                className="text-gray-600 border-white hover:bg-white hover:text-blue-700 rounded-full flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <ContactDialog />
              </Button>
            </HashLink> */}
          </div>
        </div>

        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          {/* Optional image placeholder for future illustration */}
        </div>
      </div>
    </section>
  )
}

export default Hero
