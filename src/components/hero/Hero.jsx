"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ContactDialog from "@/components/template/ContactDialog"
import ShapeHero from "@/components/ShapeHero"

// ✅ Import animated components
import { AnimatedGroup } from "@/components/landing/AnimatedGroup"
import { AnimatedText } from "@/components/landing/AnimatedText"

function Hero() {
  return (
    <section className="relative min-h-screen w-full pt-40 overflow-hidden text-white" id="home">
      {/* 🌌 Animated Shape Background */}
      <div className="absolute inset-0 -z-10">
        <ShapeHero />
      </div>

      {/* 💬 Hero Content */}
      <div className="relative z-10 grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          {/* 🔹 Animated Heading and Description */}
          <AnimatedGroup preset="blur-slide" className="flex flex-col gap-4">
            <AnimatedText
              as="h1"
              className="max-w-3xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-5xl font-orbitron"
            >
              GRJ Group of Company
            </AnimatedText>

            <AnimatedText
              as="p"
              delay={0.15}
              className="max-w-3xl mb-6 font-light text-gray-200 md:text-lg lg:text-xl text-justify"
            >
              Welcome to <span className="text-sky-400 font-semibold">GRJ Group of Company</span> — a forward-thinking enterprise committed to excellence across industries. With innovation at our core and integrity as our foundation, we deliver trusted solutions that drive progress, empower communities, and shape a better future.
            </AnimatedText>
          </AnimatedGroup>

          {/* 🔹 Animated Buttons */}
          <AnimatedGroup
            preset="slide"
            delay={0.3}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <Button
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center gap-2 shadow-md transition-transform hover:translate-y-[-2px]"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>

            <ContactDialog />
          </AnimatedGroup>
        </div>

        {/* Optional image / visual area */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex"></div>
      </div>
    </section>
  )
}

export default Hero
