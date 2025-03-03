import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const BookMeeting = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [currentMonth, setCurrentMonth] = useState("");

    // Generate calendar days for April 2023
    const generateCalendarDays = () => {
        const days = [];
        const daysInMonth = 30; // April has 30 days

        // Add empty cells for days before the 1st of the month
        // April 2023 starts on a Saturday (6th day of the week)
        for (let i = 0; i < 6; i++) {
            days.push(null);
        }

        // Add the days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i);
        }

        return days;
    };

    const days = generateCalendarDays();

    return (
        <div className="max-w-4xl mx-auto p-4 font-sans">
            <div className="bg-white rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row">
                    {/* Left Panel */}
                    <div className="p-6 md:w-1/2 border-b md:border-b-0 md:border-r border-gray-200">
                        <div className="flex flex-col items-center mb-6">
                            <img
                                src="/api/placeholder/90/90"
                                alt="Blue Ladder Logo"
                                className="w-20 h-20 mb-2"
                            />
                            <p className="text-sm text-gray-500">Blueladder EPC Solutions Pvt ltd</p>
                        </div>

                        <div className="border-t border-gray-200 pt-4 mt-2">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                                    <span className="text-white text-xs">BL</span>
                                </div>
                                <span className="text-gray-600">Blueladder EPC</span>
                            </div>

                            <h2 className="text-xl font-medium text-gray-800 mb-6">30 Minute Meeting</h2>

                            <div className="w-full">
                                <img
                                    src="/api/placeholder/400/250"
                                    alt="Building Sketch"
                                    className="w-full h-auto opacity-30"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="p-6 md:w-1/2">
                        <h2 className="text-lg font-medium mb-6">Select Date & Time</h2>

                        {/* Month Selector */}
                        <div className="flex items-center justify-between mb-4">
                            <button className="p-2">
                                <ChevronLeft size={20} />
                            </button>
                            <h3 className="text-lg font-medium">{currentMonth}</h3>
                            <button className="p-2">
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        {/* Calendar */}
                        <div className="mb-8">
                            <div className="grid grid-cols-7 gap-2 mb-2">
                                <div className="text-center text-sm font-medium text-red-400">Sun</div>
                                <div className="text-center text-sm font-medium">Mon</div>
                                <div className="text-center text-sm font-medium">Tue</div>
                                <div className="text-center text-sm font-medium">Wed</div>
                                <div className="text-center text-sm font-medium">Thu</div>
                                <div className="text-center text-sm font-medium">Fri</div>
                                <div className="text-center text-sm font-medium text-red-400">Sat</div>
                            </div>

                            <div className="grid grid-cols-7 gap-2">
                                {days.map((day, index) => (
                                    <div
                                        key={index}
                                        className={`
                      h-10 flex items-center justify-center rounded-full text-sm
                      ${day === null ? 'invisible' : ''}
                      ${day === selectedDate ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}
                      ${day && [0, 6].includes(index % 7) ? 'text-red-400' : ''}
                    `}
                                        onClick={() => day && setSelectedDate(day)}
                                    >
                                        {day}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Time Zone Selector */}
                        <div>
                            <h3 className="text-lg font-medium mb-2">Time Zone</h3>
                            <div className="relative">
                                <button className="w-full p-3 border border-gray-300 rounded-md text-left text-gray-500 flex items-center justify-between">
                                    <span>India Standard Time (1:24 AM)</span>
                                    <ChevronDown size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                
                {/* Footer */}
                <div className="flex justify-between mt-4 text-sm text-gray-400">
                    <button className="hover:text-blue-500">Cookie Settings</button>
                    <button className="hover:text-blue-500">Report Abuse</button>
                </div>
            </div>

        </div>
    );
};

export default BookMeeting;