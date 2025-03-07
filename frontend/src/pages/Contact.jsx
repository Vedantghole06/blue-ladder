import React from 'react';
import { Phone, Mail, ArrowRight, MapPin } from 'lucide-react';

const ContactUs = () => {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Hero Section with Background Image */}

            <div className="relative w-full h-80 md:h-96">
                {/* Background image with overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/contact-img.png')", // Replace with your actual image path
                        backgroundPosition: "center"
                    }}
                >
                    {/* Dark overlay to make text more readable */}
                    <div className="absolute inset-0 bg-black opacity-36"></div>
                </div>

                {/* Content container */}
                <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                    {/* Main heading */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Contact Us</h1>

                    {/* Breadcrumb navigation */}
                    <div className="flex items-center text-lg">
                        <a href="/" className="hover:underline">Home</a>
                        <span className="mx-2">/</span>
                        <span className="text-[#8CB5FF] font-bold text-xl">Contact Us</span>
                    </div>
                </div>
            </div>


            {/* Contact Cards */}

            <div className="w-full bg-white py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Call Support Card */}
                        <div className="rounded-lg p-6 shadow-md flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                <Phone className="w-10 h-10 text-yellow-400" />
                            </div>
                            <h3 className="text-lg font-bold mb-4">Call Support Center 24/7</h3>
                            <p className="text-gray-600 mb-1">+91 7798811367</p>
                            <p className="text-gray-600">+91 0987654321</p>
                        </div>

                        {/* Write to Us Card */}
                        <div className="rounded-lg p-6 shadow-md flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                <Mail className="w-10 h-10 text-yellow-400" />
                            </div>
                            <h3 className="text-lg font-bold mb-4">Write to us</h3>
                            <p className="text-gray-600 mb-1">contact@blueladderpc.com</p>
                            <p className="text-gray-600">info@blueladder.com</p>
                        </div>

                        {/* Visit Us Card */}
                        <div className="rounded-lg p-6 shadow-md flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                <MapPin className="w-10 h-10 text-yellow-400" />
                            </div>
                            <h3 className="text-lg font-bold mb-4">Visit Us</h3>
                            <p className="text-gray-600 mb-1">6th Floor, Landmark building,</p>
                            <p className="text-gray-600 mb-1">Ramdaspeth, Nagpur, Maharashtra</p>
                            <p className="text-gray-600">440012</p>
                        </div>

                    </div>
                </div>
            </div>


            {/* Contact Form Section */}

            <div className="min-h-screen w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-sky-50 relative">
                {/* Background pattern */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
                    style={{
                        backgroundImage: "url('/dotted-pattern.png')",
                    }}
                />

                <div className="z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
                    {/* Left Card - Contact Info */}
                    <div className="w-full md:w-2/5 bg-slate-900 rounded-2xl overflow-hidden shadow-xl">
                        <div className="p-6 flex flex-col h-full text-white">
                            {/* Call Us Section */}
                            <div className="mb-10 mt-6 text-center">
                                <div className="flex justify-center">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-yellow-400 mb-4">
                                        <Phone size={20} className="text-yellow-400" />
                                    </div>
                                </div>
                                <h3 className="text-lg font-medium mb-4">Call Us</h3>
                                <p className="text-lg font-semibold">+91 7798811367</p>
                            </div>

                            {/* Write to Us Section */}
                            <div className="mb-10 text-center">
                                <div className="flex justify-center">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-yellow-400 mb-4">
                                        <Mail size={20} className="text-yellow-400" />
                                    </div>
                                </div>
                                <h3 className="text-lg font-medium mb-4">Write to us</h3>
                                <p className="text-lg font-semibold">contact@blueladderpc.com</p>
                            </div>

                            {/* Customer Support Image */}
                            <div className="mt-auto flex justify-center">
                                <img
                                    src="/contact-girl.png"
                                    alt="Customer Support"
                                    className="mt-6 -mb-6"
                                    style={{ maxHeight: '180px' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Card - Form */}
                    <div className="w-full md:w-3/5 bg-white rounded-2xl shadow-xl p-8">
                        <div className="text-orange-400 uppercase font-medium tracking-wider mb-2">
                            CONTACT US
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                            Get in touch with us
                        </h2>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className="w-full px-4 py-3 border-b border-gray-300 focus:border-orange-400 focus:outline-none bg-transparent"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className="w-full px-4 py-3 border-b border-gray-300 focus:border-orange-400 focus:outline-none bg-transparent"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full px-4 py-3 border-b border-gray-300 focus:border-orange-400 focus:outline-none bg-transparent"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="w-full px-4 py-3 border-b border-gray-300 focus:border-orange-400 focus:outline-none bg-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <textarea
                                    placeholder="Message"
                                    rows="4"
                                    className="w-full px-4 py-3 border-b border-gray-300 focus:border-orange-400 focus:outline-none bg-transparent resize-none"
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="bg-[#FFB703] hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                                >
                                    Submit
                                    <ArrowRight size={18} className="ml-2" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            {/* Google Map Section */}
            <div className="w-full h-[600px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29666.531001503212!2d79.05590566553718!3d21.14266246862462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0529518230f%3A0x45cd5a281a06e236!2sRamdaspeth%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1708953785319!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactUs;
