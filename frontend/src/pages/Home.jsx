import React, { useState, useEffect, useRef } from 'react';
import { Paperclip } from 'lucide-react';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: '/src/assets/carousel-img1.jpeg',
            title: 'Our Vision shows what we are striving for.',
            alt: 'Modern city buildings with blue sky'
        },
        {
            id: 2,
            image: '/src/assets/carousel-img2.png',
            title: 'Innovation drives our future growth.',
            alt: 'Corporate office interior'
        },
        {
            id: 3,
            image: '/src/assets/carousel-img3.png',
            title: 'Building sustainable solutions together.',
            alt: 'Green building with solar panels'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };



    const services = [
        {
            image: "/src/assets/home-service-img1.png",
            title: "Pre Engineered Steel Structures",
            icon: (<Paperclip size={24} />)
        },
        {
            image: "/src/assets/home-service-img2.png",
            title: "Smart and Green Buildings",
            icon: (<Paperclip size={24} />)
        },
        {
            image: "/src/assets/home-service-img3.png",
            title: "Engineering & Technical Advisory Services",
            icon: (<Paperclip size={24} />)
        }
    ];




    const [currentIndex, setCurrentIndex] = useState(0);

    const clients = [
        {
            name: "Flipkart",
            logo: "/src/assets/flipkart.png",
            color: "text-blue-500"
        },
        {
            name: "Delhivery",
            logo: "/src/assets/delhivery.png",
            color: "text-red-500"
        },
        {
            name: "Amazon",
            logo: "/src/assets/amazon.png",
            color: "text-orange-500"
        },
        {
            name: "Nykaa",
            logo: "/src/assets/nykaa.png",
            color: "text-pink-500"
        },
        {
            name: "Flipkart",
            logo: "/src/assets/flipkart.png",
            color: "text-blue-500"
        },
        {
            name: "Delhivery",
            logo: "/src/assets/delhivery.png",
            color: "text-red-500"
        },
        {
            name: "Amazon",
            logo: "/src/assets/amazon.png",
            color: "text-orange-500"
        },
        {
            name: "Nykaa",
            logo: "/src/assets/nykaa.png",
            color: "text-pink-500"
        }
    ];

    const getVisibleCount = () => {
        // In a real implementation, this could use window width
        // Here we'll return all items for simplicity in the demo
        return clients.length;
    };

    // Automatic carousel functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === clients.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000); // Change slide every 2 seconds

        return () => clearInterval(interval);
    }, [clients.length]);




    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const timerRef = useRef(null);

    const feedbackItems = [
        {
            id: 1,
            name: "Kasturi Rathod",
            text: "Excellent website! Easy to navigate, professional design, and detailed information about pre-engineered building solutions. Great user experience!",
            date: "May 6, 2020",
            image: "/api/placeholder/100/100"
        },
        {
            id: 2,
            name: "John Smith",
            text: "Their team was incredibly responsive and the quality of work exceeded our expectations. Highly recommend for any construction project.",
            date: "June 15, 2020",
            image: "/api/placeholder/100/100"
        },
        {
            id: 3,
            name: "Priya Sharma",
            text: "Working with this company was a breeze. They understood our requirements perfectly and delivered on time and within budget.",
            date: "July 22, 2020",
            image: "/api/placeholder/100/100"
        },
        {
            id: 4,
            name: "David Wilson",
            text: "The attention to detail was outstanding. From planning to execution, everything was handled professionally.",
            date: "August 10, 2020",
            image: "/api/placeholder/100/100"
        },
        {
            id: 5,
            name: "Anita Desai",
            text: "We've received numerous compliments on our new building. The design is modern and functional, exactly what we needed.",
            date: "September 5, 2020",
            image: "/api/placeholder/100/100"
        },
        {
            id: 6,
            name: "Robert Chen",
            text: "Five stars for customer service alone. The team was always available to answer questions and address concerns promptly.",
            date: "October 18, 2020",
            image: "/api/placeholder/100/100"
        }
    ];

    // Start autorotation on component mount
    useEffect(() => {
        beginAutoRotation();

        // Clean up timer on unmount
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    const beginAutoRotation = () => {
        // Clear any existing timer
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }

        // Set new timer that advances slide every 2 seconds
        timerRef.current = setInterval(() => {
            setActiveSlideIndex(prevIndex =>
                prevIndex === feedbackItems.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);
    };

    const stopAutoRotation = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
    };

    const goToNextSlide = () => {
        stopAutoRotation();
        setActiveSlideIndex(prevIndex =>
            prevIndex === feedbackItems.length - 1 ? 0 : prevIndex + 1
        );
        beginAutoRotation();
    };

    const goToPrevSlide = () => {
        stopAutoRotation();
        setActiveSlideIndex(prevIndex =>
            prevIndex === 0 ? feedbackItems.length - 1 : prevIndex - 1
        );
        beginAutoRotation();
    };

    const jumpToSlide = (index) => {
        stopAutoRotation();
        setActiveSlideIndex(index);
        beginAutoRotation();
    };



    return (
        <>

            {/* Carousel */}

            <div className="relative w-full h-screen overflow-hidden">
                {/* Carousel slides */}
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.alt}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-greu-50 bg-opacity-90 flex items-center">
                            <div className="container mx-auto px-4 md:px-16 text-white">
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-3xl">
                                    {slide.title}
                                </h2>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation dots */}
                <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-3 w-3 rounded-full transition-all ${index === currentSlide
                                ? 'bg-white scale-125'
                                : 'bg-white/50 hover:bg-white/80'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Navigation arrows */}
                <button
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full focus:outline-none hidden md:block"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <button
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full focus:outline-none hidden md:block"
                    onClick={nextSlide}
                    aria-label="Next slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>

                {/* Fixed contact button */}
                <div className="fixed right-0 top-1/2 -translate-y-1/2 z-100">
                    <button className="bg-white text-blue-900 font-bold py-4 px-4 rounded-l-lg shadow-lg transform rotate-90 origin-right translate-x-8 hover:bg-blue-100 transition-colors">
                        CONTACT US
                    </button>
                </div>
            </div>

            {/* Main content */}


            <div className="min-h-screen w-full bg-gray-50 relative">
                {/* Background image for the entire page */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
                    style={{
                        backgroundImage: "url('/bg-pattern.jpeg')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}
                    aria-hidden="true"
                />

                <div className="container mx-auto px-4 md:px-8 py-8 relative z-10">
                    {/* Header Section */}
                    <header className="mb-8">
                        <h1 className="text-xl text-center md:text-2xl font-bold mb-6">
                            Pre-Engineered Building Solutions and Manufacturers
                        </h1>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="md:w-2/3">
                                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                    Blueladder EPC Solutions Private Limited is the Engineered Building supplier and Manufacturers was established in the year 2015, as a Pre-Engineered Manufacturer in Nagpur. We cater to the Pre Engineered Building sector in Nagpur, Pune, Mumbai, Ahmedabad, Hyderabad, Bangalore, Satara and Maharashtra and Central India.
                                </p>

                                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                    The Blueladder's headquarter is situated in Nagpur, with its regional operational offices. We are proud to have completed PEB successful PEB projects for various clients across India. We are known to have one of the best qualified team of professionals and specialists. Besides Pre Engineered Steel Buildings, Blueladder provides excellent Engineering, Procurement & Construction turnkey solutions, and technical and advisory services.
                                </p>
                            </div>

                            <div className="md:w-1/3 flex justify-center">
                                <img src="/src/assets/logo.png" alt="Logo" />
                            </div>
                        </div>
                    </header>

                    {/* Main Section */}
                    <section className="mb-12">
                        <h2 className="text-xl text-center md:text-2xl font-bold text-gray-800 mb-4">
                            Leading Pre-Designed Structure PEB Construction Company
                        </h2>

                        <p className="text-lg leading-relaxed text-center mb-6">
                            We are one of the leading and dedicated manufacturers of Pre-Engineered buildings and all kinds of Roofing Products and accessories. The Pre-engineered buildings constructed by us are best suited for industrial structures like warehouses, factory buildings, sheds, commercial buildings, airport terminal buildings, aircraft hangars, metro stations, poultry farms, multi-story buildings, parking sheds and a wide range of other building solutions.
                        </p>
                    </section>

                    {/* Philosophy Section */}


                    <div className="container mx-auto h-full relative z-10 flex items-center">
                        <div className="w-full justify-evenly flex flex-col md:flex-row items-center">
                            {/* Left side - Philosophy title */}
                            <div className="md:w-1/3 text-center md:text-left mb-8 md:mb-0">
                                <h2 className="text-3xl md:text-4xl font-serif text-center ">
                                    Our <br /> PHILOSOPHY
                                </h2>
                            </div>

                            {/* Right side - Vision, Mission, Values */}
                            <div className="md:w-2/3 relative">
                                <div className="flex flex-col gap-5 max-w-md">
                                    {/* Vision */}
                                    <div className="bg-[#DDCCA6] px-4 py-3 rounded text-white">
                                        <p>Our Vision shows what we are striving for.</p>
                                    </div>

                                    {/* Mission */}
                                    <div className="bg-[#6A9AB0] px-4 py-3 rounded text-white">
                                        <p>Our Mission highlights how we want to achieve it.</p>
                                    </div>

                                    {/* Core Values */}
                                    <div className="bg-[#3A6D8C] px-4 py-3 rounded text-white">
                                        <p>Our core values demonstrate how we will achieve them.</p>
                                    </div>
                                </div>

                                {/* Person walking */}
                                <div className="absolute right-0 bottom-0 transform translate-y-12 md:translate-y-0">
                                    <img
                                        src="/person.png"
                                        alt="Person walking"
                                        className="h-54"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Values Cards */}
                    <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Vision Card */}
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                                <img src="/src/assets/vision.png" alt="" />
                            </div>

                            <h3 className="text-lg font-bold text-gray-800 mb-3">Vision</h3>

                            <p className="text-lg text-gray-600 mb-4">
                                We at BlueLadder EPC Solutions <br />
                                started the company with a vision <br />
                                to provide fast, easy and unique <br />
                                pre-engineered structures of steel.
                            </p>

                            <a href="#" className="text-blue-600 text-xs font-semibold hover:underline">READ MORE →</a>
                        </div>

                        {/* Mission Card */}
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                                <img src="/src/assets/mission.png" alt="" />
                            </div>

                            <h3 className="text-lg font-bold text-gray-800 mb-3">Mission</h3>

                            <p className="text-lg text-gray-600 mb-4">
                                We envisage becoming central <br />
                                India’s leading modern PEB <br />
                                company by replacing <br />
                                conventional structures.
                            </p>

                            <a href="#" className="text-blue-600 text-xs font-semibold hover:underline">READ MORE →</a>
                        </div>

                        {/* Core Value Card */}
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                                <img src="/src/assets/core.png" alt="" />
                            </div>

                            <h3 className="text-lg font-bold text-gray-800 mb-3">Core Value</h3>

                            <p className="text-lg text-gray-600 mb-4">
                                We at Blueladder EPC Solutions <br />
                                offer innovative & creative building <br />
                                designs to provide best, easy and <br />
                                value pre-engineered structures of steel.
                            </p>

                            <a href="#" className="text-blue-600 text-xs font-semibold hover:underline">READ MORE →</a>
                        </div>
                    </section>
                </div>
            </div>


            {/* VideoShowcaseSection  */}

            <div className="bg-gray-100 py-12 px-4">
                <div className="container mx-auto max-w-5xl">
                    {/* Header */}
                    <h2 className="text-2xl md:text-3xl font-medium text-[#345CA5] text-center mb-6">
                        Pre Engineered Building (PEB)Manufacturing and Assembling
                    </h2>

                    {/* Subheading/Description */}
                    <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto text-lg">
                        View this video to learn about Blue Ladder EPC Solutions Pvt Ltd's working style with Pre
                        Engineered Buildings across India with the highest manufacturing standards. Some
                        glimpses of our works have been exhibited and showcased.
                    </p>

                    {/* Video Card */}
                    <div className="bg-white rounded-3xl shadow-lg p-8 mb-10 flex flex-col md:flex-row">
                        {/* Left content */}
                        <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                            <div className="flex items-center mb-4">
                                <img
                                    src="/logo.png"
                                    alt="Blue Ladder Logo"
                                    className="h-12"
                                />
                            </div>

                            <p className="text-blue-800 font-medium text-lg mb-6">
                                Click here to view our state of <br />
                                the art PEB manufacturing <br />
                                facility
                            </p>

                            <p className="text-gray-500 text-lg mb-4">
                                contact@blueladderspc.com
                            </p>

                            <p className="text-gray-500 text-lg">
                                Blue Ladder EPC Solutions
                            </p>
                        </div>

                        {/* Right content (Video thumbnail) */}
                        <div className="md:w-1/2 relative">
                            <div className="rounded-xl overflow-hidden bg-gray-200 h-64 relative">
                                <img
                                    src="/api/placeholder/600/400"
                                    alt="PEB Structure"
                                    className="w-full h-full object-cover"
                                />

                                {/* Play button overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white bg-opacity-70 rounded-full p-4 shadow-md">
                                        <div className="w-10 h-10 flex items-center justify-center">
                                            <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-600 fill-current">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer text */}
                    <p className="text-gray-700 text-center text-lg max-w-4xl mx-auto">
                        BlueLadder EPC is a global enterprise that specializes in providing solutions for Pre-engineered Buildings and Steel Structures.
                    </p>
                </div>
            </div>



            {/* Benifits */}

            <div className="bg-gradient-to-b from-white to-gray-100 py-8 sm:py-12 px-4">
                <h2 className="text-[#345CA5] text-xl sm:text-2xl md:text-3xl font-medium text-center mb-8 sm:mb-16">
                    Benefits of Pre Engineered Steel Structures:
                </h2>

                {/* Desktop Layout (Circle with positioned cards) - Hidden on small screens */}
                <div className="relative max-w-4xl mx-auto h-[500px] hidden md:block">
                    {/* Circle Background */}
                    <div className="absolute w-[70%] h-[70%] border-4 border-gray-300 rounded-full opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

                    {/* Top Left Card */}
                    <div className="absolute top-0 left-0 w-[220px] bg-[#345CA5] text-white p-5 rounded-md shadow text-center">
                        <p className="text-sm lg:text-base leading-relaxed">
                            Pre-engineered building structures have lightweight construction and speedy installation.
                        </p>
                    </div>

                    {/* Top Right Card */}
                    <div className="absolute top-0 right-0 w-[220px] bg-[#345CA5] text-white p-5 rounded-md shadow text-center">
                        <p className="text-sm lg:text-base leading-relaxed">
                            The building's insulated walls and facets enhance weatherproofing and energy efficiency.
                        </p>
                    </div>

                    {/* Middle Card */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[220px] bg-[#345CA5] text-white p-5 rounded-md shadow text-center">
                        <p className="text-sm lg:text-base leading-relaxed">
                            PEB structures require low maintenance due to high-quality materials and precise manufacturing.
                        </p>
                    </div>

                    {/* Bottom Left Card */}
                    <div className="absolute bottom-0 left-0 w-[220px] bg-[#345CA5] text-white p-5 rounded-md shadow text-center">
                        <p className="text-sm lg:text-base leading-relaxed">
                            Pre-engineered steel buildings offer cost-effectiveness through reduced construction time and labor costs.
                        </p>
                    </div>

                    {/* Bottom Right Card */}
                    <div className="absolute bottom-0 right-0 w-[220px] bg-[#345CA5] text-white p-5 rounded-md shadow text-center">
                        <p className="text-sm lg:text-base leading-relaxed">
                            Pre-engineered buildings have a variety of finishing options that add aesthetic appeal.
                        </p>
                    </div>
                </div>

                {/* Mobile and Tablet Layout (Stacked cards) - Shown only on small and medium screens */}
                <div className="md:hidden space-y-4 max-w-md mx-auto">
                    {/* Card 1 */}
                    <div className="bg-[#345CA5] text-white p-5 rounded-md shadow text-center">
                        <p className="text-sm sm:text-base leading-relaxed">
                            Pre-engineered building structures have lightweight construction and speedy installation.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#345CA5] text-white p-5 rounded-md shadow text-center">
                        <p className="text-sm sm:text-base leading-relaxed">
                            The building's insulated walls and facets enhance weatherproofing and energy efficiency.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#345CA5] text-white p-5 rounded-md shadow text-center">
                        <p className="text-sm sm:text-base leading-relaxed">
                            PEB structures require low maintenance due to high-quality materials and precise manufacturing.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#345CA5] text-white p-5 rounded-md shadow text-center">
                        <p className="text-sm sm:text-base leading-relaxed">
                            Pre-engineered steel buildings offer cost-effectiveness through reduced construction time and labor costs.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#345CA5] text-white p-5 rounded-md shadow text-center">
                        <p className="text-sm sm:text-base leading-relaxed">
                            Pre-engineered buildings have a variety of finishing options that add aesthetic appeal.
                        </p>
                    </div>
                </div>
            </div>





            {/* WhyChooseUsSection */}

            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-blue-700 mb-4">Why Choose us</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Our team excels in delivering cutting-edge solutions for Pre-Engineered Building
                        systems. With a state-of-the-art manufacturing facility, we provide high-quality
                        PEB structures and comprehensive turnkey engineering services.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Stats and text column (left side) */}
                    <div className="col-span-1">
                        <div className="border-t border-gray-200">
                            <div className="py-6 px-4 border-b border-gray-200">
                                <h3 className="text-3xl font-bold text-blue-600">700<span className="text-blue-400">+</span></h3>
                                <p className="text-gray-600">Total Projects</p>
                            </div>
                        </div>

                        <div className="border-b border-gray-200">
                            <div className="py-6 px-4">
                                <h3 className="text-3xl font-bold text-blue-600">300<span className="text-blue-400">+</span></h3>
                                <p className="text-gray-600">Professional Team Member</p>
                            </div>
                        </div>

                        <div className="border-b border-gray-200">
                            <div className="py-6 px-4">
                                <h3 className="text-3xl font-bold text-blue-600">1300000<span className="text-blue-400">sq ft</span></h3>
                                <p className="text-gray-600">Quantum Delivered</p>
                            </div>
                        </div>

                        <div className="border-b border-gray-200">
                            <div className="py-6 px-4">
                                <h3 className="text-3xl font-bold text-blue-600">9<span className="text-blue-400">+</span></h3>
                                <p className="text-gray-600">Regional Office</p>
                            </div>
                        </div>

                        <div className="py-6 px-4">
                            <p className="text-gray-600 mb-6">
                                We Work Together With Our Clients To Design And Construct Homes And Surroundings That Match Their Values And Way Of Life.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded uppercase text-sm">
                                Explore More
                            </button>
                        </div>
                    </div>

                    {/* Single image column (right side) */}
                    <div className="col-span-2">
                        <img
                            src="/src/assets/home-img.png"
                            alt="building images"
                            className="w-full h-full object-cover rounded-2xl max-h-screen md:max-h-full"
                        />
                    </div>
                </div>
            </div>


            {/* Services */}

            <div className="max-w-6xl mx-auto p-4 bg-white">
                <h1 className="text-3xl font-medium text-[#345CA5] mb-8">Our Products & Services</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-md">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-4 flex items-center">
                                <div className="text-[#345CA5] mr-2">
                                    {service.icon}
                                </div>
                                <p className="text-gray-800">{service.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Our client */}

            <div className="max-w-6xl mx-auto p-4 bg-white">
                <h1 className="text-3xl font-medium text-[#345CA5] text-center mb-12">Who we've Worked With</h1>

                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / getVisibleCount())}%)`
                        }}
                    >
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-full md:w-1/4 px-4 flex justify-center"
                            >
                                <div className="w-64 h-32 flex items-center justify-center">
                                    <img
                                        src={client.logo}
                                        alt={`${client.name} logo`}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Our channel partner */}


            <div className="container mx-auto px-4 py-12">
                <h2 className="text-3xl md:text-4xl text-center font-medium text-[#345CA5] mb-10">
                    Our Channel Partners
                </h2>

                <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 md:gap-16 lg:gap-24">
                    {/* Tata Steel Logo */}
                    <div className="w-48 md:w-40 lg:w-48">
                        <img
                            src="/src/assets/tata.png"
                            alt="Tata Steel Logo"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* JSW Steel Logo */}
                    <div className="w-48 md:w-40 lg:w-48">
                        <img
                            src="/src/assets/jsw.png"
                            alt="JSW Steel Logo"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Tata BlueScope Steel Logo */}
                    <div className="w-48 md:w-40 lg:w-48">
                        <img
                            src="/src/assets/tata1.png"
                            alt="Tata BlueScope Steel Logo"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>



            {/* Feedbacks */}


            <div className="testimonial-wrapper mx-auto px-5 py-14">
                <h2 className="slider-heading text-3xl md:text-4xl text-center font-medium text-[#345CA5] mb-12">
                    Here is what our Clients are saying About us
                </h2>

                <div className="slider-container max-w-3xl mx-auto">
                    {/* Testimonial Card */}
                    <div
                        className="testimonial-card bg-white rounded-lg shadow-lg p-6 mb-8"
                        onMouseEnter={stopAutoRotation}
                        onMouseLeave={beginAutoRotation}
                    >
                        <div className="testimonial-content flex flex-col md:flex-row items-center md:items-start gap-6">
                            {/* Image */}
                            <div className="avatar-wrapper w-24 h-24 flex-shrink-0">
                                <img
                                    src={feedbackItems[activeSlideIndex].image}
                                    alt={feedbackItems[activeSlideIndex].name}
                                    className="client-avatar w-full h-full rounded-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="testimonial-text flex-1">
                                <h3 className="client-name text-xl font-medium text-gray-800 mb-2">
                                    {feedbackItems[activeSlideIndex].name}
                                </h3>
                                <p className="client-feedback text-gray-700 mb-4">
                                    {feedbackItems[activeSlideIndex].text}
                                </p>
                                <p className="feedback-date text-sm text-gray-500">
                                    {feedbackItems[activeSlideIndex].date}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div
                        className="slider-controls flex justify-center items-center gap-4"
                        onMouseEnter={stopAutoRotation}
                        onMouseLeave={beginAutoRotation}
                    >
                        {/* Previous Button */}
                        <button
                            onClick={goToPrevSlide}
                            className="prev-btn text-[#345CA5] text-3xl hover:text-blue-800 focus:outline-none"
                            aria-label="Previous testimonial"
                        >
                            &#10094;
                        </button>

                        {/* Indicators */}
                        <div className="slide-indicators flex gap-2">
                            {feedbackItems.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => jumpToSlide(index)}
                                    className={`indicator-dot w-3 h-3 rounded-full ${index === activeSlideIndex ? 'bg-blue-600' : 'bg-blue-200'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={goToNextSlide}
                            className="next-btn text-[#345CA5] text-3xl hover:text-blue-800 focus:outline-none"
                            aria-label="Next testimonial"
                        >
                            &#10095;
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;