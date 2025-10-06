import React from 'react'
import { assets } from '../../assets/assets.js';
import { Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="text-black body-font">
      <div className="container px-2 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* Logo & Info */}
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-black">
            <img className="h-20 w-auto opacity-90" src={assets.logo} alt="logo"/>
            <span className="ml-3 text-xl">GRJ Group of Company</span>
          </a>
          <p className="mt-2 text-sm text-black">Created By IT Department</p>
        </div>

        {/* Links */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          
          {/* Solutions */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">Solutions</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><a className="text-black hover:text-sky-600">First Link</a></li>
              <li><a className="text-black hover:text-sky-600">Second Link</a></li>
              <li><a className="text-black hover:text-sky-600">Third Link</a></li>
            </nav>
          </div>

          {/* Email Section */}
<div className="lg:w-1/4 md:w-1/2 w-full px-4">
  <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">
    Email
  </h2>
  <nav className="list-none mb-10 space-y-2">
    <li className="flex items-center space-x-2">
      <Mail className="w-5 h-5 text-sky-600" />
      <a
        href="mailto:grjjaro529@gmail.com"
        className="text-black hover:text-sky-600"
      >
        grjjaro529@gmail.com <span className="font-medium"> HR</span>
      </a>
    </li>
    <li className="flex items-center space-x-2">
      <Mail className="w-5 h-5 text-sky-600" />
      <a
        href="mailto:grjjaro529@gmail.com"
        className="text-black hover:text-sky-600"
      >
        grjjaro529@gmail.com <span className="font-medium"> Accounting</span>
      </a>
    </li>
    <li className="flex items-center space-x-2">
      <Mail className="w-5 h-5 text-sky-600" />
      <a
        href="mailto:gjaro29@yahoo.com"
        className="text-black hover:text-sky-600"
      >
        gjaro29@yahoo.com <span className="font-medium"> Operations</span>
      </a>
    </li>
    <li className="flex items-center space-x-2">
      <Mail className="w-5 h-5 text-sky-600" />
      <a
        href="mailto:gjaro29@yahoo.com"
        className="text-black hover:text-sky-600"
      >
        gjaro29@yahoo.com <span className="font-medium"> Marketing & Sales</span>
      </a>
    </li>
  </nav>
</div>


          {/* Company */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">Company</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><a href="https://www.facebook.com/p/GRJ-Jaro-Pawnshop-Corp-100067998025076/" className="text-black hover:text-sky-600">GRJ Jaro Pawnshop</a></li>
              <li><a href="https://www.facebook.com/p/GRJ-JARO-Readymix-Corp-100064041009731/" className="text-black hover:text-sky-600">GRJ Jaro Readymix</a></li>
              <li><a href="https://kansaiueno.grj.com.ph/index.php" className="text-black hover:text-sky-600">Kansai Ueno</a></li>
              <li><a className="text-black hover:text-sky-600">South4 Builders</a></li>
              <li><a href="https://jaromed.com.ph/" className="text-black hover:text-sky-600">Jaromed</a></li>
            </nav>
          </div>

          {/* Law Firm */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">Law Firm</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><a href="https://www.google.com/maps/place/PJP+Law+Offices/..." target="_blank" className="text-black hover:text-sky-600 font-bold">PALAD JARO-PALAD LAW OFFICES</a></li>
              <li><a href="https://www.google.com/maps/place/PJP+Law+Offices/..." target="_blank" className="text-black hover:text-sky-600">Unit 2-D LCVM (Lucila) Building, Km 31 Aguinaldo Highway</a></li>
              <li><a href="https://www.google.com/maps/place/PJP+Law+Offices/..." target="_blank" className="text-black hover:text-sky-600">Pasong Tala, Brgy. Zone IV, Dasmariñas City, Cavite</a></li>
              <li><a className="text-black ">Telefax: (046) 416-5211</a></li>
              <li><a className="text-black ">Mobile: +639257120756</a></li>
            </nav>
          </div>
        </div>
      </div>

      <div class="bg-sky-800">
    <div class="container mx-auto py-2 px-2 flex flex-wrap flex-col sm:flex-row">
      <p class="text-black text-sm text-center sm:text-left">© 2025 GRJ Group of Company —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-black ml-1" target="_blank">@grj.com.ph</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-black">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-black">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-black">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-black">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
  )
}

export default Footer
