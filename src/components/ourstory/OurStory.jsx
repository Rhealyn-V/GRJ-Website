
import React, { useState } from "react";
import ExpandableCards from "@/components/ui/ExpandableCards";
import { assets } from "@/assets/assets";

function OurStory() {
  const [selected, setSelected] = useState(null);
  return (
    <section
      id="ourstory"
      className="relative min-h-screen w-full overflow-hidden text-white py-20 px-10"
    >
      {/* Background overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "#0f172a",
          backgroundImage:
            "radial-gradient( rgba(30,47,57,0.4), transparent 70%)",
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10 text-center mb-12 mt-10">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
          Our Story
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300">
          Welcome to the GRJ Group of Companies. Our journey began with a vision
          of excellence, innovation, and trust across multiple industries.
        </p>
      </div>

      {/* Expandable cards */}
      <div className="relative z-10">
        <ExpandableCards
        />
      </div>
    </section>
  );
}

export default OurStory;
