import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFax, FaGlobe } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-gray-50 py-20" id="contact">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6"><b>Contact Information</b></h2>
          
          {/* Address */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
            <FaMapMarkerAlt className="text-indigo-600 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-700"><b>MAIN OFFICE ADDRESS</b></h3>
              <p className="text-gray-600 mt-2">
                <a
                  href="https://www.google.com/maps/place/JaroMed+%26+Diagnostic+Center/@14.354809,120.8965984,13z/data=!4m6!3m5!1s0x3397d5f657b3057d:0x1689303e32297076!8m2!3d14.3547294!4d120.9377985!16s%2Fg%2F11rhylcswv?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-500 underline"
                >
                  KM 27 AGUINALDO HIGHWAY, <br />
                  SALITRAN 1, <br />
                  DASMARIÑAS CITY
                </a>
              </p>
            </div>    
        </div>

          {/* Phone Numbers */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
            <FaPhone className="text-indigo-600 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-700"><b>PHONE NUMBERS</b></h3>
              <ul className="mt-2 text-gray-600 space-y-1">
                <li><b>Marketing & Sales:</b> (046) 471-6868</li>
                <li><b>Accounting:</b> (046) 471-6562</li>
                <li><b>HRD:</b> (046) 471-4969</li>
              </ul>
            </div>
          </div>

          {/* Emails */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
            <FaEnvelope className="text-indigo-600 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-700"><b>EMAILS</b></h3>
              <ul className="mt-2 text-gray-600 space-y-1">
                <li><b>Marketing & Sales:</b> gjaro29@yahoo.com</li>
                <li><b>Operations:</b> gjaro29@yahoo.com</li>
                <li><b>Accounting:</b> grjjaro529@gmail.com</li>
                <li><b>HRD:</b> grjjaro529@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Feedback Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg"
            ></textarea>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
