import React, { useState } from "react";
import { Briefcase, Users, GraduationCap, Mail, Laptop, X } from "lucide-react";

function Internship_program() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div id="Internship_program" className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-sky-900 text-white py-70 text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80"
          alt="internship"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold drop-shadow-md">Kickstart Your Career with GRJ</h2>
          <p className="mt-6 text-lg text-gray-200">
            Gain real-world experience, mentorship, and skills to prepare you for a successful future.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-8 inline-block bg-white text-sky-800 px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 container mx-auto px-6 mb-10">
        <h3 className="text-3xl font-semibold text-sky-700 mb-6 text-center">About the Program</h3>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
          The GRJ Internship Program is designed to give students and fresh graduates hands-on
          experience in a professional environment. You’ll work alongside experts, contribute to real
          projects, and strengthen both your technical and soft skills.
        </p>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-sky-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-semibold text-sky-700 mb-12 text-center">Why Join Us?</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-2xl transition">
              <GraduationCap className="w-12 h-12 text-sky-600 mb-4 mx-auto" />
              <h4 className="text-xl font-bold mb-2 text-center">Learning Experience</h4>
              <p className="text-center text-gray-600">
                Get trained by professionals and acquire valuable industry knowledge.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-2xl transition">
              <Briefcase className="w-12 h-12 text-sky-600 mb-4 mx-auto" />
              <h4 className="text-xl font-bold mb-2 text-center">Career Growth</h4>
              <p className="text-center text-gray-600">
                Enhance your skills by working on impactful, real-world projects.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-2xl transition">
              <Users className="w-12 h-12 text-sky-600 mb-4 mx-auto" />
              <h4 className="text-xl font-bold mb-2 text-center">Networking</h4>
              <p className="text-center text-gray-600">
                Build connections with industry leaders and future colleagues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Programs Section */}
      <section id="programs" className="py-20 bg-white mb-18">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-semibold text-sky-700 mb-12 text-center">
            Available Internship Programs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-sky-50 rounded-2xl shadow hover:shadow-xl transition text-center">
              <Laptop className="w-12 h-12 text-sky-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">IT Department</h4>
              <p className="text-gray-600">Learn software, systems, and technical skills to prepare for IT roles.</p>
            </div>
            <div className="p-6 bg-sky-50 rounded-2xl shadow hover:shadow-xl transition text-center">
              <Briefcase className="w-12 h-12 text-sky-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">Accounting Department</h4>
              <p className="text-gray-600">Gain practical experience in finance, auditing, and accounting processes.</p>
            </div>
            <div className="p-6 bg-sky-50 rounded-2xl shadow hover:shadow-xl transition text-center">
              <Users className="w-12 h-12 text-sky-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">Sales Department</h4>
              <p className="text-gray-600">Develop skills in client engagement, product knowledge, and sales strategy.</p>
            </div>
            <div className="p-6 bg-sky-50 rounded-2xl shadow hover:shadow-xl transition text-center">
              <Mail className="w-12 h-12 text-sky-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">HR Department</h4>
              <p className="text-gray-600">Assist in recruitment, employee relations, and HR management practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50">
          <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-8 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-sky-700 mb-4">Send Your Application</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium">Full Name</label>
                <input type="text" className="w-full border rounded-lg p-2 mt-1" required />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium">Email</label>
                <input type="email" className="w-full border rounded-lg p-2 mt-1" required />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium">Department</label>
                <select className="w-full border rounded-lg p-2 mt-1" required>
                  <option value="">Select Department</option>
                  <option value="IT">IT Department</option>
                  <option value="Accounting">Accounting Department</option>
                  <option value="Sales">Sales Department</option>
                  <option value="HR">HR Department</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium">Upload Resume</label>
                <input type="file" className="w-full border rounded-lg p-2 mt-1" />
              </div>
              <button
                type="submit"
                className="bg-sky-700 text-white px-6 py-2 rounded-lg hover:bg-sky-800 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      <footer className="bg-sky-800 text-white py-4 text-center"></footer>
    </div>
  );
}

export default Internship_program;
