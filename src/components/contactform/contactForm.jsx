import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import React from "react";


function Contact() {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const branches = [
     {
      name: "Dasmariñas, Cavite",
      link: "https://maps.google.com/?q=GRJ+Pawnshop+Dasmariñas+Cavite",
      description: "Located in the heart of Dasmariñas, this branch offers quick and reliable pawnshop services.",
      phone: "(046) 471-1111",
      email: "dasmabranch@grj.com",
    },
    {
      name: "Imus, Cavite",
      link: "https://maps.google.com/?q=GRJ+Pawnshop+Imus+Cavite",
      description: "Serving the Imus community with financial and pawnshop services.",
      phone: "(046) 472-2222",
      email: "imusbranch@grj.com",
    },
    {
      name: "Bacoor, Cavite",
      link: "https://maps.google.com/?q=GRJ+Pawnshop+Bacoor+Cavite",
      description: "Accessible location in Bacoor, providing excellent customer support.",
      phone: "(046) 473-3333",
      email: "bacoorbranch@grj.com",
    },
    {
      name: "Trece Martires, Cavite",
      link: "https://maps.google.com/?q=GRJ+Pawnshop+Trece+Martires+Cavite",
      description: "Conveniently located in Trece Martires for all your pawnshop needs.",
      phone: "(046) 474-4444",
      email: "trecebranch@grj.com",
    },
    {
      name: "Silang, Cavite",
      link: "https://maps.google.com/?q=GRJ+Pawnshop+Silang+Cavite",
      description: "Our Silang branch is known for fast service and easy transactions.",
      phone: "(046) 475-5555",
      email: "silangbranch@grj.com",
    },
    {
      name: "General Trias, Cavite",
      link: "https://maps.google.com/?q=GRJ+Pawnshop+General+Trias+Cavite",
      description: "Serving General Trias with trusted financial solutions.",
      phone: "(046) 476-6666",
      email: "gentriasbranch@grj.com",
    },
    {
      name: "Tagaytay City",
      link: "https://maps.google.com/?q=GRJ+Pawnshop+Tagaytay+City",
      description: "Located in scenic Tagaytay, we provide secure pawnshop services.",
      phone: "(046) 477-7777",
      email: "tagaytaybranch@grj.com",
    },
    {
      name: "Cavite City",
      link: "https://maps.google.com/?q=GRJ+Pawnshop+Cavite+City",
      description: "Our Cavite City branch ensures safe and reliable transactions.",
      phone: "(046) 478-8888",
      email: "cavitecitybranch@grj.com",
    },
    {
      name: "Dasmariñas Bayan",
      link: "https://maps.google.com/?q=GRJ+Pawnshop+Dasmariñas+Bayan",
      description: "Easily accessible branch in Dasmariñas Bayan.",
      phone: "(046) 479-9999",
      email: "dasmabayanbranch@grj.com",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 mt-8" id="contact">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-2">We’d love to hear from you. Reach out through our branches or send us a message below.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* Main Office */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
                <FaMapMarkerAlt className="text-indigo-600" /> Main Office
              </h3>
              <p className="text-gray-600 mt-2">
                <a
                  href="https://maps.google.com/?q=KM+27+Aguinaldo+Highway+Salitran+1+Dasmariñas+City"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-500 transition"
                >
                  KM 27 Aguinaldo Highway, <br />
                  Salitran 1, <br /> Dasmariñas City
                </a>
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
                <FaPhone className="text-indigo-600" /> Phone Numbers
              </h3>
              <ul className="mt-2 text-gray-600 space-y-1">
                <li><b>Marketing & Sales:</b> (046) 471-6868</li>
                <li><b>Accounting:</b> (046) 471-6562</li>
                <li><b>HRD:</b> (046) 471-4969</li>
              </ul>
            </div>

            {/* Emails */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
                <FaEnvelope className="text-indigo-600" /> Emails
              </h3>
              <ul className="mt-2 text-gray-600 space-y-1">
                <li><b>Marketing & Sales:</b> gjaro29@yahoo.com</li>
                <li><b>Operations:</b> gjaro29@yahoo.com</li>
                <li><b>Accounting:</b> grjjaro529@gmail.com</li>
                <li><b>HRD:</b> grjjaro529@gmail.com</li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
      </section>
  );
}

export default Contact;
