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
                        backgroundImage: "url('/peb-mills-hero.png')", // Replace with your actual image path
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Dark overlay to make text more readable */}
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>

                {/* Content container */}
                <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                    {/* Main heading */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        PEB Mills
                    </h1>

                    {/* Breadcrumb navigation */}
                    <div className="flex items-center text-lg">
                        <span className="hover:underline">Product & Services </span>
                        <span className="mx-2">/</span>
                        <span className="hover:underline">Pre Engineered Steel Structures </span>
                        <span className="mx-2">/</span>
                        <span className="text-[#8CB5FF] font-bold text-xl">PEB Mills</span>
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
                                src="/peb-shed-img1.png"
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



                <div className="relative w-full max-w-6xl mx-auto px-4 py-8 bg-gray-50 font-sans">
                    {/* Background decorative image - centered */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                        <img
                            src="/peb-mills-bg.png"
                            alt=""
                            width={600}
                            height={600}
                            className="object-contain"
                            aria-hidden="true"
                        />
                    </div>

                    {/* Header section */}
                    <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
                        <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                            When it comes to efficient and reliable storage solutions for dal (lentils) and rice, Pre-Engineered Buildings
                            (PEB) Mills have emerged as a game-changer in the food industry. PEB Mills offers a perfect blend of modern
                            engineering and advanced technology, ensuring optimal storage conditions that preserve the quality and
                            freshness of these essential food staples.
                        </p>
                    </div>

                    {/* Features grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                        {/* Feature 1 */}
                        <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
                            <h3 className="text-center font-semibold text-gray-800 mb-4">Superior Structural Design</h3>
                            <p className="text-sm text-gray-600">
                                BlueBuilder's PEB Mills are engineered with precision and innovation to withstand various environmental
                                conditions while providing maximum storage capacity. The strategic design minimizes dead spaces, ensuring
                                efficient utilization of the available storage units. The flexibility in design allows for customization
                                according to specific storage requirements.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
                            <h3 className="text-center font-semibold text-gray-800 mb-4">Climate Control Technology</h3>
                            <p className="text-sm text-gray-600">
                                Maintaining the right temperature and humidity levels is crucial for preserving the quality of dal and rice.
                                PEB Mills come equipped with advanced climate control systems that regulate temperature and humidity,
                                preventing mold growth and other related issues. This technology ensures that your stored commodities remain
                                fresh and unblemished for extended periods.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
                            <h3 className="text-center font-semibold text-gray-800 mb-4">Ventilation Systems</h3>
                            <p className="text-sm text-gray-600">
                                Adequate airflow is essential to prevent moisture build-up and maintain the quality of stored dal and rice.
                                Our Mills incorporate well-designed ventilation systems that promote air circulation, reducing the risk of
                                condensation and potential damage.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
                            <h3 className="text-center font-semibold text-gray-800 mb-4">Pest Control Mechanisms</h3>
                            <p className="text-sm text-gray-600">
                                Protecting your food grains from pests is paramount. Our PEB Mills offer integrated pest management
                                solutions, including pest-resistant construction materials and sealing mechanisms to keep unwanted intruders
                                at bay. This safeguarding feature helps maintain the purity and hygiene of your stored commodities.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
                            <h3 className="text-center font-semibold text-gray-800 mb-4">Space Optimization</h3>
                            <p className="text-sm text-gray-600">
                                PEB Mills are engineered to maximize storage space vertically and horizontally. With customizable racking
                                systems and intelligent layout planning, you can make the most of your available space, accommodating larger
                                quantities of dal and rice without compromising on accessibility.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
                            <h3 className="text-center font-semibold text-gray-800 mb-4">Durability and Longevity</h3>
                            <p className="text-sm text-gray-600">
                                Constructed with high-quality materials and modern manufacturing techniques, PEB Mills are built to last.
                                Their robust construction ensures resistance to rust, corrosion, and other environmental factors,
                                contributing to a longer lifespan and maximized maintenance costs.
                            </p>
                        </div>
                    </div>

                    {/* Footer section */}
                    <div className="relative z-10 max-w-4xl mx-auto text-center mt-12">
                        <p className="text-gray-700 font-medium">
                            Investing in a PEB Mill for dal and rice storage is a strategic choice that aligns with modern food storage
                            demands.
                        </p>
                    </div>
                </div>


                <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Text Content */}
                        <div className="w-full md:w-2/3 space-y-4">
                            <p className="text-gray-700 text-sm md:text-base">
                                These innovative solutions combine structural excellence, advanced technology, and adherence to
                                safety standards, creating an ideal environment for preserving the freshness and quality of your
                                food grains.
                            </p>
                            <p className="text-gray-700 text-sm md:text-base">
                                By choosing a PEB Mill, you are not only optimizing storage capacity but also contributing to
                                sustainable food management practices that benefit both your business and the community at large.
                            </p>

                        </div>

                        {/* Image */}
                        <div className="w-full md:w-1/3 mt-4 md:mt-0">
                            <div className="relative w-full h-48 md:h-64">
                                <img
                                    src="/api/placeholder/400/320"
                                    alt="PEB Mill Storage Building"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 text-center md:text-center">
                        <a
                            href="#"
                            className="inline-block font-medium text-blue-700 text-sm md:text-base hover:text-blue-800"
                        >
                            Enquire now & Experience the future of food storage with PEB Mills – where preservation meets innovation.
                        </a>
                    </div>
                </div>



            </div>

        </>
    )
}

export default PebMills
