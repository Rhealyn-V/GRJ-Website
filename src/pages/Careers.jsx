import React from "react";
import { assets } from "../assets/assets.js";


import {
  FaTruck,
  FaHardHat,
  FaUserMd,
  FaUserNurse,
  FaMicroscope,
  FaDraftingCompass,
  FaProjectDiagram,
  FaCashRegister,
  FaUserTie,
  FaUsers,
  FaWarehouse,
  FaChartLine,
  FaLaptopCode,
  FaClipboardList,
} from "react-icons/fa";


function Careers() {
  const careers = [
    {
      title: "GRJ Enterprise",
      logo: assets.Enterprise,
      background: assets.buildingLogo,
      color: "from-sky-700 to-sky-700",
      link: "",
      roles: [
        { icon: <FaClipboardList />, label: "Distributors" },
        { icon: <FaLaptopCode />, label: "IT Support Specialist" },
        { icon: <FaChartLine />, label: "Business Development Officer" },
        { icon: <FaProjectDiagram />, label: "Logistics Coordinator" },
      ],
    },
    {
      title: "GRJ ReadyMix",
      logo: assets.Readymix,
      color: "from-emerald-700 to-emerald-700",
      background: assets.Readymix_background,
      link: "https://www.facebook.com/p/GRJ-JARO-Readymix-Corp-100064041009731/",
      roles: [
        { icon: <FaProjectDiagram />, label: "Readymix" },
        { icon: <FaTruck />, label: "Truck Driver" },
        { icon: <FaHardHat />, label: "Plant Operator" },
        { icon: <FaHardHat />, label: "Quality Control Engineer" },
        { icon: <FaProjectDiagram />, label: "Logistics Coordinator" },
      ],
    },
    {
      title: "Jaromed Medical Clinic",
      logo: assets.Jaromed,
      color: "from-blue-700 to-green-500",
      background: assets.Jaromed_background,  
      link: "https://jaromed.com.ph/",
      roles: [
        { icon: <FaUserMd />, label: "Medical Doctor" },
        { icon: <FaUserNurse />, label: "Registered Nurse" },
        { icon: <FaMicroscope />, label: "Medical Technologist" },
        { icon: <FaUsers />, label: "Patient Relations Officer" },
      ],
    },
    {
      title: "South4 Builders",
      logo: assets.South4Builders,
      color: "from-red-700 to-gray-900",
      background: assets.South4buildersbackground,
      link: "",
      roles: [
        { icon: <FaHardHat />, label: "Construction" },
        { icon: <FaHardHat />, label: "Civil Engineer" },
        { icon: <FaDraftingCompass />, label: "Architect" },
        { icon: <FaProjectDiagram />, label: "Project Manager" },
        { icon: <FaHardHat />, label: "Site Supervisor" },
      ],
    },
    {
      title: "GRJ Pawnshop",
      logo: assets.Pawnshop,
      color: "from-red-700 to-red-700",
      background: assets.Pawnshop_background,
      link: "https://www.facebook.com/p/GRJ-Jaro-Pawnshop-Corp-100067998025076/",
      roles: [
        { icon: <FaCashRegister />, label: "Cashier" },
        { icon: <FaUserTie />, label: "Appraiser" },
        { icon: <FaUsers />, label: "Customer Service Representative" },
        { icon: <FaProjectDiagram />, label: "Branch Manager" },
      ],
    },
    {
      title: "Kansai Ueno",
      logo: assets.KansaiUeno,
      color: "from-green-500 to-green-700",
      background: assets.kansai,
      link: "https://kansaiueno.grj.com.ph/index.php",
      roles: [
        { icon: <FaWarehouse />, label: "Warehouse Staff" },
        { icon: <FaProjectDiagram />, label: "Production Operator" },
        { icon: <FaHardHat />, label: "Quality Assurance Specialist" },
        { icon: <FaChartLine />, label: "Buy and Sell" },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-40 px-6 md:px-16" id="careers">
      <h2 className="text-4xl font-bold text-center text-gray-700 mb-15">
        CAREER OPPORTUNITIES
      </h2>

      {/* Cards Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
        {careers.map((career, index) => (
          <div
            key={index}
            className="relative rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 overflow-hidden"
            style={{
              backgroundImage: `url(${career.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Logo + Title */}
            <div className="flex items-center mb-6 space-x-4">
              <img
                src={career.logo}
                alt={`${career.title} Logo`}
                className="w-30 h-auto object-contain "
              />
              <h3
                className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${career.color}`}
              >
              </h3>
            </div>

            {/* Roles */}
        <div className="w-full md:w-3/4 lg:w-1/2 h-auto mb-6 rounded-xl bg-white/80 dark:bg-black/60 p-4 shadow-md">
          <ul className="space-y-3">
            {career.roles.map((role, idx) => (
              <li
                key={idx}
                className="flex items-center text-gray-900 dark:text-white hover:text-sky-500 transition duration-200"
              >
                <span className="text-lg mr-3">{role.icon}</span>
                {role.label}
              </li>
            ))}
          </ul>
        </div>



            {/* Apply Button */}
           <div className="flex justify-end"> 
            <a
              href={career.link}
              target="_blank"
              rel="noopener noreferrer"
                className=" rounded-lg px-3 py-2 text-base font-bold text-gray-900 dark:text-white bg-white/60 dark:bg-black/60 hover:bg-sky-500 hover:text-white border border-gray-300 hover:border-transparent transition duration-300 inline-flex items-center">           
              Explore Careers <span className="ml-2">→</span>
            </a>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Careers;
