import React from 'react'

const PreEngg = () => {

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
                        backgroundImage: "url('/pre-engg-main-hero.png')", // Replace with your actual image path
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
                        Pre Engineered Steel Structures
                    </h1>

                    {/* Breadcrumb navigation */}
                    <div className="flex items-center text-lg">
                        <span className="hover:underline">Product & Services </span>
                        <span className="mx-2">/</span>
                        <span className="text-[#8CB5FF] font-bold text-xl">Pre Engineered Steel Structures</span>
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
                                src="/pre-engg-img1.png"
                                alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
                                className="w-full h-[500px] rounded-4xl shadow-md object-cover"
                            />

                            <h1 className='mt-7 text-center text-lg font-bold'>Pre Engineered Steel Building Manufacturers</h1>

                            <p className='leading-base mt-6'>
                                BlueLadder is Pre Engineered Steel Building Manufacturers and suppliers. These steel structures buildings are pre-designed and prefabricated buildings that are made from steel components. The structures are typically used for commercial, industrial, and agricultural buildings, such as warehouses, factories, barns, and aircraft hangars.
                            </p>
                        </div>

                    </div>
                </div>


                <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto p-4 gap-6">
                    {/* Left Panel - Question Section */}
                    <div className="bg-[#024965] text-white rounded-4xl p-8 flex flex-col items-center text-center md:w-1/3">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">You Still Have A Question</h2>

                        <p className="text-sm md:text-base mb-8">
                            if you cannot find answer to your question our FAQ, you can alwas contact us. web will answer you shortly!
                        </p>

                        {/* Contact Info */}
                        <div className="w-full space-y-4">
                            <div className="bg-white text-[#004258] rounded-full py-2 px-4 flex items-center">
                                <div className="bg-yellow-300 rounded-full p-2 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium">info@domain.com</span>
                            </div>

                            <div className="bg-white text-[#004258] rounded-full py-2 px-4 flex items-center">
                                <div className="bg-yellow-300 rounded-full p-2 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium">+91 0987654321</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Features */}
                    <div className="md:w-2/3">
                        <h3 className="text-xl font-semibold mb-6">Features:</h3>

                        {/* Features List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center">
                                <div className="bg-[#345CA5] rounded-full p-1 mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-white"
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
                                <span>Clear span design</span>
                            </div>

                            <div className="flex items-center">
                                <div className="bg-[#345CA5] rounded-full p-1 mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-white"
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
                                <span>Skylights</span>
                            </div>

                            <div className="flex items-center">
                                <div className="bg-[#345CA5] rounded-full p-1 mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-white"
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
                                <span>Mezzanines and loft areas</span>
                            </div>

                            <div className="flex items-center">
                                <div className="bg-[#345CA5] rounded-full p-1 mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-white"
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
                                <span>Insulation</span>
                            </div>

                            <div className="flex items-center">
                                <div className="bg-[#345CA5] rounded-full p-1 mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-white"
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
                                <span>Roll-up doors</span>
                            </div>
                        </div>

                        {/* Images */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="rounded-4xl overflow-hidden">
                                <img
                                    src="/pre-engg-img2.png"
                                    alt="Construction professional reviewing blueprints"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="rounded-4xl overflow-hidden">
                                <img
                                    src="/pre-engg-img3.png"
                                    alt="Construction workers at job site"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full max-w-6xl mx-auto">
                    {/* Components Section */}
                    <div className="px-4 py-8 md:py-12">
                        <h2 className="text-center text-2xl font-bold mb-8">Components of a Pre Engineered Steel Building Structure</h2>

                        <div className="space-y-8">
                            {/* Wall Sheet */}
                            <div className="flex">
                                <div className="flex-shrink-0 mt-1">
                                    <img src="/arrow-right.png" alt="" className='w-6 h-6'/>
                                </div>
                                <div className="ml-4">
                                   
                                    <p className="text-black mt-1">
                                       Wall Sheet: Wall sheets form the outer skin of a PEB structure, offering both aesthetic appeal and functional
                                        protection. They play a crucial role in maintaining the building's insulation, ensuring energy
                                        efficiency while safeguarding the interior from external elements.
                                    </p>
                                </div>
                            </div>

                            {/* Fascias */}
                            <div className="flex">
                                <div className="flex-shrink-0 mt-1">
                                    <img src="/arrow-right.png" alt="" className='w-6 h-6'/>
                                </div>
                                <div className="ml-4">
                                    <p className="text-black mt-1">
                                        Fascias: Fascias enhance the visual appeal of a PEB structure by providing a clean finish to the roof and wall
                                        intersections. These architectural elements also help in concealing the building's gutter and drainage
                                        systems, contributing to a seamless and polished appearance.
                                    </p>
                                </div>
                            </div>

                            {/* Cranes System */}
                            <div className="flex">
                                <div className="flex-shrink-0 mt-1">
                                    <img src="/arrow-right.png" alt="" className='w-6 h-6'/>
                                </div>
                                <div className="ml-4">
                                    <p className="text-black mt-1">
                                        Cranes System: An integral part of many PEB structures, the cranes system facilitates efficient material handling and
                                        improves the building's operational capabilities. It enables smooth movement and lifting of heavy loads,
                                        enhancing productivity in industrial settings.
                                    </p>
                                </div>
                            </div>

                            {/* Girders */}
                            <div className="flex">
                                <div className="flex-shrink-0 mt-1">
                                    <img src="/arrow-right.png" alt="" className='w-6 h-6'/>
                                </div>
                                <div className="ml-4">
                                    <p className="text-black mt-1">
                                        Girders: Girders are essential structural members that support the weight of the roof and transfer it to the
                                        columns. These horizontal beams are critical for maintaining the structural integrity and stability of
                                        the PEB, ensuring its ability to withstand loads and forces.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-[#024965] text-white">
                    <div className="container mx-auto px-10 py-12 md:py-16">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's build something great together!</h2>
                                <p className="mb-8 max-w-md">
                                    Don't wait any longer to bring your construction dreams to life. Partner with BlueLadder and experience
                                    unparalleled service and quality.
                                </p>
                                <button className="bg-[#CDB943] hover:bg-yellow-500 text-gray-800 font-medium py-2 px-6 rounded-full flex items-center">
                                    Get Free Quote
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 ml-2"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="md:w-1/2 flex justify-center md:justify-end">
                                <img
                                    src="/pre-engg-girl.png"
                                    alt="Construction professional in safety gear"
                                    className="max-h-80 -mb-16 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default PreEngg
