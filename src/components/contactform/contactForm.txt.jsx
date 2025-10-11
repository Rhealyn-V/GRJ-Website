import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import React from "react";

function Contact() {
  const [selectedBranch, setSelectedBranch] = useState(null);

  return (
    <section className="relative min-h-screen w-full bg-[#0f172a] overflow-hidden text-white p-12" id="contact">
       <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle 600px at 50% 50%, rgba(30,47,57,0.4), transparent 70%)",
        }}
      />
      {/* Dark translucent overlay for readability */}
      <div className="absolute inset-0 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mt-12">Contact Us</h2>
          <p className="text-gray-200 mt-2">
            We’d love to hear from you. Reach out through our branches or send us a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* Main Office */}
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-md shadow-md border border-white/20">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <MapPin className="text-blue-400 w-5 h-5" /> Main Office
              </h3>
              <p className="text-gray-200 mt-2">
                KM 27 Aguinaldo Highway, <br />
                Salitran 1, <br /> Dasmariñas City
              </p>
            </div>

            {/* Phone */}
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-md shadow-md border border-white/20">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Phone className="text-blue-400 w-5 h-5" /> Phone Numbers
              </h3>
              <ul className="mt-2 text-gray-200 space-y-1">
                <li><b>Marketing & Sales:</b> (046) 471-6868</li>
                <li><b>Accounting:</b> (046) 471-6562</li>
                <li><b>HRD:</b> (046) 471-4969</li>
              </ul>
            </div>

            {/* Emails */}
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-md shadow-md border border-white/20">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Mail className="text-blue-400 w-5 h-5" /> Emails
              </h3>
              <ul className="mt-2 text-gray-200 space-y-1">
                <li><b>Marketing & Sales:</b> gjaro29@yahoo.com</li>
                <li><b>Operations:</b> gjaro29@yahoo.com</li>
                <li><b>Accounting:</b> grjjaro529@gmail.com</li>
                <li><b>HRD:</b> grjjaro529@gmail.com</li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="p-8 rounded-lg bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
