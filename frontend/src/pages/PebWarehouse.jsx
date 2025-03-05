import React from 'react'

const PebWarehouse = () => {

    const services = [
        { id: 1, name: 'Pre Engineered Buildings' },
        { id: 2, name: 'PEB Warehouse' },
        { id: 3, name: 'PEB Sheds' },
        { id: 4, name: 'Poultry Sheds' },
        { id: 6, name: 'PEB Mills' },
        { id: 5, name: 'PEB Multi Storey Building' },
        { id: 7, name: 'PEB Spining & Grinding Sheds' },
        { id: 8, name: 'Ethanol Sheds ' },
        { id: 9, name: 'PEB Metro Stations ' },
    ];

    return (
        <>
            {/* Hero Section with Background Image */}
            <div className="relative w-full h-80 md:h-96">
                {/* Background image with overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/src/assets/peb-warehouse-hero.png')", // Replace with your actual image path
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Dark overlay to make text more readable */}
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                </div>

                {/* Content container */}
                <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                    {/* Main heading */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        PEB Warehouse
                    </h1>

                    {/* Breadcrumb navigation */}
                    <div className="flex items-center text-lg">
                        <span className="hover:underline">Product & Services </span>
                        <span className="mx-2">/</span>
                        <span className="hover:underline">Pre Engineered Steel Structures </span>
                        <span className="mx-2">/</span>
                        <span className="text-[#8CB5FF] font-bold text-xl">PEB Warehouse</span>
                    </div>
                </div>
            </div>



            {/* Main Content */}
            <div className="min-h-screen w-full bg-gray-50 relative overflow-hidden">
                <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
                    {/* Top Section with Card and Image */}
                    <div className="flex flex-col md:flex-row gap-6 mb-8">
                        {/* Services Card */}
                        <div className="bg-white rounded-4xl shadow-md p-6 md:w-1/3">
                            <h2 className="text-xl font-bold mb-6">Pre Engineered Steel Structures</h2>

                            <div className="space-y-6">
                                {services.map((service) => (
                                    <div key={service.id} className="border-b pb-4">
                                        <div className="flex items-center">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                                <span className="text-blue-600 text-sm">✓</span>
                                            </div>
                                            <span className="text-gray-700">{service.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Construction Image */}
                        <div className="md:w-2/3">
                            <img
                                src="/src/assets/peb-warehouse-img1.png"
                                alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
                                className="w-full h-[460px] rounded-4xl object-cover"
                            />

                            <p className='leading-base mt-6'>
                                BlueLadder, Top Warehouse construction Company in India, is at the forefront of the industry with its outstanding skills and unique solutions. BlueLadder has built its reputation as a dependable and customer-focused partner by delivering high-quality PEB warehouses. They cater to different project requirements with the latest technology and a competent crew, ensuring timely and cost-effective delivery. Whether it’s a small-scale storage facility or a major distribution centre, BlueLadder’s commitment to excellence shines through in every project they take on, making them the chosen choice for warehouse construction needs in India.
                            </p>
                        </div>
                    </div>
                </div>



                <div className="relative w-full max-w-6xl mx-auto px-4 py-8 md:px-8 lg:px-12 overflow-hidden">
                    {/* Background image in the upper right corner */}
                    <div
                        className="absolute top-0 right-0 w-1/2 h-full opacity-70 pointer-events-none z-0"
                        style={{
                            backgroundImage:
                                "url(/src/assets/peb-warehouse-img2.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />

                    <div className="relative z-10">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                            Rapid and Affordable Warehouse Construction Solutions by Blueladder EPC, India's Premier PEB Warehouse
                            Manufacturer
                        </h1>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3 w-3 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <p className="ml-4 text-sm md:text-base text-gray-800">
                                    Experience the Speed and Affordability of PreEngineered Warehouses.
                                </p>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3 w-3 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <p className="ml-4 text-sm md:text-base text-gray-800">
                                    Discover the power of PreAEngineering with India's leading manufacturer of top-quality PEB warehouses. Our
                                    innovative solutions redefine the speed and cost-effectiveness of warehouse construction for industrial
                                    and commercial applications.
                                </p>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3 w-3 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <p className="ml-4 text-sm md:text-base text-gray-800">
                                    Tailored Warehouse Designs to Match Your Requirements: We understand that every client has unique needs.
                                    That's why we offer a diverse range of design options to customize your warehouse exactly the way you
                                    envision it. From layout to aesthetics, we bring your ideas to life with precision and excellence.
                                </p>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3 w-3 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <p className="ml-4 text-sm md:text-base text-gray-800">
                                    Lightweight Construction for Easy Installation and Future Expansions: Our Pre engineered warehouses
                                    feature lightweight construction, ensuring hassle-free installation and the flexibility to accommodate
                                    future expansions. Experience the convenience of a rapidly assembled structure without compromising on
                                    durability and strength.
                                </p>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3 w-3 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <p className="ml-4 text-sm md:text-base text-gray-800">
                                    Aesthetically Appealing and Modular Warehouse Solutions: At Blueladder EPC, we believe that function
                                    should never come at the expense of style. Our prefabricated warehouses boast aesthetically appealing
                                    designs and a modular structure, blending seamlessly into any environment while offering unmatched
                                    functionality.
                                </p>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3 w-3 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <p className="ml-4 text-sm md:text-base text-gray-800">
                                    Experience the revolution in warehouse construction with Blueladder's innovative and modern technological
                                    solutions. Contact us today to explore a new era of rapid and reliable warehouse development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="min-h-screen p-4 md:p-8 lg:p-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8">
                            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                                The Ultimate Modern Storage Solution
                            </h1>
                            <h2 className="text-lg md:text-xl text-gray-700">Engineered Metal Building Warehouse</h2>
                        </div>

                        <div className="space-y-4 text-gray-700 text-sm md:text-base mb-10">
                            <p>
                                PEB Warehouse construction Company are usually made warehouses from a steel frame, with exterior walls and
                                roof panels that are also made from steel. The steel components are prefabricated in a factory and then
                                shipped to the site, where they are assembled using bolts or welds.
                            </p>
                            <p>
                                This allows the building to be erected quickly and with minimal on-site construction. PEB warehouses are
                                also often designed to be easily expandable, so they can be easily modified or extended as the needs of the
                                business change.
                            </p>
                            <p>
                                Blueladder EPC is India's Leading{" "}
                                <span className="underline font-medium">
                                    Pre-Engineered Warehouse Manufacturer for Commercial & Industrial Storage
                                </span>
                                . We stand as the premier warehouse manufacturer in India, specializing in pre-engineered warehouses
                                tailored to meet unique client needs while ensuring unrivaled durability.
                            </p>
                            <p>
                                Our warehouses are meticulously constructed using lightweight yet robust materials, making them the perfect
                                choice for both small and large industries. We at Blueladder take pride in offering these prefabricated
                                structures at highly competitive prices, without compromising on performance and storage convenience for our
                                esteemed clients.
                            </p>
                            <p>
                                With the industrial landscape advancing rapidly and production levels on the rise, the demand for
                                prefabricated warehouses has experienced a significant upswing. At Blueladder, we are committed to meeting
                                the specific requirements of every client and guaranteeing maximum performance and efficiency with our
                                state-of-the-art, factory-built prefab & preengineered warehouses.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center mb-6">Top of the line facility</h3>

                            <div className="space-y-4">
                                {[
                                    "Humanitarian Aid Warehouses: Responding to Global Emergency and Disasters",
                                    "Mining and Construction Material Storage: Organized Inventory for Resource Industries",
                                    "Automotive Parts Warehousing: Streamlining Supply Chains for Manufacturers",
                                    "Aerospace and Aviation Warehouses: Safekeeping of Aircraft Components",
                                    "Healthcare and Pharmaceutical Warehousing: Storing Medicines and Medical Supplies",
                                    "Smart Warehouses: Integration of IoT and Automation for Enhanced Efficiency",
                                    "Retail Warehouses: Supporting Modern Retail Operations and Inventory Management",
                                    "Textile and Fashion Industry Warehousing: Storing and Distributing Apparel Products",
                                    "Food and Beverage Distribution Centers: Meeting Demands in the Food Industry",
                                    "Customizable and Sustainable Warehouses: Eco-friendly Solutions for a Greener Future.",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-5 h-5 rounded-full border border-blue-500 flex items-center justify-center">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            </div>
                                        </div>
                                        <p className="ml-3 text-sm md:text-base text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </>
    )
}

export default PebWarehouse
