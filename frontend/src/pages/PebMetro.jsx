import React from 'react'

const PebMetro = () => {

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
                        backgroundImage: "url('/peb-metro-hero.png')", // Replace with your actual image path
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
                        PEB Metro Stations
                    </h1>

                    {/* Breadcrumb navigation */}
                    <div className="flex items-center text-lg">
                        <span className="hover:underline">Product & Services </span>
                        <span className="mx-2">/</span>
                        <span className="hover:underline">Pre Engineered Steel Structures </span>
                        <span className="mx-2">/</span>
                        <span className="text-[#8CB5FF] font-bold text-xl">PEB Metro Stations</span>
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
                                src="/peb-metro-img1.png"
                                alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
                                className="w-full h-[460px] rounded-4xl object-contain"
                            />

                            <h1 className='text-xl text-center font-bold'>PEB Metro Stations</h1>

                            <p className='leading-base mt-6'>
                                PEB Metro stations refer to the stations on a metro (or subway) system in a city that uses pre-engineered buildings (PEB) as the structural element for the construction of the stations. Pre-engineered buildings are prefabricated structures that are manufactured off-site and then assembled on-site. They are a cost-effective and efficient solution for the construction of buildings and are often used for industrial, commercial, and infrastructure projects. The use of PEB structures for metro stations allows for the rapid construction of these stations, as the prefabricated components can be easily assembled on-site.
                            </p>
                        </div>
                    </div>
                </div>


                <div className=" p-10 md:p-10 lg:p-10 rounded-lg mx-auto">
                    <h2 className="text-gray-800 text-xl md:text-2xl font-bold mb-6">Why Choose Blueladder EPC Solutions for PEB Metro Stations?</h2>

                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="text-blue-600 mr-2 mt-1 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-gray-800 text-sm md:text-base">
                                <span className="font-medium">Expertise in Metro Station PEB Construction:</span> With years of experience in the construction industry, we have honed our skills to deliver metro station projects that exceed expectations. Our dedicated team of engineers and architects specializes in PEB solutions tailored to the intricate needs of metro stations.
                            </p>
                        </div>

                        <div className="flex items-start">
                            <div className="text-blue-600 mr-2 mt-1 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-gray-800 text-sm md:text-base">
                                <span className="font-medium">Cutting-Edge Technology:</span> We harness the latest technological advancements to streamline the construction process and enhance the performance of metro stations. Our use of advanced materials and methods ensures structural integrity, durability, and energy efficiency.
                            </p>
                        </div>

                        <div className="flex items-start">
                            <div className="text-blue-600 mr-2 mt-1 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-gray-800 text-sm md:text-base">
                                <span className="font-medium">Sustainable Solutions:</span> Blueladder EPC Solutions is committed to environmentally responsible construction. We prioritize sustainable building practices, including energy-efficient designs, renewable materials, and waste reduction, to minimize the carbon footprint of metro stations.
                            </p>
                        </div>

                        <div className="flex items-start">
                            <div className="text-blue-600 mr-2 mt-1 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-gray-800 text-sm md:text-base">
                                <span className="font-medium">Timely Delivery:</span> We recognize the importance of meeting project deadlines. Our streamlined processes and efficient project management guarantee on-time delivery of your PEB metro station project, keeping your transportation network on track.
                            </p>
                        </div>

                        <div className="flex items-start">
                            <div className="text-blue-600 mr-2 mt-1 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-gray-800 text-sm md:text-base">
                                <span className="font-medium">Compliance and Safety:</span> Safety is our top priority. We adhere to all industry standards and regulations to ensure the safety of construction workers and the future users of metro stations. Our commitment to compliance minimizes risks and ensures project success.
                            </p>
                        </div>

                        <div className="flex items-start">
                            <div className="text-blue-600 mr-2 mt-1 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-gray-800 text-sm md:text-base">
                                <span className="font-medium">Customized Solutions:</span> Every metro station project is unique. Blueladder EPC Solutions works closely with clients to understand their specific requirements and tailors our PEB solutions to meet these needs, resulting in a metro station that perfectly aligns with your vision.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="p-12 text-center text-[#024965] text-lg md:text-lg">
                    <p>Are you ready to elevate your metro station project with our top-notch PEB solutions? Blueladder EPC Solutions is your trusted partner for sustainable and innovative construction. Contact us today to discuss your metro station project and discover how we can bring your vision to life.</p>
                </div>

                <div className="w-full mx-auto md:-mb-2 ">
                    {/* Train image */}
                    <div className="flex justify-center">
                        <img
                            src="/peb-metro-img2.png"
                            alt="High-speed passenger train"
                            className="w-full h-auto object-contain"
                            title="Metro transit high-speed train"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default PebMetro
