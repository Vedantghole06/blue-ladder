import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BlogPage = () => {
    const blogPosts = [
        {
            id: 1,
            category: 'Construction',
            title: 'The Importance Of A Strong Foundation In Construction',
            author: 'Jenny Doe',
            date: '23 December 2022',
            readTime: '3 Min. To Read',
            snippet: 'Did you come here for something in particular or just general Riker-bashing? And blowing into',
            featured: true,
            popular: false,
            image: '/api/placeholder/400/250'
        },
        {
            id: 2,
            category: 'Foundation',
            title: 'Common Foundation Problems And How To Prevent Them',
            author: 'Jenny Koe',
            date: '22 December 2022',
            readTime: '3 Min. To Read',
            snippet: 'Did you come here for something in particular or just general Riker-bashing? And blowing into',
            featured: false,
            popular: false,
            image: '/api/placeholder/400/250'
        },
        {
            id: 3,
            category: 'Construction',
            title: 'Building For The Future',
            author: 'Jenny Koe',
            date: '20 December 2022',
            readTime: '3 Min. To Read',
            snippet: 'Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp',
            featured: false,
            popular: true,
            image: null
        },
        {
            id: 4,
            category: 'Construction',
            title: 'Sustainable Foundation Practices',
            author: 'Jenny Koe',
            date: '18 December 2022',
            readTime: '3 Min. To Read',
            snippet: 'Did you come here for something in particular or just general Riker-bashing? And blowing into',
            featured: false,
            popular: true,
            image: null
        }
    ];

    const featuredPosts = blogPosts.filter(post => post.featured);
    const popularPosts = blogPosts.filter(post => post.popular);
    const regularPosts = blogPosts.filter(post => !post.featured && !post.popular);

    const BlogCarousel = ({ popularPosts }) => {
        const [activeIndex, setActiveIndex] = useState(0);

        const nextSlide = () => {
            setActiveIndex((current) =>
                current === popularPosts.length - 1 ? 0 : current + 1
            );
        };

        const prevSlide = () => {
            setActiveIndex((current) =>
                current === 0 ? popularPosts.length - 1 : current - 1
            );
        };



        const articleItems = [
            {
                id: 1,
                title: 'Eco-Friendly Construction Is The Future!',
                image: '/api/placeholder/100/70',
                author: 'Johnny Doe',
                date: 'January 15, 2023',
                readTime: '2 Min To Read',
                snippet: 'Did you come here for something in particular or just general lurking? Be honest.'
            },
            {
                id: 2,
                title: 'A Building\'s Strength Starts From The Ground Up',
                image: '/api/placeholder/100/70',
                author: 'Jenny Doe',
                date: 'January 14, 2023',
                readTime: '3 Min To Read',
                snippet: 'Did you come here for something in particular or just general lurking? Be honest.'
            },
            {
                id: 3,
                title: 'Reinforcement Plays A Crucial Role In Construction',
                image: '/api/placeholder/100/70',
                author: 'Johnny Doe',
                date: 'January 13, 2023',
                readTime: '4 Min To Read',
                snippet: 'Did you come here for something in particular or just general lurking? Be honest.'
            },
            {
                id: 4,
                title: 'Eco-Friendly Construction Is The Future!',
                image: '/api/placeholder/100/70',
                author: 'Johnny Doe',
                date: 'January 12, 2023',
                readTime: '2 Min To Read',
                snippet: 'Did you come here for something in particular or just general lurking? Be honest.'
            },
            {
                id: 5,
                title: 'Choosing The Right Foundation Type',
                image: '/api/placeholder/100/70',
                author: 'Jenny Doe',
                date: 'January 11, 2023',
                readTime: '3 Min To Read',
                snippet: 'Did you come here for something in particular or just general lurking? Be honest.'
            },
            {
                id: 6,
                title: 'Eco-Friendly Construction Is The Future!',
                image: '/api/placeholder/100/70',
                author: 'Johnny Doe',
                date: 'January 10, 2023',
                readTime: '2 Min To Read',
                snippet: 'Did you come here for something in particular or just general lurking? Be honest.'
            },
            {
                id: 7,
                title: 'Sustainable Foundation Practices',
                image: '/api/placeholder/100/70',
                author: 'Jenny Doe',
                date: 'January 9, 2023',
                readTime: '4 Min To Read',
                snippet: 'Did you come here for something in particular or just general lurking? Be honest.'
            },
            {
                id: 8,
                title: 'Perfect Concrete Foundation',
                image: '/api/placeholder/100/70',
                author: 'Johnny Doe',
                date: 'January 8, 2023',
                readTime: '3 Min To Read',
                snippet: 'Did you come here for something in particular or just general lurking? Be honest.'
            },
            {
                id: 9,
                title: 'The Importance Of A Strong Foundation',
                image: '/api/placeholder/100/70',
                author: 'Jenny Doe',
                date: 'January 7, 2023',
                readTime: '5 Min To Read',
                snippet: 'Did you come here for something in particular or just general lurking? Be honest.'
            }
        ];

        const contributorProfiles = [
            {
                id: 1,
                name: 'Jenny Koe',
                role: 'Senior Writer',
                image: '/api/placeholder/50/50',
                articles: 15,
                rating: 4.8
            },
            {
                id: 2,
                name: 'Adriana Stuart',
                role: 'Construction Expert',
                image: '/api/placeholder/50/50',
                articles: 23,
                rating: 4.9
            },
            {
                id: 3,
                name: 'Jenny Koe',
                role: 'Senior Writer',
                image: '/api/placeholder/50/50',
                articles: 15,
                rating: 4.8
            }
        ];

        const categoryStats = [
            { label: 'Construction', count: 47 },
            { label: 'Building', count: 35 },
            { label: 'DIY', count: 24 },
            { label: 'Home Design', count: 18 },
        ];

        const topicTags = [
            { name: 'Foundation', count: 23 },
            { name: 'Concrete', count: 14 },
            { name: 'Eco-Friendly', count: 9 },
            { name: 'All', count: null },
        ];



        return (
            <>
                <div className="min-h-screen bg-gray-50">
                    {/* Header */}
                    <header className="w-full bg-[#024965] py-8 text-center">
                        <h1 className="text-3xl font-bold text-white">THE BLOG</h1>
                    </header>

                    {/* Blog Content */}
                    <div className="mx-auto max-w-6xl px-4 py-12">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                            {/* Featured Section */}
                            <div className="lg:col-span-1">
                                <div className="mb-4 flex items-center">
                                    <div className="bg-[#024965] px-2 py-1 text-sm text-white">
                                        Featured
                                    </div>
                                    <div className="ml-2 text-gray-600">This Month</div>
                                </div>

                                {featuredPosts.map(post => (
                                    <div key={post.id} className="mb-8">
                                        <div className="mb-1 inline-block bg-gray-200 px-2 py-1 text-xs">
                                            {post.category}
                                        </div>
                                        <h2 className="mb-4 text-xl font-bold">{post.title}</h2>
                                        {post.image && (
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="mb-4 h-auto w-full rounded"
                                            />
                                        )}
                                        <div className="mb-4 flex items-center">
                                            <div className="mr-2 h-8 w-8 overflow-hidden rounded-full bg-gray-300">
                                                <img src="/api/placeholder/50/50" alt="author" className="h-full w-full object-cover" />
                                            </div>
                                            <span className="text-sm text-gray-600">{post.author}</span>
                                            <span className="mx-2 text-sm text-gray-400">•</span>
                                            <span className="text-sm text-gray-600">{post.date}</span>
                                            <span className="mx-2 text-sm text-gray-400">•</span>
                                            <span className="text-sm text-gray-600">{post.readTime}</span>
                                        </div>
                                        <p className="text-sm text-gray-600">{post.snippet}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Regular Posts */}
                            <div className="lg:col-span-1">
                                {regularPosts.map(post => (
                                    <div key={post.id} className="mb-8">
                                        <div className="mb-1 inline-block bg-[#024965] px-2 py-1 text-xs text-white">
                                            {post.category}
                                        </div>
                                        <h2 className="mb-4 text-xl font-bold">{post.title}</h2>
                                        {post.image && (
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="mb-4 h-auto w-full rounded"
                                            />
                                        )}
                                        <div className="mb-4 flex items-center">
                                            <div className="mr-2 h-8 w-8 overflow-hidden rounded-full bg-gray-300">
                                                <img src="/api/placeholder/50/50" alt="author" className="h-full w-full object-cover" />
                                            </div>
                                            <span className="text-sm text-gray-600">{post.author}</span>
                                            <span className="mx-2 text-sm text-gray-400">•</span>
                                            <span className="text-sm text-gray-600">{post.date}</span>
                                            <span className="mx-2 text-sm text-gray-400">•</span>
                                            <span className="text-sm text-gray-600">{post.readTime}</span>
                                        </div>
                                        <p className="text-sm text-gray-600">{post.snippet}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Popular Posts */}
                            <div className="lg:col-span-1">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="bg-[#024965] px-2 py-1 text-sm text-white">
                                        Popular
                                    </div>
                                    <div className="text-gray-600">Posted</div>
                                </div>

                                <div className="relative">
                                    {/* Carousel Navigation */}
                                    <div className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 transform">
                                        <button
                                            onClick={prevSlide}
                                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
                                        >
                                            <ChevronLeft size={20} />
                                        </button>
                                    </div>

                                    {/* Carousel Items */}
                                    <div className="overflow-hidden">
                                        <div
                                            className="flex transition-transform duration-300 ease-in-out"
                                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                                        >
                                            {popularPosts.map((post, index) => (
                                                <div
                                                    key={post.id}
                                                    className="min-w-full px-1"
                                                >
                                                    <div className="mb-8 border-l-4 border-teal-800 pl-4">
                                                        <div className="mb-1 inline-block bg-gray-200 px-2 py-1 text-xs">
                                                            {post.category}
                                                        </div>
                                                        <h2 className="mb-2 text-xl font-bold">{post.title}</h2>
                                                        <div className="mb-2 flex items-center">
                                                            <div className="mr-2 h-6 w-6 overflow-hidden rounded-full bg-gray-300">
                                                                <img src="/api/placeholder/50/50" alt="author" className="h-full w-full object-cover" />
                                                            </div>
                                                            <span className="text-xs text-gray-600">{post.author}</span>
                                                            <span className="mx-2 text-xs text-gray-400">•</span>
                                                            <span className="text-xs text-gray-600">{post.date}</span>
                                                            <span className="mx-2 text-xs text-gray-400">•</span>
                                                            <span className="text-xs text-gray-600">{post.readTime}</span>
                                                        </div>
                                                        <p className="text-xs text-gray-600">{post.snippet}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right Navigation */}
                                    <div className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 transform">
                                        <button
                                            onClick={nextSlide}
                                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
                                        >
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>

                                    {/* Pagination Indicators */}
                                    <div className="mt-4 flex justify-center">
                                        {popularPosts.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setActiveIndex(index)}
                                                className={`mx-1 h-2 w-2 rounded-full ${index === activeIndex ? 'bg-[#024965]' : 'bg-gray-300'
                                                    }`}
                                                aria-label={`Go to slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="mx-auto max-w-7xl bg-gray-50 px-4 py-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {/* Header */}
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="mr-2 h-6 w-6 bg-[#024965]"></div>
                                    <span className="font-bold text-[#024965]">Featured</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-2 h-6 w-6 bg-[#024965]"></div>
                                    <span className="font-bold text-[#024965]">Authors</span>
                                </div>
                            </div>

                            {/* Blog Posts */}
                            <div className="space-y-6">
                                {articleItems.map(article => (
                                    <div key={article.id} className="flex border-b border-gray-200 pb-6">
                                        <div className="mr-4 flex-shrink-0">
                                            <img src={article.image} alt={article.title} className="h-20 w-28 rounded object-cover" />
                                        </div>
                                        <div className="flex flex-col justify-between">
                                            <h2 className="mb-2 text-lg font-bold text-gray-800">{article.title}</h2>
                                            <div className="mb-2 flex items-center text-xs text-gray-500">
                                                <span>{article.author}</span>
                                                <span className="mx-1">•</span>
                                                <span>{article.date}</span>
                                                <span className="mx-1">•</span>
                                                <span>{article.readTime}</span>
                                            </div>
                                            <p className="text-sm text-gray-600">{article.snippet}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Share Experience Section */}
                            <div className="my-8 rounded-lg bg-white p-6 text-center shadow-sm">
                                <h3 className="mb-4 text-lg font-bold">Share Your Experience With Us</h3>
                                <button className="rounded-md border border-[#024965] px-4 py-2 text-sm text-[#024965] hover:bg-teal-50">
                                    Write a Schedule
                                </button>
                            </div>

                            {/* Pagination */}
                            <div className="mt-8 flex items-center justify-center space-x-2">
                                <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-sm">
                                    ←
                                </button>
                                <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-gray-100 text-sm">
                                    1
                                </button>
                                <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-sm">
                                    2
                                </button>
                                <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-sm">
                                    3
                                </button>
                                <span className="text-sm">...</span>
                                <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-sm">
                                    9
                                </button>
                                <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-sm">
                                    →
                                </button>
                                <button className="ml-2 rounded bg-[#024965] px-3 py-1 text-sm text-white">
                                    Next
                                </button>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Authors */}
                            <div>
                                <h3 className="mb-4 flex items-center border-b border-gray-200 pb-2 text-lg font-bold text-[#024965]">
                                    <span className="mr-2 inline-block h-5 w-5 bg-[#024965]"></span>
                                    Authors
                                </h3>
                                <div className="space-y-4">
                                    {contributorProfiles.map(profile => (
                                        <div key={profile.id} className="flex items-center">
                                            <img src={profile.image} alt={profile.name} className="mr-3 h-12 w-12 rounded-full" />
                                            <div>
                                                <h4 className="font-bold">{profile.name}</h4>
                                                <p className="text-xs text-gray-500">{profile.role}</p>
                                                <div className="mt-1 flex items-center">
                                                    <div className="mr-2 text-xs">{profile.articles} Articles</div>
                                                    <div className="flex items-center text-xs">
                                                        <span className="mr-1">{profile.rating}</span>
                                                        <span className="text-yellow-400">★★★★★</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="rounded-lg bg-[#024965] p-6 text-white">
                                <h3 className="mb-4 text-lg font-bold">Build Strong With Foundation</h3>
                                <p className="mb-4 text-sm">
                                    Subscribe to our newsletter & stay updated with the latest trends in construction foundation building.
                                </p>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        placeholder="Your Email Address"
                                        className="w-full rounded-md border border-teal-600 bg-[#024965] p-2 text-sm text-white placeholder-teal-300"
                                    />
                                </div>
                                <button className="w-full rounded-md bg-white py-2 text-sm font-bold text-teal-800">
                                    SUBSCRIBE
                                </button>
                            </div>

                            {/* Categories */}
                            <div>
                                <h3 className="mb-4 flex items-center border-b border-gray-200 pb-2 text-lg font-bold text-[#024965]">
                                    <span className="mr-2 inline-block h-5 w-5 bg-[#024965]"></span>
                                    Categories
                                </h3>
                                <div className="space-y-2">
                                    {categoryStats.map(category => (
                                        <div key={category.label} className="flex justify-between">
                                            <span className="text-gray-700">{category.label}</span>
                                            <span className="text-gray-500">{category.count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                                    <div className="text-2xl font-bold text-[#024965]">14</div>
                                    <div className="text-xs text-gray-500">New Posts</div>
                                </div>
                                <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                                    <div className="text-2xl font-bold text-[#024965]">405</div>
                                    <div className="text-xs text-gray-500">Total Stories</div>
                                </div>
                                <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                                    <div className="text-2xl font-bold text-[#024965]">25</div>
                                    <div className="text-xs text-gray-500">Contributors</div>
                                </div>
                                <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                                    <div className="text-2xl font-bold text-[#024965]">118</div>
                                    <div className="text-xs text-gray-500">Topics</div>
                                </div>
                            </div>

                            {/* Topics */}
                            <div>
                                <h3 className="mb-4 flex items-center border-b border-gray-200 pb-2 text-lg font-bold text-[#024965]">
                                    <span className="mr-2 inline-block h-5 w-5 bg-[#024965]"></span>
                                    Popular Tags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {topicTags.map(tag => (
                                        <div
                                            key={tag.name}
                                            className={`rounded-md ${tag.name === 'Foundation'
                                                ? 'bg-[#024965] text-white'
                                                : 'border border-gray-300 bg-white text-gray-700'
                                                } px-3 py-1 text-sm`}
                                        >
                                            {tag.name} {tag.count && `(${tag.count})`}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
    };

    return (
        <div>
            <BlogCarousel popularPosts={popularPosts} />
        </div>
    );
};

export default BlogPage;
