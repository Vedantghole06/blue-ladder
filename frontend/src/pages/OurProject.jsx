import React from 'react'

const OurProject = () => {


    const projects = [
        {
            id: 1,
            title: 'Metro Rails Stations',
            image: '/metro.png',
            description: 'We provide our Pre Engineered Building services to organizations dealing with metro construction. We have successfully delivered numerous metro station projects.'
        },
        {
            id: 2,
            title: 'Logistics Park',
            image: '/logistic.png',
            description: 'Logistics parks have made significant contributions not only to the freight industry, but also to urban development and social benefits.'
        },
        {
            id: 3,
            title: 'Industrial Shed',
            image: '/industry.png',
            description: 'Pre Fabricated Industrial Sheds are the most promising option for Industrial Buildings due to its dynamic use cases & numerous advantages. We deliver Pre Fab industrial sheds not only as a service but as a solution.'
        },
        {
            id: 4,
            title: 'Warehouse',
            image: '/warehouse.png',
            description: 'Warehouse construction require an intelligent work process. We understand that it is important to to utilise space efficiently and there should not be any compromise in technical detailing while warehouse construction.'
        },
        {
            id: 5,
            title: 'Dal & Rice Mill',
            image: '/dal-mill.png',
            description: 'Mill Owners often don\'t have time to engage in construction nor the risk appetite to bare delays and errors. We at Blue Ladder Solutions are committed to delivering Dal Mill & Rice Mill projects with proper timeline & customer satisfaction.'
        },
        {
            id: 6,
            title: 'Logistics Park',
            image: '/park.png',
            description: 'Logistics parks have made significant contributions not only to the freight industry, but also to urban development and social benefits.'
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
                        backgroundImage: "url('/our-project-hero.png')", // Replace with your actual image path
                        backgroundPosition: "center"
                    }}
                >
                    {/* Dark overlay to make text more readable */}
                    <div className="absolute inset-0 bg-black opacity-46"></div>
                </div>

                {/* Content container */}
                <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                    {/* Main heading */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Strong. Reliable. Engineered for Excellence.</h1>

                    {/* Breadcrumb navigation */}
                    <div className="flex items-center text-lg">
                        <a href="/" className="hover:underline">About Us</a>
                        <span className="mx-2">/</span>
                        <span className="text-[#8CB5FF] font-bold text-xl">Why Us ?</span>
                    </div>
                </div>
            </div>




            <div className="relative overflow-hidden rounded-lg shadow-lg">
                {/* The main image - fully responsive */}
                <img
                    src="/ourproject.png"
                    alt="Modern architectural building"
                    className="w-full h-auto object-cover"
                />

            </div>



            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project) => (
                        <div key={project.id} className="flex flex-col items-center text-center">
                            <div className="w-full h-70 mb-4 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default OurProject
