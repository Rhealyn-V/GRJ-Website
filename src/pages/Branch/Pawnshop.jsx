import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import { assets } from "../../assets/assets";


function Pawnshop() {
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
    <section className="bg-gray-50 py-20" id="pawnshop" style={{ backgroundImage: `url(${assets.Maps})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        
       <div className="min-h-screen flex items-center justify-center  z-50 "  >       
  <div className="w-full max-w-6xl mb-20">
    {/* Branches Section */}
    <div className="text-center mt-10 mb-8">
          <h2 className="text-4xl font-bold text-gray-800">PAWNSHOP BRANCH</h2>
          <p className="text-black mt-2">We’d love to hear from you. Reach out through our branches or send us a message below.</p>
        </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
      {branches.map((branch, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition"
        >
          <a
            href={branch.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt className="text-indigo-600 text-2xl mx-auto mb-2" />
            <h4 className="font-semibold text-gray-700">{branch.name}</h4>
            <p className="text-sm text-sky-500 mt-1">View on Maps</p>
          </a>
          <button
            onClick={() => setSelectedBranch(branch)}
            className="mt-3 text-sm text-indigo-600 underline hover:text-indigo-800"
          >
            Read More
          </button>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* MODAL */}
      {selectedBranch && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm  flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelectedBranch(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedBranch.name}</h3>
            <p className="text-gray-600 mb-4">{selectedBranch.description}</p>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center gap-2"><FaPhone className="text-indigo-600" /> {selectedBranch.phone}</p>
              <p className="flex items-center gap-2"><FaEnvelope className="text-indigo-600" /> {selectedBranch.email}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Pawnshop;

