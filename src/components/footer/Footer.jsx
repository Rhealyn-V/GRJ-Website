import React from "react";
import { Building, Building2, Landmark } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200 w-full">
      {/* Footer Top */}
      <div className="container mx-auto px-10 py-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Main Office */}
        <div>
          <li className="flex items-center justify-center sm:justify-start space-x-2 text-center sm:text-left">
            <Building className="w-5 h-5" />
            <a className="space-y-4 text-sm">
              Main Office
            </a>
          </li>
          <ul className="space-y-4 text-sm mt-4">
            <li>
              <a
                href="https://maps.google.com/?q=KM+27+Aguinaldo+Highway+Salitran+1+Dasmariñas+City"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600 transition"
              >
                KM 27 Aguinaldo Highway,<br />
                Salitran 1, Dasmariñas City
              </a>
            </li>
            <li>
              <span>
                <strong>Tel.No:</strong> (046) 471-6868 / 424-782
              </span>
            </li>
            <li>
              <span>
                <strong>Fax.No:</strong> (046) 471-4969
              </span>
            </li>
            <li>
              <span>
                <strong>Email:</strong> gjaro29@gmail.com
              </span>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
           <li className="flex items-center justify-center sm:justify-start space-x-2 text-center sm:text-left">
            <Building2 className="w-5 h-5" />
            <a className="space-y-4 text-sm">
             Company
            </a>
          </li>
         
          <ul className=" text-sm mt-4">
            <li>
              <a
                href="https://www.facebook.com/p/GRJ-Jaro-Pawnshop-Corp-100067998025076/"
                className="hover:text-sky-600"
                target="_blank"
              >
                GRJ Jaro Pawnshop
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/p/GRJ-JARO-Readymix-Corp-100064041009731/"
                className="hover:text-sky-600"
                target="_blank"
              >
                GRJ Jaro Readymix
              </a>
            </li>
            <li>
              <a
                href="https://kansaiueno.grj.com.ph/index.php"
                className="hover:text-sky-600"
                target="_blank"
              >
                Kansai Ueno
              </a>
            </li>
            <li>
              <span className="hover:text-sky-600 cursor-pointer">
                South4 Builders
              </span>
            </li>
            <li>
              <a
                href="https://jaromed.com.ph/"
                className="hover:text-sky-600"
                target="_blank"
              >
                Jaromed
              </a>
            </li>
          </ul>
        </div>

        {/* Law Firm */}
        <div>
          <li className="flex items-center justify-center sm:justify-start space-x-2 text-center sm:text-left">
            <Landmark className="w-5 h-5" />
            <a className="space-y-4 text-sm">
             Law Firm
            </a>
          </li>
          <ul className="space-y-2 text-sm mt-4">
            <li>
              <a
                href="https://www.google.com/maps/place/PJP+Law+Offices/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600 font-bold"
              >
                PALAD JARO-PALAD LAW OFFICES
              </a>
            </li>
              <li><a href="https://www.google.com/maps/place/PJP+Law+Offices/..." target="_blank" className="text-black hover:text-sky-600">Unit 2-D LCVM (Lucila) Building, Km 31 Aguinaldo Highway<br/>Pasong Tala, Brgy. Zone IV, Dasmariñas City, Cavite</a></li>
              <li><a className="text-black "><strong>Telefax:</strong> (046) 416-5211</a></li>
              <li><a className="text-black "><strong>Mobile:</strong> +639257120756</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-100 text-center py-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} GRJ Group of Companies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
