import React from "react"
import { Building, Building2, Landmark } from "lucide-react"

function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full  bg-[#0f172a] overflow-hidden text-white"
    >
      {/* 🌌 Background Glow */}
      {/* <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(30,47,57,0.4), transparent 70%)`,
        }}
      /> */}

      {/* 💬 Footer Content */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* 🏢 Main Office */}
        <div>
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <Building className="w-5 h-5 text-indigo-400" />
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Main Office
            </h3>
          </div>

          <ul className="mt-4 space-y-3 text-sm text-gray-300">
            <li>
              <a
                href="https://maps.google.com/?q=KM+27+Aguinaldo+Highway+Salitran+1+Dasmariñas+City"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition"
              >
                KM 27 Aguinaldo Highway, <br />
                Salitran 1, Dasmariñas City
              </a>
            </li>
            <li>
              <strong>Tel.No:</strong> (046) 471-6868 / 424-782
            </li>
            <li>
              <strong>Fax.No:</strong> (046) 471-4969
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:gjaro29@gmail.com"
                className="hover:text-sky-400 transition"
              >
                gjaro29@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* 🏭 Company Links */}
        <div>
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <Building2 className="w-5 h-5 text-indigo-400" />
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Company
            </h3>
          </div>

          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>
              <a
                href="https://www.facebook.com/p/GRJ-Jaro-Pawnshop-Corp-100067998025076/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition"
              >
                GRJ Jaro Pawnshop
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/p/GRJ-JARO-Readymix-Corp-100064041009731/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition"
              >
                GRJ Jaro Readymix
              </a>
            </li>
            <li>
              <a
                href="https://kansaiueno.grj.com.ph/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition"
              >
                Kansai Ueno
              </a>
            </li>
            <li>
              <span className="hover:text-sky-400 cursor-pointer transition">
                South4 Builders
              </span>
            </li>
            <li>
              <a
                href="https://jaromed.com.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition"
              >
                Jaromed
              </a>
            </li>
          </ul>
        </div>

        {/* ⚖️ Law Firm */}
        <div>
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <Landmark className="w-5 h-5 text-indigo-400" />
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Law Firm
            </h3>
          </div>

          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li className="font-bold">PALAD JARO-PALAD LAW OFFICES</li>
            <li>
              <a
                href="https://www.google.com/maps/place/PJP+Law+Offices/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition"
              >
                Unit 2-D LCVM (Lucila) Building, Km 31 Aguinaldo Highway <br />
                Pasong Tala, Brgy. Zone IV, Dasmariñas City, Cavite
              </a>
            </li>
            <li>
              <strong>Telefax:</strong> (046) 416-5211
            </li>
            <li>
              <strong>Mobile:</strong> +639257120756
            </li>
          </ul>
        </div>
      </div>

      {/* 📜 Footer Bottom */}
      <div className="relative z-10 text-center py-8 border-t border-gray-700 mt-12">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} GRJ Group of Companies. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
