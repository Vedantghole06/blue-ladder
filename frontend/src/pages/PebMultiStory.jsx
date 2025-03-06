import React from 'react'
import { Check } from 'lucide-react'

const PebMultiStory = () => {

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
                        backgroundImage: "url('/src/assets/peb-multistory-hero.png')", // Replace with your actual image path
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
                        PEB Multi Storey Building
                    </h1>

                    {/* Breadcrumb navigation */}
                    <div className="flex items-center text-lg">
                        <span className="hover:underline">Product & Services </span>
                        <span className="mx-2">/</span>
                        <span className="hover:underline">Pre Engineered Steel Structures </span>
                        <span className="mx-2">/</span>
                        <span className="text-[#8CB5FF] font-bold text-xl"> PEB Multi Storey Building</span>
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
                                src="/src/assets/peb-multistory-img1.png"
                                alt="Construction site with workers in yellow safety vests and helmets reviewing plans at a building site"
                                className="w-full h-[440px] rounded-4xl object-contain"
                            />

                            <p className='leading-base mt-6'>
                                Pre-engineered multi-story buildings are buildings that are constructed using prefabricated components that are manufactured in a factory and assembled on site. These buildings are typically multi-storied, with two or more floors, and can be used for a variety of purposes such as offices, apartments, hotels, and more. PEB buildings can also be designed to be multi-storey, with additional floors added as needed.

                                These buildings are typically more cost-effective and energy-efficient than traditional buildings, as they use a standardized design and prefabricated components. One of the main advantages of pre-engineered multi-story buildings is that they can be designed and constructed quickly, as the prefabricated components are already manufactured and just need to be assembled on site.
                            </p>
                        </div>
                    </div>
                </div>



                <div className="max-w-6xl mx-auto p-4 md:p-8 bg-white">
                    <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
                        Unveiling the Advantages of PEB Multi-Storey Buildings
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Speedy Construction */}
                        <div className="flex flex-col">
                            <h3 className="text-center text-lg md:text-xl font-semibold mb-4">
                                Speedy Construction
                            </h3>
                            <div className="bg-blue-50 rounded-xl p-6 flex-grow">
                                <p className="text-gray-700 text-sm md:text-base">
                                    Time is of the essence, and with our PEB technology, your multi-storey
                                    building can be erected in record time. The modular components are
                                    pre-fabricated off-site, ensuring quicker assembly and reduced on-site
                                    disruptions.
                                </p>
                            </div>
                        </div>

                        {/* Flexible Design */}
                        <div className="flex flex-col">
                            <h3 className="text-center text-lg md:text-xl font-semibold mb-4">
                                Flexible Design
                            </h3>
                            <div className="bg-blue-50 rounded-xl p-6 flex-grow">
                                <p className="text-gray-700 text-sm md:text-base">
                                    Blueladder PEB Manufacturing empowers you with endless design
                                    possibilities. Whether it's commercial complexes, office spaces,
                                    residential apartments, or mixed-use developments, our PEB multi-
                                    storey buildings can be customized to meet your unique requirements.
                                </p>
                            </div>
                        </div>

                        {/* Structural Integrity */}
                        <div className="flex flex-col">
                            <h3 className="text-center text-lg md:text-xl font-semibold mb-4">
                                Structural Integrity
                            </h3>
                            <div className="bg-blue-50 rounded-xl p-6 flex-grow">
                                <p className="text-gray-700 text-sm md:text-base">
                                    Safety is paramount, and our PEB multi-storey buildings are
                                    engineered to withstand the test of time. The advanced design ensures
                                    optimal load distribution, seismic resistance, and durability, ensuring
                                    your investment remains solid for years to come.
                                </p>
                            </div>
                        </div>

                        {/* Space Utilization */}
                        <div className="flex flex-col">
                            <h3 className="text-center text-lg md:text-xl font-semibold mb-4">
                                Space Utilization
                            </h3>
                            <div className="bg-blue-50 rounded-xl p-6 flex-grow">
                                <p className="text-gray-700 text-sm md:text-base">
                                    Maximizing available space is crucial, and our PEB multi-storey
                                    buildings excel in this aspect. Intelligent design and layout planning
                                    allow for efficient space utilization, creating functional and aesthetically
                                    pleasing interiors.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Customization Options (Full Width) */}
                    <div className="mt-6">
                        <h3 className="text-center text-lg md:text-xl font-semibold mb-4">
                            Customization Options
                        </h3>
                        <div className="bg-blue-50 rounded-xl p-6 mx-auto max-w-3xl">
                            <p className="text-gray-700 text-sm md:text-base text-center">
                                Blueladder PEB Manufacturing believes in turning your visions into
                                reality. Our team works closely with you to understand your needs and
                                preferences, ensuring every detail of your PEB multi-storey building is
                                tailored to perfection.
                            </p>
                        </div>
                    </div>
                </div>





                <div className="relative w-full max-w-6xl mx-auto p-4 md:p-8 overflow-hidden font-sans">
                    {/* Background Images - two faded building sketches/blueprints */}
                    <div className="absolute inset-0 z-0">

                        {/* Bottom right corner background image */}
                        <div className="absolute right-0 bottom-0">
                            <img
                                src="/src/assets/peb-multistory-bg-img2.png"
                                alt="Building blueprint background bottom right"
                                className="object-contain opacity-20"
                            />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10">
                        {/* Header Text */}
                        <div className="text-center mb-10">
                            <p className="text-base md:text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto">
                                At Blueladder PEB Manufacturing, we take pride in being a leading provider of Pre-Engineered Building (PEB) solutions, offering top-notch design, engineering, and manufacturing services. Our expertise extends to crafting efficient and durable PEB multi-storey buildings that stand as a testament to innovation and quality.
                            </p>
                        </div>

                        {/* Section Title */}
                        <h2 className="text-xl md:text-2xl font-semibold text-left mb-8 text-gray-800">
                            Why Choose Blueladder PEB Manufacturing ?
                        </h2>

                        {/* Features List */}
                        <div className="space-y-6">
                            {/* Feature 1 */}
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                                    <Check size={20} className="text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Expertise:</h3>
                                    <p className="text-gray-700">
                                        With years of industry experience, we possess a deep understanding of PEB technology and its applications, making us your reliable partner for multi-storey building solutions.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                                    <Check size={20} className="text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Quality Assurance:</h3>
                                    <p className="text-gray-700">
                                        Our commitment to excellence drives us to adhere to stringent quality control measures throughout the manufacturing process, ensuring you receive a PEB multi-storey building that exceeds expectations.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                                    <Check size={20} className="text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Timely Delivery:</h3>
                                    <p className="text-gray-700">
                                        We value your time and aim to deliver projects within the stipulated timeline, backed by our efficient manufacturing processes and dedicated project management.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                                    <Check size={20} className="text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Client-Centric Approach:</h3>
                                    <p className="text-gray-700">
                                        Your satisfaction is at the heart of everything we do. We foster open communication and collaboration, ensuring that your input is integrated at every stage of the project.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 5 */}
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                                    <Check size={20} className="text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Industry Standards:</h3>
                                    <p className="text-gray-700">
                                        Blueladder PEB Manufacturing operates in accordance with international building codes and standards, guaranteeing that your PEB multi-storey building complies with safety and regulatory requirements.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="text-center mt-10">
                            <p className="text-base md:text-lg text-[#024965] font-medium">
                                Contact us today to embark on a journey towards an efficient, and aesthetically appealing PEB multi-storey building solution.
                            </p>
                        </div>
                    </div>
                </div>



            </div>

        </>
    )
}

export default PebMultiStory
