import React from 'react'

const AboutTeam = () => {

    const teamMembers = [
        {
            id: 1,
            name: "CA. Sagar H Bharani",
            position: "CEO",
            bio: "A Chartered Accountant turned entrepreneur, known for managing and building reputed institutes brands.",
            image: "/sagar.png"
        },
        {
            id: 2,
            name: "Mr. Ghanshyam Kewalramani",
            position: "Chairman",
            bio: "A veteran businessman, known for his brilliant style of business management. He has a very rich experience of 35 Years",
            image: "/chairman.png"
        },
        {
            id: 3,
            name: "Mr. Pawan Kewalramani",
            position: "Director of Sales",
            bio: "Pawan, Blue Ladder's youngest director, specializes in retail distribution and channel sales.",
            image: "/director-sale.png"
        },
        {
            id: 4,
            name: "Mr. Aman Bharani",
            position: "Director of Sales & Marketing",
            bio: "Aman, an MBA from IIT Hyderabad, has 7+ years of experience in senior roles in Fin-tech and Retail.",
            image: "/director-marketing.png"
        },
        {
            id: 5,
            name: "Mr. Sagar Kewalramani",
            position: "Director of Sales",
            bio: "Sagar, an MBA from IMT, began his journey with PEB at Blue Ladder and is a true visionary.",
            image: "/director-sale1.png"
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
                        backgroundImage: "url('/ourteam.png')", // Replace with your actual image path
                        backgroundPosition: "center"
                    }}
                >
                    {/* Dark overlay to make text more readable */}
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                </div>

                {/* Content container */}
                <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                    {/* Main heading */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Team</h1>

                    {/* Breadcrumb navigation */}
                    <div className="flex items-center text-lg">
                        <span className="hover:underline">About Us </span>
                        <span className="mx-2">/</span>
                        <span className="text-[#8CB5FF] font-bold text-xl">Our Team</span>
                    </div>
                </div>
            </div>



            {/* Team Members Section */}


            <div className="team-section py-16 px-4 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-orange-500 font-medium mb-2">OUR TEAM</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the BlueLadder team</h2>
                    <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                        Passionate minds, innovative solutions—this is the team behind Blue Ladder.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="team-card shadow-lg p-6 border border-gray-100 rounded-lg flex flex-col items-center text-center">
                            {/* Team Member Image */}
                            <div className="w-64 h-64 mb-6 overflow-hidden rounded-full">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Team Member Details */}
                            <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                            <p className="text-gray-600 mb-3">{member.position}</p>
                            <p className="text-lg text-gray-500 mb-6">{member.bio}</p>

                            {/* Social Media Icons */}
                            <div className="flex justify-center space-x-4 mt-auto">
                                <a href="#" className="text-gray-400 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default AboutTeam
