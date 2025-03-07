import React from 'react';
import { Check } from 'lucide-react';

const Peb = () => {
    const services = [
        { id: 1, name: 'Erection Services' },
        { id: 2, name: 'MEP Designing' },
        { id: 3, name: 'PEB designing' },
        { id: 4, name: 'Civil Structure Design' },
        { id: 5, name: 'PEB Design Vetting' },
    ];

    const features = [
        {
            id: 1,
            title: "Structural Integrity Check",
            description: "Ensuring accurate alignment and stability.",
        },
        {
            id: 2,
            title: "Code & Compliance Review",
            description: "Verifying adherence to industry standards.",

        },
        {
            id: 3,
            title: "Material Optimization",
            description: "Enhancing efficiency while reducing costs.",
        },
        {
            id: 4,
            title: "Design Accuracy Verification",
            description: "Checking calculations for precision and safety.",
        },
        {
            id: 5,
            title: "Risk Assessment ",
            description: "Identifying and mitigating potential design flaws.",
        },
    ];

    return (
        <>
            {/* Hero Section with Background Image */}
            <div className="relative w-full h-80 md:h-96">
                {/* Background image with overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/peb-main-hero.png')", // Replace with your actual image path
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
                        PEB Design Vetting
                    </h1>

                    {/* Breadcrumb navigation */}
                    <div className="flex items-center text-lg">
                        <span className="hover:underline">Product & Services </span>
                        <span className="mx-2">/</span>
                        <span className="hover:underline">EPC - Turnkey Solutions</span>
                        <span className="mx-2">/</span>
                        <span className="text-[#8CB5FF] font-bold text-xl">PEB Design Vetting</span>
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
                                src="/peb-img2.png"
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
                                    PEB Design
                                    <br />
                                    Vetting 🏗️
                                </h2>

                                <p className="mb-8 text-center">
                                    Ensuring Pre-Engineered Building (PEB) designs meet safety, durability, and compliance standards. We review structural integrity, load calculations, and material efficiency for optimal performance.
                                </p>

                                <button className="w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-teal-900 font-medium rounded-md transition duration-300 text-center">
                                    Contact Us for Consultation!
                                </button>

                                {/* 3D Building Model Image */}
                                <div className="mt-8 flex justify-center">
                                    <img
                                        src="/peb-3d-model.png"
                                        alt="3D model of building structure"
                                        className="w-48 h-auto object-contain -mb-7 opacity-80 grayscale"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl text-center font-bold mb-6 text-gray-900">PEB Design Vetting</h2>

                            <div className="space-y-6 text-gray-700">
                                <p className="leading-relaxed text-lg">
                                    As an engineering company, we understand the importance of ensuring that the design of a Pre-Engineered Building (PEB) is thoroughly vetted before it is constructed. That’s why we offer comprehensive design vetting services for our clients. Our team of experienced engineers will carefully review every aspect of your PEB design, including the structural integrity, energy efficiency, and overall functionality. We will also ensure that all necessary codes and regulations are adhered to, so that you can have confidence in the safety and reliability of your building. But our design vetting services don’t stop there.


                                </p>

                                <p className="leading-relaxed text-lg">
                                    We also offer value engineering services, which involve identifying opportunities to optimize the design and construction process in order to save you time and money. With our design vetting services, you can trust that your PEB will be designed to the highest standards, ensuring that it will stand the test of time and provide a safe and functional space for your business or organization. Contact us today to learn more about how our design vetting services can benefit your project.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white py-12 px-4 md:px-8">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        {/* Left side - Features list */}
                        <div className="w-full md:w-3/5 pr-0 md:pr-8">
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                Features of Our PEB Design Vetting 🚧 🏗️
                            </h2>

                            <div className="space-y-5">
                                {features.map((feature) => (
                                    <div key={feature.id} className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="bg-[#345CA5] rounded-full p-1 mr-3">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                        <div className="ml-3">
                                            <span className="font-semibold text-gray-900 text-lg">{feature.title}</span>
                                            <span className="text-gray-700 text-lg"> – {feature.description}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right side - Building illustration */}
                        <div className="w-full md:w-2/5 mt-8 md:mt-0">
                            <img
                                src="/peb-img.png"
                                alt="Building construction with cranes illustration"
                                className="w-full h-96 object-cover rounded-4xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Peb;
