import React from 'react';
import { Check } from 'lucide-react';

const CivilFoundation = () => {
    const services = [
        { id: 1, name: 'Civil Foundation Work' },
        { id: 2, name: 'MEP Services' },
        { id: 3, name: 'Fire Services' }
    ];

    const domain = [
        {
            id: 1,
            title: "Excavation & Site Preparation",
            description: "",
            imageUrl: "/mechanical.png", // Replace with your actual image
        },
        {
            id: 2,
            title: "Reinforcement & Formwork",
            description: "Strengthening the base with high-quality materials for long-term durability.",
            imageUrl: "/electrical.png", // Replace with your actual image
        },
        {
            id: 3,
            title: "Concrete Pouring & Finishing",
            description: "",
            imageUrl: "/plumbing.png", // Replace with your actual image
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
                        backgroundImage: "url('/civil-foundation-hero.png')", // Replace with your actual image path
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Dark overlay to make text more readable */}
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>

                {/* Content container */}
                <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                    {/* Main heading */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        Civil Foundation Work
                    </h1>

                    {/* Breadcrumb navigation */}
                    <div className="flex items-center text-lg">
                        <span className="hover:underline">Product & Services </span>
                        <span className="mx-2">/</span>
                        <span className="hover:underline"> Engineering & Technical Advisory Services</span>
                        <span className="mx-2">/</span>
                        <span className="text-[#8CB5FF]">Civil Foundation Work</span>

                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="min-h-screen w-full bg-gray-50 relative overflow-hidden">
                {/* Background Image with Opacity */}
                <div
                    className="absolute inset-0 z-0 opacity-10"
                    style={{
                        backgroundImage: "url('/bg-pattern.jpeg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></div>

                <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
                    {/* Top Section with Card and Image */}
                    <div className="flex flex-col md:flex-row gap-6 mb-8">
                        {/* Services Card */}
                        <div className="bg-white rounded-4xl shadow-md p-6 md:w-1/3">
                            <h2 className="text-xl font-bold mb-6">Engineering & Technical Advisory Services</h2>

                            <div className="space-y-6">
                                {services.map((service) => (
                                    <div key={service.id} className="border-b pb-4">
                                        <div className="flex items-center">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                                <Check className="w-4 h-4 text-blue-500" />
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
                                src="/civil-foundation-img1.png"
                                alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
                                className="w-full h-[420px] rounded-4xl shadow-md object-cover"
                            />
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
                                    Strong Foundations, Lasting Structures

                                </h2>

                                <p className="mb-8 text-center">
                                    Providing fire safety solutions, including detection, suppression, and prevention systems, to protect lives and property. Our designs ensure compliance with safety regulations and industry standards.                                </p>

                                <button className="w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-teal-900 font-medium rounded-md transition duration-300 text-center">
                                    Contact Us for Consultation!
                                </button>

                                {/* 3D Building Model Image */}
                                <div className="mt-8 flex justify-center">
                                    <img
                                        src="/civil-foundation-3d-model.png"
                                        alt="3D model of building structure"
                                        className="w-76 h-auto object-contain -mb-8 opacity-80 grayscale"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl text-center font-bold mb-6 text-gray-900">
                                Civil Foundation Work
                            </h2>

                            <div className="space-y-6 text-gray-700">
                                <p className="leading-relaxed text-lg">
                                    Civil foundation work refers to the construction and installation of the foundations that support a building or structure. This type of work is typically done by a specialized contractor and involves excavating the site, preparing the ground for the foundation, and pouring and curing the concrete or installing pre-cast concrete foundation elements.
                                </p>

                                <p className="leading-relaxed">

                                    <h3 className='text-2xl font-bold mt-4'>
                                        Some common types of civil foundation work services include
                                    </h3>

                                    <p className='mt-4 text-lg'>
                                        <span className='text-xl font-bold'>Excavation: </span>
                                        This involves digging out the site to the required depth to accommodate the foundation.
                                    </p>
                                    <p className='mt-4 text-lg'>
                                        <span className='text-xl font-bold'>Grading: </span>
                                        This involves preparing the ground by levelling and compacting the soil to provide a stable base for the foundation.
                                    </p>
                                    <p className='mt-4 text-lg'>
                                        <span className='text-xl font-bold'>Pouring and curing concrete: </span>
                                        This involves mixing and pouring the concrete for the foundation and allowing it to cure, or harden, properly.
                                    </p>
                                    <p className='mt-4 text-lg'>
                                        <span className='text-xl font-bold'>Foundation repairs: </span>
                                        In some cases, foundation work may also involve repairing or reinforcing existing foundations to address structural issues or to prepare the foundation for an additional load.
                                    </p>


                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full flex justify-center items-center p-6 min-h-[400px] md:min-h-[400px]">
                    <div className="flex flex-col md:flex-row max-w-7xl w-full gap-6 md:gap-8 items-center justify-evenly">
                        {/* First card - Mechanical */}
                        <div className="w-full md:w-1/3 h-48 md:h-56 rounded-4xl overflow-hidden relative">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${domain[0].imageUrl})` }}
                            />
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-semibold">{domain[0].title}</h3>
                            </div>
                        </div>

                        {/* Middle card - Electrical (larger) */}
                        <div className="w-full md:w-1/3 h-60 md:h-64 rounded-4xl overflow-hidden relative">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${domain[1].imageUrl})` }}
                            />
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                <h3 className="text-white text-2xl font-semibold mb-2">{domain[1].title}</h3>
                                <p className="text-white text-sm">{domain[1].description}</p>
                            </div>
                        </div>

                        {/* Third card - Plumbing */}
                        <div className="w-full md:w-1/3 h-48 md:h-56 rounded-4xl overflow-hidden relative">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${domain[2].imageUrl})` }}
                            />
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-semibold">{domain[2].title}</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </>
    );
};

export default CivilFoundation;
