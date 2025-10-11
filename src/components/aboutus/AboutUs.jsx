import React from "react";
import { HashLink } from "react-router-hash-link";

const stats = [
  { name: "Offices worldwide", value: "23" },
  { name: "Full-time colleagues", value: "400+" },
  { name: "Hours per week", value: "40" },
  {
    name: "Schedule",
    value: (
      <HashLink
        to="/Office_Hours"
        target="_blank"
        className="hover:text-sky-700 transition-colors duration-300"
      >
        Office Hours
      </HashLink>
    ),
  },
];

function AboutUs() {
  return (
    <div className="relative bg-[#0f172a] py-20" id="about-us">
      {/* Background Gradients */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient( rgba(30,47,57,0.4), transparent 70%)",
        }}
      />

      {/* Top Left Gradient */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="w-[274px] aspect-[1097/845] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>

      {/* Center Gradient */}
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-[28rem] sm:ml-16 sm:translate-x-0"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="w-[274px] aspect-[1097/845] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Work with us
          </h2>
          <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl text-justify">
            At <span className="font-semibold">GRJ JARO ENTERPRISE INC.</span>,
            our objective is to maintain our customer’s trust by delivering the
            best quality products that meet their expectations and set us apart
            in the market. We also strive to provide the best possible service
            experience by exceeding expectations and keeping our promises. We
            achieve this through our exceptional people, excellent equipment,
            the use of premium raw materials, and continuously improving systems.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="mx-auto mt-10 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-sm font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <HashLink
              smooth
              to="/Open_roles"
              className="transition-colors duration-300 hover:text-sky-700"
            >
              Open Roles →
            </HashLink>

            <HashLink
              to="/Internship_program"
              className="transition-colors duration-300 hover:text-sky-700"
            >
              Internship Program →
            </HashLink>

            <HashLink
              smooth
              to="/Our_values"
              className="transition-colors duration-300 hover:text-sky-700"
            >
              Our Values →
            </HashLink>

            <HashLink
              to="/General_information"
              className="transition-colors duration-300 hover:text-sky-700"
            >
              More Information →
            </HashLink>
          </div>

          {/* Stats Section */}
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
