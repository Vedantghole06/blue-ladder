import React from 'react'

const AboutPeb = () => {

    return (
        <>
            {/* Hero Section with Background Image */}

            <div className="relative w-full h-80 md:h-96">
                {/* Background image with overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/peb-hero.png')", // Replace with your actual image path
                        backgroundPosition: "center"
                    }}
                >
                    {/* Dark overlay to make text more readable */}
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                </div>

                {/* Content container */}
                <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                    {/* Main heading */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Pre-Engineered Buildings – Redefining Modern Construction</h1>

                    {/* Breadcrumb navigation */}
                    <div className="flex items-center text-lg">
                        <span className="hover:underline">About Us </span>
                        <span className="mx-2">/</span>
                        <span className="text-[#8CB5FF] font-bold text-xl">What is Peb</span>
                    </div>
                </div>
            </div>

            {/* Main content container */}

            <div className="relative w-full min-h-screen">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(/bg-pattern.jpeg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(0.9)',
                        opacity: 0.1
                    }}
                />


                <div className="w-full max-w-7xl mx-auto bg-white p-4 md:p-8">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold text-gray-800 mb-8">What is PEB?</h1>
                    </div>

                    <div className="text-gray-600 leading-relaxed">
                        <p className="mb-4 text-lg">
                            <span className="text-blue-500 hover:underline">What is PEB? Pre-engineered Building is referred to as PEB.</span> Pre-engineered Buildings are steel buildings system that was created and manufactured at a factory before being brought to the location for assembly. Because of its affordability, toughness, and adaptability, PEB structures are frequently employed for institutional, commercial, and industrial reasons.
                        </p>

                        <p className="mb-4 text-lg">
                            The ability to be developed and manufactured to satisfy particular demands and specifications is one of the main advantages of PEB construction. This means that PEB (Pre-engineered buildings), whether for a warehouse, manufacturing facility, office building, or other forms of construction, can be specifically tailored to meet the needs of a certain project. PEB buildings are renowned for both their adaptable design and their speedy construction.
                        </p>

                        <p className="mb-4 text-lg">
                            Construction can be finished more quickly than with conventional building techniques because the components are manufactured at a factory and then shipped to the site.
                        </p>

                        <p className="mb-4 text-lg">
                            Due to this, PEB buildings are a desirable option for businesses that must begin operations as soon as possible. Overall, PEB structures are a practical, long-lasting, and flexible alternative for a variety of building tasks.
                        </p>
                    </div>
                </div>


                <div className="w-full bg-gray-50 min-h-screen p-4 md:p-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="pr-0 md:pr-4">
                                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                                    Concept for Pre Engineered<br />
                                    Buildings (PEB)
                                </h1>

                                <ul className="list-disc text-lg pl-6 space-y-6 text-gray-600">
                                    <li>
                                        <span>PEB (Pre-engineered Building) are a concept for buildings that have superior conventional fabrication, high structural strength, and economical design. It lowers the strain on the foundation, which also lowers the price of civil construction.</span>
                                    </li>

                                    <li>
                                        <span>PEB buildings that are made to order according to the client's requirements and tapering parts. Effectively designed pre-engineered buildings (PEBs) can be up to 30% lighter than conventional steel constructions.</span>
                                    </li>

                                    <li>
                                        <span>Blueladder EPC has all the newest & modern technological equipment. International structural standards form the basis of the complete design of Columns, Rafters, and other Accessories, which also has highly technical welding and high-quality manufacturing.</span>
                                    </li>

                                    <li>
                                        <span className="text-gray-600 hover:text-blue-500">These PEB components</span> are essentially created at our factory site, using high tensile steel after gathering all relevant data about the shed or building or structure and the clients requirements.
                                    </li>
                                </ul>
                            </div>

                            <div className="flex items-center justify-center mt-6 md:mt-0">
                                <div className="w-full max-w-lg">
                                    <img
                                        src="/peb-concept.png"
                                        alt="PEB building diagram"
                                        className="w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 relative">
                    {/* Background watermark effect */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none z-0 overflow-hidden">
                        <img
                            src="/bg-pattern.jpeg"
                            alt=""
                            width={800}
                            height={800}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="relative z-10">
                        {/* Main content grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Left column with images */}
                            <div className="space-y-2">
                                {/* Top grid of 3 images */}
                                <div className="grid grid-cols-2 gap-2">
                                    {/* Left image - takes full height */}
                                    <div className="col-span-1">
                                        <img
                                            src="/peb-left-img.jpg"
                                            alt="PEB exterior building view"
                                            width={200}
                                            height={100}
                                            className="w-full h-full object-cover rounded-sm"
                                        />
                                    </div>
                                    {/* Right column with two stacked images */}
                                    <div className="col-span-1 flex flex-col gap-2">
                                        <div className="h-1/2">
                                            <img
                                                src="/peb-right-img1.jpg"
                                                alt="PEB building with red accent"
                                                width={300}
                                                height={50}
                                                className="w-full h-full object-cover rounded-sm"
                                            />
                                        </div>
                                        <div className="h-1/2">
                                            <img
                                                src="/peb-right-img2.png"
                                                alt="PEB interior steel structure"
                                                width={300}
                                                height={50}
                                                className="w-full h-full object-cover rounded-sm"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom larger image */}
                                <div>
                                    <img
                                        src="/peb-bottom-img.png"
                                        alt="PEB steel frame structure"
                                        width={200}
                                        height={100}
                                        className="w-full h-auto object-cover rounded-sm"
                                    />
                                </div>
                            </div>

                            {/* Right column with text content */}
                            <div className="space-y-4">
                                <p className="text-base md:text-lg text-gray-800">
                                    Pre-engineered Buildings (PEBs) are a common option for construction projects for a variety of factors.
                                </p>

                                <ul className="list-disc pl-5 space-y-4">
                                    <li className="text-base text-gray-800">
                                        <span className="font-medium">Cost-effectiveness:</span> Compared to conventional building techniques,
                                        PEB construction is typically more affordable. This is due to the fact that the components are
                                        manufactured in a factory, allowing for more productive production and lower labor costs.
                                    </li>

                                    <li className="text-base text-gray-800">
                                        <span className="font-medium">Durability:</span> PEB structures are renowned for their longevity and
                                        durability. They are built to withstand harsh weather conditions and other difficulties using steel of
                                        the highest quality.
                                    </li>

                                    <li className="text-base text-gray-800">
                                        <span className="font-medium">Versatility:</span> PEB structures can be altered to accommodate a
                                        project's unique requirements. This means that they can be applied to a variety of settings, such as
                                        warehouses, factories, offices, and more.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Bottom additional bullet points - full width */}
                        <ul className="list-disc pl-5 mt-6 space-y-4">
                            <li className="text-base text-gray-800">
                                <span className="font-medium">Faster construction:</span> PEB construction can be finished more rapidly than
                                with conventional building techniques since the components are manufactured in a factory and then shipped to
                                the site for assembly. This is especially advantageous for businesses that need to launch as soon as
                                feasible.
                            </li>

                            <li className="text-base text-gray-800">
                                <span className="font-medium">Sustainable:</span> PEB structures are a type of sustainable building. When a
                                PEB building reaches the end of its useful life, it can be disassembled, recycled, or used again. Steel is a
                                recyclable resource.
                            </li>
                        </ul>
                    </div>
                </div>



                {/* <div className="max-w-4xl mx-auto p-6 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
                        <div className="col-span-1">
                            <img
                                src="/api/placeholder/400/320"
                                alt="Steel building exterior"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="col-span-1">
                            <img
                                src="/api/placeholder/400/320"
                                alt="Steel building with red trim"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="col-span-1">
                            <img
                                src="/api/placeholder/400/320"
                                alt="Blue roof beams structure"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <img
                            src="/api/placeholder/400/320"
                            alt="Steel frame construction site"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <div className="text-gray-700 text-lg md:text-base leading-relaxed">
                        <p className="mb-4 text-lg">
                            Pre-engineered Buildings (PEBs) are a common option for construction projects for a
                            variety of factors.
                        </p>

                        <ul className="space-y-4 mb-6">
                            <li className="flex items-start">
                                <span className="mr-2 text-lg">•</span>
                                <div>
                                    <span className="font-medium text-lg">Cost-effectiveness:</span> Compared to conventional building techniques, PEB construction
                                    is typically more affordable. This is due to the fact that the components are
                                    manufactured in a factory, allowing for more productive production and lower labor
                                    costs.
                                </div>
                            </li>

                            <li className="flex items-start">
                                <span className="mr-2 text-lg">•</span>
                                <div>
                                    <span className="font-medium text-lg">Durability:</span> PEB structures are renowned for their longevity and durability. They are
                                    built to withstand harsh weather conditions and other difficulties using steel of the
                                    highest quality.
                                </div>
                            </li>

                            <li className="flex items-start">
                                <span className="mr-2 text-lg">•</span>
                                <div>
                                    <span className="font-medium text-lg">Versatility:</span> PEB structures can be altered to accommodate a project's unique
                                    requirements. This means that they can be applied to a variety of settings, such as
                                    warehouses, factories, offices, and more.
                                </div>
                            </li>
                        </ul>

                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="mr-2 text-lg">•</span>
                                <div>
                                    <span className="font-medium text-lg">Faster construction:</span> PEB construction can be finished more rapidly than with conventional building techniques since the components are
                                    manufactured in a factory and then shipped to the site for assembly. This is especially advantageous for businesses that need to launch as
                                    soon as feasible.
                                </div>
                            </li>

                            <li className="flex items-start">
                                <span className="mr-2 text-lg">•</span>
                                <div>
                                    <span className="font-medium text-lg">Sustainable:</span> PEB structures are a type of sustainable building. When a PEB building reaches the end of its useful life, it can be
                                    disassembled, recycled, or used again. Steel is a recyclable resource.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>


            <div className="relative w-full max-w-7xl mx-auto px-6 py-10 text-gray-700">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 z-0 opacity-10"
                    style={{
                        backgroundImage: "url(/pre-engg-bg.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        opacity: 0.1
                    }}
                />

                {/* Content */}
                <div className="relative z-10 ">
                    <h1 className="text-2xl md:text-3xl font-bold text-center mb-10 text-black">
                        Innovation in Construction: Advancing Building Techniques with PEB
                    </h1>

                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <span className="text-lg mr-2 mt-0.5">•</span>
                            <div>
                                <span className="font-medium text-lg">Energy Efficiency:</span> Sustainability is being taken into account heavily when planning construction projects. In this regard, PEB constructions shine because they make it simple to incorporate energy-saving measures like insulation, natural lighting, and ventilation systems. These improvements lower energy use, which lowers operating expenses and lowers the carbon footprint.
                            </div>
                        </li>

                        <li className="flex items-start">
                            <span className="text-lg mr-2 mt-0.5">•</span>
                            <div>
                                <span className="font-medium text-lg">Expandability and Portability:</span> PEB structures have the benefit of being expandable in the future. As your business expands, PEB systems may be readily updated and expanded, whether you need to add new sections or increase the floor area. Additionally, because these buildings are modular in design, they can be disassembled and relocated as needed, making them a desirable alternative for companies that may need to relocate their offices in the future.
                            </div>
                        </li>

                        <li className="flex items-start">
                            <span className="text-lg mr-2 mt-0.5">•</span>
                            <div>
                                <span className="font-medium text-lg">Design Flexibility:</span> Contrary to popular belief, PEB structures are not constrained to simple box-like geometries. These structures provide an astonishing degree of design versatility, accommodating many architectural styles and practical needs. Large clear spans, multi-story structures, or custom configurations can all be simply added to PEB systems to suit your unique design requirements.
                            </div>
                        </li>

                        <li className="flex items-start">
                            <span className="text-lg mr-2 mt-0.5">•</span>
                            <div>
                                <span className="font-medium text-lg">Safety and Structural Integrity:</span> These factors are prioritized while designing PEB structures in order to endure harsh environmental conditions. These buildings are built to endure seismic pressures, strong winds, and large snow loads, giving residents peace of mind and protecting priceless possessions. High-strength steel, which is what is used in PEBs, guarantees a sturdy framework that will stand the test of time.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AboutPeb
