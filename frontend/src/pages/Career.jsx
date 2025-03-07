import { useState } from "react";
import { Facebook, Youtube, Twitter, Instagram, Linkedin } from 'lucide-react';

const Career = () => {

    const benefits = [
        {
            id: 1,
            title: "Company Values",
            description: "Trust, listening, honesty, and co-operation are the pillars that set our work culture apart.",
            image: "/career-img1.png"
        },
        {
            id: 2,
            title: "Friendly atmosphere",
            description: "We hold a positive attitude in order to foster respect and development for everyone.",
            image: "/career-img2.png"
        },
        {
            id: 3,
            title: "Work-life balance",
            description: "For us, a healthy personal life is just as important as the time dedicated to our work.",
            image: "/career-img3.png"
        },
        {
            id: 4,
            title: "Everyday grow",
            description: "We provide the necessary support to ensure your skills reach steady growth.",
            image: "/career-img4.png"
        }
    ];


    const [activeCategory, setActiveCategory] = useState('All positions');

    // Job categories with counts
    const categories = [
        { name: 'All positions', count: 17 },
        { name: 'Engineering', count: 7 },
        { name: 'Product', count: 3 },
        { name: 'Design', count: 1 },
        { name: 'Operation', count: 4 },
        { name: 'Marketing', count: 2 },
    ];

    // Job listings data
    const jobs = [
        {
            id: 1,
            title: 'Sales Officer(s)',
            tags: ['Remote', 'Full-time'],
            description: 'Join BlueLadder as a Sales Officer! Drive sales, build client relationships, and achieve targets. Competitive salary, incentives, and growth opportunities await.',
        },
        {
            id: 2,
            title: 'Accountant',
            tags: ['Onsite', 'Full-time'],
            description: 'Join BlueLadder as an Accountant! Manage finances, maintain records, and ensure accurate reporting. Competitive salary and growth opportunities.',
        },
        {
            id: 3,
            title: 'Erection Engineer (PEB)',
            tags: ['As per site', 'Full-time'],
            description: 'Join BlueLadder as an Erection Engineer (PEB)! Oversee site installations, ensure structural safety, and manage project execution. Competitive salary and career growth.',
        },
        {
            id: 4,
            title: 'Detailer',
            tags: ['Remote', 'Pune', 'Full-time'],
            description: 'Join BlueLadder as a Detailer! Create precise structural drawings, ensure accuracy, and support project execution. Competitive salary and growth opportunities.',
        },
        {
            id: 5,
            title: 'Site Engineer (Civil)',
            tags: ['Site', 'Full-time'],
            description: 'Join BlueLadder as a Site Engineer (Civil)! Supervise construction, ensure quality, and manage site operations. Competitive salary and growth opportunities.',
        },
    ];

    return (

        <>
            <div className="relative w-full bg-gray-800 text-white overflow-hidden">
                {/* Background image with overlay */}
                <div className="absolute inset-0 bg-cover bg-center" style={{
                    backgroundImage: 'url("/career-hero.png")', // Replace with your actual image URL
                    opacity: 0.5
                }}></div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-70"></div>

                {/* Content container */}
                <div className="relative z-10 container mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between">
                    {/* Left text section */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <p className="text-lg mb-2">Join the team</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Build a future you<br />believe in
                        </h1>
                        <button className="bg-[#345CA5] text-white px-6 py-3 rounded-full flex items-center hover:bg-blue-700 transition-colors">
                            Open positions
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" transform="rotate(90 10 10)" />
                            </svg>
                        </button>
                    </div>

                    {/* Right logo section */}
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <div className="relative">
                            {/* Logo as an image */}
                            <div className="relative w-56 md:w-72">
                                <img
                                    src="/logo.png" // Replace with your actual logo image URL
                                    alt="Blueladder Logo"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* Benifits */}

            <div className="container mx-auto px-4 py-16 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-orange-500 font-medium uppercase tracking-wide mb-2">CAREERS</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        What make Blue Ladder a great place<br />to work?
                    </h2>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit) => (
                        <div key={benefit.id} className="flex flex-col">
                            <div className="mb-4 overflow-hidden rounded-lg">
                                <img
                                    src={benefit.image}
                                    alt={benefit.title}
                                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                            <p className="text-gray-600 text-lg">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <h3 className="text-2xl md:text-4xl font-semibold text-[#345CA5]">
                        Join our team and inspire the work.
                    </h3>

                    <h1 className="text-5xl font-semibold text-center md:text-center mt-8">We have 17 open positions now!</h1>
                </div>
            </div>


            {/* Job openings */}

            <div className="flex flex-col md:flex-row bg-gray-50 min-h-screen">
                {/* Left sidebar */}
                <div className="w-full md:w-64 p-6 bg-white">


                    {/* Categories */}
                    <div className="space-y-3">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                className={`w-full text-left px-3 py-2 rounded-md transition ${activeCategory === category.name ? 'text-[#345CA5] bg-blue-50' : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                onClick={() => setActiveCategory(category.name)}
                            >
                                {category.name} ({category.count})
                            </button>
                        ))}
                    </div>

                    {/* Join us section */}
                    <div className="mt-12 text-sm text-gray-700">
                        <p>Join us and be part of a team that is shaping the future of EPC solutions. Together, we can build a better tomorrow for everyone.</p>
                        <button className="mt-4 border border-gray-300 rounded-full px-4 py-2 text-sm hover:bg-gray-100 transition">
                            Share your LinkedIn profile
                        </button>
                    </div>
                </div>

                {/* Right content area - job listings */}
                <div className="flex-1 p-4">
                    <div className="space-y-6">
                        {jobs.map((job) => (
                            <div key={job.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold mb-2">{job.title}</h2>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {job.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm mb-4">{job.description}</p>

                                    {/* See positions button */}
                                    <div className="flex justify-end">
                                        <button className="bg-black text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-gray-800 transition">
                                            See positions
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Show more button */}
                        <div className="flex justify-center mt-8">
                            <button className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition">
                                Show more...
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* follow us */}

            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Follow us <span className="font-normal">on social to see what we're up to!</span>
                        </h2>

                        <p className="mb-6">We are eager to be in touch with you in the following channels:</p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {/* Facebook */}
                            <div className="flex items-center gap-2">
                                <div className="bg-black rounded-full p-2">
                                    <Facebook size={24} color="white" />
                                </div>
                                <span>Facebook</span>
                            </div>

                            {/* YouTube */}
                            <div className="flex items-center gap-2">
                                <div className="bg-black rounded-full p-2">
                                    <Youtube size={24} color="white" />
                                </div>
                                <span>YouTube</span>
                            </div>

                            {/* Twitter */}
                            <div className="flex items-center gap-2">
                                <div className="bg-black rounded-full p-2">
                                    <Twitter size={24} color="white" />
                                </div>
                                <span>Twitter</span>
                            </div>

                            {/* Instagram */}
                            <div className="flex items-center gap-2">
                                <div className="bg-black rounded-full p-2">
                                    <Instagram size={24} color="white" />
                                </div>
                                <span>Instagram</span>
                            </div>

                            {/* LinkedIn */}
                            <div className="flex items-center gap-2">
                                <div className="bg-black rounded-full p-2">
                                    <Linkedin size={24} color="white" />
                                </div>
                                <span>LinkedIn</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        {/* Building/Structure Icon */}
                        <div className="w-48 h-48 md:w-64 md:h-64">
                            <img src="/career-follow.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Career;