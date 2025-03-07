import React from 'react'
import { Check } from 'lucide-react'

const AboutWhy = () => {

  const facilities = [
    "PRIMO 'H' Beam Fully Automatic Welding Line | Lincoln Power Source | SAW welding capability to weld both side simultaneously | 2500 MT / month also has the ability to weld curved Beams.",
    "CNC oxy fuel machine for plate cutting | Portable Plasma cutting.",
    "Full length Hydraulic shearing machine- capacity 10 MT/hour.",
    "Container mounted Standing seam roll forming machine.",
    "Fully automatic C/Z purlin forming machine.",
    "ADOR make MIG welding machines.",
    "Shot Blasting facility for surface preparation.",
    "Air less spray painting system.",
    "Certified welders and fitters."
  ];


  const manufacturing = [
    {
      image: "/manufacturing1.png",
      title: "PRIMO 'H' Beam fully automatic weldingline"
    },
    {
      image: "/manufacturing2.png",
      title: "Hydraulic Shearing Machine"
    },
    {
      image: "/manufacturing3.png",
      title: "Container mounted Standing Seam Profiling machine"
    },
    {
      image: "/manufacturing4.png",
      title: "Fully Automatic Z/C Purlin forming machine."
    }
  ];


  const phases = [
    {
      number: "1",
      title: "Project Conception & Initiation",
      color: "text-blue-800",
      borderColor: "border-blue-800",
      items: ["Project charter", "Project Initiation"]
    },
    {
      number: "2",
      title: "Project Definition & Planning",
      color: "text-amber-600",
      borderColor: "border-amber-500",
      items: [
        "Scope & Budget",
        "Work Breakdown Schedule",
        "Gantt Chart",
        "Communication Plan",
        "Risk Management"
      ]
    },
    {
      number: "3",
      title: "Project Launch or Execution",
      color: "text-sky-400",
      borderColor: "border-sky-300",
      items: ["Status & Tracking", "KPIs", "Quality", "Forecasts"]
    },
    {
      number: "4",
      title: "Project Performance & Control",
      color: "text-green-600",
      borderColor: "border-green-500",
      items: [
        "Objectives",
        "Quality Deliverables",
        "Efforts & Cost Tracking",
        "Performance"
      ]
    },
    {
      number: "5",
      title: "Project Close",
      color: "text-purple-700",
      borderColor: "border-purple-600",
      items: ["Post Mortem", "Project Punchlist", "Reporting"]
    }
  ];


  return (
    <>
      {/* Hero Section with Background Image */}

      <div className="relative w-full h-80 md:h-96">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/aboutwhy.png')", // Replace with your actual image path
            backgroundPosition: "center"
          }}
        >
          {/* Dark overlay to make text more readable */}
          <div className="absolute inset-0 bg-black opacity-46"></div>
        </div>

        {/* Content container */}
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Strong. Reliable. Engineered for Excellence.</h1>

          {/* Breadcrumb navigation */}
          <div className="flex items-center text-lg">
            <a href="/" className="hover:underline">About Us</a>
            <span className="mx-2">/</span>
            <span className="text-[#8CB5FF] font-bold text-xl">Why Us ?</span>
          </div>
        </div>
      </div>



      {/* About us */}


      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left content area */}
            <div className="order-2 lg:order-1">
              <div className="text-orange-500 font-medium mb-2">ABOUT US</div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Engineering Excellence,<br />
                Delivering Quality
              </h2>

              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  BlueLadder EPC Solutions was established in the year 2017 based in
                  Central India with a vision to cater industries by providing EPC turnkey
                  solutions to the infrastructure domain.
                </p>

                <p>
                  From a mainstream PEB manufacturer, we have evolved as an EPC solution
                  provider. We provide end-to-end solutions, from conceptualization,
                  feasibility study, designing, production, and erection to automation.
                </p>
              </div>
            </div>

            {/* Right image area */}
            <div className="order-1 lg:order-2">
              <div className=" overflow-hidden">
                <img
                  src="/aboutus.png"
                  alt="Modern architectural house with glass walls"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/*WHY US ? */}

      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left image area */}
            <div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/about-us-img.png"
                  alt="Construction workers in orange safety vests and hard hats"
                  className="w-96 h-auto object-cover"
                />
              </div>
            </div>

            {/* Right content area */}
            <div>
              <div className="text-orange-500 font-medium mb-2">WHY US?</div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Crafting structures<br />
                that lasts a lifetime
              </h2>

              <p className="text-gray-700 mb-8">
                We are a leading manufacturer of Pre-Engineered Buildings and roofing
                products. Our structures are ideal for warehouses, factories, commercial
                buildings, airports, metro stations, poultry farms, parking sheds, and
                much more.
              </p>

              {/* Features list with check icons */}
              <div className="bg-[#E9F7FE] rounded-lg p-6 relative overflow-hidden">
                {/* Background image in bottom right corner */}
                <div className="absolute bottom-0 right-5 w-24 h-24">
                  <img
                    src="/about-us-img-bg.png"
                    alt="Background decoration"
                    className="w-full h-full object-cover"
                  />
                </div>

                <ul className="space-y-3 relative z-10">
                  <li className="flex items-center">
                    <div className="bg-[#345CA5] rounded-full p-1 mr-3">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">On role Erection Team with Modernized Equipment</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#345CA5] rounded-full p-1 mr-3">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Optimum Cost</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#345CA5] rounded-full p-1 mr-3">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Architectural Flexibility</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#345CA5] rounded-full p-1 mr-3">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">In house Designing & Engineering Services</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#345CA5] rounded-full p-1 mr-3">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Functional Versatility</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#345CA5] rounded-full p-1 mr-3">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Premium products</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Top line facilities */}

      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Top of the line facility</h1>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-3/5">
            <ul className="space-y-4">
              {facilities.map((facility, index) => (
                <li key={index} className="flex items-start">
                  <div className="min-w-6 h-6 rounded-full bg-[#345CA5] flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{facility}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-2/5 mt-6 md:mt-0">
            <img
              src="/why-us-img.png"
              alt="Urban skyline with high-rise buildings"
              className="w-[700px] h-96 grayscale object-cover opacity-40"
            />
          </div>
        </div>
      </div>


      {/* Who we are */}

      <div className="max-w-6xl mx-auto p-4 bg-white">
        <div className="text-center mb-2">
          <p className="text-orange-400 text-sm">Who we are?</p>
          <h1 className="text-3xl font-bold mb-6">Innovating Structures, Building Futures</h1>
        </div>

        <div className="mb-10">
          <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            With an efficient in-house engineering team and project management team, BlueLadder EPC Solutions is fully equipped to transform the client's vision
            into reality. Since the inception of BlueLadder EPC Solutions, it has successfully completed various industry-specific projects with leading firms across
            India. We come to the table as partners rather than service providers, combining our business acumen and entrepreneurial vision with amazing technical
            expertise.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-0">
          {phases.map((phase, index) => (
            <div key={index} className="flex flex-col items-center w-full sm:w-1/2 md:w-1/5 mb-8">
              <div className="relative mb-2">
                <div className={`rounded-full border-4 ${phase.borderColor} w-24 h-24 flex items-center justify-center mb-1`}>
                  <div className="absolute -top-6 font-bold text-2xl">{phase.number}</div>
                  <div className="text-center px-2">
                    <p className={`font-medium text-xs ${phase.color}`}>{phase.title}</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                {phase.items.map((item, idx) => (
                  <p key={idx} className={`text-xs ${phase.color} mb-1`}>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Manufacturing Facility */}

      <div className="max-w-8xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Manufacturing Facility</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {manufacturing.map((manufacturing, index) => (
            <div key={index} className="border-gray-500 rounded-md overflow-hidden shadow-sm">
              <img
                src={manufacturing.image}
                alt={manufacturing.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-gray-800 text-lg">{manufacturing.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>




    </>
  )
}

export default AboutWhy
