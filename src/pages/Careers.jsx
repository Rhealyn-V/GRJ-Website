import React, { useState } from "react";
import { Briefcase, Truck, Users, X } from "lucide-react";

function Careers() {
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      title: "Sales Officer",
      icon: <Briefcase className="w-6 h-6 text-sky-600" />,
      description:
        "As a Sales Officer, you will be responsible for developing sales strategies, building customer relationships, and ensuring sales targets are met. Strong communication and negotiation skills are required.",
      requirements: [
        "Bachelor's degree in Business or related field.",
        "Proven experience in sales or customer service.",
        "Excellent communication and interpersonal skills.",
        "Ability to work independently and as part of a team.",
      ],
    },
    {
      title: "Trailer Driver",
      icon: <Truck className="w-6 h-6 text-sky-600" />,
      description:
        "As a Trailer Driver, you will be tasked with transporting goods safely and efficiently. A strong focus on road safety and time management is essential.",
      requirements: [
        "Valid professional driver’s license (with trailer restriction).",
        "At least 2 years of driving experience.",
        "Knowledge of traffic laws and road safety regulations.",
        "Strong sense of responsibility and punctuality.",
      ],
    },
    {
      title: "Mixer Driver",
      icon: <Truck className="w-6 h-6 text-sky-600" />,
      description:
        "As a Mixer Driver, you will operate concrete mixer trucks to deliver ready-mix concrete to project sites. You must ensure proper handling and timely delivery.",
      requirements: [
        "Professional driver’s license with proper restriction code.",
        "Experience in operating mixer trucks preferred.",
        "Basic mechanical knowledge for vehicle troubleshooting.",
        "Ability to follow instructions and safety procedures.",
      ],
    },
    {
      title: "Bulk Driver",
      icon: <Truck className="w-6 h-6 text-sky-600" />,
      description:
        "As a Bulk Driver, you will deliver bulk construction materials to different locations, ensuring safe and efficient transportation.",
      requirements: [
        "Valid driver’s license for bulk truck operation.",
        "Experience in bulk material delivery.",
        "Good navigational skills.",
        "Strong commitment to safety.",
      ],
    },
    {
      title: "Site Coordinator",
      icon: <Users className="w-6 h-6 text-sky-600" />,
      description:
        "As a Site Coordinator, you will oversee project site operations, coordinate teams, and ensure work progress aligns with project goals.",
      requirements: [
        "Bachelor’s degree in Engineering or related field.",
        "Experience in site coordination or supervision.",
        "Strong leadership and organizational skills.",
        "Ability to manage multiple tasks effectively.",
      ],
    },
    {
      title: "Collector",
      icon: <Users className="w-6 h-6 text-sky-600" />,
      description:
        "As a Collector, you will be responsible for handling payments, following up on receivables, and maintaining accurate records.",
      requirements: [
        "At least High School graduate, college level preferred.",
        "Experience in collection or related field.",
        "Good communication and negotiation skills.",
        "Ability to work under pressure.",
      ],
    },
  ]

  return (
    <div className="relative isolate bg-gradient-to-r from-sky-700 via-sky-800 to-gray-900 py-50 px-6 lg:px-8" id="careers">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center" />

      {/* Header */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl drop-shadow-lg">
          We Are Hiring!
        </h2>
        <p className="mt-4 text-lg text-gray-200">
          Join our growing team and be part of GRJ Jaro Enterprise Inc.
        </p>
      </div>

      {/* Roles Grid */}
      <div className="relative z-10 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {roles.map((role, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 rounded-xl bg-white/90 p-6 shadow-lg backdrop-blur hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer"
            onClick={() => setSelectedRole(role)}
          >
            <div className="flex-shrink-0">{role.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">{role.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedRole && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative">
            {/* Close */}
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-center text-2xl font-bold text-gray-900 mb-4">
              {selectedRole.title}
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {selectedRole.description}
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Requirements:
              <ul className="list-disc list-inside mt-2">
                {selectedRole.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </p>

            <div className="flex justify-end">
              <button className="px-5 py-2 bg-sky-600 text-white rounded-lg font-semibold shadow hover:bg-sky-500 transition">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Careers
