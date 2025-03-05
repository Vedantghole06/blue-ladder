import React from 'react'

const PebMills = () => {

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
                        backgroundImage: "url('/src/assets/peb-shed-hero.png')", // Replace with your actual image path
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
                        PEB Sheds
                    </h1>

                    {/* Breadcrumb navigation */}
                    <div className="flex items-center text-lg">
                        <span className="hover:underline">Product & Services </span>
                        <span className="mx-2">/</span>
                        <span className="hover:underline">Pre Engineered Steel Structures </span>
                        <span className="mx-2">/</span>
                        <span className="text-[#8CB5FF] font-bold text-xl">PEB Sheds</span>
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
                                src="/src/assets/peb-shed-img1.png"
                                alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
                                className="w-full h-[460px] rounded-4xl object-contain"
                            />

                            <p className='leading-base mt-6'>
                                <span className='font-semibold'>Blueladder PEB Shed Manufacturer in India</span> EPC has established itself as the fastest-growing industrial shed manufacturer and supplier in Central India, catering to the diverse demands of the construction industry. We are the leading producer of prefabricated buildings & we provide excellent solutions for industrial sheds at competitive construction expenses. The utilization of pre-engineered constructions has gained popularity across various industries, with a particular focus on the highly desirable pre-engineered industrial sheds.
                                <br />
                                In PEB sheds pre cast panels are lifted into place and connected together using bolts or other fasteners. Because the panels are precast, they can be made in a factory setting, which allows for faster construction and more consistent quality.
                            </p>
                        </div>
                    </div>
                </div>



                <div className="flex flex-wrap justify-center md:justify-evenly items-center mb-8 px-5">
                    {/* Building Illustration */}
                    <div className="flex justify-center md:block">
                        <img
                            src="/src/assets/peb-shed-img2.png"
                            alt="Pre-engineered building structure diagram"
                            className="w-[300px] md:w-[400px] h-auto"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="max-w-full md:w-[700px] text-center md:text-left px-4">
                        <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
                            PEB SHEDS – INDUSTRIAL STRUCTURES THAT LAST LONG
                        </h2>

                        <p className="text-sm md:text-base">
                            At Blueladder EPC, the leading industrial shed company in India, we prioritize custom-designed architecture and
                            client-specific construction. Our pre-engineered structures are crafted to meet the unique requirements of each
                            customer, forming the cornerstone of our progress and success. With a meticulous manufacturing process and the
                            use of high-quality raw materials, we confidently offer a lifetime guarantee of durability and exceptional
                            service for these industrial PEB sheds. Here are the remarkable features of our pre-engineered fabricated structures:
                        </p>
                    </div>
                </div>



            </div>

        </>
    )
}

export default PebMills
