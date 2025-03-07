import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const BookMeeting = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [showTimezoneDropdown, setShowTimezoneDropdown] = useState(false);
    const [selectedTimezone, setSelectedTimezone] = useState({
        name: "India Standard Time",
        offset: "+05:30"
    });
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

    // Timezones list
    const timezones = [
        { name: "Pacific Time (US)", offset: "-08:00" },
        { name: "Mountain Time (US)", offset: "-07:00" },
        { name: "Central Time (US)", offset: "-06:00" },
        { name: "Eastern Time (US)", offset: "-05:00" },
        { name: "Atlantic Time (Canada)", offset: "-04:00" },
        { name: "GMT", offset: "+00:00" },
        { name: "Central European Time", offset: "+01:00" },
        { name: "Eastern European Time", offset: "+02:00" },
        { name: "India Standard Time", offset: "+05:30" },
        { name: "China Standard Time", offset: "+08:00" },
        { name: "Japan Standard Time", offset: "+09:00" },
        { name: "Australian Eastern Time", offset: "+10:00" },
        { name: "New Zealand Standard Time", offset: "+12:00" },
    ];

    // Time slots
    const timeSlots = [
        "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
        "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
        "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
        "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
    ];

    // Update month name whenever currentMonth changes
    useEffect(() => {
        const options = { month: 'long', year: 'numeric' };
        setCurrentMonth(new Date(currentMonth));
    }, [currentMonth]);

    // Function to navigate to previous month
    const goToPrevMonth = () => {
        const prevMonth = new Date(currentMonth);
        prevMonth.setMonth(prevMonth.getMonth() - 1);
        setCurrentMonth(prevMonth);
        setSelectedDate(null);
        setSelectedTimeSlot(null);
    };

    // Function to navigate to next month
    const goToNextMonth = () => {
        const nextMonth = new Date(currentMonth);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        setCurrentMonth(nextMonth);
        setSelectedDate(null);
        setSelectedTimeSlot(null);
    };

    // Generate calendar days for the current month
    const generateCalendarDays = () => {
        const days = [];
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        // Get the first day of the month
        const firstDay = new Date(year, month, 1);
        // Get the last day of the month
        const lastDay = new Date(year, month + 1, 0);

        const daysInMonth = lastDay.getDate();
        const startDay = firstDay.getDay(); // Day of the week (0-6)

        // Add empty cells for days before the 1st of the month
        for (let i = 0; i < startDay; i++) {
            days.push(null);
        }

        // Add the days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(year, month, i));
        }

        return days;
    };

    // Format date for display
    const formatDate = (date) => {
        if (!date) return "";
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    };

    // Check if a date is in the past
    const isPastDate = (date) => {
        if (!date) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    };

    // Check if date is today
    const isToday = (date) => {
        if (!date) return false;
        const today = new Date();
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    };

    // Check if two dates are the same day
    const isSameDay = (date1, date2) => {
        if (!date1 || !date2) return false;
        return date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear();
    };

    // Format current time in the selected timezone
    const formatCurrentTimeInTimezone = () => {
        const now = new Date();
        const offset = selectedTimezone.offset;

        // Parse offset hours and minutes
        const offsetHours = parseInt(offset.substring(0, 3));
        const offsetMinutes = parseInt(offset.substring(4, 6)) * (offset.charAt(0) === '-' ? -1 : 1);

        // Calculate current time in selected timezone
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const timezoneTime = new Date(utc + (3600000 * offsetHours) + (60000 * offsetMinutes));

        return timezoneTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    };

    const days = generateCalendarDays();
    const formattedMonthYear = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    return (
        <div className="max-w-4xl mx-auto p-4 font-sans">
            <div className="bg-white rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row">
                    {/* Left Panel */}
                    <div className="p-6 md:w-1/2 border-b md:border-b-0 md:border-r border-gray-200">
                        <div className="flex flex-col items-center mb-6">
                            <img
                                src="/logo.png"
                                alt="Blue Ladder Logo"
                                className="w-40 h-20 mb-2"
                            />
                        </div>

                        <div className="border-t border-black pt-4 mt-2">
                            <div className="flex items-center mb-4">
                                <img
                                    src="/logo.png"
                                    alt="Blue Ladder Logo"
                                    className="w-20 h-10 mb-2"
                                />
                            </div>

                            <h2 className="text-xl font-medium text-gray-800 mb-6">30 Minute Meeting</h2>

                            {selectedDate && selectedTimeSlot ? (
                                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                                    <h3 className="font-medium text-gray-800">Your selected meeting time:</h3>
                                    <p className="text-gray-700">
                                        {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                                    </p>
                                    <p className="text-gray-700">
                                        {selectedTimeSlot} ({selectedTimezone.name})
                                    </p>
                                </div>
                            ) : (
                                <div className="text-gray-500 mb-4">
                                    Please select a date and time for your meeting.
                                </div>
                            )}

                            <img
                                src="/ourproject.png"
                                alt="Blue Ladder Logo"
                                className="w-full h-auto mb-2"
                            />
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="p-6 md:w-1/2">
                        <h2 className="text-lg font-medium mb-6">Select Date & Time</h2>

                        {/* Month Selector */}
                        <div className="flex items-center justify-between mb-4">
                            <button
                                className="p-2 hover:bg-gray-100 rounded-full"
                                onClick={goToPrevMonth}
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <h3 className="text-lg font-medium">{formattedMonthYear}</h3>
                            <button
                                className="p-2 hover:bg-gray-100 rounded-full"
                                onClick={goToNextMonth}
                            >
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
                                          h-10 flex items-center justify-center rounded-full text-sm cursor-pointer
                                          ${!day ? 'invisible' : ''}
                                          ${isPastDate(day) ? 'text-gray-300 cursor-not-allowed' : ''}
                                          ${isSameDay(day, selectedDate) ? 'bg-blue-500 text-white' : ''}
                                          ${!isPastDate(day) && !isSameDay(day, selectedDate) ? 'hover:bg-gray-100' : ''}
                                          ${isToday(day) && !isSameDay(day, selectedDate) ? 'border border-blue-500' : ''}
                                          ${day && day.getDay() === 0 || day && day.getDay() === 6 ? 'text-red-400' : 'text-gray-700'}
                                        `}
                                        onClick={() => {
                                            if (day && !isPastDate(day)) {
                                                setSelectedDate(day);
                                                setSelectedTimeSlot(null);
                                            }
                                        }}
                                    >
                                        {day ? day.getDate() : ''}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Time Slots (show only if a date is selected) */}
                        {selectedDate && (
                            <div className="mb-8">
                                <h3 className="text-lg font-medium mb-2">Select Time</h3>
                                <div className="grid grid-cols-4 gap-2">
                                    {timeSlots.map((time, index) => (
                                        <div
                                            key={index}
                                            className={`
                                              p-2 text-center text-sm border rounded-md cursor-pointer
                                              ${time === selectedTimeSlot ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}
                                            `}
                                            onClick={() => setSelectedTimeSlot(time)}
                                        >
                                            {time}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Time Zone Selector */}
                        <div className="relative">
                            <h3 className="text-lg font-medium mb-2">Time Zone</h3>
                            <button
                                className="w-full p-3 border border-gray-300 rounded-md text-left text-gray-700 flex items-center justify-between"
                                onClick={() => setShowTimezoneDropdown(!showTimezoneDropdown)}
                            >
                                <span>{selectedTimezone.name} ({formatCurrentTimeInTimezone()})</span>
                                <ChevronDown size={20} />
                            </button>

                            {showTimezoneDropdown && (
                                <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                                    {timezones.map((timezone, index) => (
                                        <div
                                            key={index}
                                            className="p-3 hover:bg-gray-100 cursor-pointer text-gray-700"
                                            onClick={() => {
                                                setSelectedTimezone(timezone);
                                                setShowTimezoneDropdown(false);
                                            }}
                                        >
                                            {timezone.name} (GMT{timezone.offset})
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Confirm Button (show only if date and time are selected) */}
                        {selectedDate && selectedTimeSlot && (
                            <div className="mt-8">
                                <button className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                    Confirm Meeting
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between p-5 text-sm text-gray-400">
                    <button className="text-blue-500">Cookie Settings</button>
                    <button className="text-blue-500">Report Abuse</button>
                </div>
            </div>
        </div>
    );
};

export default BookMeeting;