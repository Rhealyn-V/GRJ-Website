import React, { useState } from "react";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import { assets } from "../../assets/assets";

function General_information() {
  const infoData = [
    {
      group: "Company Overview",
      sections: [
        {
          title: "Company Background",
          description: [
            "GRJ JARO ENTERPRISE INC. is one of the leading distributors of cement and ready-mix in Cavite, Tagaytay, Laguna, Batangas and Manila and is one of the most trusted Pawnshop and Foreign Exchange Dealer (FXD)/Money Changer & Remittance Agent (RA). The Company, with its professional and competent staff, is well known in providing the highest level of quality customer service not only in Southern Tagalog and greater Manila but also in the entire Country.", 

            "GRJ JARO Enterprise INC., started as Cement Distributor in 1989 under the name of JDC CEMENT during the peak of cement shortage in the Philippines. It started with an average monthly sale of Twenty Thousand (20,000) bags which increased steadily every year.",

            "In 1995, the Company ventured into the Pawnshop business under the name of GRJ JARO PAWNSHOP. It started with one (1) branch in Jaro, Leyte and has now expanded to more than 200 branches nationwide.",

            "In 2005, the Company expanded its business into Ready-Mix under the name of GRJ JARO READYMIX. It started with one (1) batching plant in Dasmariñas, Cavite and has now expanded to more than 5 batching plants strategically located in Cavite, Laguna, Batangas and Manila.",

            "GRJ JARO PAWNSHOP Corp. is a private family corporation primarily engaged in pawn brokering and is considered to be one of the BEST,TRUSTED most reliable, fastest-growing pawnshop in Southern Tagalog and greater Manila area. Today, after more than 15 years in the industry, GRJ JARO PAWNSHOP Corp. offers the following services such as, Bills Payment, Globe BPI, EC-Pay & E-Load, international money remittance, foreign currency exchange and Bayad Center in all its branches.",

            "GRJ JARO PAWNSHOP Corp. is happy to announce to our valued customers that we are now an exclusive partner of M LHUILLIER KWARTA PADALA in Southern Luzon.",

            "As reported in its 2005 sales volume of 1,324.094 (40kg/bag), GRJ JARO ENTERPRISE INC.’s sales volume increased to 3,928,688 in 2009. This outstanding increase of sales led to the further professionalizing of the Company’s office staff in preparation for further development and expansion of its business",

            "At present, GRJ JARO READYMIX CORP. operates with a total of 32 mixer trucks and 2Pumpcrete truck 5 Bulk Carrier.", 

            "Over the years, the Company continues to grow because of the loyalty and passion of the people behind it, its employees and staff. GRJ JARO ENTERPRISE INC. follows high standards of care for health, safety and training of employees and assures its capability to provide stability and quality with knowledgeable and responsible employees to all its customers.",
          ],
        },
        {
          title: "Values",
          description:
            "We have a rich history of excellence and continuous growth over the years.",
        },
      ],
    },
    {
      group: "Goals",
      sections: [
        {
          title: "Mission",
          description:
            "We provide construction materials and warehousing facilities using state-of-the-art technology...",
        },
        {
          title: "Vision",
          description:
            "We envision being the leading infrastructure builder, capturing 5% market share by 2025.",
        },
      ],
    },
    {
      group: "Other Businesses",
      sections: [
        {
          title: "Readymix",
          description:
            "We provide construction materials and warehousing facilities using state-of-the-art technology...",
        },
        {
          title: "Jaromed",
          description:
            "We envision being the leading infrastructure builder, capturing 5% market share by 2025.",
        },
         {
          title: "South4 Builders",
          description:
            "We provide construction materials and warehousing facilities using state-of-the-art technology...",
        },
        {
          title: "Kansai Ueno",
          description:
            "We envision being the leading infrastructure builder, capturing 5% market share by 2025.",
        },
         {
          title: "Pawnshop",
          description:
            "We envision being the leading infrastructure builder, capturing 5% market share by 2025.",
        },
      ],
    },
    {
      group: "Suppliers",
      sections: [
        {
          title: "Eagle Cement Corporation",
          description:
            "We provide construction facilities using state-of-the-art technology...",
          Image: assets.eaglecement,
        },
       
      ],
    },

    {
      group: "Commitments",
      sections: [
        {
          title: "Continuous Improvement",
          description:
            "We are committed to improving processes, services, and customer experience.",
        },
        {
          title: "Occupational Health and Safety",
          description:
            "We are dedicated to providing a safe and healthy working environment.",
        },
      ],
    },
    {
      group: "Workshop Equipments",
      sections: [
        {
          title: "Tooling",
          description:
            "We are committed to improving processes, services, and customer experience.",
        },
        {
          title: "Welding Machine",
          description:
            "We are dedicated to providing a safe and healthy working environment.",
        },
        {
          title: "Compressor and greasers",
          description:
            "We are committed to improving processes, services, and customer experience.",
        },
        {
          title: "Tire Changing equipment",
          description:
            "We are dedicated to providing a safe and healthy working environment.",
        },
        {
          title: "Fully stock spare parts store",
          description:
            "We are dedicated to providing a safe and healthy working environment.",
        },


      ],
    },
  ];

  const [openGroups, setOpenGroups] = useState({});
  const [collapsed, setCollapsed] = useState(false);

  const toggleGroup = (group) => {
    setOpenGroups((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  return (
    <div className="flex h-[calc(100vh-128px)]">
      {/* Sidebar */}
      <aside
        className={`${
          collapsed ? "w-12" : "w-64"
        } bg-white border-r border-gray-200 fixed top-16 bottom-16 overflow-y-auto transition-all duration-300`}
      >
        <div className="p-4">
          {/* Header with button on right side */}
          <div className="flex items-center justify-between mb-6 mt-6">
            {!collapsed && (
              <h2 className="text-lg font-semibold">GRJ GROUP OF COMPANIES</h2>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition"
            >
              <Menu size={20} />
            </button>
          </div>

          {!collapsed && (
            <ul className="space-y-2">
              {infoData.map((group) => (
                <li key={group.group}>
                  {/* Group Header */}
                  <button
                    onClick={() => toggleGroup(group.group)}
                    className="flex items-center justify-between w-full px-2 py-2 text-left hover:bg-gray-100 rounded-md transition"
                  >
                    <span className="font-medium text-gray-800">
                      {group.group}
                    </span>
                    {openGroups[group.group] ? (
                      <ChevronDown size={16} className="text-gray-500" />
                    ) : (
                      <ChevronRight size={16} className="text-gray-500" />
                    )}
                  </button>

                  {/* Dropdown Items */}
                  {openGroups[group.group] && (
                    <ul className="mt-2 ml-2 border-l border-gray-200 space-y-1 pl-3">
                      {group.sections.map((section) => (
                        <li key={section.title}>
                          <a
                            href={`#${section.title.replace(
                              /[^a-zA-Z0-9]/g,
                              "_"
                            )}`}
                            className="block text-gray-600 hover:text-gray-900 text-sm py-1"
                          >
                            {section.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>

      {/* Main Content */}
      {/* Main Content */}
<main
  className={`${
    collapsed ? "ml-12" : "ml-64"
  } flex-1 overflow-y-auto scrollbar-hide p-10 space-y-20 bg-gray-50 transition-all duration-300 mt-2 mb-20`}
>
  {infoData.map((group) =>
    group.sections.map((section) => (
      <section
        key={section.title}
        id={section.title.replace(/[^a-zA-Z0-9]/g, "_")}
        className="max-w-4xl mx-auto scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-20 text-left">
          {section.title}
        </h2>

        {Array.isArray(section.description) ? (
          section.description.map((para, i) => (
            <p
              key={i}
              className="text-gray-700 leading-relaxed mb-4 text-justify"
            >
              {para}
            </p>
          ))
        ) : (
          <p className="text-gray-700 leading-relaxed text-justify">
            {section.description}
          </p>
        )}

        {section.Image && (
          <div className="mt-6 flex justify-center">
            <img
              src={section.Image}
              alt={section.title}
              className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 h-auto rounded-md shadow-md"
            />
          </div>
        )}
      </section>
    ))
  )}
</main>

    </div>
  );
}

export default General_information;
