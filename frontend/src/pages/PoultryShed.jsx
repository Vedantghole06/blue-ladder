import React from 'react'

const PoultryShed = () => {

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
                        backgroundImage: "url('/poultry-hero.png')", // Replace with your actual image path
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
                        Poultry Shed
                    </h1>

                    {/* Breadcrumb navigation */}
                    <div className="flex items-center text-lg">
                        <span className="hover:underline">Product & Services </span>
                        <span className="mx-2">/</span>
                        <span className="hover:underline">Pre Engineered Steel Structures </span>
                        <span className="mx-2">/</span>
                        <span className="text-[#8CB5FF] font-bold text-xl">Poultry Sheds</span>
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
                                src="/poultry-img1.png"
                                alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
                                className="w-full h-[400px] rounded-4xl object-contain"
                            />

                            <h1 className="text-center mt-4 text-2xl font-bold">Pre-Engineered Poultry Sheds (PEB)</h1>

                            <p className='leading-base text-lg mt-6'>
                                When it comes to modern poultry farming, the right infrastructure plays a pivotal role in achieving optimal productivity and animal welfare. Introducing our top-of-the-line Pre-Engineered Poultry Sheds (PEB) – the ultimate solution for poultry farmers seeking excellence in construction, efficiency, and sustainability.
                                <br />
                                <br />
                                Peb (Pre-Engineered Building) poultry sheds are structures designed and manufactured using pre-engineered building techniques.                             </p>
                        </div>
                    </div>
                </div>



                <div className="relative z-10 container mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row justify-evenly">
                        {/* Left Panel - Dark Blue Card */}
                        <div className="w-full md:w-1/4 bg-[#024965] text-white rounded-4xl overflow-hidden shadow-lg">
                            <div className="p-6 relative">
                                {/* Decorative curved lines in top right */}
                                <div className="absolute top-0 right-0">
                                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M120 0C120 66.2742 66.2742 120 0 120" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                                        <path d="M120 30C120 82.4671 82.4671 120 30 120" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                                        <path d="M120 60C120 92.7107 92.7107 120 60 120" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                                    </svg>
                                </div>

                                <h2 className="text-2xl text-center font-bold mb-2">
                                    Expert Erection
                                    <br />
                                    Services 🏗️
                                </h2>

                                <p className="mb-8 text-center">
                                    Precision, safety, and efficiency in steel structure erection, scaffolding, and heavy lifting. We ensure seamless assembly for durable and reliable constructions.
                                </p>

                                <button className="w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-teal-900 font-medium rounded-md transition duration-300 text-center">
                                    Contact Us for Consultation!
                                </button>

                                {/* 3D Building Model Image */}
                                <div className="mt-8 flex justify-center">
                                    <img
                                        src="/poultry-3d-model.png"
                                        alt="3D model of building structure"
                                        className="w-48 h-auto object-contain -mb-8 grayscale"
                                    />
                                </div>
                            </div>
                        </div>



                        {/* Right Section - Features */}
                        <div className="md:w-2/4 mt-10">
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
                                    <span>Durability and Structural Integrity</span>
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
                                    <span>Ventilation and Climate Control</span>
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
                                    <span>Customization Options</span>
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
                                    <span>Energy Efficiency</span>
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
                                    <span>Optimal Space Utilization</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className=" bg-[#E9F7FE] p-4 h-auto rounded-xl mt-10 pt-10 pb-10 gap-4">
                                <h1 className="mb-4">Know more Key Features of a PEB Poultry Shed</h1>

                                <div className="flex items-center mb-6">
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
                                    <span>Ease of Expansion: As your poultry business grows, our PEB sheds can easily accommodate expansion. Their modular design allows for seamless integration of additional units, providing flexibility for future scalability.
                                    </span>
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
                                    <span>
                                        Quick Construction Time: Time is of the essence in the farming industry. Our PEB poultry sheds are known for their rapid construction process, minimizing downtime and allowing you to start operations sooner.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <p className="text-lg font-semibold p-10 text-[#024965] text-center">Choose Blueladder EPC Pvt Ltd for best-in-class industrial sheds that combine superior craftsmanship, durability, and affordability. Experience the difference of tailored solutions that cater to your specific needs. Contact us today to explore our extensive range of prefabricated structures.</p>


            </div>

        </>
    )
}

export default PoultryShed
