import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import React from "react";

function Contact() {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const branches = [
    // ... your branches list (unchanged)
  ];

  return (
    <section className="bg-gray-50 py-20" id="contact">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-2">
            We’d love to hear from you. Reach out through our branches or send us a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* Main Office */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
                <MapPin className="text-blue-600 w-5 h-5" /> Main Office
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
                <Phone className="text-blue-600 w-5 h-5" /> Phone Numbers
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
                <Mail className="text-blue-600 w-5 h-5" /> Emails
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
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
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
