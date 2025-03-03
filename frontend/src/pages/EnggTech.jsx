import React from 'react';
import { Check } from 'lucide-react';

const EnggTech = () => {
    const services = [
        { id: 1, name: 'Civil Foundation Work' },
        { id: 2, name: 'MEP Services' },
        { id: 3, name: 'Fire Services' }
    ];

    const features = [
        "Comprehensive project management",
        "Timely execution with precision",
        "Cost-effective & hassle-free solutions",
        "Quality assurance at every stage",
        "Innovative designs & sustainable construction"
    ];


    return (
        <>
            {/* Hero Section with Background Image */}
            <div className="relative w-full h-80 md:h-96">
                {/* Background image with overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/engg-hero.png')", // Replace with your actual image path
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
                        Engineering & Technical Advisory Services
                    </h1>

                    {/* Breadcrumb navigation */}
                    <div className="flex items-center text-lg">
                        <span className="hover:underline">Product & Services </span>
                        <span className="mx-2">/</span>
                        <span className="text-[#8CB5FF]">Engineering & Technical Advisory Services</span>

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
                            <h2 className="text-xl font-bold mb-6">EPC - Turnkey Solutions</h2>

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
                                src="/engg-img1.png"
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
                                    🔥 Fire Services

                                </h2>

                                <p className="mb-8 text-center">
                                    Providing fire safety solutions, including detection, suppression, and prevention systems, to protect lives and property. Our designs ensure compliance with safety regulations and industry standards.                                </p>

                                <button className="w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-teal-900 font-medium rounded-md transition duration-300 text-center">
                                    Contact Us for Consultation!
                                </button>

                                {/* 3D Building Model Image */}
                                <div className="mt-8 flex justify-center">
                                    <img
                                        src="/engg-3d-model.png"
                                        alt="3D model of building structure"
                                        className="w-48 h-auto object-contain opacity-80 grayscale"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl text-center font-bold mb-6 text-gray-900">
                                Engineering & Technical Advisory Services
                            </h2>

                            <div className="space-y-6 text-gray-700">
                                <p className="leading-relaxed">
                                    Engineering and technical advisory services refer to consulting services provided by professionals with expertise in engineering and technology. These services can be used to help businesses and organizations solve problems, improve operations, and make informed decisions.                                </p>

                                <p className="leading-relaxed">

                                    <h3 className='text-2xl font-bold mt-4'>
                                        Examples of engineering and technical advisory services include
                                    </h3>

                                    <p className='mt-4'>
                                        <span className='text-xl font-bold'>Design and analysis: </span>
                                        Engineers can provide design and analysis services to help businesses develop new products or improve existing ones. This may include designing and testing prototypes, conducting simulations and analyses.
                                    </p>
                                    <p className='mt-4'>
                                        <span className='text-xl font-bold'>Project management: </span>
                                        Engineers and technical advisors can assist with the planning and management of projects, including developing budgets, schedules, and scope documents, as well as coordinating with team members and stakeholders.
                                    </p>
                                    <p className='mt-4'>
                                        <span className='text-xl font-bold'>Risk assessment and management: </span>
                                        Engineers can help businesses identify and assess potential risks associated with projects or operations, and develop strategies to mitigate or eliminate those risks.
                                    </p>


                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="relative z-10 container mx-auto px-4 py-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Left Side - Photo Grid */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="grid grid-cols-2 gap-4 relative">
                                {/* Top Left Image */}
                                <div className="rounded-lg overflow-hidden">
                                    <img
                                        src="/epc-img1.png"
                                        alt="Construction workers in safety gear reviewing a site"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Top Right Image */}
                                <div className="rounded-lg overflow-hidden">
                                    <img
                                        src="/epc-img2.png"
                                        alt="Engineers looking at construction site with buildings in background"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Building Icon in Center */}
                                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                                    <div className="bg-white p-4 rounded-full">
                                        <svg width="58" height="65" viewBox="0 0 58 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8747 26.2881V14.8519H24.3109V0.5L46.6304 10.1266V18.8482L56.1312 23.9757V62.6828H57.9122V64.8947H53.9194V25.2827L46.6304 21.3617V64.8947H37.8082V14.123L44.4186 17.6669V11.5844L26.5479 3.86804V14.8519H33.1332V64.8947H24.3109V17.0637H15.0866V26.2881H21.6718V64.8947H12.8747V28.4999H6.33977V64.8947H0.25V62.6828H4.12794V26.2881H12.8747ZM30.9213 62.6828V17.0637H26.5479V62.6828H30.9213ZM19.46 62.6828V28.4999H15.0866V62.6828H19.46ZM44.4186 20.1804L40.02 17.8177V62.6828H44.4186V20.1804Z" fill="#FFB703" />
                                        </svg>

                                    </div>
                                </div>

                                {/* Bottom Left Image */}
                                <div className="rounded-lg overflow-hidden">
                                    <img
                                        src="/epc-img3.png"
                                        alt="Engineer reviewing construction plans"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Bottom Right Image */}
                                <div className="rounded-lg overflow-hidden">
                                    <img
                                        src="/epc-img4.png"
                                        alt="Construction workers in safety gear at construction site"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Engineering & Technical Advisory Services ⚙️</h2>

                            <div className="space-y-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="bg-[#345CA5] rounded-full p-1 mr-3">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                        <span className="ml-3 text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default EnggTech;
