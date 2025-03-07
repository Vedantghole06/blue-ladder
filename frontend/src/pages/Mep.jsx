import React from 'react';

const Mep = () => {
    const services = [
        { id: 1, name: 'Erection Services' },
        { id: 2, name: 'MEP Designing' },
        { id: 3, name: 'PEB designing' },
        { id: 4, name: 'Civil Structure Design' },
        { id: 5, name: 'PEB Design Vetting' },
    ];
    const domain = [
        {
            id: 1,
            title: "Mechanical",
            description: "",
            imageUrl: "/mechanical.png", // Replace with your actual image
        },
        {
            id: 2,
            title: "Electrical",
            description: "Powering Reliable & Safe Connections",
            imageUrl: "/electrical.png", // Replace with your actual image
        },
        {
            id: 3,
            title: "Plumbing",
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
                        backgroundImage: "url('/mep-hero.png')", // Replace with your actual image path
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
                        MEP Designing
                    </h1>

                    {/* Breadcrumb navigation */}
                    <div className="flex items-center text-lg">
                        <span className="hover:underline">Product & Services </span>
                        <span className="mx-2">/</span>
                        <span className="hover:underline">EPC - Turnkey Solutions</span>
                        <span className="mx-2">/</span>
                        <span className="text-[#8CB5FF] font-bold text-xl">MEP Designing</span>
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
                                src="/mep-img.png"
                                alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
                                className="w-full h-[420px] rounded-4xl shadow-md object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative z-10 container mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row gap-8">
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
                                    MEP Designing
                                    <br />
                                    Solutions🏗️
                                </h2>

                                <p className="mb-8 text-center">
                                    Expert Mechanical, Electrical, and Plumbing (MEP) design for efficient, safe, and sustainable building systems. We ensure seamless integration for optimal performance.
                                </p>

                                <button className="w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-teal-900 font-medium rounded-md transition duration-300 text-center">
                                    Contact Us for Consultation!
                                </button>

                                {/* 3D Building Model Image */}
                                <div className="mt-8 flex justify-center">
                                    <img
                                        src="/mep-img1.png"
                                        alt="3D model of building structure"
                                        className="w-48 h-auto -mb-7 object-contain opacity-80 grayscale"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl text-center font-bold mb-6 text-gray-900">Erection Services</h2>

                            <div className="space-y-6 text-gray-700">
                                <p className="leading-relaxed text-lg">
                                    At Blueladder Engineering Company, we specialize in providing top-quality civil erection
                                    services for a wide range of projects. From small residential developments to large-scale
                                    commercial and industrial projects, we have the expertise and resources to handle all of
                                    your civil erection needs. Our team of highly skilled professionals has extensive
                                    experience in all aspects of civil erection, including site preparation, foundation work,
                                    concrete construction, and steel erection. We utilize state-of-the-art equipment and
                                    techniques to ensure that every project is completed on time, within budget, and to the
                                    highest standards of quality.
                                </p>

                                <p className="leading-relaxed text-lg">
                                    In addition to our exceptional civil erection services, we also offer a full range of
                                    engineering and consulting services. Our team of professionals includes engineers,
                                    architects, and project managers who are dedicated to helping our clients achieve their
                                    goals and deliver successful projects. If you're in need of reliable and efficient civil
                                    erection services, look no further than XYZ Engineering Company. Contact us today to
                                    learn more about how we can help you with your next project.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-gray-50 py-8 md:py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-gray-800 text-xl md:text-base leading-relaxed">
                            <p className='leading-relaxed text-lg'>
                                We also conduct simulations to ensure that the systems will function properly once they are installed. Throughout the design process, we
                                work closely with our clients to ensure that their needs and expectations are met. We value open communication and transparency, and we
                                make sure to keep our clients informed at every stage of the project. In addition to MEP design, we also offer a range of other engineering
                                services, including project management, construction management, and commissioning. Our team has a track record of delivering high-quality
                                projects on time and within budget. If you are in need of MEP design services for your next engineering project, we encourage you to contact
                                us. Our team would be happy to discuss your needs and provide a customized solution.
                            </p>
                        </div>
                    </div>
                </div>

            </div>


            <div className="w-full flex justify-center items-center p-6 min-h-[400px] md:min-h-[400px]">
                <div className="flex flex-col md:flex-row max-w-7xl w-full gap-6 md:gap-8 items-center justify-center">
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


        </>
    );
};

export default Mep;
