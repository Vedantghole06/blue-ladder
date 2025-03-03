import React from 'react'
import { Check } from 'lucide-react';


const PreEngg = () => {

    const services = [
        { id: 1, name: 'Civil Foundation Work' },
        { id: 2, name: 'MEP Services' },
        { id: 3, name: 'Fire Services' }
    ];

    return (
        <>
            {/* Hero Section with Background Image */}
            <div className="relative w-full h-80 md:h-96">
                {/* Background image with overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('./src/assets/pre-engg-hero.png')", // Replace with your actual image path
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

                <div className="w-full flex flex-col md:flex-row gap-6 p-8 font-sans">
                    {/* Left side panel */}
                    <div className="w-full md:w-1/3 bg-white rounded-2xl shadow p-6">
                        <h2 className="text-lg font-bold mb-6">Pre Engineered Steel Structure</h2>

                        <div className="space-y-0">
                            {[
                                'Pre Engineered Buildings',
                                'PEB Warehouses',
                                'PEB Sheds',
                                'Poultry Sheds',
                                'PEB Mills',
                                'PEB Multi Storey Building',
                                'PEB Spinning & Ginning Sheds',
                                'Ethanol Sheds',
                                'PEB Metro Stations'
                            ].map((item, index) => (
                                <div key={index} className="py-3 border-b border-gray-200">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full border border-blue-500 flex items-center justify-center">
                                            <Check className="w-3 h-3 rounded-full text-white bg-blue-500" />
                                        </div>
                                        <span className="text-sm text-gray-700">{item}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side content */}
                    <div className="w-full md:w-2/3">
                        {/* Image section */}
                        <div className="bg-gray-400 rounded-2xl overflow-hidden">
                            <img
                                src="/src/assets/pre-engg-img1.png"
                                alt="Construction blueprint with orange hard hat, measuring tape, and level tool"
                                className="w-full h-[350px] object-cover"
                            />
                        </div>

                        {/* Text content section */}
                        <div className="mt-6 px-2">
                            <h1 className="text-xl font-semibold text-center mb-6">Pre Engineered Steel Building Manufacturers</h1>

                            <p className="text-gray-700 leading-relaxed">
                                BlueLadder is Pre Engineered Steel Building Manufacturers and suppliers. These steel
                                structures buildings are pre-designed and prefabricated buildings that are made from
                                steel components. The structures are typically used for commercial, industrial, and
                                agricultural buildings, such as warehouses, factories, barns, and aircraft hangars.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="max-w-6xl mx-auto p-4 font-sans">
                    <div className="flex flex-col md:flex-row gap-10">
                        {/* Left side FAQ box */}
                        <div className="w-full md:w-1/3 bg-teal-900 rounded-lg text-white p-6 relative overflow-hidden">
                            {/* Background decorative curves */}
                            <div className="absolute top-0 right-0 w-40 h-40 opacity-20">
                                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                    <path d="M100,0 Q70,30 100,60" fill="none" stroke="#4FD1C5" strokeWidth="2" />
                                    <path d="M100,10 Q65,40 100,70" fill="none" stroke="#4FD1C5" strokeWidth="2" />
                                    <path d="M100,20 Q60,50 100,80" fill="none" stroke="#4FD1C5" strokeWidth="2" />
                                </svg>
                            </div>

                            <h2 className="text-2xl font-bold text-center mb-4">You Still Have A Question</h2>

                            <p className="text-center text-sm mb-8">
                                If you cannot find answer to your question our FAQ, you can alwas contact us. web will answer you shortly!
                            </p>

                            {/* Contact buttons */}
                            <div className="space-y-4 mt-6">
                                <a href="mailto:info@domain.com" className="flex items-center bg-white rounded-full py-1 px-2">
                                    <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center mr-2">
                                        <span className="text-teal-900 font-bold">@</span>
                                    </div>
                                    <span className="text-teal-900 text-sm font-medium">info@domain.com</span>
                                </a>

                                <a href="tel:+910987654321" className="flex items-center bg-white rounded-full py-1 px-2">
                                    <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center mr-2">
                                        <span className="text-teal-900 font-bold">$</span>
                                    </div>
                                    <span className="text-teal-900 text-sm font-medium">+91 0987654321</span>
                                </a>
                            </div>
                        </div>

                        {/* Right side features and images */}
                        <div className="w-full md:w-2/3 space-y-6">
                            {/* Features list */}
                            <div>
                                <h3 className="text-lg font-medium mb-4">Features:</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                                    {[
                                        { text: 'Clear span design', column: 1 },
                                        { text: 'Skylights', column: 2 },
                                        { text: 'Mezzanines and loft areas', column: 1 },
                                        { text: 'Insulation', column: 2 },
                                        { text: 'Roll-up doors', column: 1 },
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mr-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Images */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="rounded-lg overflow-hidden shadow-md">
                                    <img
                                        src="/api/placeholder/400/300"
                                        alt="Engineer reviewing blueprints"
                                        className="w-full h-40 object-cover"
                                    />
                                </div>
                                <div className="rounded-lg overflow-hidden shadow-md">
                                    <img
                                        src="/api/placeholder/400/300"
                                        alt="Construction workers on site"
                                        className="w-full h-40 object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </>
    )
}

export default PreEngg
