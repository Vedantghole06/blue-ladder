import React from 'react';
import { Check } from 'lucide-react';

const TurnkeySolution = () => {

    const services = [
        { id: 1, name: 'Erection Services' },
        { id: 2, name: 'MEP Designing' },
        { id: 3, name: 'PEB designing' },
        { id: 4, name: 'Civil Structure Design' },
        { id: 5, name: 'PEB Design Vetting' },
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
                        backgroundImage: "url('/src/assets/epc-hero.png')", // Replace with your actual image path
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
                        EPC - Turnkey Solutions
                    </h1>

                    {/* Breadcrumb navigation */}
                    <div className="flex items-center text-lg">
                        <span className="hover:underline">Product & Services </span>
                        <span className="mx-2">/</span>
                        <span className="text-[#8CB5FF] font-bold text-xl">EPC - Turnkey Solutions</span>
                    </div>
                </div>
            </div>


            {/* main content */}


            <div className="min-h-screen w-full bg-gray-50 relative overflow-hidden">
                {/* Background Image with Opacity */}
                <div
                    className="absolute inset-0 z-0 opacity-10"
                    style={{
                        backgroundImage: "url('/src/assets/bg-pattern.jpeg')",
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
                                src="/src/assets/epc-img.png"
                                alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
                                className="w-full h-[420px] rounded-4xl shadow-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Bottom Section with Descriptions */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-6">EPC - Turnkey Solutions</h2>

                        <div className="space-y-6 text-gray-700">
                            <p className="leading-relaxed text-lg">
                                An EPC (engineering, procurement, and construction) turnkey solution is a type of project delivery method in which a company agrees to
                                design, procure, and construct a facility for a client, and then turn the facility over to the client once it is completed. In an EPC turnkey project,
                                the EPC contractor is responsible for all aspects of the project, from initial design and engineering to procurement of materials and
                                construction, and is typically paid a fixed fee for their services.
                            </p>

                            <p className="leading-relaxed text-lg">
                                The client does not need to be involved in the day-to-day management of the project and can simply focus on operating and maintaining the
                                completed facility. EPC turnkey solutions are often used in the construction of large infrastructure projects, such as power plants, oil and gas
                                facilities, and industrial complexes.
                            </p>
                        </div>
                    </div>
                </div>



                <div className="relative z-10 container mx-auto px-4 py-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Left Side - Photo Grid */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="grid grid-cols-2 gap-4 relative">
                                {/* Top Left Image */}
                                <div className="rounded-4xl overflow-hidden">
                                    <img
                                        src="/src/assets/epc-img1.png"
                                        alt="Construction workers in safety gear reviewing a site"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Top Right Image */}
                                <div className="rounded-4xl overflow-hidden">
                                    <img
                                        src="/src/assets/epc-img2.png"
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
                                <div className="rounded-4xl overflow-hidden">
                                    <img
                                        src="/src/assets/epc-img3.png"
                                        alt="Engineer reviewing construction plans"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Bottom Right Image */}
                                <div className="rounded-4xl overflow-hidden">
                                    <img
                                        src="/src/assets/epc-img4.png"
                                        alt="Construction workers in safety gear at construction site"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Seamless Turnkey EPC Solutions</h2>

                            <p className="text-gray-700 text-lg mb-8">
                                Our turnkey approach guarantees efficiency, cost-effectiveness, and high-quality construction, tailored to meet your specific needs.
                            </p>

                            <div className="space-y-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="bg-[#345CA5] rounded-full p-1 mr-3">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                        <span className="ml-3 text-lg text-gray-700">{feature}</span>
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

export default TurnkeySolution;
