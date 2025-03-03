import React from 'react';

const PositionPage = () => {
    return (
        <div className=" mx-auto p-4 font-sans">
            <div className="flex flex-col md:flex-row gap-4">
                {/* Left sidebar */}
                <div className="w-full md:w-1/4">
                    <div className="border border-gray-300 p-4 rounded">
                        <ul className="space-y-3">
                            <li className="font-medium text-blue-600">Description</li>
                            <li className="text-gray-500">What you will do</li>
                            <li className="text-gray-500">Our expectation</li>
                            <li className="text-gray-500">Benefits</li>
                        </ul>
                        <div className="mt-6">
                            <button className="w-full py-2 border border-gray-300 rounded text-sm">Apply</button>
                        </div>
                    </div>
                </div>

                {/* Main content */}
                <div className="w-full md:w-3/4">
                    <h1 className="text-2xl font-bold mb-2">Sales Officer(s)</h1>

                    <h2 className="text-xl font-semibold mb-4">Job Description</h2>

                    <p className="mb-3 text-sm">Join our Success team and work with our team as a Sales Officer.</p>

                    <p className="mb-3 text-sm">Are you in growth-mode, a person for sales and a hunter for hunting down client opportunities? Do you have the ability to see what makes your customers tick, understand what your client design needs may be? If it makes sense, let's join forces for success.</p>

                    <p className="mb-3 text-sm">Malania is the perfect place for you.</p>

                    <p className="mb-3 text-sm">As a Sales Officer, you'll have the opportunity to maximize your network, discover your sales potential, and help a startup to continue on its bright journey. You'll have a rewarding task which immerses you in sales, invoices, and quotes.</p>

                    <p className="mb-3 text-sm italic">Challenge yourself, grow professionally, and be part of a winning team. Join Malania today!</p>

                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-4">What you will do</h2>

                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-full md:w-1/2">
                                <p className="mb-2 text-sm font-medium">As a Sales Officer at Malania, you will be responsible for:</p>
                                <ul className="list-disc pl-5 text-sm space-y-1">
                                    <li>Finding leads, building and maintaining strong client relationships</li>
                                    <li>Presenting our design solutions to potential customers</li>
                                    <li>Seeking out new business opportunities</li>
                                    <li>Following up on sales prospects</li>
                                    <li>Negotiating deals</li>
                                    <li>Managing customer satisfaction</li>
                                </ul>
                                <p className="mt-3 text-sm">You'll also use present business processes, insights to improve your strategies.</p>
                            </div>

                            <div className="w-full md:w-1/2">
                                <p className="mb-2 text-sm font-medium">As a Sales Officer at Malania, you will be responsible for:</p>
                                <ul className="list-disc pl-5 text-sm space-y-1">
                                    <li>Finding leads, building and maintaining strong client relationships</li>
                                    <li>Presenting our design solutions to potential customers</li>
                                    <li>Writing price proposals/estimates</li>
                                    <li>Negotiating deals</li>
                                    <li>Managing customer satisfaction</li>
                                </ul>
                                <p className="mt-3 text-sm">You'll also work to maintain records and provide suggestions to improve sales strategies.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-4">Our expectation</h2>

                        <ul className="list-disc pl-5 text-sm space-y-2">
                            <li>Proactive, positive, and engaged when out there.</li>
                            <li>Meet and exceed sales targets through strategic planning and execution.</li>
                            <li>Be the bridge between the ambitions of the client and our design services.</li>
                            <li>Experience with research and product match to digital design solutions.</li>
                            <li>User context and industry trends to outline your sales approach.</li>
                        </ul>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-4">Whom you going to work with (meet the team)</h2>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="font-medium w-28">Sales Team:</div>
                                <div className="text-sm">Collaborate with fellow sales officers to strategize and achieve goals.</div>
                            </div>

                            <div className="flex items-start">
                                <div className="font-medium w-28">Marketing Team:</div>
                                <div className="text-sm">Align with campaign staff members to go to market with your sales insights.</div>
                            </div>

                            <div className="flex items-start">
                                <div className="font-medium w-28">Clients:</div>
                                <div className="text-sm">Engage directly with customers, understand their needs, and offer tailored solutions.</div>
                            </div>

                            <div className="flex items-start">
                                <div className="font-medium w-28">Senior Management:</div>
                                <div className="text-sm">Report on sales activities and discuss growth opportunities.</div>
                            </div>
                        </div>

                        <div className="flex flex-wrap mt-6 gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                    {/* Placeholder for image */}
                                </div>
                                <div>
                                    <p className="font-medium">Suzie Thomas</p>
                                    <p className="text-xs text-gray-500">Regional Sales Manager</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                    {/* Placeholder for image */}
                                </div>
                                <div>
                                    <p className="font-medium">Andy Graven</p>
                                    <p className="text-xs text-gray-500">Business Development Associate</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                    {/* Placeholder for image */}
                                </div>
                                <div>
                                    <p className="font-medium">Mike Kapler</p>
                                    <p className="text-xs text-gray-500">Lead Sales Executive</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-3">Sound like an interesting job?</h2>

                        <p className="mb-3 text-sm">If you're passionate about challenges, have a knack for connecting with people, and enjoy the thrill of closing deals, this could be the role for you! Here's a chance to grow professionally, earn competitive bonuses, and be a key player in our future success.</p>

                        <p className="mb-3 text-sm text-blue-600 font-medium">Want to know more about our team? Discover what job openings we have!</p>

                        <p className="mb-6 text-sm font-medium">Malania is a leading market player in the field "which" sits under social.</p>

                        <button className="py-2 px-8 border shadow-xl border-gray-300 rounded text-sm">Apply</button>
                    </div>

                    <div className="flex items-center justify-between rounded-full mt-6 border border-gray-200 bg-white px-4 py-2 shadow-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-medium">Share to</span>
                            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-sm bg-blue-900 text-white">
                                <span className="font-bold">in</span>
                            </a>
                            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-sm bg-blue-600 text-white">
                                <span className="font-bold">f</span>
                            </a>
                        </div>

                        <div className="mx-4 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-gray-500 px-2">
                            https://visioncraft.ee/positions/full-stack-developer
                        </div>

                        <button className="rounded-r-full bg-black px-6 py-2 text-white font-medium">
                            Copy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PositionPage;