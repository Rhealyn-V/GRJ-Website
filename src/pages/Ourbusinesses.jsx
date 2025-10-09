import React from "react";
import { assets } from "@/assets/assets";
import { ExternalLink } from "lucide-react";

function OurBusinesses() {
  const businesses = [
    {
      title: "GRJ Enterprise",
      logo: assets.Enterprise,
      background: assets.buildingLogo,
      textColor: "text-sky-700",
      link: "",
      description:
        "GRJ Enterprise provides innovative IT and business solutions including distribution, logistics coordination, and development operations.",
    },
    {
      title: "GRJ ReadyMix",
      logo: assets.Readymix,
      background: assets.Readymix_background,
      textColor: "text-emerald-700",
      link: "https://www.facebook.com/p/GRJ-JARO-Readymix-Corp-100064041009731/",
      description:
        "GRJ ReadyMix is a trusted concrete supplier committed to providing high-quality ready-mix concrete and logistics services for various construction projects.",
    },
    {
      title: "Jaromed Medical Clinic",
      logo: assets.Jaromed,
      background: assets.Jaromed_background,
      textColor: "text-blue-700",
      link: "https://jaromed.com.ph/",
      description:
        "Jaromed Medical Clinic provides quality healthcare services with modern facilities and a team of professional doctors and nurses dedicated to promoting patient wellness and care.",
    },
    {
      title: "South4 Builders",
      logo: assets.South4Builders,
      background: assets.South4buildersbackground,
      textColor: "text-red-700",
      link: "",
      description:
        "South4 Builders is a trusted construction company offering end-to-end solutions for residential, commercial, and infrastructure projects with a focus on quality, safety, and innovation.",
    },
    {
      title: "GRJ Pawnshop",
      logo: assets.Pawnshop,
      background: assets.Pawnshop_background,
      textColor: "text-red-700",
      link: "/pawnshop",
      description:
        "GRJ Pawnshop offers reliable financial services including pawning, remittance, and money transfer, providing convenient solutions to customers’ daily financial needs.",
    },
    {
      title: "Kansai Ueno",
      logo: assets.KansaiUeno,
      background: assets.kansai,
      textColor: "text-green-700",
      link: "https://kansaiueno.grj.com.ph/index.php",
      description:
        "Kansai Ueno specializes in production and quality assurance, ensuring top-notch industrial products and services for various manufacturing sectors across the region.",
    },
  ];
 
  return (
    <section>
      <div className="text-center text-white py-20 bg-cover bg-center" id="ourbusinesses"
      style={{ backgroundImage: `url(${assets.bluebackground})` }}
    >
      <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-black mt-12">
        Our Businesses
      </h1>
    </div>
    <div className="max-w-6xl mx-auto px-6 md:px-50">
        <p className="text-lg leading-relaxed text-justify mt-8">
          <strong>GRJ JARO ENTERPRISE INC.</strong> is one of the leading
          distributors of cement and ready-mix in Cavite, Tagaytay, Laguna,
          Batangas, and Manila. It is also one of the most trusted pawnshops and
          foreign exchange dealers (FXD)/money changers and remittance agents
          (RA) in the country. With its professional and competent staff, the
          company is known for providing the highest level of customer service
          not only in Southern Tagalog and Greater Manila but throughout the
          Philippines.
        </p>

        <p className="text-lg leading-relaxed text-justify mt-6">
          <strong>GRJ JARO Enterprise INC.</strong> began as a cement
          distributor in 1989 under the name <strong>JDC CEMENT</strong> during
          the peak of the cement shortage in the Philippines. It started with an
          average monthly sale of twenty thousand (20,000) bags, which steadily
          increased each year.
        </p>

        <p className="text-lg leading-relaxed text-justify mt-6">
          In 1995, the company ventured into the pawnshop business under the
          name <strong>GRJ JARO PAWNSHOP</strong>. It began with one branch in
          Jaro, Leyte, and has since expanded to more than 200 branches
          nationwide.
        </p>

        <p className="text-lg leading-relaxed text-justify mt-6">
          In 2005, the company expanded its business into ready-mix concrete
          production under the name <strong>GRJ JARO READYMIX</strong>. It began
          with one batching plant in Dasmariñas, Cavite, and now operates over
          five batching plants strategically located across Cavite, Laguna,
          Batangas, and Manila.
        </p>
    </div>

      <div className="max-w-6xl mx-auto space-y-12 mt-8">
        {businesses.map((biz, index) => (
          <div key={index}>
             {index === 0 && <hr className="mb-10 border-gray-300" />}
            <div className="grid md:grid-cols-2 items-center gap-10">
                <div
                className="rounded-xl h-64 bg-cover bg-center shadow-md"
                style={{
                  backgroundImage: `url(${biz.background})`,
                }}
              />
              {/* Left: Logo (centered) + Title + Description */}
              <div className="text-left">
                <div className="w-full flex justify-center mb-4">
                  <img
                    src={biz.logo}
                    alt={biz.title}
                    className="w-56 h-auto object-contain"
                  />
                </div>

                <a
                  href={biz.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl font-bold hover:underline hover:opacity-80 flex items-center gap-1 ${biz.textColor}`}
                >
                  {biz.title}
                  {biz.link && <ExternalLink size={18} className="opacity-70" />}
                </a>

                <p className="text-gray-700 mt-3 max-w-md">{biz.description}</p>
              </div>

              {/* Right: Background Image */}
              
            </div>

            {index !== businesses.lenght - 1 && <hr className="my-10 border-gray-300" />}
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurBusinesses;
